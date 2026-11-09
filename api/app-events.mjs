const allowedEvents = new Set([
  'deck_app_opened',
  'deck_menu_opened',
  'deck_open_audio',
  'deck_open_mouse',
  'deck_open_keyboard',
  'deck_open_displays',
  'deck_open_profiles',
  'deck_open_battery',
  'deck_audio_output_changed',
  'deck_audio_input_changed',
  'deck_sound_effects_changed',
  'deck_brightness_adjusted',
  'deck_monitor_input_requested',
  'deck_keyboard_layout_changed',
  'deck_profile_saved',
  'deck_profile_deleted',
  'deck_profile_applied',
  'deck_profile_auto_applied',
  'deck_keep_awake_started',
  'deck_background_enabled',
  'deck_mouse_settings_applied',
  'deck_keyboard_settings_applied',
  'deck_keyboard_brightness_adjusted'
]);

const clientPattern = /^[1-9][0-9]{0,9}\.[1-9][0-9]{9,10}$/;
const versionPattern = /^\d{1,4}(?:\.\d{1,4}){0,2}$/;
const maxBodyBytes = 1024;

function respond(status, extraHeaders = {}) {
  return new Response(null, { status, headers: { 'Cache-Control': 'no-store', ...extraHeaders } });
}

async function readBody(request) {
  const reader = request.body?.getReader();
  if (!reader) return null;
  const decoder = new TextDecoder('utf-8', { fatal: true });
  let size = 0;
  let body = '';
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > maxBodyBytes) {
        await reader.cancel();
        return null;
      }
      body += decoder.decode(value, { stream: true });
    }
    return JSON.parse(body + decoder.decode());
  } catch {
    return null;
  } finally {
    reader.releaseLock();
  }
}

export default {
  async fetch(request) {
    if (request.method !== 'POST') return respond(405, { Allow: 'POST' });
    const contentType = request.headers.get('Content-Type')?.split(';')[0].trim().toLowerCase();
    if (contentType !== 'application/json') return respond(415);

    const payload = await readBody(request);
    if (!payload || typeof payload !== 'object' || Object.keys(payload).length !== 3 ||
        !allowedEvents.has(payload.event) ||
        typeof payload.clientID !== 'string' || !clientPattern.test(payload.clientID) ||
        typeof payload.appVersion !== 'string' || !versionPattern.test(payload.appVersion)) {
      return respond(400);
    }

    const measurementID = process.env.GA4_APP_MEASUREMENT_ID;
    const apiSecret = process.env.GA4_APP_API_SECRET;
    if (!measurementID || !/^G-[A-Z0-9]+$/.test(measurementID) || !apiSecret) return respond(503);

    const google = new URL('https://www.google-analytics.com/mp/collect');
    google.searchParams.set('measurement_id', measurementID);
    google.searchParams.set('api_secret', apiSecret);

    try {
      const upstream = await fetch(google, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'error',
        signal: AbortSignal.timeout(4000),
        body: JSON.stringify({
          client_id: payload.clientID,
          consent: { ad_user_data: 'DENIED', ad_personalization: 'DENIED' },
          events: [{ name: payload.event, params: { deck_version: payload.appVersion } }]
        })
      });
      return respond(upstream.ok ? 204 : 502);
    } catch {
      return respond(502);
    }
  }
};

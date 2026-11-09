import { NextRequest, NextResponse } from "next/server";

const allowedEvents = new Set([
  "deck_app_opened",
  "deck_menu_opened",
  "deck_open_audio",
  "deck_open_mouse",
  "deck_open_keyboard",
  "deck_open_displays",
  "deck_open_profiles",
  "deck_open_battery",
  "deck_audio_output_changed",
  "deck_audio_input_changed",
  "deck_sound_effects_changed",
  "deck_brightness_adjusted",
  "deck_monitor_input_requested",
  "deck_keyboard_layout_changed",
  "deck_profile_saved",
  "deck_profile_deleted",
  "deck_profile_applied",
  "deck_profile_auto_applied",
  "deck_keep_awake_started",
  "deck_background_enabled",
  "deck_mouse_settings_applied",
  "deck_keyboard_settings_applied",
  "deck_keyboard_brightness_adjusted",
]);

const clientPattern = /^[1-9][0-9]{0,9}\.[1-9][0-9]{9,10}$/;
const versionPattern = /^\d{1,4}(?:\.\d{1,4}){0,2}$/;
const maxBodyBytes = 1024;

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type")?.split(";")[0].trim().toLowerCase();
    if (contentType !== "application/json") {
      return new NextResponse(null, { status: 415 });
    }

    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).length > maxBodyBytes) {
      return new NextResponse(null, { status: 400 });
    }

    const payload = JSON.parse(rawBody);
    if (
      !payload ||
      typeof payload !== "object" ||
      Object.keys(payload).length !== 3 ||
      !allowedEvents.has(payload.event) ||
      typeof payload.clientID !== "string" ||
      !clientPattern.test(payload.clientID) ||
      typeof payload.appVersion !== "string" ||
      !versionPattern.test(payload.appVersion)
    ) {
      return new NextResponse(null, { status: 400 });
    }

    const measurementID = process.env.GA4_APP_MEASUREMENT_ID;
    const apiSecret = process.env.GA4_APP_API_SECRET;

    if (!measurementID || !/^G-[A-Z0-9]+$/.test(measurementID) || !apiSecret) {
      return new NextResponse(null, { status: 503 });
    }

    const google = new URL("https://www.google-analytics.com/mp/collect");
    google.searchParams.set("measurement_id", measurementID);
    google.searchParams.set("api_secret", apiSecret);

    const upstream = await fetch(google.toString(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      redirect: "error",
      signal: AbortSignal.timeout(4000),
      body: JSON.stringify({
        client_id: payload.clientID,
        consent: { ad_user_data: "DENIED", ad_personalization: "DENIED" },
        events: [{ name: payload.event, params: { deck_version: payload.appVersion } }],
      }),
    });

    return new NextResponse(null, {
      status: upstream.ok ? 204 : 502,
      headers: { "Cache-Control": "no-store" },
    });
  } catch {
    return new NextResponse(null, { status: 502 });
  }
}

export async function GET() {
  return new NextResponse(null, {
    status: 405,
    headers: { Allow: "POST" },
  });
}


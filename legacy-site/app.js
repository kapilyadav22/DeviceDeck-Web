const profiles = {
  work: { label: 'Work', brightness: 74, output: 'Desk speakers', input: 'Studio mic' },
  calls: { label: 'Calls', brightness: 65, output: 'Bluetooth headset', input: 'Headset mic' },
  night: { label: 'Night', brightness: 34, output: 'Mac speakers', input: 'Built-in mic' }
};

const brightness = document.querySelector('#brightness');
const brightnessValue = document.querySelector('#brightness-value');
const status = document.querySelector('#demo-status');
const presets = document.querySelectorAll('[data-profile]');

function showBrightness() {
  brightnessValue.textContent = `${brightness.value}%`;
}

function applyProfile(key, reason) {
  const profile = profiles[key];
  for (const button of presets) {
    button.setAttribute('aria-pressed', String(button.dataset.profile === key));
  }
  document.querySelector('#mode-badge').textContent = profile.label.toUpperCase();
  document.querySelector('#speaker').textContent = profile.output;
  document.querySelector('#mic').textContent = profile.input;
  brightness.value = profile.brightness;
  showBrightness();
  status.replaceChildren(document.createElement('span'), reason);
}

for (const button of presets) {
  button.addEventListener('click', () => {
    const key = button.dataset.profile;
    applyProfile(key, `${profiles[key].label} profile active`);
  });
}
brightness.addEventListener('input', showBrightness);
document.querySelector('#connect').addEventListener('click', () => {
  applyProfile('work', 'Dock connected · Work profile applied');
});

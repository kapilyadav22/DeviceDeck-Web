export interface FaqItem {
  q: string;
  a: string;
}

export const faqData: FaqItem[] = [
  {
    q: "How does Device Deck control external monitor brightness?",
    a: "Device Deck sends standard DDC/CI commands via macOS IOKit to adjust the monitor's physical backlight. If DDC/CI is unsupported by the display or adapter, software dimming takes over automatically."
  },
  {
    q: "Does it support Apple Silicon and Intel Macs?",
    a: "Yes. Device Deck is a native Universal binary running on both Apple Silicon (M1 through M4) and Intel Macs on macOS 13 (Ventura) or later."
  },
  {
    q: "How do automated desk profiles trigger on connect?",
    a: "Device Deck listens for IOKit hardware connection events. When your configured Thunderbolt dock or monitor connects, it restores your saved brightness and audio devices instantly."
  },
  {
    q: "How does Closed-Lid Clamshell Mode work safely?",
    a: "It maintains macOS idle-sleep assertions only while external power and a monitor are detected. If power or the display is unplugged, the session ends automatically so your Mac can sleep."
  },
  {
    q: "What keyboard shortcuts can I use to dim screens?",
    a: "Press ⌃⌥⌘↑ to increase brightness by 5% and ⌃⌥⌘↓ to dim by 5%. It automatically targets whichever monitor is under your mouse pointer."
  },
  {
    q: "Is Device Deck free and private?",
    a: "Yes. Device Deck is free, open source, and runs entirely on-device with zero tracking or user accounts."
  }
];

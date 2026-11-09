import React from "react";
import {
  Monitor,
  Volume2,
  Zap,
  Battery,
  Command,
  Laptop,
} from "lucide-react";

export default function FeaturesGrid() {
  const features = [
    {
      icon: <Monitor className="w-5 h-5 text-blue-400" />,
      title: "DDC/CI Brightness",
      desc: "Hardware backlight control and input switching for external displays, with seamless software dimming fallback.",
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      title: "Smart Dock Automation",
      desc: "Assign a desk profile to your Thunderbolt dock or monitor and restore it automatically upon connection.",
    },
    {
      icon: <Volume2 className="w-5 h-5 text-purple-400" />,
      title: "Side-by-Side Audio",
      desc: "Switch output speakers and microphones instantly with direct CoreAudio volume and mute controls.",
    },
    {
      icon: <Laptop className="w-5 h-5 text-emerald-400" />,
      title: "Closed-Lid Desk Mode",
      desc: "Keep power-connected MacBook desk sessions awake with external screens and the lid closed.",
    },
    {
      icon: <Battery className="w-5 h-5 text-cyan-400" />,
      title: "Battery & Charge Limits",
      desc: "View battery health, cycle count, and jump directly to Apple's native 80% charge limit setting.",
    },
    {
      icon: <Command className="w-5 h-5 text-rose-400" />,
      title: "Cursor Hotkeys",
      desc: "Press ⌃⌥⌘↑ or ⌃⌥⌘↓ to dim or brighten the exact screen under your mouse pointer.",
    },
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Essential controls, built right in.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Everything you adjust every day, consolidated into one native interface.
          </p>
        </div>

        {/* Minimal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#0f121b] border border-white/[0.08] hover:border-white/[0.16] transition-all"
            >
              <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-3.5">
                {item.icon}
              </div>
              <h3 className="text-base font-semibold text-white mb-1.5">
                {item.title}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { Monitor, Plug, Volume2, CheckCircle2, Search } from "lucide-react";

export default function HardwareCompatibility() {
  const [activeCategory, setActiveCategory] = useState<"displays" | "docks" | "audio">("displays");
  const [searchQuery, setSearchQuery] = useState("");

  const hardware = {
    displays: [
      {
        name: "Dell UltraSharp Series (U2723QE, U3223QE, U4025QW)",
        type: "4K / 5K External Monitor",
        ddc: "Full DDC/CI Hardware Backlight",
        inputs: "USB-C 90W, DisplayPort 1.4, HDMI 2.1",
        status: "Tested & Verified",
      },
      {
        name: "LG UltraFine & DualUp (28MQ780, 27UN850, 32UN880)",
        type: "USB-C / Ergo Displays",
        ddc: "Full DDC/CI & Volume Control",
        inputs: "USB-C, DisplayPort, HDMI",
        status: "Tested & Verified",
      },
      {
        name: "Apple Studio Display & Pro Display XDR",
        type: "Native Apple Hardware",
        ddc: "DisplayServices Native Hardware Protocol",
        inputs: "Thunderbolt 3",
        status: "Native Support",
      },
      {
        name: "BenQ Designer & PhotoVue (PD2705U, PD3220U, SW321C)",
        type: "Color Accurate Displays",
        ddc: "Full DDC/CI Backlight & Input Switching",
        inputs: "Thunderbolt 3, HDMI, DP",
        status: "Tested & Verified",
      },
      {
        name: "ASUS ProArt Series (PA278CV, PA329CV)",
        type: "Professional Monitor",
        ddc: "Full DDC/CI Support",
        inputs: "USB-C, HDMI, DP",
        status: "Tested & Verified",
      },
      {
        name: "Samsung Odyssey & ViewFinity (S9, G7, G9)",
        type: "Ultrawide & High Refresh",
        ddc: "DDC/CI or Software Fallback",
        inputs: "DisplayPort, HDMI, USB-C",
        status: "Tested & Verified",
      },
    ],
    docks: [
      {
        name: "CalDigit TS4 & TS3 Plus",
        type: "Thunderbolt 4 / 3 Dock",
        ddc: "Full USB Fingerprint & Auto Profile Trigger",
        inputs: "Thunderbolt 4, USB 3.2, DisplayPort",
        status: "Zero-Latency Trigger",
      },
      {
        name: "OWC Thunderbolt Pro Dock & Go Dock",
        type: "Thunderbolt 4 Hub",
        ddc: "USB Host Device Port & Serial Matching",
        inputs: "Thunderbolt, USB-A, HDMI",
        status: "Zero-Latency Trigger",
      },
      {
        name: "Anker Apex & PowerExpand Elite",
        type: "Thunderbolt 4 / 3 Docking Station",
        ddc: "Automatic Desk Profile Activation",
        inputs: "Thunderbolt, HDMI, USB",
        status: "Tested & Verified",
      },
      {
        name: "Satechi Thunderbolt 4 Multimedia Pro",
        type: "Multi-Display Dock",
        ddc: "USB Device Class 9 IOKit Matching",
        inputs: "Thunderbolt 4, Quad Display",
        status: "Tested & Verified",
      },
      {
        name: "Belkin Connect Pro Thunderbolt 4",
        type: "Thunderbolt 4 Dock",
        ddc: "Instant Hardware Reconnection Trigger",
        inputs: "Thunderbolt 4, HDMI 2.0",
        status: "Tested & Verified",
      },
    ],
    audio: [
      {
        name: "Focusrite Scarlett (Solo, 2i2, 4i4, 18i20)",
        type: "USB Audio Interface",
        ddc: "Zero-Latency CoreAudio Routing",
        inputs: "USB 2.0 / Type-C",
        status: "Hardware Level",
      },
      {
        name: "Shure MV7 & MV7X (with MOTIV / XLR)",
        type: "Broadcast USB/XLR Microphone",
        ddc: "Instant Input Selection & Gain Control",
        inputs: "USB-C / USB Micro-B",
        status: "Tested & Verified",
      },
      {
        name: "Apple AirPods (Max, Pro 1/2, AirPods 3/4)",
        type: "Bluetooth / Spatial Audio",
        ddc: "Instant Seamless Routing & Mic Gain",
        inputs: "Bluetooth 5.3 / Apple H1/H2",
        status: "Native CoreAudio",
      },
      {
        name: "Universal Audio Apollo & Volt Series",
        type: "Thunderbolt / USB DSP Interface",
        ddc: "Direct CoreAudio Hardware Endpoint",
        inputs: "Thunderbolt 3 / USB",
        status: "Tested & Verified",
      },
      {
        name: "RØDE NT-USB Mini, VideoMic NTG & Wireless PRO",
        type: "USB Broadcast Mic",
        ddc: "Input Level & Monitoring",
        inputs: "USB-C",
        status: "Tested & Verified",
      },
    ],
  };

  const filteredItems = hardware[activeCategory].filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.ddc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="compatibility" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-zinc-300 mb-4">
            <span>PLUG & PLAY ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Built for your actual hardware.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Works out of the box with virtually any external monitor, Thunderbolt dock, and audio setup.
          </p>
        </div>

        {/* Category Tabs & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 bg-[#121622] p-1.5 rounded-2xl border border-white/[0.08]">
            <button
              type="button"
              onClick={() => setActiveCategory("displays")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === "displays"
                  ? "bg-deck-accent text-white shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Monitors & Displays</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory("docks")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === "docks"
                  ? "bg-deck-accent text-white shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Plug className="w-3.5 h-3.5" />
              <span>Docks & USB Hubs</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory("audio")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === "audio"
                  ? "bg-deck-accent text-white shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>Audio & Mics</span>
            </button>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search model or vendor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121622] border border-white/[0.08] rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-deck-accent"
            />
          </div>
        </div>

        {/* Compatibility Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-[#0f121b] border border-white/[0.08] hover:border-deck-accent/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="font-semibold text-sm text-white">{item.name}</h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                    {item.status}
                  </span>
                </div>
                <div className="text-xs text-zinc-400 font-mono mb-3">{item.type}</div>
                <div className="text-xs text-zinc-300 space-y-1">
                  <div>
                    <span className="text-zinc-500">Control: </span>
                    <span className="text-deck-accentLight font-medium">{item.ddc}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500">Connectivity: </span>
                    <span>{item.inputs}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>100% plug & play compatible</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


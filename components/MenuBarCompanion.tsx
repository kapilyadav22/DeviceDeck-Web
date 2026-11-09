"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sliders,
  Wifi,
  Search,
  Volume2,
  Sun,
  Layers,
  Power,
  ExternalLink,
  ChevronRight,
  Monitor,
  Check,
  Zap,
} from "lucide-react";

export default function MenuBarCompanion() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [brightnessVal, setBrightnessVal] = useState(76);
  const [selectedSpeaker, setSelectedSpeaker] = useState("Desk Audio USB");
  const [activeProfile, setActiveProfile] = useState("Work");
  const [awakeActive, setAwakeActive] = useState(true);

  return (
    <section id="menubar" className="py-20 bg-[#090b11] border-y border-white/[0.06] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Explanation */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Instant controls. <br />
              <span className="text-deck-accentLight">Zero window clutter.</span>
            </h2>

            <p className="text-zinc-400 text-sm leading-relaxed">
              Enable <strong>Run in Background</strong> to hide the dock icon. The menu bar icon gives you 1-click access to display brightness, audio routing, profiles, and Keep Awake sessions.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-zinc-200 border border-white/[0.08] transition-all"
              >
                <span>{menuOpen ? "Close menu preview" : "Open menu preview"}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Simulated macOS Desktop with Menu Bar */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-gradient-to-b from-[#161a29] to-[#0c0f18] p-4 sm:p-6 border border-white/[0.1] shadow-2xl relative">
              {/* macOS Mock Menu Bar */}
              <div className="rounded-xl bg-[#10131e]/90 border border-white/[0.12] h-9 px-3.5 flex items-center justify-between text-xs font-medium text-zinc-300 shadow-md backdrop-blur-md">
                {/* Left Apple Menu */}
                <div className="flex items-center gap-4">
                  <span className="text-zinc-200 font-bold text-sm cursor-pointer"></span>
                  <span className="font-semibold text-white cursor-pointer">Device Deck</span>
                  <span className="hidden sm:inline text-zinc-400 hover:text-white cursor-pointer">File</span>
                  <span className="hidden sm:inline text-zinc-400 hover:text-white cursor-pointer">Edit</span>
                  <span className="hidden sm:inline text-zinc-400 hover:text-white cursor-pointer">Window</span>
                  <span className="hidden sm:inline text-zinc-400 hover:text-white cursor-pointer">Help</span>
                </div>

                {/* Right Status Items */}
                <div className="flex items-center gap-3 text-zinc-400">
                  {/* Device Deck Menu Bar Icon */}
                  <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className={`p-1 rounded-md transition-all flex items-center gap-1 ${
                      menuOpen
                        ? "bg-deck-accent text-white shadow-sm"
                        : "hover:bg-white/[0.1] text-zinc-200"
                    }`}
                    title="Device Deck Quick Menu"
                  >
                    <Sliders className="w-3.5 h-3.5" />
                  </button>

                  <Wifi className="w-3.5 h-3.5 hidden sm:inline" />
                  <Search className="w-3.5 h-3.5 hidden sm:inline" />
                  <div className="flex items-center gap-1 text-[11px] font-mono text-zinc-300">
                    <span>94%</span>
                  </div>
                  <span className="text-xs font-mono text-zinc-200">Mon 9:41 PM</span>
                </div>
              </div>

              {/* Desktop Workspace Preview with Dropdown Menu */}
              <div className="mt-3 relative min-h-[420px] rounded-xl bg-[#090b12] border border-white/[0.06] overflow-hidden flex flex-col justify-start items-end p-4">
                {/* Desktop Wallpaper Art */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#2f5af6_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Menu Dropdown Panel */}
                {menuOpen && (
                  <div className="relative z-20 w-full sm:w-80 rounded-2xl bg-[#141824]/95 border border-white/[0.15] shadow-window backdrop-blur-2xl p-4 text-left animate-in fade-in zoom-in-95 duration-200 space-y-3.5">
                    <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-md bg-deck-accent flex items-center justify-center text-white">
                          <Sliders className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-bold text-white">Device Deck</span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400">Quick Menu</span>
                    </div>

                    {/* Display Brightness Sliders */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1.5 text-zinc-300">
                          <Monitor className="w-3.5 h-3.5 text-blue-400" />
                          <span className="font-medium">Dell UltraSharp 4K</span>
                        </div>
                        <span className="font-mono text-white text-xs">{brightnessVal}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={brightnessVal}
                        onChange={(e) => setBrightnessVal(Number(e.target.value))}
                      />
                    </div>

                    {/* Audio Output */}
                    <div className="pt-2 border-t border-white/[0.06] space-y-1.5">
                      <div className="text-[10px] font-mono uppercase text-zinc-400 tracking-wider">
                        Active Audio Output
                      </div>
                      <div className="grid grid-cols-2 gap-1.5 text-xs">
                        {["Desk Audio USB", "AirPods Max"].map((spk) => (
                          <button
                            key={spk}
                            type="button"
                            onClick={() => setSelectedSpeaker(spk)}
                            className={`px-2.5 py-1.5 rounded-lg text-left text-xs transition-all flex items-center justify-between ${
                              selectedSpeaker === spk
                                ? "bg-deck-accent text-white font-medium"
                                : "bg-white/[0.04] text-zinc-300 hover:bg-white/[0.08]"
                            }`}
                          >
                            <span className="truncate">{spk}</span>
                            {selectedSpeaker === spk && <Check className="w-3 h-3 shrink-0 ml-1" />}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Profiles Quick Picker */}
                    <div className="pt-2 border-t border-white/[0.06] space-y-1.5">
                      <div className="text-[10px] font-mono uppercase text-zinc-400 tracking-wider flex items-center justify-between">
                        <span>Profiles</span>
                        <span className="text-deck-accentLight font-semibold">{activeProfile}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        {["Work", "Calls", "Night"].map((prof) => (
                          <button
                            key={prof}
                            type="button"
                            onClick={() => setActiveProfile(prof)}
                            className={`flex-1 py-1 rounded text-xs transition-all ${
                              activeProfile === prof
                                ? "bg-white/[0.12] text-white font-semibold border border-white/[0.2]"
                                : "bg-white/[0.03] text-zinc-400 hover:text-white"
                            }`}
                          >
                            {prof}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Keep Awake Toggle */}
                    <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-zinc-300">
                        <Sun className="w-3.5 h-3.5 text-amber-400" />
                        <span>Keep Awake</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setAwakeActive(!awakeActive)}
                        className={`px-2.5 py-0.5 rounded text-[11px] font-mono transition-colors ${
                          awakeActive
                            ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                            : "bg-white/[0.05] text-zinc-400"
                        }`}
                      >
                        {awakeActive ? "ON" : "OFF"}
                      </button>
                    </div>

                    {/* Bottom Actions */}
                    <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-xs text-zinc-400">
                      <a href="#demo" className="hover:text-white flex items-center gap-1">
                        <ExternalLink className="w-3 h-3" />
                        <span>Open Main Window</span>
                      </a>
                      <span className="text-[10px] text-zinc-600 font-mono">⌘Q to quit</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


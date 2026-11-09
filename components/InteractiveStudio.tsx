"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Volume2,
  Mic,
  Monitor,
  Layers,
  BatteryCharging,
  Sliders,
  Sun,
  Keyboard,
  MousePointer,
  CheckCircle2,
  Plug,
  Laptop,
  Check,
  Globe,
  Repeat,
} from "lucide-react";

type Page = "displays" | "audio" | "profiles" | "keyboard" | "mouse" | "battery" | "awake";

export default function InteractiveStudio() {
  const [activePage, setActivePage] = useState<Page>("displays");

  // Display State
  const [display1Brightness, setDisplay1Brightness] = useState(82);
  const [display2Brightness, setDisplay2Brightness] = useState(65);
  const [selectedInput, setSelectedInput] = useState("USB-C 90W");

  // Audio State
  const [speakerOutput, setSpeakerOutput] = useState("Desk Audio Monitors (USB)");
  const [micInput, setMicInput] = useState("Shure MV7 USB Dynamic Mic");
  const [outputVolume, setOutputVolume] = useState(78);
  const [micGain, setMicGain] = useState(85);
  const [isMuted, setIsMuted] = useState(false);

  // Profiles State
  const [activeProfile, setActiveProfile] = useState("work");

  // Keyboard State
  const [keyboardLayout, setKeyboardLayout] = useState("U.S.");
  const [keyboardLight, setKeyboardLight] = useState(70);
  const [keyRepeat, setKeyRepeat] = useState(8);
  const [keyDelay, setKeyDelay] = useState(3);
  const [testInputText, setTestInputText] = useState("Hold down Delete or type here...");

  // Mouse State
  const [mouseSpeed, setMouseSpeed] = useState(6);
  const [naturalScroll, setNaturalScroll] = useState(true);

  // Keep Awake State
  const [awakeDuration, setAwakeDuration] = useState("indefinite");
  const [isAwakeActive, setIsAwakeActive] = useState(true);
  const [clamshellActive, setClamshellActive] = useState(false);

  // Notification Toast State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const applyProfile = (key: string) => {
    setActiveProfile(key);
    if (key === "work") {
      setDisplay1Brightness(85);
      setDisplay2Brightness(75);
      setSpeakerOutput("Desk Audio Monitors (USB)");
      setMicInput("Shure MV7 USB Dynamic Mic");
      setOutputVolume(75);
      showToast("Work profile active · Displays at 85% & 75%");
    } else if (key === "calls") {
      setDisplay1Brightness(70);
      setDisplay2Brightness(60);
      setSpeakerOutput("AirPods Max (Spatial)");
      setMicInput("AirPods Max Mic");
      setOutputVolume(65);
      showToast("Calls profile active · AirPods Max routed");
    } else if (key === "night") {
      setDisplay1Brightness(28);
      setDisplay2Brightness(25);
      setSpeakerOutput("MacBook Pro Speakers");
      setMicInput("MacBook Studio Mic");
      setOutputVolume(35);
      showToast("Night profile active · Displays at 28%");
    }
  };

  const triggerDockSimulation = () => {
    applyProfile("work");
    showToast("Dock connected · Work profile applied");
  };

  return (
    <section id="demo" className="py-16 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Interactive Demo
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400">
            Click tabs and adjust controls to test Device Deck in your browser.
          </p>
        </div>

        {/* Action Header Banner */}
        <div className="flex items-center justify-between gap-3 mb-3 bg-white/[0.03] border border-white/[0.08] px-4 py-2 rounded-xl">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Profile: <strong className="text-white font-semibold">{activeProfile.toUpperCase()}</strong></span>
          </div>

          <button
            type="button"
            onClick={triggerDockSimulation}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-deck-accent/20 hover:bg-deck-accent/30 text-deck-accentLight text-xs font-medium transition-colors"
          >
            <Plug className="w-3.5 h-3.5" />
            <span>Simulate Dock Connection</span>
          </button>
        </div>

        {/* Floating Notification Toast */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#141824]/95 border border-white/[0.15] shadow-2xl backdrop-blur-xl animate-in fade-in duration-200">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs text-white font-medium">{toastMessage}</span>
          </div>
        )}

        {/* macOS Window */}
        <div className="rounded-2xl bg-[#0f121a] border border-white/[0.1] shadow-window overflow-hidden">
          {/* Title Bar */}
          <div className="h-10 bg-[#141824] border-b border-white/[0.06] px-4 flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="text-xs font-medium text-zinc-300">Device Deck</div>
            <div className="w-12" />
          </div>

          {/* Window Body: Sidebar + Main Content */}
          <div className="flex flex-col md:flex-row min-h-[480px]">
            {/* Sidebar */}
            <aside className="w-full md:w-44 bg-[#121520] border-b md:border-b-0 md:border-r border-white/[0.06] p-2.5 shrink-0 flex flex-col justify-between">
              <nav className="space-y-0.5">
                {[
                  { id: "displays", label: "Displays", icon: <Monitor className="w-4 h-4 shrink-0" /> },
                  { id: "audio", label: "Audio", icon: <Volume2 className="w-4 h-4 shrink-0" /> },
                  { id: "profiles", label: "Profiles", icon: <Layers className="w-4 h-4 shrink-0" /> },
                  { id: "keyboard", label: "Keyboard", icon: <Keyboard className="w-4 h-4 shrink-0" /> },
                  { id: "mouse", label: "Mouse", icon: <MousePointer className="w-4 h-4 shrink-0" /> },
                  { id: "awake", label: "Keep Awake", icon: <Sun className="w-4 h-4 shrink-0" /> },
                  { id: "battery", label: "Battery", icon: <BatteryCharging className="w-4 h-4 shrink-0" /> },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActivePage(tab.id as Page)}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                      activePage === tab.id
                        ? "bg-deck-accent text-white"
                        : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>

              <button
                type="button"
                onClick={() => showToast("Device Deck minimized to menu bar")}
                className="w-full text-left px-3 py-1.5 text-[11px] text-zinc-500 hover:text-zinc-300 transition-colors pt-2 border-t border-white/[0.06]"
              >
                Run in Background
              </button>
            </aside>

            {/* Main Content Pane */}
            <main className="flex-1 p-5 md:p-6 bg-[#0b0d14] overflow-y-auto">
              {/* DISPLAYS TAB */}
              {activePage === "displays" && (
                <div className="space-y-4">
                  {/* Display 1: Dell UltraSharp */}
                  <div className="p-4 rounded-xl bg-[#141724] border border-white/[0.06] space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <Monitor className="w-4 h-4 text-blue-400" />
                        <span className="font-semibold text-white">Dell UltraSharp 4K</span>
                        <span className="text-[10px] text-zinc-500 font-mono">DDC/CI</span>
                      </div>
                      <span className="font-bold text-white font-mono">{display1Brightness}%</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={display1Brightness}
                        onChange={(e) => setDisplay1Brightness(Number(e.target.value))}
                        className="flex-1"
                        aria-label="Dell UltraSharp Brightness"
                      />
                      <button
                        type="button"
                        onClick={() => setDisplay1Brightness(Math.max(0, display1Brightness - 5))}
                        className="px-2 py-0.5 text-xs rounded bg-white/[0.06] hover:bg-white/[0.1] text-zinc-300 font-mono"
                      >
                        -5%
                      </button>
                      <button
                        type="button"
                        onClick={() => setDisplay1Brightness(Math.min(100, display1Brightness + 5))}
                        className="px-2 py-0.5 text-xs rounded bg-white/[0.06] hover:bg-white/[0.1] text-zinc-300 font-mono"
                      >
                        +5%
                      </button>
                    </div>

                    <div className="flex items-center justify-between text-xs pt-1 border-t border-white/[0.04]">
                      <span className="text-zinc-500">Input:</span>
                      <select
                        value={selectedInput}
                        onChange={(e) => {
                          setSelectedInput(e.target.value);
                          showToast(`Input switched to ${e.target.value}`);
                        }}
                        className="bg-[#0b0d14] border border-white/[0.1] text-zinc-300 text-xs rounded-md px-2 py-0.5"
                      >
                        <option value="USB-C 90W">USB-C</option>
                        <option value="DisplayPort 1.4">DisplayPort</option>
                        <option value="HDMI 1">HDMI 1</option>
                        <option value="HDMI 2">HDMI 2</option>
                      </select>
                    </div>
                  </div>

                  {/* Display 2: MacBook XDR */}
                  <div className="p-4 rounded-xl bg-[#141724] border border-white/[0.06] space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <Laptop className="w-4 h-4 text-emerald-400" />
                        <span className="font-semibold text-white">MacBook Built-in</span>
                        <span className="text-[10px] text-zinc-500 font-mono">Hardware</span>
                      </div>
                      <span className="font-bold text-white font-mono">{display2Brightness}%</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={display2Brightness}
                        onChange={(e) => setDisplay2Brightness(Number(e.target.value))}
                        className="flex-1"
                        aria-label="MacBook Display Brightness"
                      />
                      <button
                        type="button"
                        onClick={() => setDisplay2Brightness(Math.max(0, display2Brightness - 5))}
                        className="px-2 py-0.5 text-xs rounded bg-white/[0.06] hover:bg-white/[0.1] text-zinc-300 font-mono"
                      >
                        -5%
                      </button>
                      <button
                        type="button"
                        onClick={() => setDisplay2Brightness(Math.min(100, display2Brightness + 5))}
                        className="px-2 py-0.5 text-xs rounded bg-white/[0.06] hover:bg-white/[0.1] text-zinc-300 font-mono"
                      >
                        +5%
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* AUDIO TAB */}
              {activePage === "audio" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Speakers Card */}
                    <div className="p-4 rounded-xl bg-[#141724] border border-white/[0.06] space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-white">Output</span>
                        <button
                          type="button"
                          onClick={() => setIsMuted(!isMuted)}
                          className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                            isMuted ? "bg-red-500/20 text-red-400" : "bg-white/[0.06] text-zinc-400"
                          }`}
                        >
                          {isMuted ? "MUTED" : "MUTE"}
                        </button>
                      </div>

                      <select
                        value={speakerOutput}
                        onChange={(e) => {
                          setSpeakerOutput(e.target.value);
                          showToast(`Output: ${e.target.value}`);
                        }}
                        className="w-full bg-[#0b0d14] border border-white/[0.1] text-zinc-300 text-xs rounded-lg p-2"
                      >
                        <option value="Desk Audio Monitors (USB)">Desk Audio Monitors</option>
                        <option value="AirPods Max (Spatial Audio)">AirPods Max</option>
                        <option value="MacBook Pro Speakers">MacBook Speakers</option>
                      </select>

                      <div className="space-y-1">
                        <div className="flex justify-between text-xs text-zinc-400 font-mono">
                          <span>Volume</span>
                          <span className="text-white">{isMuted ? "0%" : `${outputVolume}%`}</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={isMuted ? 0 : outputVolume}
                          disabled={isMuted}
                          onChange={(e) => setOutputVolume(Number(e.target.value))}
                        />
                      </div>
                    </div>

                    {/* Microphone Card */}
                    <div className="p-4 rounded-xl bg-[#141724] border border-white/[0.06] space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-white">Input</span>
                        <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          ACTIVE
                        </span>
                      </div>

                      <select
                        value={micInput}
                        onChange={(e) => {
                          setMicInput(e.target.value);
                          showToast(`Mic: ${e.target.value}`);
                        }}
                        className="w-full bg-[#0b0d14] border border-white/[0.1] text-zinc-300 text-xs rounded-lg p-2"
                      >
                        <option value="Shure MV7 USB Dynamic Mic">Shure MV7 USB</option>
                        <option value="AirPods Max Mic">AirPods Max</option>
                        <option value="MacBook Studio Mic">MacBook Studio Mic</option>
                      </select>

                      <div className="space-y-1">
                        <div className="flex justify-between text-xs text-zinc-400 font-mono">
                          <span>Gain</span>
                          <span className="text-white">{micGain}%</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={micGain}
                          onChange={(e) => setMicGain(Number(e.target.value))}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* PROFILES TAB */}
              {activePage === "profiles" && (
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: "work", name: "Work", trigger: "CalDigit TS4 Dock" },
                      { id: "calls", name: "Calls", trigger: "AirPods Max" },
                      { id: "night", name: "Night", trigger: "Manual" },
                    ].map((prof) => (
                      <div
                        key={prof.id}
                        onClick={() => applyProfile(prof.id)}
                        className={`p-3.5 rounded-xl cursor-pointer transition-all border ${
                          activeProfile === prof.id
                            ? "bg-deck-accent/15 border-deck-accent text-white"
                            : "bg-[#141724] border-white/[0.06] hover:border-white/[0.15] text-zinc-300"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-semibold text-xs">{prof.name}</span>
                          {activeProfile === prof.id && (
                            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-deck-accent text-white">
                              ACTIVE
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] text-zinc-500 font-mono block">
                          Trigger: {prof.trigger}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-xl bg-[#141724] border border-white/[0.06] flex items-center justify-between text-xs">
                    <span className="text-zinc-400">Apply on Dock connection:</span>
                    <span className="font-mono text-deck-accentLight bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.08]">
                      CalDigit TS4
                    </span>
                  </div>
                </div>
              )}

              {/* KEYBOARD TAB */}
              {activePage === "keyboard" && (
                <div className="space-y-3">
                  {/* Backlit Keyboard */}
                  <div className="p-4 rounded-xl bg-[#141724] border border-white/[0.06] space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <div className="flex items-center gap-2">
                        <Keyboard className="w-4 h-4 text-purple-400" />
                        <span className="font-semibold text-white">Keyboard Backlight</span>
                      </div>
                      <span className="text-white font-mono font-bold">{keyboardLight}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={keyboardLight}
                      onChange={(e) => setKeyboardLight(Number(e.target.value))}
                    />
                  </div>

                  {/* Keyboard Layout */}
                  <div className="p-4 rounded-xl bg-[#141724] border border-white/[0.06] flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-blue-400" />
                      <span className="font-semibold text-white">Input Layout</span>
                    </div>
                    <select
                      value={keyboardLayout}
                      onChange={(e) => {
                        setKeyboardLayout(e.target.value);
                        showToast(`Keyboard layout set to ${e.target.value}`);
                      }}
                      className="bg-[#0b0d14] border border-white/[0.1] text-zinc-300 text-xs rounded-lg px-2.5 py-1"
                    >
                      <option value="U.S.">U.S.</option>
                      <option value="ABC - Extended">ABC - Extended</option>
                      <option value="British">British</option>
                      <option value="Colemak">Colemak</option>
                      <option value="Dvorak">Dvorak</option>
                    </select>
                  </div>

                  {/* Key Repeat Timing */}
                  <div className="p-4 rounded-xl bg-[#141724] border border-white/[0.06] space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <Repeat className="w-4 h-4 text-amber-400" />
                        <span className="font-semibold text-white">Key Repeat Timing</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => showToast("Keyboard repeat preferences applied")}
                        className="text-xs px-2.5 py-0.5 rounded bg-deck-accent hover:bg-deck-accentHover text-white font-medium"
                      >
                        Apply
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="space-y-1">
                        <div className="flex justify-between text-zinc-400 font-mono text-[11px]">
                          <span>Interval</span>
                          <span className="text-zinc-200">Fast ({keyRepeat})</span>
                        </div>
                        <input
                          type="range"
                          min="2"
                          max="12"
                          value={keyRepeat}
                          onChange={(e) => setKeyRepeat(Number(e.target.value))}
                        />
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between text-zinc-400 font-mono text-[11px]">
                          <span>Delay</span>
                          <span className="text-zinc-200">Short ({keyDelay})</span>
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="6"
                          value={keyDelay}
                          onChange={(e) => setKeyDelay(Number(e.target.value))}
                        />
                      </div>
                    </div>

                    <div className="pt-1">
                      <input
                        type="text"
                        value={testInputText}
                        onChange={(e) => setTestInputText(e.target.value)}
                        placeholder="Hold Delete key to test repeat..."
                        className="w-full bg-[#0b0d14] border border-white/[0.1] rounded-lg px-3 py-1.5 text-xs text-zinc-200 font-mono"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* MOUSE TAB */}
              {activePage === "mouse" && (
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-[#141724] border border-white/[0.06] space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <MousePointer className="w-4 h-4 text-blue-400" />
                        <span className="font-semibold text-white">Pointer Tracking Speed</span>
                      </div>
                      <span className="text-white font-mono font-bold">{mouseSpeed} / 10</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={mouseSpeed}
                      onChange={(e) => setMouseSpeed(Number(e.target.value))}
                    />
                  </div>

                  <div className="p-4 rounded-xl bg-[#141724] border border-white/[0.06] flex items-center justify-between text-xs">
                    <span className="text-zinc-300">Natural Scrolling (Shared with Trackpad)</span>
                    <input
                      type="checkbox"
                      checked={naturalScroll}
                      onChange={(e) => {
                        setNaturalScroll(e.target.checked);
                        showToast(`Natural scrolling: ${e.target.checked ? "Enabled" : "Disabled"}`);
                      }}
                      className="w-4 h-4 rounded bg-zinc-800 text-deck-accent focus:ring-0"
                    />
                  </div>

                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => showToast("Mouse preferences applied")}
                      className="w-full py-2 rounded-xl bg-deck-accent hover:bg-deck-accentHover text-white text-xs font-semibold transition-colors"
                    >
                      Apply Mouse Settings
                    </button>
                  </div>
                </div>
              )}

              {/* KEEP AWAKE TAB */}
              {activePage === "awake" && (
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-[#141724] border border-white/[0.06] space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-white">Keep Awake Session</span>
                      <span className="text-[10px] font-mono text-emerald-400">ACTIVE</span>
                    </div>

                    <div className="grid grid-cols-4 gap-2">
                      {["15 min", "30 min", "1 hour", "indefinite"].map((dur) => (
                        <button
                          key={dur}
                          type="button"
                          onClick={() => {
                            setAwakeDuration(dur);
                            setIsAwakeActive(true);
                            showToast(`Awake: ${dur}`);
                          }}
                          className={`py-1.5 rounded-lg text-xs font-medium transition-colors ${
                            awakeDuration === dur && isAwakeActive
                              ? "bg-deck-accent text-white"
                              : "bg-white/[0.04] text-zinc-400 hover:text-white"
                          }`}
                        >
                          {dur === "indefinite" ? "Infinite" : dur}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#141724] border border-white/[0.06] space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-white">Closed-Lid Desk Mode</span>
                      <button
                        type="button"
                        onClick={() => {
                          setClamshellActive(!clamshellActive);
                          showToast(clamshellActive ? "Clamshell mode ended" : "Clamshell mode active");
                        }}
                        className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                          clamshellActive
                            ? "bg-red-500/20 text-red-300 border border-red-500/40"
                            : "bg-deck-accent text-white"
                        }`}
                      >
                        {clamshellActive ? "End Session" : "Start Session"}
                      </button>
                    </div>
                    <div className="flex items-center gap-3 text-[11px] text-zinc-400">
                      <span className="text-emerald-400 flex items-center gap-1">
                        <Check className="w-3 h-3" /> Power connected
                      </span>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <Check className="w-3 h-3" /> External screen
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* BATTERY TAB */}
              {activePage === "battery" && (
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-3 rounded-xl bg-[#141724] border border-white/[0.06]">
                      <div className="text-[10px] text-zinc-500 font-mono">CHARGE</div>
                      <div className="text-2xl font-bold text-white font-mono mt-0.5">94%</div>
                      <div className="text-[10px] text-emerald-400 mt-0.5">Plugged in</div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#141724] border border-white/[0.06]">
                      <div className="text-[10px] text-zinc-500 font-mono">HEALTH</div>
                      <div className="text-2xl font-bold text-white font-mono mt-0.5">97%</div>
                      <div className="text-[10px] text-zinc-400 mt-0.5">Normal</div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#141724] border border-white/[0.06]">
                      <div className="text-[10px] text-zinc-500 font-mono">CYCLES</div>
                      <div className="text-2xl font-bold text-white font-mono mt-0.5">128</div>
                      <div className="text-[10px] text-zinc-400 mt-0.5">Apple Silicon</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#141724] border border-white/[0.06] flex items-center justify-between text-xs">
                    <span className="text-zinc-300">Apple Silicon 80% Charge Limit</span>
                    <button
                      type="button"
                      onClick={() => showToast("Opening Battery Settings...")}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/[0.06] hover:bg-white/[0.1] text-zinc-200"
                    >
                      Open in Settings ↗
                    </button>
                  </div>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}

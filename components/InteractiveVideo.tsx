"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize2,
  Sparkles,
  Plug,
  Monitor,
  Mic,
  Sun,
  Layers,
  Check,
  MousePointer,
  ChevronRight,
} from "lucide-react";

interface Chapter {
  id: number;
  time: number;
  title: string;
  icon: React.ReactNode;
}

const chapters: Chapter[] = [
  { id: 0, time: 0, title: "Dock Plug-in", icon: <Plug className="w-3.5 h-3.5 text-amber-400" /> },
  { id: 1, time: 5, title: "DDC/CI Brightness", icon: <Monitor className="w-3.5 h-3.5 text-blue-400" /> },
  { id: 2, time: 10, title: "Audio Routing", icon: <Volume2 className="w-3.5 h-3.5 text-purple-400" /> },
  { id: 3, time: 15, title: "Night Profile", icon: <Sun className="w-3.5 h-3.5 text-emerald-400" /> },
];

const TOTAL_DURATION = 20;

export default function InteractiveVideo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [isInteractiveMode, setIsInteractiveMode] = useState(false);

  // Simulated State driven by video time (or interactive override)
  const [activeProfile, setActiveProfile] = useState("Work");
  const [screenBrightness, setScreenBrightness] = useState(85);
  const [activeSpeaker, setActiveSpeaker] = useState("Desk Audio USB");
  const [activeMic, setActiveMic] = useState("Shure MV7 Dynamic");
  const [notification, setNotification] = useState<string | null>("⚡️ CalDigit TS4 Dock Connected — Work Profile Applied");
  const [showCursor, setShowCursor] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });

  const animFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(Date.now());

  // Video playback loop
  useEffect(() => {
    if (!isPlaying || isInteractiveMode) return;

    const interval = setInterval(() => {
      setCurrentTime((prev) => {
        const next = prev + 0.1 * speed;
        if (next >= TOTAL_DURATION) {
          return 0; // loop
        }
        return next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying, isInteractiveMode, speed]);

  // Video Scene Director: update UI based on currentTime
  useEffect(() => {
    if (isInteractiveMode) return;

    // Scene 0 (0s - 5s): Dock Plug-in & Profile Applied
    if (currentTime < 5) {
      setActiveProfile("Work");
      setScreenBrightness(85);
      setActiveSpeaker("Desk Audio USB");
      setActiveMic("Shure MV7 Dynamic");
      setNotification("⚡️ CalDigit TS4 Dock Connected · Work Profile Restored");
      setShowCursor(true);
      setCursorPos({ x: 30 + currentTime * 8, y: 40 + Math.sin(currentTime) * 10 });
    }
    // Scene 1 (5s - 10s): DDC/CI Hardware Display Dimming
    else if (currentTime < 10) {
      const progress = (currentTime - 5) / 5;
      const bVal = Math.round(85 - progress * 55); // dims from 85% to 30%
      setScreenBrightness(bVal);
      setNotification(`🖥️ Dell UltraSharp Dimmed to ${bVal}% via DDC/CI`);
      setCursorPos({ x: 45 + progress * 20, y: 52 });
    }
    // Scene 2 (10s - 15s): Instant Audio Switch
    else if (currentTime < 15) {
      setActiveSpeaker("AirPods Max (Spatial)");
      setActiveMic("AirPods Max Mic");
      setNotification("🎧 Audio & Microphone Switched to AirPods Max");
      setCursorPos({ x: 65, y: 65 - (currentTime - 10) * 3 });
    }
    // Scene 3 (15s - 20s): Night Shift Profile
    else {
      setActiveProfile("Late Night");
      setScreenBrightness(25);
      setActiveSpeaker("MacBook Speakers");
      setActiveMic("Built-in Studio Mic");
      setNotification("🌙 Late Night Mode Engaged · Dimmed to 25%");
      setCursorPos({ x: 35, y: 75 });
    }
  }, [currentTime, isInteractiveMode]);

  const seekToChapter = (chapter: Chapter) => {
    setIsInteractiveMode(false);
    setCurrentTime(chapter.time);
    setIsPlaying(true);
  };

  const currentChapter = chapters.reduce((prev, curr) => (currentTime >= curr.time ? curr : prev), chapters[0]);

  return (
    <section className="py-20 relative overflow-hidden bg-[#07090e] border-y border-white/[0.06]">
      {/* Dynamic ambient video glow matching screen brightness */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] rounded-full blur-[160px] pointer-events-none transition-all duration-700"
        style={{
          backgroundColor: `rgba(47, 90, 246, ${Math.max(0.08, screenBrightness / 260)})`,
          transform: `translate(-50%, -50%) scale(${1 + screenBrightness / 200})`,
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-deck-accent/15 border border-deck-accent/30 text-deck-accentLight text-xs font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>INTERACTIVE PRODUCT DEMO</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            See Device Deck in action.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400">
            Watch the automated walkthrough below, or click any control to take over in real time.
          </p>
        </div>

        {/* Video Player Frame */}
        <div className="rounded-3xl bg-[#0c0f18] border border-white/[0.12] shadow-2xl overflow-hidden relative group">
          {/* Top Video Header Bar */}
          <div className="h-10 bg-[#121624] px-4 flex items-center justify-between border-b border-white/[0.08] text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="text-zinc-300 font-medium">Device Deck 1.5.1 Walkthrough</span>
              <span className="text-zinc-600">/</span>
              <span className="text-deck-accentLight font-mono text-[11px]">{currentChapter.title}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsInteractiveMode(!isInteractiveMode)}
                className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-md transition-all ${
                  isInteractiveMode
                    ? "bg-emerald-500 text-black font-bold shadow-sm"
                    : "bg-white/[0.06] text-zinc-300 hover:text-white hover:bg-white/[0.1]"
                }`}
              >
                {isInteractiveMode ? "🎮 Interactive Mode: ON" : "Take Control"}
              </button>
            </div>
          </div>

          {/* Video Stage / Simulated Screen */}
          <div className="relative aspect-[16/9] min-h-[380px] sm:min-h-[460px] bg-[#090b12] p-6 sm:p-10 flex flex-col justify-between overflow-hidden">
            {/* Ambient Screen Glow overlay */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-500"
              style={{
                backgroundColor: `rgba(47, 90, 246, ${screenBrightness / 700})`,
              }}
            />

            {/* In-Video macOS HUD Toast */}
            {notification && (
              <div className="relative z-20 self-end max-w-sm flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#141824]/90 border border-white/[0.15] shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="w-7 h-7 rounded-lg bg-deck-accent flex items-center justify-center text-white shrink-0 shadow-sm">
                  <Image src="/icon-192.png" alt="Icon" width={22} height={22} className="rounded" />
                </div>
                <div className="text-xs text-white font-medium">{notification}</div>
              </div>
            )}

            {/* Central Simulated Device Deck Window */}
            <div className="relative z-10 max-w-xl mx-auto w-full my-auto rounded-2xl bg-[#121520]/95 border border-white/[0.12] p-5 shadow-window backdrop-blur-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-xs font-semibold text-white ml-2">Device Deck</span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-deck-accent/20 text-deck-accentLight border border-deck-accent/30">
                  {activeProfile}
                </span>
              </div>

              {/* Display Brightness Slider with Live Glow */}
              <div className="space-y-1.5 bg-[#0a0d14] p-3 rounded-xl border border-white/[0.04]">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-zinc-300 font-medium flex items-center gap-1.5">
                    <Monitor className="w-3.5 h-3.5 text-blue-400" />
                    Dell UltraSharp 4K (DDC/CI)
                  </span>
                  <span className="text-white font-mono font-bold">{screenBrightness}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={screenBrightness}
                  onChange={(e) => {
                    setIsInteractiveMode(true);
                    setScreenBrightness(Number(e.target.value));
                    setNotification(`Manually set brightness to ${e.target.value}%`);
                  }}
                  className="w-full"
                />
              </div>

              {/* Audio Status */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-[#0a0d14] border border-white/[0.04] space-y-1">
                  <span className="text-[10px] text-zinc-500 font-mono block">AUDIO OUTPUT</span>
                  <span className="font-semibold text-white truncate block">{activeSpeaker}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#0a0d14] border border-white/[0.04] space-y-1">
                  <span className="text-[10px] text-zinc-500 font-mono block">MICROPHONE</span>
                  <span className="font-semibold text-white truncate block">{activeMic}</span>
                </div>
              </div>
            </div>

            {/* Simulated Animated Mouse Cursor */}
            {showCursor && !isInteractiveMode && (
              <div
                className="absolute z-30 pointer-events-none transition-all duration-300 ease-out"
                style={{
                  left: `${cursorPos.x}%`,
                  top: `${cursorPos.y}%`,
                }}
              >
                <MousePointer className="w-5 h-5 text-white fill-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" />
              </div>
            )}

            {/* Bottom Status Ticker */}
            <div className="relative z-10 flex items-center justify-between text-[11px] text-zinc-400">
              <span className="font-mono">macOS 13+ · Universal (Apple Silicon &amp; Intel)</span>
              <span>Click any slider to pause &amp; interact</span>
            </div>
          </div>

          {/* Bottom Interactive Video Controller */}
          <div className="bg-[#121624] p-3 sm:p-4 border-t border-white/[0.08] space-y-3 select-none">
            {/* Chapter Progress Timeline Scrubber */}
            <div className="relative">
              <div
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  const ratio = Math.max(0, Math.min(1, clickX / rect.width));
                  setIsInteractiveMode(false);
                  setCurrentTime(ratio * TOTAL_DURATION);
                }}
                className="h-2 w-full bg-[#1e2436] rounded-full overflow-hidden cursor-pointer relative"
              >
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-deck-accentLight transition-all duration-100 relative"
                  style={{ width: `${(currentTime / TOTAL_DURATION) * 100}%` }}
                >
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-md" />
                </div>
              </div>

              {/* Clickable Chapter Marks */}
              <div className="flex justify-between items-center pt-2">
                {chapters.map((ch) => (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={() => seekToChapter(ch)}
                    className={`flex items-center gap-1 text-[11px] font-medium transition-colors ${
                      currentChapter.id === ch.id
                        ? "text-deck-accentLight font-semibold"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {ch.icon}
                    <span className="hidden sm:inline">{ch.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Video Controls Toolbar */}
            <div className="flex items-center justify-between pt-1 text-xs">
              <div className="flex items-center gap-3">
                {/* Play / Pause */}
                <button
                  type="button"
                  onClick={() => {
                    setIsInteractiveMode(false);
                    setIsPlaying(!isPlaying);
                  }}
                  className="w-8 h-8 rounded-lg bg-white/[0.08] hover:bg-white/[0.15] text-white flex items-center justify-center transition-colors"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying && !isInteractiveMode ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>

                {/* Reset */}
                <button
                  type="button"
                  onClick={() => {
                    setIsInteractiveMode(false);
                    setCurrentTime(0);
                    setIsPlaying(true);
                  }}
                  className="p-1.5 text-zinc-400 hover:text-white transition-colors"
                  title="Replay from start"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>

                {/* Time Display */}
                <span className="font-mono text-zinc-400 text-xs">
                  0:{Math.floor(currentTime).toString().padStart(2, "0")} / 0:{TOTAL_DURATION}
                </span>
              </div>

              {/* Speed Controller */}
              <div className="flex items-center gap-1.5">
                {[1, 1.5, 2].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSpeed(s)}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                      speed === s && !isInteractiveMode
                        ? "bg-deck-accent text-white"
                        : "bg-white/[0.04] text-zinc-400 hover:text-white"
                    }`}
                  >
                    {s}x
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

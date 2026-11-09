import React from "react";
import { Download, Sliders, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-14 md:pt-40 md:pb-20 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-deck-accent/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-zinc-300 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>Device Deck 1.5.1</span>
          <span className="text-zinc-600">·</span>
          <span className="text-zinc-400">Universal macOS App</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.08] text-balance">
          Your whole desk setup. <br />
          <span className="bg-gradient-to-r from-blue-400 via-deck-accentLight to-indigo-300 bg-clip-text text-transparent">
            One click away.
          </span>
        </h1>

        {/* Concise Description */}
        <p className="mt-5 text-base sm:text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed">
          External display DDC/CI brightness, audio routing, and auto-switching dock profiles in one native Mac window.
        </p>

        {/* Primary Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-sm mx-auto">
          <a
            href="/downloads/Device-Deck-1.5.1.dmg"
            download
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-deck-accent hover:bg-deck-accentHover text-white font-semibold text-sm shadow-glow transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download className="w-4 h-4" />
            <span>Download for Mac</span>
          </a>

          <a
            href="#demo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] text-zinc-300 font-medium text-sm border border-white/[0.08] transition-all"
          >
            <Sliders className="w-4 h-4 text-deck-accentLight" />
            <span>Try Demo</span>
          </a>
        </div>

        {/* Clean requirements tag */}
        <div className="mt-4 text-[11px] text-zinc-500 font-mono">
          macOS 13+ · Apple Silicon &amp; Intel · 2.3 MB
        </div>
      </div>
    </section>
  );
}

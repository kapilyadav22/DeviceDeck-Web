import React from "react";
import Image from "next/image";
import { Download } from "lucide-react";

export default function DownloadSection() {
  return (
    <section id="download" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-deck-accent/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="rounded-3xl bg-[#0f121b] border border-white/[0.08] p-8 sm:p-12 shadow-window">
          {/* App Icon */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-5 rounded-2xl overflow-hidden shadow-glow">
            <Image
              src="/icon-512.png"
              alt="Device Deck Icon"
              width={80}
              height={80}
              className="object-cover"
              priority
            />
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Bring your desk together.
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            One native Mac app for the settings you change every day.
          </p>

          {/* Download Button */}
          <div className="mt-6 flex flex-col items-center justify-center gap-2">
            <a
              href="/downloads/Device-Deck-1.5.1.dmg"
              download
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-deck-accent hover:bg-deck-accentHover text-white font-semibold text-sm shadow-glow transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-4 h-4" />
              <span>Download Device Deck 1.5.1</span>
            </a>
            <span className="text-[11px] text-zinc-500 font-mono mt-1">
              macOS 13+ · Universal (Apple Silicon &amp; Intel) · 2.3 MB
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

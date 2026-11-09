import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Download, ShieldAlert, Terminal, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Installation & Gatekeeper Security Guide — Device Deck for Mac",
  description:
    "Learn how to install Device Deck on macOS Tahoe, Sequoia, Sonoma, and Ventura. Step-by-step guide to bypassing macOS Gatekeeper warnings for ad-hoc signed apps safely.",
  alternates: {
    canonical: "/installation",
  },
};

export default function InstallationPage() {
  return (
    <div className="pt-28 pb-20 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-deck-accent/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-zinc-300 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>macOS Setup &amp; Security Guide</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            How to Install Device Deck
          </h1>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            A quick step-by-step guide to downloading, dragging to Applications, and opening past macOS Gatekeeper warnings.
          </p>
        </div>

        {/* STEP 1: Download & Drag */}
        <div className="mb-14 rounded-2xl bg-[#0f121b] border border-white/[0.08] p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-deck-accent flex items-center justify-center text-white text-sm font-bold">
              1
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Download &amp; Move to Applications</h2>
              <p className="text-xs text-zinc-400">Open the DMG file and drag the app into your Applications folder.</p>
            </div>
          </div>

          {/* SVG Illustration */}
          <div className="rounded-xl overflow-hidden border border-white/[0.06] bg-[#090b10] p-2">
            <Image
              src="/images/installation/dmg-drag.svg"
              alt="Drag Device Deck to Applications folder"
              width={760}
              height={380}
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-white/[0.04] text-xs text-zinc-400">
            <span>File: <strong>Device-Deck-1.5.1.dmg</strong> (2.3 MB)</span>
            <a
              href="/downloads/Device-Deck-1.5.1.dmg"
              download
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-deck-accent hover:bg-deck-accentHover text-white font-medium text-xs transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download DMG</span>
            </a>
          </div>
        </div>

        {/* STEP 2: The Gatekeeper Warning & Recommended Fix */}
        <div className="mb-14 rounded-2xl bg-[#0f121b] border border-white/[0.08] p-6 sm:p-8 space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 text-sm font-bold">
                2
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Bypass the macOS Gatekeeper Warning</h2>
                <p className="text-xs text-zinc-400">Hold Control and Right-Click to open on first launch.</p>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
              First Launch Only
            </span>
          </div>

          {/* Explanation Alert */}
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 leading-relaxed flex items-start gap-3">
            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong>Why does macOS show this warning?</strong>
              <p className="mt-1 text-amber-300/80">
                Device Deck is an independent open-source utility with an ad-hoc local signature rather than a paid Apple Developer certificate. 
                Because it was downloaded from the internet, macOS Gatekeeper presents a warning dialog stating that Apple cannot check it for malicious software.
              </p>
            </div>
          </div>

          {/* SVG Illustration */}
          <div className="rounded-xl overflow-hidden border border-white/[0.06] bg-[#090b10] p-2">
            <Image
              src="/images/installation/gatekeeper-warning.svg"
              alt="macOS Gatekeeper warning dialog and how to open"
              width={760}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Steps */}
          <div className="space-y-2.5 pt-2 text-xs">
            <div className="font-semibold text-white">How to open in 2 clicks:</div>
            <ol className="space-y-2 list-decimal list-inside text-zinc-300">
              <li>Open your <strong>Applications</strong> folder in Finder.</li>
              <li>Hold down the <strong>Control (⌃)</strong> key on your keyboard and click (or right-click) on <strong>Device Deck.app</strong>.</li>
              <li>Select <strong>Open</strong> from the top of the shortcut menu.</li>
              <li>In the dialog that appears, click the blue <strong>Open</strong> button.</li>
            </ol>
            <p className="text-[11px] text-zinc-500 pt-1">
              ✓ Once opened this way, macOS permanently saves the approval. You can launch Device Deck normally from Launchpad, Dock, or Spotlight.
            </p>
          </div>
        </div>

        {/* STEP 3: Alternative Method via System Settings */}
        <div className="mb-14 rounded-2xl bg-[#0f121b] border border-white/[0.08] p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 text-sm font-bold">
              3
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Alternative: Approve in System Settings</h2>
              <p className="text-xs text-zinc-400">If you clicked Cancel or double-clicked normally, approve via Security settings.</p>
            </div>
          </div>

          {/* SVG Illustration */}
          <div className="rounded-xl overflow-hidden border border-white/[0.06] bg-[#090b10] p-2">
            <Image
              src="/images/installation/system-settings.svg"
              alt="System Settings Privacy and Security Open Anyway button"
              width={760}
              height={380}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <ol className="space-y-2 list-decimal list-inside text-xs text-zinc-300">
            <li>Click the Apple menu () in the top-left corner and select <strong>System Settings</strong>.</li>
            <li>In the sidebar, click <strong>Privacy &amp; Security</strong>.</li>
            <li>Scroll down to the <strong>Security</strong> section.</li>
            <li>Look for: <em>&ldquo;Device Deck.app was blocked from use because it is not from an identified developer.&rdquo;</em></li>
            <li>Click <strong>Open Anyway</strong> and authenticate with Touch ID or your Mac administrator password.</li>
          </ol>
        </div>

        {/* STEP 4: Terminal Command for Developers */}
        <div className="mb-14 rounded-2xl bg-[#0f121b] border border-white/[0.08] p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400 text-sm font-bold">
              4
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Power User One-Liner (Terminal)</h2>
              <p className="text-xs text-zinc-400">Clear quarantine attribute directly from the command line.</p>
            </div>
          </div>

          <p className="text-xs text-zinc-300 leading-relaxed">
            If you prefer using Terminal, paste the following command to instantly clear the macOS quarantine attribute:
          </p>

          <div className="p-3.5 rounded-xl bg-[#090b10] border border-white/[0.08] font-mono text-xs text-deck-accentLight flex items-center justify-between">
            <code className="select-all">xattr -cr &quot;/Applications/Device Deck.app&quot;</code>
            <Terminal className="w-4 h-4 text-zinc-500 shrink-0" />
          </div>

          <p className="text-[11px] text-zinc-500">
            This immediately marks the app as approved without displaying any Gatekeeper alerts.
          </p>
        </div>

        {/* Back to Home CTA */}
        <div className="text-center pt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
          >
            <span>← Back to Device Deck Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}


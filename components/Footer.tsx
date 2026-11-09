import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#07080d] py-8 text-zinc-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand & Developer */}
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-lg overflow-hidden shadow-sm">
            <Image src="/icon-192.png" alt="Device Deck Logo" width={24} height={24} />
          </div>
          <Link href="/" className="font-semibold text-white hover:text-deck-accentLight transition-colors">Device Deck</Link>
          <span className="text-zinc-600">·</span>
          <span>By Kapil Yadav</span>
        </div>

        {/* Minimal Navigation Links */}
        <div className="flex items-center gap-5 text-zinc-400">
          <Link href="/#features" className="hover:text-white transition-colors">Features</Link>
          <Link href="/#demo" className="hover:text-white transition-colors">Demo</Link>
          <Link href="/installation" className="hover:text-white transition-colors">Installation</Link>
          <Link href="/#menubar" className="hover:text-white transition-colors">Menu Bar</Link>
          <Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link>
          <a href="/downloads/Device-Deck-1.5.1.dmg" download className="hover:text-white transition-colors font-medium text-deck-accentLight">Download</a>
          <a href="#" className="hover:text-white flex items-center gap-1 transition-colors ml-2" aria-label="Back to top">
            <span>Top</span>
            <ArrowUp className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}

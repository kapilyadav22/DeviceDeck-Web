"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Sliders, Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090a0f]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-glass py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-deck-accent rounded-xl p-1"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden shadow-card group-hover:scale-105 transition-transform duration-200">
            <Image
              src="/icon-192.png"
              alt="Device Deck Icon"
              width={40}
              height={40}
              priority
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white tracking-tight text-lg">
                Device Deck
              </span>
              <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded-full bg-deck-accent/20 text-deck-accentLight border border-deck-accent/30">
                v1.5.1
              </span>
            </div>
            <span className="text-[11px] text-zinc-400 hidden sm:block tracking-wide">
              Native Mac Setup Studio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#12151f]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/[0.08] shadow-inner">
          <Link
            href="/#features"
            className="text-xs font-medium text-zinc-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/[0.06] transition-colors"
          >
            Features
          </Link>
          <Link
            href="/#demo"
            className="text-xs font-medium text-zinc-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/[0.06] transition-colors flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Demo
          </Link>
          <Link
            href="/installation"
            className="text-xs font-medium text-zinc-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/[0.06] transition-colors"
          >
            Installation
          </Link>
          <Link
            href="/#menubar"
            className="text-xs font-medium text-zinc-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/[0.06] transition-colors"
          >
            Menu Bar
          </Link>
          <Link
            href="/#faq"
            className="text-xs font-medium text-zinc-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/[0.06] transition-colors"
          >
            FAQ
          </Link>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <a
            href="#download"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-white bg-deck-accent hover:bg-deck-accentHover px-4 py-2.5 rounded-xl shadow-glow transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download for Mac</span>
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-zinc-800/60 text-zinc-300 hover:text-white border border-white/[0.08]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0e15] border-b border-white/[0.08] px-6 py-5 shadow-2xl space-y-3">
          <div className="flex flex-col space-y-2">
            <Link
              href="/#features"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-zinc-300 hover:text-white py-2"
            >
              Features
            </Link>
            <Link
              href="/#demo"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-zinc-300 hover:text-white py-2 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Interactive Demo
            </Link>
            <Link
              href="/installation"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-zinc-300 hover:text-white py-2"
            >
              Installation &amp; Security Guide
            </Link>
            <Link
              href="/#menubar"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-zinc-300 hover:text-white py-2"
            >
              Menu Bar Companion
            </Link>
            <Link
              href="/#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-zinc-300 hover:text-white py-2"
            >
              FAQ
            </Link>
          </div>
          <div className="pt-3 border-t border-white/[0.08]">
            <a
              href="/downloads/Device-Deck-1.5.1.dmg"
              download
              className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-white bg-deck-accent hover:bg-deck-accentHover px-4 py-3 rounded-xl shadow-glow"
            >
              <Download className="w-4 h-4" />
              Download Device Deck 1.5.1
            </a>
            <p className="text-center text-[11px] text-zinc-500 mt-2 font-mono">
              macOS 13+ · Universal (Apple Silicon & Intel)
            </p>
          </div>
        </div>
      )}
    </header>
  );
}


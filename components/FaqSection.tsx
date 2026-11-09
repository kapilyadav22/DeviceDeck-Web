"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqData } from "@/data/faq";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 bg-[#090b10] border-t border-white/[0.06] relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Minimal Accordion */}
        <div className="space-y-2.5">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#0f121b] border border-white/[0.06] overflow-hidden transition-all hover:border-white/[0.12]"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-white">
                    {item.q}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full bg-white/[0.04] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-deck-accentLight" : "text-zinc-500"
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 text-xs text-zinc-400 leading-relaxed border-t border-white/[0.04] pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Check, X, Minus } from "lucide-react";

export default function ComparisonTable() {
  const rows = [
    {
      feature: "External Monitor Brightness (DDC/CI)",
      devicedeck: "Hardware + Software Fallback",
      macos: "Unsupported on 3rd party",
      electron: "Partial / Complex",
    },
    {
      feature: "Smart Dock Automation (IOKit Triggers)",
      devicedeck: "Yes · Auto-applies on connect",
      macos: "No",
      electron: "Requires external scripts",
    },
    {
      feature: "Instant Audio Routing (Speakers & Mic)",
      devicedeck: "Yes · Side-by-side controls",
      macos: "Deep inside System Settings",
      electron: "Separate apps required",
    },
    {
      feature: "Closed-Lid Clamshell Mode & Keep Awake",
      devicedeck: "Built-in safety assertions",
      macos: "Sleeps or needs terminal caffeinate",
      electron: "Needs separate app (Amphetamine)",
    },
    {
      feature: "MacBook Battery Health & Cycle Counts",
      devicedeck: "Real capacity & Tahoe Limit link",
      macos: "Hidden in System Report",
      electron: "Rarely included",
    },
    {
      feature: "Runtime Memory Footprint",
      devicedeck: "~12 MB (Pure Swift)",
      macos: "Integrated",
      electron: "350MB – 600MB (Chromium)",
    },
    {
      feature: "App Installer Size",
      devicedeck: "2.3 MB",
      macos: "Built-in",
      electron: "90MB – 250MB",
    },
    {
      feature: "Privacy & Telemetry",
      devicedeck: "100% Local / Zero surveillance",
      macos: "Apple Analytics",
      electron: "Mixpanel / Segment tracking",
    },
    {
      feature: "Pricing Model",
      devicedeck: "Free & Open Source",
      macos: "Included with Mac",
      electron: "$20 – $40 / Subscription",
    },
  ];

  return (
    <section id="comparison" className="py-24 bg-[#0a0c12] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-zinc-300 mb-4">
            <span>UNMATCHED VALUE & SPEED</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            How Device Deck compares.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            One cohesive native tool instead of juggling five separate bloated background apps.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-3xl border border-white/[0.1] bg-[#0e111a] shadow-2xl">
          <table className="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="border-b border-white/[0.1] bg-[#131724]">
                <th className="py-5 px-6 text-sm font-semibold text-zinc-300">Feature</th>
                <th className="py-5 px-6 text-sm font-bold text-deck-accentLight bg-deck-accent/10 border-x border-deck-accent/20">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-deck-accent" />
                    <span>Device Deck</span>
                  </div>
                </th>
                <th className="py-5 px-6 text-sm font-semibold text-zinc-400">Default macOS</th>
                <th className="py-5 px-6 text-sm font-semibold text-zinc-400">Heavy Electron Apps</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06] text-xs sm:text-sm">
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="hover:bg-white/[0.02] transition-colors"
                >
                  <td className="py-4 px-6 font-medium text-white">
                    {row.feature}
                  </td>
                  <td className="py-4 px-6 font-semibold text-white bg-deck-accent/5 border-x border-deck-accent/20">
                    <div className="flex items-center gap-2 text-deck-accentLight">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{row.devicedeck}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-zinc-400">
                    <div className="flex items-center gap-2">
                      {row.macos.startsWith("No") || row.macos.startsWith("Unsupported") ? (
                        <X className="w-4 h-4 text-rose-400/80 shrink-0" />
                      ) : (
                        <Minus className="w-4 h-4 text-zinc-500 shrink-0" />
                      )}
                      <span>{row.macos}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-zinc-400">
                    <div className="flex items-center gap-2">
                      <Minus className="w-4 h-4 text-zinc-500 shrink-0" />
                      <span>{row.electron}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}


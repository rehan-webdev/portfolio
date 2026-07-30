"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { pricingPackages, carePlans } from "@/data/pricing";
import { Check, Zap, Sparkles, ShieldCheck, ArrowRight, PhoneCall } from "lucide-react";
import { DiscoveryCallModal } from "./DiscoveryCallModal";

export function PricingSection() {
  const [tab, setTab] = useState<"sprints" | "care">("sprints");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState<string>("Growth Loop");

  const handleSelectPackage = (pkgName: string) => {
    setSelectedPkg(pkgName);
    setModalOpen(true);
  };

  return (
    <section className="py-20 relative overflow-hidden bg-[#07080d]" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f57a1b]/15 border border-[#f57a1b]/30 text-[#f57a1b] text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>Transparent Fixed Pricing</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Fixed-Scope Packages. Zero Surprise Charges.
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Choose a focused 21-day sprint or partner with us for ongoing growth care. Every package includes our 3-week delivery guarantee.
          </p>

          {/* TOGGLE SWITCH */}
          <div className="inline-flex items-center p-1.5 rounded-full bg-white/5 border border-white/10 mt-4">
            <button
              onClick={() => setTab("sprints")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                tab === "sprints"
                  ? "bg-[#f57a1b] text-white shadow-md shadow-[#f57a1b]/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Project Sprints (One-Time)
            </button>
            <button
              onClick={() => setTab("care")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                tab === "care"
                  ? "bg-[#f57a1b] text-white shadow-md shadow-[#f57a1b]/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Monthly Care Plans
            </button>
          </div>
        </div>

        {/* TAB 1: PROJECT SPRINTS */}
        {tab === "sprints" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {pricingPackages.map((pkg) => {
              const isPopular = pkg.popular;
              return (
                <motion.div
                  key={pkg.id}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all ${
                    isPopular
                      ? "bg-gradient-to-b from-[#181a2e] to-[#0f1120] border-2 border-[#f57a1b] shadow-2xl glow-orange"
                      : "glass-panel bg-[#121422] border border-white/10 hover:border-white/20"
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#f57a1b] to-[#ff8c33] text-white text-[11px] font-black uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> Most Popular Choice
                    </div>
                  )}

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{pkg.name}</h3>
                      <p className="text-xs text-slate-400 min-h-[36px]">{pkg.tagline}</p>
                    </div>

                    <div className="pb-4 border-b border-white/10">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-black text-white">{pkg.price}</span>
                        <span className="text-xs text-slate-400 font-medium">/ {pkg.period}</span>
                      </div>
                      <div className="text-xs text-[#ffefd5] font-semibold mt-2 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#f57a1b]" />
                        <span>Timeline: {pkg.deliveryTime}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                        What&apos;s Included:
                      </span>
                      <ul className="space-y-2.5 text-xs text-slate-300">
                        {pkg.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#f57a1b] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8">
                    <button
                      onClick={() => handleSelectPackage(pkg.name)}
                      className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                        isPopular
                          ? "bg-[#f57a1b] text-white hover:bg-[#e0680a] shadow-lg shadow-[#f57a1b]/30 glow-orange-sm"
                          : "bg-white/10 hover:bg-white/20 text-white"
                      }`}
                    >
                      <span>{pkg.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* TAB 2: CARE PLANS */}
        {tab === "care" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {carePlans.map((care, i) => (
              <div
                key={i}
                className={`rounded-3xl p-8 flex flex-col justify-between relative ${
                  care.popular
                    ? "bg-gradient-to-b from-[#181a2e] to-[#0f1120] border-2 border-[#f57a1b] shadow-2xl glow-orange"
                    : "glass-panel bg-[#121422] border border-white/10"
                }`}
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{care.name}</h3>
                    <div className="text-3xl font-black text-white mt-2">{care.price}</div>
                  </div>

                  <ul className="space-y-3 text-xs text-slate-300 pt-4 border-t border-white/10">
                    {care.features.map((f, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-[#f57a1b]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => handleSelectPackage(care.name)}
                    className="w-full py-3 rounded-xl bg-[#f57a1b] text-white font-bold text-sm hover:bg-[#e0680a] transition-all flex items-center justify-center gap-2"
                  >
                    <span>Subscribe to Care Plan</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <DiscoveryCallModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultPackage={selectedPkg}
      />
    </section>
  );
}

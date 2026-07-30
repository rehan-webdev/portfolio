"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, PhoneCall, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { DiscoveryCallModal } from "./DiscoveryCallModal";

export function FinalCtaBand() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#0a0b10] via-[#14121d] to-[#07080d] border-t border-white/10">
      {/* Background Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-[#f57a1b]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f57a1b]/20 border border-[#f57a1b]/40 text-[#ffefd5] text-xs font-black uppercase tracking-wider glow-orange-sm">
          <Sparkles className="w-4 h-4 text-[#f57a1b]" />
          <span>Only 2 Sprint Slots Remaining For This Month</span>
        </div>

        <h2 className="text-3xl md:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Ready to Build a Website That Refuses to Be Ignored?
        </h2>

        <p className="text-slate-300 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
          Book a 30-minute discovery call with our lead technical architect and design director. No pushy sales pitch—just actionable CRO insights and a clear sprint roadmap.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => setModalOpen(true)}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#f57a1b] text-white font-extrabold text-base hover:bg-[#e0680a] transition-all shadow-xl shadow-[#f57a1b]/30 glow-orange flex items-center justify-center gap-2.5 hover:scale-105"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Book Your Free Strategy Call</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-extrabold text-base transition-all border border-white/10 flex items-center justify-center gap-2"
          >
            <span>Request Custom Proposal</span>
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-400 pt-6">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#f57a1b]" />
            <span>3-Week Delivery Guarantee</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-[#f57a1b]" />
            <span>Lighthouse 98+ Speed Standard</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#f57a1b]" />
            <span>100% Fixed Scope & Ownership</span>
          </div>
        </div>
      </div>

      <DiscoveryCallModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}

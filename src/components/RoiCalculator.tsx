"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, DollarSign, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { DiscoveryCallModal } from "./DiscoveryCallModal";

export function RoiCalculator() {
  const [monthlyVisitors, setMonthlyVisitors] = useState<number>(15000);
  const [currentConversion, setCurrentConversion] = useState<number>(1.5); // %
  const [avgCustomerValue, setAvgCustomerValue] = useState<number>(1200); // $
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  // DevLoop target conversion uplift (typically +120% to +184% lift, e.g. 1.5% -> 3.3%)
  const expectedConversion = Number((currentConversion * 2.2).toFixed(1));
  const currentMonthlyLeads = Math.round(monthlyVisitors * (currentConversion / 100));
  const projectedMonthlyLeads = Math.round(monthlyVisitors * (expectedConversion / 100));
  
  const currentAnnualRevenue = currentMonthlyLeads * avgCustomerValue * 12;
  const projectedAnnualRevenue = projectedMonthlyLeads * avgCustomerValue * 12;
  const netAnnualUplift = projectedAnnualRevenue - currentAnnualRevenue;

  return (
    <div className="relative rounded-3xl glass-panel border border-[#f57a1b]/30 p-6 md:p-10 overflow-hidden shadow-2xl bg-[#0e101a]">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#f57a1b]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* LEFT COLUMN - CONTROLS */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f57a1b]/15 border border-[#f57a1b]/30 text-[#f57a1b] text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive ROI & Uplift Calculator</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Calculate Your Projected Revenue Lift With DevLoop
          </h3>

          <p className="text-sm text-slate-300 leading-relaxed">
            Adjust the sliders below based on your current metrics to estimate potential annual revenue growth from upgrading to a high-converting Next.js site.
          </p>

          <div className="space-y-5 pt-2">
            {/* Slider 1: Visitors */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold text-slate-300">
                <span>Monthly Website Visitors:</span>
                <span className="text-[#f57a1b] font-bold text-sm">
                  {monthlyVisitors.toLocaleString()} visitors / mo
                </span>
              </div>
              <input
                type="range"
                min={2000}
                max={100000}
                step={1000}
                value={monthlyVisitors}
                onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#f57a1b]"
              />
            </div>

            {/* Slider 2: Current Conversion Rate */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold text-slate-300">
                <span>Current Visitor Conversion Rate:</span>
                <span className="text-[#f57a1b] font-bold text-sm">{currentConversion}%</span>
              </div>
              <input
                type="range"
                min={0.5}
                max={5.0}
                step={0.1}
                value={currentConversion}
                onChange={(e) => setCurrentConversion(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#f57a1b]"
              />
            </div>

            {/* Slider 3: Average Customer LTV */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold text-slate-300">
                <span>Average Deal or Customer Value:</span>
                <span className="text-[#f57a1b] font-bold text-sm">${avgCustomerValue.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={200}
                max={10000}
                step={100}
                value={avgCustomerValue}
                onChange={(e) => setAvgCustomerValue(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#f57a1b]"
              />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - RESULTS DASHBOARD */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl bg-gradient-to-b from-[#181b29] to-[#0f111c] border border-[#f57a1b]/40 p-6 space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-2 right-2 px-2.5 py-1 rounded-full bg-[#ffefd5]/15 border border-[#ffefd5]/30 text-[#ffefd5] text-[10px] font-bold uppercase tracking-wider">
              +120% Lift Target
            </div>

            <div className="space-y-1">
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                Estimated Annual Revenue Uplift
              </span>
              <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-[#f57a1b]">
                +${netAnnualUplift.toLocaleString()}
              </div>
              <p className="text-[11px] text-slate-400 pt-1">
                Projected annual gain based on average DevLoop client benchmarks.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="text-[10px] text-slate-400 block uppercase">Current Monthly Leads</span>
                <span className="text-lg font-bold text-white">{currentMonthlyLeads}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#f57a1b]/10 border border-[#f57a1b]/30">
                <span className="text-[10px] text-[#f57a1b] block uppercase font-bold">DevLoop Target Leads</span>
                <span className="text-lg font-black text-white">{projectedMonthlyLeads}</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={() => setModalOpen(true)}
                className="w-full py-3.5 rounded-xl bg-[#f57a1b] text-white font-extrabold text-sm hover:bg-[#e0680a] transition-all shadow-lg shadow-[#f57a1b]/25 glow-orange flex items-center justify-center gap-2"
              >
                <span>Claim Your Revenue Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-[#f57a1b]" />
                <span>3-Week Sprint Delivery • Guaranteed Sub-Second Speed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DiscoveryCallModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

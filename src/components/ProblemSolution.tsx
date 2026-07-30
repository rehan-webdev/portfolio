"use client";

import React from "react";
import { motion } from "framer-motion";
import { XCircle, CheckCircle2, Zap, Clock, ShieldCheck, Flame } from "lucide-react";

export function ProblemSolution() {
  const problems = [
    "Drawn-out 6-month timelines that miss market opportunities",
    "Bloated WordPress/Webflow sites taking 4+ seconds to load",
    "Generic templates with fluff copywriting that visitors ignore",
    "Hidden fees, hourly billing traps, and scope creep",
    "Delegated to junior interns after signing the contract",
  ];

  const solutions = [
    "Fixed 3-Week Delivery Sprint guaranteed down to the day",
    "Sub-0.4s Next.js App Router performance with 98+ Lighthouse score",
    "Conversion-first UI/UX and buyer journey copy that closes deals",
    "Transparent fixed-scope packages with zero surprise charges",
    "Direct Slack access to Senior Engineers and UX Strategy Leads",
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f57a1b]/15 border border-[#f57a1b]/30 text-[#f57a1b] text-xs font-bold uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5" />
            <span>Why Traditional Web Design Is Broken</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Stop Losing 80% of Paid Traffic To Slow, Outdated Websites
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            Most websites fail because they prioritize superficial fluff over loading speed, buyer friction reduction, and clear messaging.
          </p>
        </div>

        {/* COMPARISON MATRIX */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* PROBLEM CARD */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-[#121016] border border-rose-500/20 p-8 space-y-6 relative overflow-hidden"
          >
            <div className="flex items-center justify-between pb-4 border-b border-rose-500/20">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/30">
                  <XCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Traditional Agency Way</h3>
                  <p className="text-xs text-rose-400 font-medium">Slow, Expensive & Frustrating</p>
                </div>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-slate-300">
              {problems.map((p, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* SOLUTION CARD (DEVLOOP) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-br from-[#121424] via-[#161a2e] to-[#111322] border border-[#f57a1b]/40 p-8 space-y-6 relative overflow-hidden shadow-2xl glow-orange-sm"
          >
            {/* Corner Badge */}
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#f57a1b] to-[#ff8c33] text-white text-[11px] font-black uppercase tracking-wider px-4 py-1 rounded-bl-xl shadow-md">
              The DevLoop Engine
            </div>

            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#f57a1b]/20 text-[#f57a1b] border border-[#f57a1b]/40">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">The DevLoop Guarantee</h3>
                  <p className="text-xs text-[#ffefd5] font-medium">Rapid, High-Converting & Fixed Price</p>
                </div>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-slate-200">
              {solutions.map((s, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#f57a1b] shrink-0 mt-0.5" />
                  <span className="font-medium">{s}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

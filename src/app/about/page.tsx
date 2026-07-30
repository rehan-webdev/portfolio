import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { agencyInfo } from "@/data/agency";
import { teamMembers } from "@/data/team";
import { FinalCtaBand } from "@/components/FinalCtaBand";
import { ShieldCheck, Heart, Zap, Award, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About DevLoop | Senior Web Engineering & Design Squad",
  description:
    "Learn about DevLoop's mission: engineering digital experiences that refuse to be ignored. Our senior team, core values, and rapid 21-day sprint philosophy.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Obsess Over Business ROI",
      description: "Pretty designs mean nothing if they don't close deals. We measure success by leads, conversion rates, and revenue pipeline.",
      icon: Zap,
    },
    {
      title: "Zero BS Communication",
      description: "No account managers playing telephone. You communicate directly with lead engineers and design directors via Slack.",
      icon: Heart,
    },
    {
      title: "Sub-Second Performance",
      description: "We refuse to build slow sites. Every page load is engineered under 0.4 seconds with a 98+ Lighthouse score guarantee.",
      icon: ShieldCheck,
    },
    {
      title: "Fixed-Scope Reliability",
      description: "No surprise invoices or hourly billing traps. Clear scopes, guaranteed 21-day timelines, and total transparency.",
      icon: Award,
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0b10] text-slate-100 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* HERO HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f57a1b]/15 border border-[#f57a1b]/30 text-[#f57a1b] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The DevLoop Philosophy</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Engineering Digital Experiences That Refuse To Be Ignored
          </h1>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            Founded in San Francisco in {agencyInfo.foundingYear}, DevLoop was built to cure the frustration of slow, bloated traditional agencies. We operate as a high-velocity sprint studio.
          </p>
        </div>

        {/* IMPACT NUMBERS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 rounded-3xl glass-panel bg-[#121422] border border-[#f57a1b]/30">
          <div className="text-center space-y-1">
            <div className="text-3xl sm:text-5xl font-black text-[#f57a1b]">$48M+</div>
            <div className="text-xs font-bold text-white">Client Pipeline Driven</div>
          </div>
          <div className="text-center space-y-1">
            <div className="text-3xl sm:text-5xl font-black text-[#f57a1b]">65+</div>
            <div className="text-xs font-bold text-white">Next.js Sites Shipped</div>
          </div>
          <div className="text-center space-y-1">
            <div className="text-3xl sm:text-5xl font-black text-[#f57a1b]">21 Days</div>
            <div className="text-xs font-bold text-white">Avg. Sprint Delivery</div>
          </div>
          <div className="text-center space-y-1">
            <div className="text-3xl sm:text-5xl font-black text-[#f57a1b]">99.4%</div>
            <div className="text-xs font-bold text-white">Client Retention & Satisfaction</div>
          </div>
        </div>

        {/* CORE VALUES */}
        <div className="space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-[#f57a1b] uppercase tracking-wider">Principles</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Our Core Operating Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="p-6 rounded-2xl glass-panel bg-[#121422] border border-white/10 space-y-3">
                  <div className="p-3 rounded-xl bg-[#f57a1b]/15 text-[#f57a1b] w-fit border border-[#f57a1b]/30">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{v.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* TEAM MEMBERS */}
        <div className="space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-[#f57a1b] uppercase tracking-wider">The Senior Squad</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Meet the Lead Engineers & Designers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((m, i) => (
              <div key={i} className="rounded-3xl glass-panel bg-[#121422] border border-white/10 p-6 space-y-4 text-center">
                <img
                  src={m.avatarUrl}
                  alt={m.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto border-2 border-[#f57a1b] shadow-xl"
                />

                <div>
                  <h3 className="text-lg font-bold text-white">{m.name}</h3>
                  <p className="text-xs text-[#f57a1b] font-semibold">{m.role}</p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">{m.bio}</p>

                <div className="pt-2 flex flex-wrap justify-center gap-1">
                  {m.favoriteTech.map((t, idx) => (
                    <span key={idx} className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-20">
        <FinalCtaBand />
      </div>
    </main>
  );
}

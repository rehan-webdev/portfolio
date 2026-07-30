"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Layout, Code, Rocket, TrendingUp, CheckCircle, Clock } from "lucide-react";

export function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: "01",
      title: "Discover & Friction Audit",
      timeframe: "Days 1 – 3",
      icon: Search,
      tagline: "Uncovering buyer drop-off points & positioning competitors.",
      deliverables: [
        "45-Min Strategy Kickoff Call",
        "Competitor Funnel Breakdown",
        "Target Persona Friction Audit",
        "Hero Copy & Value Proposition Draft",
      ],
      description:
        "We map out your customer buying journey, identify why traffic currently bounces, and establish clear conversion goals before opening Figma.",
    },
    {
      step: "02",
      title: "Conversion Design System",
      timeframe: "Days 4 – 10",
      icon: Layout,
      tagline: "Bespoke Figma UI prototypes, dark/light modes & design tokens.",
      deliverables: [
        "Figma High-Fidelity Desktop & Mobile UI",
        "Interactive Clickable Prototype",
        "Custom Typography & Token Palette",
        "Micro-interaction & Animation Specs",
      ],
      description:
        "You review pixel-perfect Figma prototypes. We refine component hierarchy until every layout radiates premium authority.",
    },
    {
      step: "03",
      title: "Next.js 14 Speed Build",
      timeframe: "Days 11 – 17",
      icon: Code,
      tagline: "Production Next.js App Router engineering with sub-second speeds.",
      deliverables: [
        "Next.js 14 App Router Clean Codebase",
        "Tailwind CSS + Framer Motion Smooth Polish",
        "PostgreSQL / Database Integration",
        "React Hook Form + Lead Sync Automation",
      ],
      description:
        "Our senior developers construct modular Next.js components with zero code bloat, guaranteed 98+ Lighthouse scores, and sub-0.4s load times.",
    },
    {
      step: "04",
      title: "QA, SEO & DNS Switchover",
      timeframe: "Days 18 – 21",
      icon: Rocket,
      tagline: "Rigorous cross-device testing and seamless Vercel edge deployment.",
      deliverables: [
        "Technical SEO & JSON-LD Schema Validation",
        "Cross-Browser & 375px/1440px Viewport Audit",
        "Zero-Downtime DNS & Domain Launch",
        "Lighthouse 98+ Core Web Vitals Pass",
      ],
      description:
        "We stress-test forms, verify Google indexing tags, check mobile accessibility, and launch your site with zero downtime.",
    },
    {
      step: "05",
      title: "Scale, Care & Growth",
      timeframe: "Post-Launch",
      icon: TrendingUp,
      tagline: "Ongoing conversion optimization and continuous feature updates.",
      deliverables: [
        "30-Day Post-Launch Warranty",
        "Monthly CRO Heatmap Audits",
        "A/B Landing Page Sprints",
        "Dedicated SLA Maintenance Support",
      ],
      description:
        "Your site remains an evolving conversion engine backed by dedicated engineering care, speed checks, and monthly feature iterations.",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-[#0a0b10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f57a1b]/15 border border-[#f57a1b]/30 text-[#f57a1b] text-xs font-bold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5" />
            <span>Guaranteed 21-Day Execution Roadmap</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            How We Build & Launch Your Site in 3 Weeks
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            A disciplined, asynchronous sprint model designed for busy founders and marketing leaders who demand speed without sacrificing quality.
          </p>
        </div>

        {/* STEP TABS FOR MOBILE & DESKTOP */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden ${
                  isActive
                    ? "border-[#f57a1b] bg-[#f57a1b]/15 text-white ring-1 ring-[#f57a1b] shadow-lg shadow-[#f57a1b]/20"
                    : "border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-200"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-black ${isActive ? "text-[#f57a1b]" : "text-slate-500"}`}>
                    STEP {s.step}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? "text-[#f57a1b]" : "text-slate-500"}`} />
                </div>
                <div className="text-xs font-bold truncate text-white">{s.title}</div>
                <div className="text-[10px] text-slate-400 mt-1">{s.timeframe}</div>
              </button>
            );
          })}
        </div>

        {/* ACTIVE STEP DISPLAY CARD */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl glass-panel border border-[#f57a1b]/30 p-8 md:p-10 bg-[#121422] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#f57a1b] text-white font-extrabold text-xs">
                Phase {steps[activeStep].step}
              </span>
              <span className="text-xs font-bold text-[#ffefd5] bg-[#ffefd5]/10 px-3 py-1 rounded-full border border-[#ffefd5]/20">
                {steps[activeStep].timeframe}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-extrabold text-white">
              {steps[activeStep].title}
            </h3>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              {steps[activeStep].description}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-[#f57a1b] uppercase tracking-wider">
                Phase Key Deliverables:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {steps[activeStep].deliverables.map((d, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-200 bg-white/5 p-2.5 rounded-xl border border-white/5">
                    <CheckCircle className="w-4 h-4 text-[#f57a1b] shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#090a10] border border-white/10 text-center space-y-4">
            <div className="p-4 rounded-2xl bg-[#f57a1b]/15 text-[#f57a1b] border border-[#f57a1b]/30">
              {React.createElement(steps[activeStep].icon, { className: "w-10 h-10" })}
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">Sprint Milestone Status</h4>
              <p className="text-xs text-slate-400 max-w-xs">{steps[activeStep].tagline}</p>
            </div>
            <div className="text-xs font-semibold text-[#ffefd5] bg-[#ffefd5]/10 px-4 py-2 rounded-xl border border-[#ffefd5]/20">
              3-Week Sprint Commitment Guaranteed
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

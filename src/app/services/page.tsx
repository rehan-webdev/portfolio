import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { servicesData } from "@/data/services";
import { FinalCtaBand } from "@/components/FinalCtaBand";
import { ArrowRight, CheckCircle2, Zap, Clock, ShieldCheck, Layout, Code, Search, Sparkles, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Agency Services | DevLoop Web Design & Development",
  description:
    "Explore our full suite of web services: UI/UX design systems, Next.js engineering, technical SEO, brand identity, CRO audits, and growth care plans.",
};

const serviceIconsMap: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-6 h-6 text-[#f57a1b]" />,
  Code: <Code className="w-6 h-6 text-[#f57a1b]" />,
  Search: <Search className="w-6 h-6 text-[#f57a1b]" />,
  Sparkles: <Sparkles className="w-6 h-6 text-[#f57a1b]" />,
  Target: <Target className="w-6 h-6 text-[#f57a1b]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#f57a1b]" />,
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0a0b10] text-slate-100 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* HERO HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f57a1b]/15 border border-[#f57a1b]/30 text-[#f57a1b] text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>Conversion Architecture & Engineering</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            High-Impact Digital Capabilities Built for Scale
          </h1>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            We don&apos;t just build pretty layouts. Every service is engineered to eliminate buyer friction, accelerate load speed under 0.4s, and maximize qualified conversions.
          </p>
        </div>

        {/* SERVICES LIST */}
        <div className="space-y-12">
          {servicesData.map((svc, index) => (
            <div
              key={svc.id}
              className={`rounded-3xl glass-panel border border-[#f57a1b]/30 p-8 md:p-12 bg-[#121422] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#f57a1b]/15 border border-[#f57a1b]/30">
                    {serviceIconsMap[svc.iconName] || <Zap className="w-6 h-6 text-[#f57a1b]" />}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400">Sprint Timeline: {svc.typicalTimeline}</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">{svc.title}</h2>
                  </div>
                </div>

                <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                  {svc.fullDescription}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {svc.keyMetrics.map((km, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                      <div className="text-lg font-extrabold text-[#f57a1b]">{km.value}</div>
                      <div className="text-[10px] text-slate-400 font-medium">{km.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {svc.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-white/5 text-slate-300 text-[11px] font-mono border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-3">
                  <Link
                    href={`/services/${svc.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#f57a1b] text-white font-bold text-xs hover:bg-[#e0680a] transition-all glow-orange-sm"
                  >
                    <span>View Service Breakdown</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Deliverables Checklist Column */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-[#090a10] border border-white/10 space-y-4">
                <h3 className="text-xs font-bold text-[#ffefd5] uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#f57a1b]" />
                  What You Receive:
                </h3>

                <ul className="space-y-3 text-xs text-slate-300">
                  {svc.deliverables.map((del, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#f57a1b] shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-20">
        <FinalCtaBand />
      </div>
    </main>
  );
}

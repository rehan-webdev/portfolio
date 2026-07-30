"use client";

import React, { useState } from "react";
import Link from "next/link";
import { caseStudiesData } from "@/data/portfolio";
import { FinalCtaBand } from "@/components/FinalCtaBand";
import { ArrowRight, TrendingUp, CheckCircle2, Star } from "lucide-react";

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "B2B SaaS", "E-Commerce", "Services"];

  const filteredProjects =
    activeCategory === "All"
      ? caseStudiesData
      : caseStudiesData.filter((c) => c.projectCategory === activeCategory);

  return (
    <main className="min-h-screen bg-[#0a0b10] text-slate-100 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* HERO HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f57a1b]/15 border border-[#f57a1b]/30 text-[#f57a1b] text-xs font-bold uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Proven Proof Wall</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Case Studies That Back Up Every Claim
          </h1>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            We judge our success by one metric: client growth. Explore how our conversion architecture drove millions in ARR for ambitious founders.
          </p>

          {/* CATEGORY FILTERS */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-[#f57a1b] text-white shadow-md shadow-[#f57a1b]/30"
                    : "bg-white/5 border border-white/10 text-slate-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* PORTFOLIO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl glass-panel bg-[#121422] border border-[#f57a1b]/30 overflow-hidden flex flex-col justify-between group hover:border-[#f57a1b] transition-all shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121422] via-transparent to-transparent opacity-80" />

                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#f57a1b] text-white text-[10px] font-black uppercase">
                    {project.projectCategory}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-mono">
                    {project.timeline} Sprint
                  </span>
                </div>
              </div>

              <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-xs font-bold text-[#f57a1b]">{project.clientName}</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#f57a1b] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{project.shortSummary}</p>
                </div>

                {/* Key Stat Cards */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {project.stats.slice(0, 2).map((st, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/5">
                      <div className="text-xl font-black text-[#f57a1b]">{st.value}</div>
                      <div className="text-[10px] font-bold text-slate-300">{st.label}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/work/${project.slug}`}
                    className="text-xs font-bold text-[#f57a1b] hover:text-[#ff8c33] flex items-center gap-1 group-hover:translate-x-1 transition-all shrink-0"
                  >
                    <span>Read Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
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

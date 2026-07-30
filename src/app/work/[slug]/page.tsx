import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { caseStudiesData } from "@/data/portfolio";
import { FinalCtaBand } from "@/components/FinalCtaBand";
import { ArrowLeft, ArrowRight, CheckCircle2, Quote, Star, Zap, ShieldCheck } from "lucide-react";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudiesData.find((c) => c.slug === slug);
  if (!project) return { title: "Case Study Not Found | DevLoop" };

  return {
    title: `${project.clientName} Case Study | DevLoop Agency`,
    description: project.shortSummary,
  };
}

export async function generateStaticParams() {
  return caseStudiesData.map((c) => ({ slug: c.slug }));
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = caseStudiesData.find((c) => c.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0a0b10] text-slate-100 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Back Link */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-[#f57a1b] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Case Studies</span>
        </Link>

        {/* HEADER */}
        <div className="space-y-6 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-[#f57a1b]/20 text-[#f57a1b] font-bold text-xs border border-[#f57a1b]/30">
              {project.projectCategory}
            </span>
            <span className="text-xs text-slate-400 font-mono">Sprint: {project.timeline}</span>
            <span className="text-xs text-slate-400 font-mono">• Industry: {project.clientIndustry}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base text-slate-300 leading-relaxed">
            {project.shortSummary}
          </p>
        </div>

        {/* HERO IMAGE SHOWCASE */}
        <div className="relative rounded-3xl overflow-hidden border border-[#f57a1b]/30 shadow-2xl">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-80 md:h-[500px] object-cover"
          />
        </div>

        {/* METRICS DASHBOARD */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 rounded-3xl glass-panel bg-[#121422] border border-white/10">
          {project.stats.map((st, i) => (
            <div key={i} className="text-center space-y-1">
              <div className="text-3xl md:text-4xl font-black text-[#f57a1b]">{st.value}</div>
              <div className="text-xs font-bold text-white">{st.label}</div>
              <div className="text-[11px] text-slate-400">{st.change}</div>
            </div>
          ))}
        </div>

        {/* CHALLENGE, APPROACH & SOLUTION DEEP DIVE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-10">
            {/* THE CHALLENGE */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                The Challenge
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* DEVLOOP APPROACH */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#f57a1b]" />
                DevLoop Strategic Approach
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {project.approach}
              </p>
            </div>

            {/* THE TECHNICAL SOLUTION */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                The Engineered Solution
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* RESULTS & ROI */}
            <div className="space-y-4 p-8 rounded-3xl bg-gradient-to-br from-[#16192b] to-[#0f111f] border border-[#f57a1b]/40">
              <h2 className="text-2xl font-black text-white flex items-center gap-2">
                <Zap className="w-6 h-6 text-[#f57a1b]" />
                Verified Results
              </h2>
              <p className="text-slate-200 text-sm md:text-base leading-relaxed font-medium">
                {project.results}
              </p>
            </div>
          </div>

          {/* SIDEBAR: STACK & TESTIMONIAL */}
          <div className="lg:col-span-4 space-y-8">
            {/* Testimonial Box */}
            <div className="p-6 rounded-3xl glass-panel bg-[#121422] border border-[#f57a1b]/30 space-y-4 relative">
              <Quote className="w-10 h-10 text-[#f57a1b]/20 absolute top-4 right-4" />
              <div className="flex items-center gap-1 text-[#f57a1b]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#f57a1b]" />
                ))}
              </div>

              <p className="text-xs md:text-sm text-slate-200 italic leading-relaxed">
                &ldquo;{project.testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                <img
                  src={project.testimonial.avatarUrl}
                  alt={project.testimonial.author}
                  className="w-10 h-10 rounded-full object-cover border border-[#f57a1b]"
                />
                <div>
                  <div className="text-xs font-bold text-white">{project.testimonial.author}</div>
                  <div className="text-[10px] text-slate-400">{project.testimonial.role}, {project.testimonial.company}</div>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="p-6 rounded-3xl glass-panel bg-[#121422] border border-white/10 space-y-3">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Tech Stack Architecture
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* GALLERY IMAGES */}
        {project.galleryImages.length > 0 && (
          <div className="space-y-6 pt-6">
            <h3 className="text-xl font-bold text-white">Project Interface Showcase</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.galleryImages.map((img, i) => (
                <div key={i} className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                  <img src={img} alt={`Gallery screenshot ${i + 1}`} className="w-full h-64 md:h-80 object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="pt-20">
        <FinalCtaBand />
      </div>
    </main>
  );
}

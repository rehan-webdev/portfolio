import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { servicesData } from "@/data/services";
import { FinalCtaBand } from "@/components/FinalCtaBand";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  HelpCircle,
  ShieldCheck,
  Zap,
  Layout,
  Code,
  Search,
  Sparkles,
  Target,
} from "lucide-react";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found | DevLoop" };

  return {
    title: `${service.title} | DevLoop Agency`,
    description: service.shortTagline,
  };
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

const serviceIconsMap: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-8 h-8 text-[#f57a1b]" />,
  Code: <Code className="w-8 h-8 text-[#f57a1b]" />,
  Search: <Search className="w-8 h-8 text-[#f57a1b]" />,
  Sparkles: <Sparkles className="w-8 h-8 text-[#f57a1b]" />,
  Target: <Target className="w-8 h-8 text-[#f57a1b]" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-[#f57a1b]" />,
};

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0a0b10] text-slate-100 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Back button */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-[#f57a1b] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Services</span>
        </Link>

        {/* HERO HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3.5 rounded-2xl bg-[#f57a1b]/20 border border-[#f57a1b]/40">
                {serviceIconsMap[service.iconName] || <Zap className="w-8 h-8 text-[#f57a1b]" />}
              </div>
              <span className="text-xs font-mono text-[#ffefd5] bg-[#ffefd5]/10 px-3.5 py-1.5 rounded-full border border-[#ffefd5]/20 font-bold">
                Delivery: {service.typicalTimeline}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              {service.title}
            </h1>

            <p className="text-lg text-[#ffefd5] font-semibold">{service.shortTagline}</p>

            <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
              {service.fullDescription}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {service.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-md bg-white/5 text-slate-300 text-xs font-mono border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* KEY METRICS SIDEBAR */}
          <div className="lg:col-span-4 rounded-3xl glass-panel border border-[#f57a1b]/30 p-6 bg-[#121422] space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Service Impact Benchmarks
            </h3>

            <div className="space-y-3">
              {service.keyMetrics.map((km, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="text-3xl font-black text-[#f57a1b]">{km.value}</div>
                  <div className="text-xs font-bold text-white mt-0.5">{km.label}</div>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="w-full py-3.5 rounded-xl bg-[#f57a1b] text-white font-bold text-xs hover:bg-[#e0680a] transition-all flex items-center justify-center gap-2 glow-orange-sm"
            >
              <span>Book Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* PROCESS STEPS */}
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#f57a1b] uppercase tracking-wider">Execution Blueprint</span>
            <h2 className="text-3xl font-bold text-white">How We Deliver This Service</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((ps) => (
              <div key={ps.step} className="p-6 rounded-2xl glass-panel bg-[#121422] border border-white/10 space-y-3">
                <span className="text-xs font-black text-[#f57a1b] font-mono">STEP {ps.step}</span>
                <h3 className="text-lg font-bold text-white">{ps.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{ps.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* DELIVERABLES & IDEAL FOR */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* DELIVERABLES */}
          <div className="p-8 rounded-3xl glass-panel bg-[#121422] border border-white/10 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#f57a1b]" />
              Exact Service Deliverables
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              {service.deliverables.map((del, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#f57a1b] shrink-0 mt-0.5" />
                  <span>{del}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* IDEAL FOR */}
          <div className="p-8 rounded-3xl glass-panel bg-[#121422] border border-white/10 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#f57a1b]" />
              Who This Service Is Built For
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              {service.idealFor.map((ideal, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#ffefd5] shrink-0 mt-0.5" />
                  <span>{ideal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SERVICE FAQs */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#f57a1b] uppercase tracking-wider">Service FAQs</span>
            <h2 className="text-3xl font-bold text-white">Questions Specific To {service.title}</h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl glass-panel bg-[#121422] border border-white/10 space-y-2">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#f57a1b]" />
                  {faq.q}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed pl-6">{faq.a}</p>
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

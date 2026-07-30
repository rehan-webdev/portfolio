import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { agencyInfo } from "@/data/agency";
import { servicesData } from "@/data/services";
import { caseStudiesData } from "@/data/portfolio";
import { ProblemSolution } from "@/components/ProblemSolution";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { FaqSection } from "@/components/FaqSection";
import { FinalCtaBand } from "@/components/FinalCtaBand";
import { RoiCalculator } from "@/components/RoiCalculator";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  TrendingUp,
  Layout,
  Code,
  Search,
  ShieldCheck,
  Target,
  PhoneCall,
  Clock,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "DevLoop | High-Converting Next.js Web Design & Development Agency",
  description:
    "We engineer sub-second Next.js websites and web applications for ambitious SaaS startups and high-growth brands. Guaranteed 3-week sprint delivery.",
  openGraph: {
    title: "DevLoop | High-Converting Next.js Agency",
    description:
      "Websites that turn visitors into customers. 3-week delivery guarantee, sub-0.4s load times, and fixed-scope pricing.",
    url: "https://devloop.agency",
    siteName: "DevLoop Agency",
    type: "website",
  },
};

const serviceIconsMap: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-6 h-6 text-[#f57a1b]" />,
  Code: <Code className="w-6 h-6 text-[#f57a1b]" />,
  Search: <Search className="w-6 h-6 text-[#f57a1b]" />,
  Sparkles: <Sparkles className="w-6 h-6 text-[#f57a1b]" />,
  Target: <Target className="w-6 h-6 text-[#f57a1b]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#f57a1b]" />,
};

export default function HomePage() {
  const featuredCases = caseStudiesData.filter((c) => c.featured);

  // JSON-LD Structured Data Schema for Organization & LocalBusiness
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "DevLoop Agency",
    description: agencyInfo.shortDescription,
    url: "https://devloop.agency",
    telephone: agencyInfo.contactInfo.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "548 Market St, Suite 92011",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      postalCode: "94104",
      addressCountry: "US",
    },
    priceRange: "$$$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "48",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#0a0b10] text-slate-100 overflow-x-hidden">
        {/* ================= HERO SECTION ================= */}
        <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 bg-grid-pattern overflow-hidden">
          {/* Subtle Ambient Glow Blobs */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#f57a1b]/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-10 right-10 w-96 h-96 bg-[#ffefd5]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-[#f57a1b]/40 text-xs font-bold text-slate-200 shadow-xl glow-orange-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f57a1b] animate-ping" />
              <span className="text-[#f57a1b] font-black uppercase tracking-wider">3-Week Sprint Guarantee</span>
              <span className="text-slate-500">•</span>
              <span className="text-[#ffefd5]">Lighthouse 98+ Speed Standard</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] max-w-5xl mx-auto font-display">
              Websites & Web Apps That Turn <span className="gradient-orange-cream">Cold Visitors</span> Into High-LTV Customers.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
              We design and engineer bespoke Next.js websites for B2B SaaS, e-commerce, and high-growth brands. Sub-second load speeds, conversion psychology, and zero-debt code.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#f57a1b] text-white font-extrabold text-base hover:bg-[#e0680a] transition-all shadow-xl shadow-[#f57a1b]/30 glow-orange flex items-center justify-center gap-2.5 hover:scale-105 active:scale-95"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Book a Free Call</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/work"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-extrabold text-base transition-all border border-white/10 flex items-center justify-center gap-2 hover:border-[#f57a1b]/40"
              >
                <span>View Our Work</span>
              </Link>
            </div>

            {/* Hero Key Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 max-w-4xl mx-auto">
              {agencyInfo.heroStats.map((stat, i) => (
                <div key={i} className="p-4 rounded-2xl glass-panel border border-white/10 bg-[#121422]/60">
                  <div className="text-2xl sm:text-3xl font-black text-[#f57a1b]">{stat.value}</div>
                  <div className="text-xs text-slate-400 font-medium mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Client Logo Trust Bar */}
            <div className="pt-12 border-t border-white/10">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">
                Engineered Platforms For Industry Leaders & High-Growth Innovators
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-75 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
                {agencyInfo.clientLogos.map((client, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="text-lg font-black tracking-widest text-slate-300 font-mono">
                      {client.logoText}
                    </span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">
                      {client.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= PROBLEM vs SOLUTION ================= */}
        <ProblemSolution />

        {/* ================= SERVICES GRID ================= */}
        <section className="py-20 bg-[#07080d] relative overflow-hidden" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f57a1b]/15 border border-[#f57a1b]/30 text-[#f57a1b] text-xs font-bold uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5" />
                <span>Full-Spectrum Digital Services</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                Everything You Need For Web Dominance
              </h2>
              <p className="text-slate-400 text-base md:text-lg">
                We combine strategic brand storytelling, conversion rate psychology, and Next.js engineering into a single unified sprint.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((svc) => (
                <div
                  key={svc.id}
                  className="rounded-3xl p-8 glass-panel bg-[#121422] border border-white/10 hover:border-[#f57a1b]/50 transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="p-3.5 rounded-2xl bg-[#f57a1b]/15 w-fit border border-[#f57a1b]/30 group-hover:scale-110 transition-transform">
                      {serviceIconsMap[svc.iconName] || <Zap className="w-6 h-6 text-[#f57a1b]" />}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#f57a1b] transition-colors">
                        {svc.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#ffefd5] mt-1">{svc.shortTagline}</p>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">{svc.description}</p>

                    <div className="pt-2 space-y-2 border-t border-white/5">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Key Deliverables:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {svc.deliverables.slice(0, 3).map((del, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#f57a1b] shrink-0" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 font-mono">Sprint: {svc.typicalTimeline}</span>
                    <Link
                      href={`/services/${svc.slug}`}
                      className="text-xs font-bold text-[#f57a1b] hover:text-[#ff8c33] flex items-center gap-1 group-hover:translate-x-1 transition-all"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FEATURED CASE STUDIES ================= */}
        <section className="py-20 bg-[#0a0b10] relative overflow-hidden" id="work">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f57a1b]/15 border border-[#f57a1b]/30 text-[#f57a1b] text-xs font-bold uppercase tracking-wider">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Real Metrics. Real Business Impact.</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                  Featured Case Studies
                </h2>
                <p className="text-slate-400 text-base">
                  Explore how our conversion architecture drove millions in pipeline and tripled lead generation.
                </p>
              </div>

              <Link
                href="/work"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-all border border-white/10 shrink-0 flex items-center gap-2"
              >
                <span>View All 6 Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-12">
              {featuredCases.map((cs, index) => (
                <div
                  key={cs.id}
                  className={`rounded-3xl glass-panel border border-[#f57a1b]/30 p-8 md:p-12 bg-[#121422] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Left Specs */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-[#f57a1b]/20 text-[#f57a1b] font-bold text-xs border border-[#f57a1b]/30">
                        {cs.projectCategory}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">Delivery: {cs.timeline}</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
                      {cs.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed">{cs.shortSummary}</p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 pt-2">
                      {cs.stats.slice(0, 2).map((st, i) => (
                        <div key={i} className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
                          <div className="text-2xl font-extrabold text-[#f57a1b]">{st.value}</div>
                          <div className="text-xs font-bold text-white">{st.label}</div>
                          <div className="text-[10px] text-slate-400">{st.change}</div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <Link
                        href={`/work/${cs.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#f57a1b] text-white font-bold text-xs hover:bg-[#e0680a] transition-all glow-orange-sm"
                      >
                        <span>Read Full Case Study</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="lg:col-span-6">
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
                      <img
                        src={cs.heroImage}
                        alt={cs.title}
                        className="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b10] via-transparent to-transparent opacity-60" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= INTERACTIVE ROI CALCULATOR ================= */}
        <section className="py-20 bg-[#07080d] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RoiCalculator />
          </div>
        </section>

        {/* ================= PROCESS TIMELINE ================= */}
        <ProcessTimeline />

        {/* ================= TESTIMONIALS WALL ================= */}
        <TestimonialsSection />

        {/* ================= PRICING PACKAGES ================= */}
        <PricingSection />

        {/* ================= FAQ ACCORDION ================= */}
        <FaqSection />

        {/* ================= FINAL CTA BAND ================= */}
        <FinalCtaBand />
      </main>
    </>
  );
}

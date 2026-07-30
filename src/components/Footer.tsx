"use client";

import React, { useState } from "react";
import Link from "next/link";
import { agencyInfo } from "@/data/agency";
import { ArrowRight, Mail, Globe } from "lucide-react";

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail, source: "footer" }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage("Subscribed! Welcome to the DevLoop growth newsletter.");
        setNewsletterEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Failed to subscribe.");
      }
    } catch {
      setStatus("error");
      setMessage("An unexpected error occurred.");
    }
  };

  return (
    <footer className="relative bg-[#07080d] text-slate-400 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-[#f57a1b]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* COL 1 & 2: BRAND & NEWSLETTER */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-[#f57a1b] to-[#ff8c33] text-white font-extrabold shadow-lg shadow-[#f57a1b]/30">
                <span className="text-xl tracking-tighter">DL</span>
                <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#ffefd5] border-2 border-[#0a0b10] animate-pulse" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight font-display">
                DevLoop<span className="text-[#f57a1b]">.</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {agencyInfo.shortDescription}
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{agencyInfo.contactInfo.availability}</span>
            </div>

            {/* Newsletter */}
            <div className="space-y-3 pt-2">
              <p className="text-xs font-bold text-white uppercase tracking-wider">
                Subscribe to Conversion & Next.js Insights
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2 max-w-md">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your work email..."
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#f57a1b]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-4 py-2.5 rounded-xl bg-[#f57a1b] text-white font-semibold text-xs hover:bg-[#e0680a] transition-all shrink-0 flex items-center gap-1.5 glow-orange-sm"
                >
                  {status === "loading" ? "Subscribing..." : "Join Free"}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
              {message && (
                <p className={`text-xs ${status === "success" ? "text-emerald-400" : "text-rose-400"}`}>
                  {message}
                </p>
              )}
            </div>
          </div>

          {/* COL 3: SERVICES */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services/web-design" className="hover:text-[#f57a1b] transition-colors">
                  UI/UX Design Systems
                </Link>
              </li>
              <li>
                <Link href="/services/nextjs-development" className="hover:text-[#f57a1b] transition-colors">
                  Next.js App Engineering
                </Link>
              </li>
              <li>
                <Link href="/services/seo-optimization" className="hover:text-[#f57a1b] transition-colors">
                  Technical SEO & Speed
                </Link>
              </li>
              <li>
                <Link href="/services/brand-identity" className="hover:text-[#f57a1b] transition-colors">
                  Brand Identity Strategy
                </Link>
              </li>
              <li>
                <Link href="/services/cro-audit" className="hover:text-[#f57a1b] transition-colors">
                  Conversion Rate Optimization
                </Link>
              </li>
              <li>
                <Link href="/services/maintenance" className="hover:text-[#f57a1b] transition-colors">
                  Growth Care Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* COL 4: COMPANY */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/work" className="hover:text-[#f57a1b] transition-colors">
                  Featured Case Studies
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#f57a1b] transition-colors">
                  Our Mission & Team
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#f57a1b] transition-colors">
                  Growth & Tech Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#f57a1b] transition-colors">
                  Get Project Proposal
                </Link>
              </li>
            </ul>
          </div>

          {/* COL 5: CONTACT & SOCIAL */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <p>
                <span className="text-slate-500 block">Email Us:</span>
                <a href={`mailto:${agencyInfo.contactInfo.email}`} className="text-white hover:text-[#f57a1b] font-medium">
                  {agencyInfo.contactInfo.email}
                </a>
              </p>
              <p>
                <span className="text-slate-500 block">HQ Office:</span>
                <span className="text-slate-300">{agencyInfo.contactInfo.address}</span>
              </p>
            </div>

            <div className="flex items-center gap-3 pt-5">
              <a
                href={agencyInfo.socials[0].url}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-[#f57a1b] hover:border-[#f57a1b]/40 transition-all flex items-center justify-center"
                title="Twitter/X"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href={agencyInfo.socials[1].url}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-[#f57a1b] hover:border-[#f57a1b]/40 transition-all flex items-center justify-center"
                title="LinkedIn"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href={agencyInfo.socials[2].url}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-[#f57a1b] hover:border-[#f57a1b]/40 transition-all flex items-center justify-center"
                title="GitHub"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {agencyInfo.name} Agency. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Built with Next.js 14, Tailwind CSS & Drizzle ORM</span>
            <span className="hidden md:inline">•</span>
            <span className="text-[#ffefd5] font-semibold">3-Week Delivery Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

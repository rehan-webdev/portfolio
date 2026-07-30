import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Search, Compass, PhoneCall } from "lucide-react";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-[#0a0b10] text-slate-100 flex items-center justify-center p-4 pt-32 pb-20">
      <div className="max-w-2xl w-full text-center space-y-8 rounded-3xl glass-panel bg-[#121422] border border-[#f57a1b]/30 p-8 md:p-12 shadow-2xl relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#f57a1b]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="inline-flex p-4 rounded-3xl bg-[#f57a1b]/20 text-[#f57a1b] border border-[#f57a1b]/40 font-mono text-3xl font-black">
          404
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Lost in the DevLoop?
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-md mx-auto leading-relaxed">
            The page you are looking for has moved, been renamed, or never existed in this timeline.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#f57a1b] text-white font-bold text-xs hover:bg-[#e0680a] transition-all flex items-center justify-center gap-2 glow-orange-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-all border border-white/10 flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4" />
            <span>Explore Services</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

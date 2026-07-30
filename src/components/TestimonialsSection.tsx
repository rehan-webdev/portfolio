"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonialsData, Testimonial } from "@/data/testimonials";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

export function TestimonialsSection() {
  const [filter, setFilter] = useState<string>("All");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const categories = ["All", "B2B SaaS", "E-Commerce", "Services"];

  const filteredTestimonials =
    filter === "All"
      ? testimonialsData
      : testimonialsData.filter((t) => t.category === filter);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const activeItem = filteredTestimonials[currentIndex] || testimonialsData[0];

  return (
    <section className="py-20 relative overflow-hidden bg-[#0a0b10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f57a1b]/15 border border-[#f57a1b]/30 text-[#f57a1b] text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-[#f57a1b]" />
            <span>5.0 Star Client Wall of Proof</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Trusted by Growth Leaders & Startup Founders
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            See how DevLoop helped ambitious companies double their conversion rate and scale revenue.
          </p>

          {/* CATEGORY FILTERS */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat);
                  setCurrentIndex(0);
                }}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  filter === cat
                    ? "bg-[#f57a1b] text-white shadow-md shadow-[#f57a1b]/30"
                    : "bg-white/5 border border-white/10 text-slate-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* CAROUSEL CARD */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl glass-panel border border-[#f57a1b]/30 p-8 md:p-12 bg-[#121422] relative overflow-hidden shadow-2xl"
            >
              <Quote className="w-16 h-16 text-[#f57a1b]/10 absolute top-6 right-6 pointer-events-none" />

              <div className="space-y-6">
                {/* Rating & Metric Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-1">
                    {[...Array(activeItem.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#f57a1b] text-[#f57a1b]" />
                    ))}
                  </div>

                  {activeItem.metricsBadge && (
                    <div className="px-3.5 py-1 rounded-full bg-[#ffefd5]/15 border border-[#ffefd5]/30 text-[#ffefd5] text-xs font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#f57a1b]" />
                      <span>{activeItem.metricsBadge}</span>
                    </div>
                  )}
                </div>

                {/* Quote Content */}
                <p className="text-lg md:text-2xl font-medium text-white leading-relaxed italic">
                  &ldquo;{activeItem.content}&rdquo;
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <img
                    src={activeItem.avatarUrl}
                    alt={activeItem.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#f57a1b]"
                  />
                  <div>
                    <h4 className="text-base font-extrabold text-white">{activeItem.name}</h4>
                    <p className="text-xs text-slate-400">
                      {activeItem.role}, <span className="text-[#f57a1b] font-semibold">{activeItem.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CONTROLS */}
          <div className="flex items-center justify-between pt-6">
            <span className="text-xs font-semibold text-slate-500">
              {currentIndex + 1} of {filteredTestimonials.length} Testimonials
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#f57a1b] transition-all"
                title="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#f57a1b] transition-all"
                title="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

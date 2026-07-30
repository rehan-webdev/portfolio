"use client";

import React, { useState } from "react";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { FinalCtaBand } from "@/components/FinalCtaBand";
import { Search, Clock, ArrowRight, BookOpen } from "lucide-react";

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Web Design", "Next.js & Engineering", "CRO & Growth", "SEO", "Agency"];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];

  return (
    <main className="min-h-screen bg-[#0a0b10] text-slate-100 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* HERO HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f57a1b]/15 border border-[#f57a1b]/30 text-[#f57a1b] text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>DevLoop Knowledge Base</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Conversion & Engineering Insights
          </h1>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            Actionable breakdowns on Next.js App Router performance, CRO hero design, technical SEO, and web architecture.
          </p>

          {/* SEARCH & FILTERS */}
          <div className="space-y-4 pt-4">
            <div className="relative max-w-md mx-auto">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles (e.g. Next.js, CRO, Core Web Vitals)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#f57a1b]"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
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
        </div>

        {/* FEATURED POST BANNER */}
        {activeCategory === "All" && !search && (
          <div className="rounded-3xl glass-panel bg-[#121422] border border-[#f57a1b]/30 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 md:p-10 shadow-2xl">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#f57a1b] text-white text-[10px] font-black uppercase">
                  Featured Article
                </span>
                <span className="text-xs text-slate-400 font-mono">{featuredPost.readTime}</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-white hover:text-[#f57a1b] transition-colors">
                <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
              </h2>

              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">{featuredPost.excerpt}</p>

              <div className="flex items-center gap-3 pt-2">
                <img
                  src={featuredPost.author.avatarUrl}
                  alt={featuredPost.author.name}
                  className="w-8 h-8 rounded-full object-cover border border-[#f57a1b]"
                />
                <div className="text-xs">
                  <span className="text-white font-bold block">{featuredPost.author.name}</span>
                  <span className="text-slate-400">{featuredPost.publishedAt}</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#f57a1b] text-white font-bold text-xs hover:bg-[#e0680a] transition-all glow-orange-sm"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-white/10 h-64 md:h-80">
              <img src={featuredPost.coverImage} alt={featuredPost.title} className="w-full h-full object-cover" />
            </div>
          </div>
        )}

        {/* ARTICLES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="rounded-3xl glass-panel bg-[#121422] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-[#f57a1b]/40 transition-all group"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#ffefd5] text-[10px] font-bold">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[10px] text-slate-400">
                    <span>{post.publishedAt}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#f57a1b] transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">{post.excerpt}</p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-white/5 mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={post.author.avatarUrl}
                    alt={post.author.name}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="text-[11px] text-slate-400 font-medium">{post.author.name}</span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-bold text-[#f57a1b] hover:text-[#ff8c33] flex items-center gap-1"
                >
                  <span>Read</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
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

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { blogPosts } from "@/data/blog";
import { FinalCtaBand } from "@/components/FinalCtaBand";
import { ArrowLeft, ArrowRight, Clock, User, Share2, Tag, BookOpen } from "lucide-react";

interface BlogArticleProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogArticleProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found | DevLoop" };

  return {
    title: `${post.title} | DevLoop Blog`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function BlogArticlePage({ params }: BlogArticleProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0a0b10] text-slate-100 pt-32 pb-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-[#f57a1b] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </Link>

        {/* HEADER */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-[#f57a1b]/20 text-[#f57a1b] font-bold text-xs border border-[#f57a1b]/30">
              {post.category}
            </span>
            <span className="text-xs text-slate-400 font-mono">{post.readTime}</span>
            <span className="text-xs text-slate-400 font-mono">• {post.publishedAt}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-base text-slate-300 leading-relaxed font-normal">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-4 pt-4 border-t border-b border-white/10 py-4">
            <img
              src={post.author.avatarUrl}
              alt={post.author.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-[#f57a1b]"
            />
            <div>
              <div className="text-sm font-bold text-white">{post.author.name}</div>
              <div className="text-xs text-slate-400">{post.author.role}</div>
            </div>
          </div>
        </div>

        {/* COVER IMAGE */}
        <div className="rounded-3xl overflow-hidden border border-[#f57a1b]/30 shadow-2xl">
          <img src={post.coverImage} alt={post.title} className="w-full h-80 md:h-[420px] object-cover" />
        </div>

        {/* CONTENT */}
        <div className="prose prose-invert max-w-none space-y-6 text-slate-200 text-sm md:text-base leading-relaxed">
          {post.content.split("\n\n").map((paragraph, idx) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2 key={idx} className="text-2xl font-bold text-white pt-6 border-t border-white/10">
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            if (paragraph.startsWith("### ")) {
              return (
                <h3 key={idx} className="text-xl font-bold text-[#f57a1b] pt-4">
                  {paragraph.replace("### ", "")}
                </h3>
              );
            }
            if (paragraph.startsWith("> ")) {
              return (
                <blockquote
                  key={idx}
                  className="p-4 rounded-2xl bg-[#f57a1b]/10 border-l-4 border-[#f57a1b] text-white italic text-base"
                >
                  {paragraph.replace("> ", "")}
                </blockquote>
              );
            }
            return <p key={idx}>{paragraph}</p>;
          })}
        </div>

        {/* TAGS */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap gap-2 items-center">
          <Tag className="w-4 h-4 text-[#f57a1b]" />
          <span className="text-xs text-slate-400 font-bold uppercase">Topics:</span>
          {post.tags.map((t, i) => (
            <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
              #{t}
            </span>
          ))}
        </div>
      </article>

      <div className="pt-20">
        <FinalCtaBand />
      </div>
    </main>
  );
}

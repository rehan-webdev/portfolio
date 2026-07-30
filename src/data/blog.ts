export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "Web Design" | "Next.js & Engineering" | "CRO & Growth" | "SEO" | "Agency";
  publishedAt: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  };
  coverImage: string;
  featured?: boolean;
  content: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "why-nextjs-14-outperforms-wordpress-webflow-for-saas",
    title: "Why SaaS Founders Are Switching From Webflow & WordPress to Next.js in 2025",
    excerpt:
      "A deep dive into sub-second page speeds, edge caching, schema markup, and how custom Next.js engineering drives 3x higher trial signups.",
    category: "Next.js & Engineering",
    publishedAt: "May 12, 2025",
    readTime: "6 min read",
    author: {
      name: "Marcus Vance",
      role: "Lead Systems Architect",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    },
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    tags: ["Next.js", "Web Performance", "SaaS Growth", "App Router"],
    content: `
## The Shift from No-Code Monoliths to Modern Next.js Architecture

For years, early-stage startups defaulted to WordPress or Webflow for their marketing sites. It was quick, required no engineering setup, and allowed non-technical marketers to push edits.

However, as a SaaS company scales beyond $1M ARR, no-code platforms begin showing heavy technical debt:
1. **Bloated Script Overhead**: 30+ third-party plugins adding 3–5 seconds to page load times.
2. **Poor Mobile Conversion**: Google Lighthouse mobile performance scores hovering below 45/100.
3. **Limited Dynamic Capability**: Inability to render real-time interactive product calculators, live database feeds, or personalized user onboarding portals.

### The Next.js 14 App Router Advantage

By decoupling design and content with Next.js App Router, you get the best of both worlds:

- **Sub-500ms Global Load Times**: Static HTML generated at build time with incremental static regeneration (ISR).
- **Zero Layout Shift (CLS)**: Optimized image pipelines via \`next/image\` preventing bouncy mobile layouts.
- **Flawless Technical SEO**: Native Metadata API injection and automated JSON-LD schema generation.

> "A 1-second delay in page load time reduces conversions by 7%. In B2B SaaS, that translates to hundreds of thousands in lost ARR annually."

### Real-World Case Benchmark
When Vanguard SaaS migrated their marketing site from WordPress to DevLoop's Next.js architecture, their desktop Lighthouse score went from 52 to 99, mobile bounce rate fell by 38%, and organic trial conversions tripled.
    `,
  },
  {
    id: "2",
    slug: "7-hero-section-mistakes-killing-your-conversion-rate",
    title: "7 Hero Section Mistakes That Are Destroying Your Conversion Rate (And How to Fix Them)",
    excerpt:
      "Your hero section gets 100% of traffic, but 80% leaves in under 5 seconds. Here is the exact visual hierarchy blueprint we use to double conversion rates.",
    category: "CRO & Growth",
    publishedAt: "May 4, 2025",
    readTime: "8 min read",
    author: {
      name: "Sarah Jenkins",
      role: "Head of UI/UX Strategy",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    },
    coverImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    tags: ["CRO", "Hero Design", "Copywriting", "UX"],
    content: `
## Why Most Agency Hero Sections Fail

Your hero section is your digital elevator pitch. You have 3.2 seconds before a visitor decides whether to stay or press the back button.

Here are the 7 most common conversion killers we uncover during client audits:

### 1. Clever Headlines Instead of Clear Headlines
Stop trying to sound poetic. Instead of saying *"Reimagining the Paradigm of Enterprise Synergies"*, say *"Automate Your Monthly Invoice Collection in 3 Clicks"*.

### 2. Low-Contrast Call-to-Action Buttons
If your primary CTA button blends into the background gradient, visitors miss it. Use high-contrast brand accent colors like \`#f57a1b\` with strong drop shadows.

### 3. Vague Social Proof
Putting a tiny generic quote without a photo or verified metric reduces trust. Display quantifiable proof like *"+184% Conversion Uplift for 50+ SaaS Brands"*.

### 4. Heavy Video Backgrounds That Stutter on 4G
Auto-playing 4K videos slow down mobile render times to 4+ seconds. Replace videos with optimized WebP animations or interactive product demos.
    `,
  },
  {
    id: "3",
    slug: "mastering-core-web-vitals-in-2025",
    title: "Mastering Core Web Vitals in 2025: LCP, INP, and CLS Optimization",
    excerpt:
      "Google's Interaction to Next Paint (INP) is now a critical ranking factor. Here is how to audit and optimize every metric for green scores.",
    category: "SEO",
    publishedAt: "Apr 28, 2025",
    readTime: "5 min read",
    author: {
      name: "Marcus Vance",
      role: "Lead Systems Architect",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    },
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    tags: ["SEO", "Performance", "Core Web Vitals", "Lighthouse"],
    content: `
## Understanding Google's New INP Standard

Google officially replaced FID with INP (Interaction to Next Paint) as a Core Web Vitals metric. INP measures page responsiveness during user interactions like button clicks and menu opens.

### Key Strategies to Guarantee Green Scores

1. **Minimize Main Thread Work**: Move heavy JavaScript calculations into Web Workers or API handlers.
2. **Optimize Image Delivery**: Use modern WebP and AVIF formats with pre-calculated aspect ratios.
3. **Defer Non-Essential Scripts**: Load analytics and tracking pixels with \`next/script\` strategy \`lazyOnload\`.
    `,
  },
  {
    id: "4",
    slug: "building-design-systems-that-scale",
    title: "How to Build a Scalable Design System in Figma & Tailwind CSS",
    excerpt:
      "Aligning designer tokens with developer utility classes eliminates handoff friction and speeds up new page deployments by 4x.",
    category: "Web Design",
    publishedAt: "Apr 18, 2025",
    readTime: "7 min read",
    author: {
      name: "Sarah Jenkins",
      role: "Head of UI/UX Strategy",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    },
    coverImage: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    tags: ["Design Systems", "Figma", "Tailwind CSS", "UI Design"],
    content: `
## Bridging the Gap Between Design Tokens and Utility CSS

In traditional agencies, designers pass static Figma files to developers, who spend weeks trying to match colors and margins manually.

At DevLoop, we map Figma Variable Tokens directly to CSS variables and Tailwind classes. This ensures 100% visual fidelity and zero codebase sprawl.
    `,
  },
  {
    id: "5",
    slug: "the-anatomy-of-a-3-week-agency-sprint",
    title: "Inside DevLoop: How We Ship Production-Ready Sites in 21 Days",
    excerpt:
      "A peek behind the curtain at our asynchronous sprint framework, automated QA checks, and rapid client feedback loops.",
    category: "Agency",
    publishedAt: "Apr 10, 2025",
    readTime: "5 min read",
    author: {
      name: "Alex Rivera",
      role: "Operations & Sprint Lead",
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    },
    coverImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    tags: ["Agency", "Sprint Process", "Productivity", "Client Delivery"],
    content: `
## Why Traditional 6-Month Agency Timelines Are Dead

The 6-month website timeline is obsolete. By the time a traditional site launches, the client's messaging and market position have shifted.

Our 21-day sprint framework splits execution into 3 disciplined phases:
1. **Week 1 (Discover & Wireframe)**: Information architecture, copy alignment, and interactive wireframes.
2. **Week 2 (High-Fidelity Design & Next.js Build)**: Visual polish in Figma parallel with component engineering.
3. **Week 3 (QA, CMS Sync & Launch)**: Cross-browser testing, Core Web Vitals optimization, and DNS switchover.
    `,
  },
];

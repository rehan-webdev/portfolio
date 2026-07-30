export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  tagline: string;
  popular?: boolean;
  deliveryTime: string;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
  ctaVariant: "default" | "orange" | "outline";
}

export const pricingPackages: PricingTier[] = [
  {
    id: "launch-loop",
    name: "Launch Loop",
    price: "$4,500",
    period: "one-time",
    tagline: "Ideal for early-stage startups and product launches needing a high-impact 1-page site.",
    deliveryTime: "10 Business Days",
    features: [
      "High-Converting 1-Page Sprint Design",
      "Next.js 14 App Router + Tailwind CSS",
      "Up to 6 Interactive Custom Sections",
      "Mobile-First Responsive Optimization",
      "Figma Design Source Files Included",
      "Lead Capture Form with Database & Email Sync",
      "Basic On-Page SEO & OpenGraph Setup",
      "Lighthouse 95+ Speed Guarantee",
      "1 Round of Refinements",
    ],
    notIncluded: [
      "Multi-page architecture (2+ pages)",
      "Headless CMS integration",
      "Custom interactive ROI calculators",
    ],
    ctaText: "Claim Launch Sprint",
    ctaVariant: "outline",
  },
  {
    id: "growth-loop",
    name: "Growth Loop",
    price: "$8,900",
    period: "one-time",
    popular: true,
    tagline: "Our flagship package. Complete multi-page conversion system for scaling SaaS & agencies.",
    deliveryTime: "3 Weeks Guaranteed",
    features: [
      "Up to 8 Custom Designed & Engineered Pages",
      "Next.js App Router + TypeScript + Framer Motion",
      "Custom Interactive Features (ROI Calculator / Filters)",
      "Headless CMS or Editable Data Layer",
      "Multi-step Lead Qualification Funnel",
      "Complete Brand System Elevation & Asset Kit",
      "Advanced Technical SEO & JSON-LD Schema",
      "PostgreSQL Database Integration for Leads",
      "Lighthouse 98+ Speed Guarantee",
      "30 Days Post-Launch Warranty & Support",
      "2 Rounds of Interactive Revisions",
    ],
    ctaText: "Start Growth Loop",
    ctaVariant: "orange",
  },
  {
    id: "enterprise-loop",
    name: "Enterprise Loop",
    price: "$16,500+",
    period: "custom scope",
    tagline: "For high-scale brands requiring complex web applications, portal builds, or migrations.",
    deliveryTime: "4 – 6 Weeks",
    features: [
      "Unlimited Bespoke Pages & Web App Components",
      "Fullstack Next.js + PostgreSQL + Auth + APIs",
      "Headless E-Commerce / Custom Portal Integrations",
      "Bespoke 3D / Lottie Interactive Animations",
      "Design System with Component Library in Figma & Storybook",
      "Dedicated Senior Engineering & Design Lead",
      "A/B Testing Infrastructure & Conversion Telemetry",
      "Custom SLA & Priority Dedicated Slack Channel",
      "60 Days Post-Launch Warranty & CRO Audits",
    ],
    ctaText: "Request Enterprise Quote",
    ctaVariant: "outline",
  },
];

export const carePlans = [
  {
    name: "Starter Care",
    price: "$750 / mo",
    features: ["5 Hours Dev Time / Mo", "24/7 Uptime Monitoring", "Security & Dependency Updates", "1 Business Day SLA"],
  },
  {
    name: "Growth Care",
    price: "$1,850 / mo",
    popular: true,
    features: ["15 Hours Dev Time / Mo", "Monthly CRO Audits", "A/B Landing Page Sprints", "Same-Day SLA Support"],
  },
  {
    name: "Scale Care",
    price: "$3,600 / mo",
    features: ["35 Hours Dev Time / Mo", "Dedicated Lead Developer", "Continuous Speed Audits", "2-Hour SLA Emergency Response"],
  },
];

export const pricingFaqs = [
  {
    q: "How does the 3-week delivery guarantee work?",
    a: "If all client content and assets are provided on day 1, we guarantee your site will be ready for launch in 21 calendar days. If we miss the deadline due to our delay, we refund $1,000 off your final invoice.",
  },
  {
    q: "Are there any recurring monthly software fees?",
    a: "No! Unlike platform subscriptions, your site code is 100% yours. Hosting on Vercel or Netlify is free for most traffic tiers, and database hosting on Postgres starts at $0-$5/mo.",
  },
  {
    q: "Can we pay in milestones?",
    a: "Yes. Standard terms are 50% deposit to secure your sprint slot, and 50% upon final launch approval.",
  },
];

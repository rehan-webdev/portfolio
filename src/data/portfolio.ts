export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  clientName: string;
  clientIndustry: string;
  projectCategory: string; // e.g., "B2B SaaS", "E-Commerce", "Services"
  featured: boolean;
  shortSummary: string;
  heroImage: string;
  stats: { label: string; value: string; change: string }[];
  challenge: string;
  approach: string;
  solution: string;
  results: string;
  techStack: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
    avatarUrl: string;
  };
  galleryImages: string[];
  websiteUrl?: string;
  timeline: string;
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: "vanguard-saas",
    slug: "vanguard-saas",
    title: "How Vanguard SaaS Scaled Monthly Recurring Revenue by +240% in 90 Days",
    clientName: "Vanguard Tech",
    clientIndustry: "B2B AI Software",
    projectCategory: "B2B SaaS",
    featured: true,
    shortSummary:
      "Complete Next.js App Router rebuild with interactive product demo, conversion copywriting, and sub-400ms load speeds.",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    stats: [
      { label: "Free Trial Signups", value: "+240%", change: "Up from 1.2% to 4.1%" },
      { label: "Page Load Time", value: "0.34s", change: "78% faster than before" },
      { label: "Lighthouse Score", value: "99/100", change: "Perfect technical score" },
      { label: "Pipeline Generated", value: "$1.8M", change: "First quarter post-launch" },
    ],
    challenge:
      "Vanguard Tech was spending over $35,000 monthly on LinkedIn and Google ads, but their legacy WordPress site took 4.2 seconds to load on mobile and had a vague value proposition. High bounce rates meant 96% of paid visitors left without signing up for a demo.",
    approach:
      "DevLoop conducted 12 customer interview sessions and analyzed heatmaps to identify key friction points. We restructured the hero section to focus on Vanguard's core AI productivity payoff, replaced heavy video backgrounds with lightweight canvas Lottie animations, and engineered a custom Next.js site with dynamic trial booking.",
    solution:
      "We engineered a custom Next.js 14 Web Application featuring modular interactive pricing calculators, instant sandbox preview modals, and multi-step demo booking forms that pre-qualify leads directly into Salesforce.",
    results:
      "Within 30 days of launch, Vanguard's conversion rate jumped from 1.2% to 4.1%. Trial signups exploded by 240%, resulting in an additional $1.8M in pipeline revenue within the first quarter.",
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Drizzle ORM", "Vercel"],
    testimonial: {
      quote:
        "DevLoop didn't just build us a website; they transformed our entire go-to-market execution. Our conversion rate tripled in 30 days, and the 3-week turnaround guarantee was delivered down to the exact hour.",
      author: "Alex Morgan",
      role: "VP of Growth & Marketing",
      company: "Vanguard Tech",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    },
    galleryImages: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
    ],
    websiteUrl: "https://vanguard-demo.devloop.agency",
    timeline: "3 Weeks",
  },
  {
    id: "apex-commerce",
    slug: "apex-commerce",
    title: "Headless Replatforming for Apex Commerce Yields +184% Checkout Conversions",
    clientName: "Apex Luxury Goods",
    clientIndustry: "Direct-To-Consumer E-Commerce",
    projectCategory: "E-Commerce",
    featured: true,
    shortSummary:
      "Transitioned a slow Shopify monolithic theme into a blazing fast Next.js Headless store with instant add-to-cart experience.",
    heroImage:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    stats: [
      { label: "Checkout Conversions", value: "+184%", change: "Mobile sales skyrocketed" },
      { label: "Average Order Value", value: "+32%", change: "Smart upselling widgets" },
      { label: "Mobile Bounce Rate", value: "-52%", change: "Instant page transitions" },
      { label: "Annual Revenue Lift", value: "+$2.4M", change: "Projected annual gain" },
    ],
    challenge:
      "Apex was suffering heavy mobile drop-offs due to bloated Shopify liquid app scripts that slowed down page load times to 5.1 seconds. Flash sales caused server timeouts, leading to lost customer trust and thousands in missed revenue.",
    approach:
      "We decoupled the storefront using Next.js App Router on Vercel Edge while keeping Shopify GraphQL as the back-office inventory engine. We built custom micro-animations for product swiping, cart drawers, and frictionless 1-click checkout.",
    solution:
      "A headless Next.js e-commerce storefront with server-side rendered product pages, instant visual swatch selectors, real-time stock indicators, and localized currency pricing.",
    results:
      "The new mobile site loads in 0.4 seconds globally. Conversion rate improved by 184%, mobile order volume surged, and average order value rose 32% thanks to integrated AI cross-sell drawers.",
    techStack: ["Next.js 14", "Shopify Storefront API", "Tailwind CSS", "Framer Motion", "Stripe"],
    testimonial: {
      quote:
        "The speed of our new headless site is mind-blowing. Mobile shoppers stay longer and buy more. Working with DevLoop felt like having an elite elite frontend engineering squad right in our team.",
      author: "Marcus Vance",
      role: "Founder & CEO",
      company: "Apex Luxury",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    },
    galleryImages: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop",
    ],
    websiteUrl: "https://apex-demo.devloop.agency",
    timeline: "3 Weeks",
  },
  {
    id: "pulse-health",
    slug: "pulse-health",
    title: "Pulse Health: Rebranding & Digital Portal Drives +310% Qualified Inbound Calls",
    clientName: "Pulse Digital Health",
    clientIndustry: "Healthcare & Telemedicine",
    projectCategory: "Services",
    featured: true,
    shortSummary:
      "Elevated brand system, HIPAA-compliant multi-step patient intake funnel, and local SEO structure for a nationwide health platform.",
    heroImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    stats: [
      { label: "Inbound Call Volume", value: "+310%", change: "Qualified patient leads" },
      { label: "Google Local Ranking", value: "Top 3", change: "Across 14 major metros" },
      { label: "Intake Completion", value: "88%", change: "Up from 34% drop-off" },
      { label: "Customer Acquisition Cost", value: "-48%", change: "Lower ad spend per lead" },
    ],
    challenge:
      "Pulse Health had a clinical, outdated 2017 website that failed to convey empathy and modern care. Patients found their 8-page intake form overwhelming, resulting in a massive 66% drop-off rate.",
    approach:
      "DevLoop completely redesigned the patient intake UX into a friendly, progressive 4-step wizard with visual option cards. We developed a warm, trustworthy color palette and deployed SEO-targeted location pages.",
    solution:
      "An empathetic UI with high-contrast readable typography, interactive insurance coverage checker, multi-step appointment scheduler, and localized landing pages for 14 metropolitan clinics.",
    results:
      "Form completions increased from 34% to 88%. Inbound booked calls surged by 310%, while customer acquisition cost plummeted by 48%.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React Hook Form", "Zod", "Postgres"],
    testimonial: {
      quote:
        "DevLoop streamlined our entire patient onboarding journey. The UI is warm, fast, and accessible. Our intake team receives clean, pre-validated leads every single morning.",
      author: "Dr. Elena Rostova",
      role: "Chief Medical Officer",
      company: "Pulse Health",
      avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
    },
    galleryImages: [
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format&fit=crop",
    ],
    websiteUrl: "https://pulse-demo.devloop.agency",
    timeline: "2.5 Weeks",
  },
  {
    id: "finflow-fintech",
    slug: "finflow-fintech",
    title: "FinFlow: Building Trust & Institutional Credibility for a Next-Gen Pay Platform",
    clientName: "FinFlow Pay",
    clientIndustry: "Fintech & Payments",
    projectCategory: "B2B SaaS",
    featured: false,
    shortSummary:
      "Institutional-grade dark UI design system, interactive API documentation preview, and compliance calculator.",
    heroImage:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop",
    stats: [
      { label: "Enterprise Demo Requests", value: "+195%", change: "Fortune 500 inquiries" },
      { label: "Time On Page", value: "4m 12s", change: "Up from 1m 05s" },
      { label: "API Sandbox Signups", value: "+280%", change: "Developer adoption" },
    ],
    challenge:
      "FinFlow had groundbreaking payment infrastructure but their marketing site looked like a college side-project. Enterprise buyers hesitated to trust them with high-volume transaction processing.",
    approach:
      "DevLoop engineered a sleek, premium dark-mode interface with subtle orange glow accents, live interactive code snippet toggles, compliance security badges, and dynamic enterprise calculator widgets.",
    solution:
      "A high-impact website showcasing interactive terminal preview components, enterprise security certifications (SOC2, PCI-DSS), and multi-currency payout calculators.",
    results:
      "Enterprise lead volume grew by 195%, and developer sandbox activations nearly quadrupled within 45 days.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Shiki Code Highlighter"],
    testimonial: {
      quote:
        "DevLoop gave us the polished, heavyweight authority we needed to close our Series B and sign enterprise contracts with major financial institutions.",
      author: "David Chen",
      role: "Co-Founder & CTO",
      company: "FinFlow Pay",
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    },
    galleryImages: [
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop",
    ],
    timeline: "3 Weeks",
  },
  {
    id: "cyberlayer-security",
    slug: "cyberlayer-security",
    title: "CyberLayer: Redefining Zero-Trust Cloud Security Brand Presence",
    clientName: "CyberLayer Inc",
    clientIndustry: "Cybersecurity",
    projectCategory: "B2B SaaS",
    featured: false,
    shortSummary:
      "High-tech cyber aesthetic, real-time threat detection simulator, and interactive security posture checklist.",
    heroImage:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    stats: [
      { label: "MQL to SQL Ratio", value: "62%", change: "Up from 21%" },
      { label: "Organic Search Leads", value: "+160%", change: "Targeted keyword rankings" },
      { label: "Brand NPS Score", value: "74", change: "Top tier in cybersecurity" },
    ],
    challenge:
      "CyberLayer's product was complex to explain. Buyers found technical jargon overwhelming and couldn't grasp the core zero-trust value proposition in the first 5 seconds.",
    approach:
      "DevLoop simplified their messaging into an interactive 'Threat Simulator' widget where CISOs could click their cloud provider and visually see how CyberLayer halts breach vectors.",
    solution:
      "An immersive digital portal with interactive vector animations, downloadable whitepaper funnels, and real-time security score assessments.",
    results:
      "Marketing qualified lead conversion improved dramatically, and organic search traffic grew by 160% in 60 days.",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Zod", "PostgreSQL"],
    testimonial: {
      quote:
        "The interactive threat simulator DevLoop created was our top conversion engine at our annual cloud security summit. Flawless execution.",
      author: "Samantha Wright",
      role: "Director of Brand Strategy",
      company: "CyberLayer",
      avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
    },
    galleryImages: [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    ],
    timeline: "2 Weeks",
  },
  {
    id: "aerodynamics-engineering",
    slug: "aerodynamics-engineering",
    title: "AeroDynamics: High-Precision Corporate Platform for Industrial Defense Leaders",
    clientName: "AeroDynamics Corp",
    clientIndustry: "Aero & Defense Systems",
    projectCategory: "Services",
    featured: false,
    shortSummary:
      "Enterprise corporate engineering portal with 3D component renders, career portal, and procurement request system.",
    heroImage:
      "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1200&auto=format&fit=crop",
    stats: [
      { label: "RFP Submissions", value: "+150%", change: "High-value government RFPs" },
      { label: "Core Web Vitals Pass", value: "100%", change: "Across all mobile networks" },
      { label: "Talent Applications", value: "+210%", change: "Senior engineering candidates" },
    ],
    challenge:
      "AeroDynamics needed to showcase heavy defense engineering capabilities to international procurement officers while maintaining strict security standards and multi-region performance.",
    approach:
      "We built a structured Next.js portal with dark high-precision industrial design, fast document downloads, and encrypted RFP contact forms.",
    solution:
      "Clean corporate platform with interactive CAD preview modals, defense spec sheets, and an automated talent recruitment portal.",
    results:
      "RFP procurement inquiry rate grew by 150%, attracting senior engineering talent and global defense contracts.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MDX", "Drizzle ORM"],
    testimonial: {
      quote:
        "DevLoop delivered an enterprise corporate presence that matches our engineering precision. They hit every deadline without compromising quality.",
      author: "General Thomas Blake (Ret.)",
      role: "Chief Operating Officer",
      company: "AeroDynamics Corp",
      avatarUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=300&auto=format&fit=crop",
    },
    galleryImages: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
    ],
    timeline: "3 Weeks",
  },
];

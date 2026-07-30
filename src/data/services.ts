export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTagline: string;
  description: string;
  fullDescription: string;
  iconName: string;
  typicalTimeline: string;
  deliverables: string[];
  keyMetrics: { label: string; value: string }[];
  idealFor: string[];
  techStack: string[];
  processSteps: { step: string; title: string; description: string }[];
  faqs: { q: string; a: string }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "web-design",
    slug: "web-design",
    title: "High-Converting UI/UX Design",
    shortTagline: "Visual identity and buyer journeys built to turn browsers into buyers.",
    description:
      "Bespoke, conversion-focused design systems that captivate visitors, build instant trust, and lead users down a friction-free conversion path.",
    fullDescription:
      "A visually stunning website is worthless if it doesn't close deals. At DevLoop, our UI/UX design process combines behavioral psychology, eye-tracking principles, and brand storytelling to create interfaces that captivate attention and drive high-intent actions.",
    iconName: "Layout",
    typicalTimeline: "1.5 – 2 Weeks",
    deliverables: [
      "Conversion Architecture & Wireframing",
      "Figma UI Component & Token Library",
      "Responsive Desktop, Tablet & Mobile Designs",
      "Interactive High-Fidelity Prototypes",
      "Brand Color & Typography System",
      "Micro-interaction & Motion Specs",
    ],
    keyMetrics: [
      { label: "Avg. Conversion Increase", value: "+142%" },
      { label: "Bounce Rate Reduction", value: "-38%" },
      { label: "Design Delivery Speed", value: "10 Days" },
    ],
    idealFor: [
      "B2B SaaS companies launching new product suites",
      "High-ticket service agencies scaling ad campaigns",
      "E-commerce brands looking for premium positioning",
    ],
    techStack: ["Figma", "Framer", "Storybook", "Plugins & Token Studio"],
    processSteps: [
      {
        step: "01",
        title: "UX Research & Persona Audits",
        description: "We analyze heatmaps, competitor funnels, and customer friction points.",
      },
      {
        step: "02",
        title: "Wireframing & Conversion Flow",
        description: "Mapping out high-converting page structures and CTA placement.",
      },
      {
        step: "03",
        title: "High-Fidelity Visual Design",
        description: "Applying brand aesthetics, dark/light themes, and custom typography.",
      },
      {
        step: "04",
        title: "Prototype & Interactive Validation",
        description: "Full clickable desktop and mobile prototypes tested with real users.",
      },
    ],
    faqs: [
      {
        q: "Do I get ownership of the Figma design files?",
        a: "Yes! 100% full ownership of all Figma components, design tokens, and assets is transferred upon project completion.",
      },
      {
        q: "Can we use our existing brand guidelines?",
        a: "Absolutely. We can work strictly within existing brand guidelines or elevate them into a scalable digital design system.",
      },
    ],
  },
  {
    id: "nextjs-development",
    slug: "nextjs-development",
    title: "Next.js & Fullstack Engineering",
    shortTagline: "Sub-second load times, headless agility, and rock-solid scalability.",
    description:
      "Production-grade Next.js App Router engineering with React 19, TypeScript, dynamic SSR, and edge architecture for lightning speed.",
    fullDescription:
      "Ditch bloat, security vulnerabilities, and 5-second page loads. We engineer clean, modular Next.js applications backed by modern database layers and headless CMS solutions that load instantly worldwide.",
    iconName: "Code",
    typicalTimeline: "2 – 3 Weeks",
    deliverables: [
      "Next.js App Router + TypeScript Architecture",
      "Tailwind CSS & Animated Components",
      "PostgreSQL / Database Integration",
      "Headless CMS Setup (Sanity/Strapi/MDX)",
      "Vercel Edge Deployment & CI/CD Pipeline",
      "Form Validation & Webhook Automation",
    ],
    keyMetrics: [
      { label: "Lighthouse Performance", value: "98/100" },
      { label: "Average First Contentful Paint", value: "0.3s" },
      { label: "Uptime Reliability", value: "99.99%" },
    ],
    idealFor: [
      "Growth-stage startups wanting enterprise speed",
      "Companies frustrated with slow WordPress or Webflow limitations",
      "Web apps requiring dynamic user portals & forms",
    ],
    techStack: ["Next.js 14/15", "TypeScript", "Tailwind CSS", "Drizzle ORM", "PostgreSQL", "Vercel"],
    processSteps: [
      {
        step: "01",
        title: "Architecture & Schema Setup",
        description: "Configuring Next.js App Router, database models, and route strategy.",
      },
      {
        step: "02",
        title: "Component & Layout Assembly",
        description: "Building responsive, accessible components with zero CSS bloat.",
      },
      {
        step: "03",
        title: "API & Content Integration",
        description: "Hooking up contact forms, database persistence, and CMS feeds.",
      },
      {
        step: "04",
        title: "Edge Optimization & Testing",
        description: "Benchmarking core web vitals, mobile viewports, and edge deployment.",
      },
    ],
    faqs: [
      {
        q: "Why choose Next.js over Webflow or WordPress?",
        a: "Next.js offers unmatched performance (0.3s load times), unlimited customization, enterprise-level security, superior SEO performance, and complete code control without monthly lock-ins.",
      },
      {
        q: "Will our non-technical team be able to edit content?",
        a: "Yes! We wire content up to structured data files or headless CMS panels so editing copy, blog posts, and team members is effortless.",
      },
    ],
  },
  {
    id: "seo-performance",
    slug: "seo-performance",
    title: "SEO & Core Web Vitals Engineering",
    shortTagline: "Dominate Google search results with technical perfection and speed.",
    description:
      "Technical SEO auditing, structured JSON-LD schemas, instant Core Web Vitals scores, and semantic content architecture that ranks.",
    fullDescription:
      "SEO isn't just about keywords anymore; Google favors sites that load in under a second and deliver flawless semantic structure. We optimize every technical metric from canonical URLs to server response times to drive organic search dominance.",
    iconName: "Search",
    typicalTimeline: "1 Week",
    deliverables: [
      "Full Technical SEO Audit & Remediation",
      "JSON-LD Schema Markup (Org, Service, FAQ)",
      "Dynamic XML Sitemap & Robots.txt",
      "Meta Tag & OpenGraph Image Generator",
      "Image Compression & Next/Image WebP Pipeline",
      "Core Web Vitals Pass Guarantee",
    ],
    keyMetrics: [
      { label: "Organic Search Growth", value: "+310%" },
      { label: "Core Web Vitals Pass", value: "100%" },
      { label: "PageSpeed Score", value: "95+" },
    ],
    idealFor: [
      "Brands losing traffic to fast-loading competitors",
      "SaaS startups launching targeted search landing pages",
      "Local service leaders aiming for top 3 Google local pack",
    ],
    techStack: ["Google Search Console", "Lighthouse", "Schema.org", "Ahrefs", "Next.js Metadata API"],
    processSteps: [
      {
        step: "01",
        title: "Technical SEO & Speed Audit",
        description: "Identifying render blocking assets, missing schemas, and slow queries.",
      },
      {
        step: "02",
        title: "Metadata & Schema Injection",
        description: "Implementing structured JSON-LD data and optimized Meta titles/descriptions.",
      },
      {
        step: "03",
        title: "Asset & Script Optimization",
        description: "Minifying JS/CSS bundles and deferring non-critical scripts.",
      },
      {
        step: "04",
        title: "Search Console Indexing",
        description: "Submitting sitemaps and monitoring instant indexing speed.",
      },
    ],
    faqs: [
      {
        q: "How fast will we see SEO improvements?",
        a: "Technical fixes often show ranking bumps within 14–30 days after Google re-crawls the optimized site.",
      },
      {
        q: "Do you guarantee 100/100 Core Web Vitals?",
        a: "We guarantee green scores across desktop and mobile under standard network connections.",
      },
    ],
  },
  {
    id: "brand-identity",
    slug: "brand-identity",
    title: "Brand Strategy & Visual Systems",
    shortTagline: "Distinctive brand positioning that commands premium market pricing.",
    description:
      "Identity systems including logo design, color palettes, typography specs, brand guidelines, and visual assets built for digital dominance.",
    fullDescription:
      "Before customers read your copy, they judge your aesthetic. We craft cohesive digital identity systems that reflect authority, elevate perceived value, and set you apart from copycat competitors.",
    iconName: "Sparkles",
    typicalTimeline: "1.5 Weeks",
    deliverables: [
      "Brand Core Strategy & Positioning",
      "Logo System (Primary, Secondary, Favicons)",
      "Color Palette & Contrast Scale",
      "Typography System & Hierarchy",
      "Brand Guidelines Deck (PDF & Web)",
      "Social Media & Marketing Asset Templates",
    ],
    keyMetrics: [
      { label: "Perceived Value Increase", value: "+3.5x" },
      { label: "Brand Equity Boost", value: "100%" },
      { label: "Asset Deliverables", value: "40+ Files" },
    ],
    idealFor: [
      "Startups pivoting into higher enterprise price tiers",
      "Companies with outdated 2015-era branding",
      "Mergers & acquisitions needing unified identity",
    ],
    techStack: ["Figma", "Illustrator", "Photoshop", "After Effects"],
    processSteps: [
      {
        step: "01",
        title: "Discovery & Market Positioning",
        description: "Defining unique brand attributes, target persona desires, and visual tone.",
      },
      {
        step: "02",
        title: "Visual Exploration & Concepts",
        description: "Developing 3 distinct direction routes for logos and color schemes.",
      },
      {
        step: "03",
        title: "System Expansion & Refinement",
        description: "Fleshing out selected route across components, typography, and badges.",
      },
      {
        step: "04",
        title: "Brand Guideline Handoff",
        description: "Delivering export-ready SVG vectors, font files, and brand book.",
      },
    ],
    faqs: [
      {
        q: "How many logo options do we receive?",
        a: "We present 3 unique strategic directions, then refine your chosen concept with unlimited revisions within project scope.",
      },
      {
        q: "Do you provide vector source files?",
        a: "Yes! SVG, EPS, AI, PNG, and WebP formats for all logo variations and branding marks.",
      },
    ],
  },
  {
    id: "cro-optimization",
    slug: "cro-optimization",
    title: "Conversion Rate Optimization (CRO)",
    shortTagline: "Squeeze 2x–3x more revenue out of your existing website traffic.",
    description:
      "A/B testing, user session recording analysis, friction point elimination, and headline copy engineering to maximize lead conversions.",
    fullDescription:
      "Getting traffic is expensive; wasting it is painful. Our CRO teardowns and systematic experimentation identify leaky funnels, clarify messaging, and overhaul call-to-actions to double lead volume without spending an extra dollar on ads.",
    iconName: "Target",
    typicalTimeline: "1 – 2 Weeks",
    deliverables: [
      "Friction Point & Heatmap Audit",
      "Hero Copy & Value Proposition Overhaul",
      "Interactive CTA & Lead Magnet Design",
      "Checkout / Form Multi-Step Simplification",
      "A/B Testing Hypothesis Roadmap",
      "Post-Launch Conversion Analytics Tracking",
    ],
    keyMetrics: [
      { label: "Avg. Lead Increase", value: "+210%" },
      { label: "Form Completion Rate", value: "+64%" },
      { label: "Cost Per Acquisition", value: "-45%" },
    ],
    idealFor: [
      "Companies running paid Google/Meta ads with low conversion",
      "SaaS landing pages with low trial signups",
      "High-value service providers missing qualified calls",
    ],
    techStack: ["Hotjar", "PostHog", "Google Analytics 4", "Vercel Analytics", "React Hook Form"],
    processSteps: [
      {
        step: "01",
        title: "Data Audit & Friction Discovery",
        description: "Analyzing analytics drop-offs, user session replays, and form abandonments.",
      },
      {
        step: "02",
        title: "Value Prop & Copy Overhaul",
        description: "Rewriting headlines and benefit bullet points for immediate clarity.",
      },
      {
        step: "03",
        title: "UX Friction Removal",
        description: "Simplifying contact forms, adding trust indicators, and optimizing CTAs.",
      },
      {
        step: "04",
        title: "Measurement & Iteration",
        description: "Tracking lead lift and iterating based on conversion telemetry.",
      },
    ],
    faqs: [
      {
        q: "Can CRO be applied to our existing site without a full redesign?",
        a: "Yes! We can perform targeted CRO landing page revamps and form upgrades on your existing site.",
      },
      {
        q: "How do you measure conversion uplift?",
        a: "We set up clear goal tracking in GA4/PostHog measuring form fills, discovery call bookings, and button clicks.",
      },
    ],
  },
  {
    id: "maintenance-growth",
    slug: "maintenance-growth",
    title: "Care Plans & Continuous Growth",
    shortTagline: "Peace of mind maintenance, monthly feature updates, and performance monitoring.",
    description:
      "Dedicated senior dev hours each month, proactive security patches, uptime monitoring, and ongoing conversion tweaks to keep you ahead.",
    fullDescription:
      "Your website is a living growth engine, not a static brochure. Our retainer care plans give you a dedicated engineering & design squad on tap for continuous landing page builds, speed checkups, content updates, and feature additions.",
    iconName: "ShieldCheck",
    typicalTimeline: "Ongoing Monthly",
    deliverables: [
      "Dedicated Engineering & Design Hours",
      "24/7 Uptime & Security Monitoring",
      "Core Web Vitals Speed Guarantee",
      "Monthly Analytics & Conversion Reports",
      "Priority Same-Day Technical Support",
      "A/B Feature Rollouts & Design Tweaks",
    ],
    keyMetrics: [
      { label: "Target Uptime", value: "99.99%" },
      { label: "Support SLA Response", value: "< 2 Hours" },
      { label: "Monthly Dev Hours", value: "10-30 Hours" },
    ],
    idealFor: [
      "Growing companies without in-house senior frontend engineers",
      "SaaS teams launching weekly features and new landing pages",
      "High-revenue sites requiring zero-downtime protection",
    ],
    techStack: ["Vercel Monitoring", "Sentry", "GitHub Actions", "Next.js", "Supabase/Postgres"],
    processSteps: [
      {
        step: "01",
        title: "Continuous Health Audits",
        description: "Weekly automated tests checking speed, links, and form validation.",
      },
      {
        step: "02",
        title: "Backlog Prioritization",
        description: "Collaborative Trello/Slack channel for submitting requested site edits.",
      },
      {
        step: "03",
        title: "Rapid Execution Sprints",
        description: "Shipping updates, new pages, and promotional banners in 24-48 hours.",
      },
      {
        step: "04",
        title: "Monthly ROI Briefing",
        description: "Reviewing traffic growth, conversion rates, and performance metrics.",
      },
    ],
    faqs: [
      {
        q: "Can unused monthly hours rollover?",
        a: "Up to 5 unused development hours rollover to the following month on our Growth Care plans.",
      },
      {
        q: "Is there a minimum contract length?",
        a: "No long-term lock-ins. Care plans are month-to-month with 30-day notice to pause or cancel.",
      },
    ],
  },
];

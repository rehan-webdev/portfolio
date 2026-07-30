export interface FAQItem {
  category: "General" | "Process & Timeline" | "Pricing & Guarantee" | "Tech & Code";
  question: string;
  answer: string;
}

export const faqsData: FAQItem[] = [
  {
    category: "General",
    question: "What makes DevLoop different from standard web agencies?",
    answer:
      "Unlike traditional agencies that drag projects out for 6 months with endless committee meetings, DevLoop operates in rapid 3-week fixed sprints. You get direct access to senior designers and engineers, guaranteed sub-second page performance, and pricing transparency.",
  },
  {
    category: "General",
    question: "Do you build custom websites or use pre-made templates?",
    answer:
      "Every single DevLoop site is designed bespoke from scratch in Figma and custom engineered with Next.js & Tailwind CSS. We never use cookie-cutter pre-made templates.",
  },
  {
    category: "Process & Timeline",
    question: "How involved do I need to be during the 3-week sprint?",
    answer:
      "We value your time. We ask for a 45-minute kickoff call and 2 brief 30-minute review milestones during Week 1 and Week 2. All daily communication happens asynchronously via dedicated Slack channels.",
  },
  {
    category: "Process & Timeline",
    question: "What happens if we need revisions after the initial design?",
    answer:
      "Our Growth Loop and Enterprise packages include structured refinement cycles. We refine components until you are 100% thrilled before writing a single line of code.",
  },
  {
    category: "Pricing & Guarantee",
    question: "How does the 3-week delivery guarantee work?",
    answer:
      "Once kickoff requirements and initial copy/brand assets are confirmed, your sprint start clock begins. If we delay delivery past 21 calendar days without client-caused stalls, we issue an immediate $1,000 invoice credit.",
  },
  {
    category: "Pricing & Guarantee",
    question: "Are there any hidden or recurring monthly fees?",
    answer:
      "Zero hidden fees. You own 100% of the Figma files and Next.js code repository. Vercel hosting for standard marketing traffic is free or $20/mo, and database hosting starts at $0-$5/mo.",
  },
  {
    category: "Tech & Code",
    question: "Why do you use Next.js instead of Webflow or WordPress?",
    answer:
      "Next.js delivers enterprise-grade performance (sub-0.4s load times), unlimited customization, zero vulnerability plugins, full code portability, and superior search engine indexing.",
  },
  {
    category: "Tech & Code",
    question: "Will our non-technical marketing team be able to update content?",
    answer:
      "Yes! We integrate editable data structures, Sanity CMS, or MDX content files so updating text, blog posts, testimonials, and team cards takes seconds without touching code.",
  },
];

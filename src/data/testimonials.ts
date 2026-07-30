export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  rating: number;
  content: string;
  metricsBadge?: string;
  category: "B2B SaaS" | "E-Commerce" | "Services" | "Fintech";
}

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Alex Morgan",
    role: "VP of Growth",
    company: "Vanguard SaaS",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    content:
      "DevLoop delivered our new site in 19 days. Conversion rates spiked from 1.2% to 4.1% almost overnight. Their team understands the balance between pixel-perfect design and ruthless conversion copywriting.",
    metricsBadge: "+240% Free Trial Signups",
    category: "B2B SaaS",
  },
  {
    id: "2",
    name: "Marcus Vance",
    role: "Founder & CEO",
    company: "Apex Luxury Goods",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    content:
      "Transitioning to DevLoop's Next.js headless setup brought our mobile load times down from 5 seconds to 0.3s. Mobile revenue grew by 184% in the first month post-launch.",
    metricsBadge: "+184% Mobile Checkout",
    category: "E-Commerce",
  },
  {
    id: "3",
    name: "Dr. Elena Rostova",
    role: "Chief Medical Officer",
    company: "Pulse Digital Health",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    content:
      "Our old site was confusing patients. DevLoop built a simple, empathetic 4-step intake funnel that increased booked calls by 310%. The best agency investment we have ever made.",
    metricsBadge: "+310% Booked Calls",
    category: "Services",
  },
  {
    id: "4",
    name: "David Chen",
    role: "Co-Founder & CTO",
    company: "FinFlow Pay",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    content:
      "Institutional clients demand zero-flaw credibility. DevLoop gave us a dark theme UI that blew away our board and helped us close enterprise deals with Fortune 500 partners.",
    metricsBadge: "+195% Enterprise Deals",
    category: "Fintech",
  },
  {
    id: "5",
    name: "Samantha Wright",
    role: "Director of Brand Strategy",
    company: "CyberLayer Inc",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    content:
      "Working with DevLoop was effortless. Daily Slack updates, clear milestone demos, zero corporate jargon. They felt like an internal team operating at 10x speed.",
    metricsBadge: "10/10 Communication",
    category: "B2B SaaS",
  },
];

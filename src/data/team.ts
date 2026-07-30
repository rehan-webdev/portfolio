export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
  favoriteTech: string[];
  socials: { twitter?: string; linkedin?: string; github?: string };
}

export const teamMembers: TeamMember[] = [
  {
    name: "Alex Rivera",
    role: "Co-Founder & Design Director",
    bio: "Ex-Stripe UI designer with 10+ years crafting conversion-focused brand identities and web interfaces.",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    favoriteTech: ["Figma", "Framer", "Tailwind CSS", "Design Tokens"],
    socials: { twitter: "https://twitter.com", linkedin: "https://linkedin.com", github: "https://github.com" },
  },
  {
    name: "Marcus Vance",
    role: "Co-Founder & Lead Systems Architect",
    bio: "Fullstack Next.js engineer obsessed with sub-second page performance, database optimization, and edge infrastructure.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    favoriteTech: ["Next.js", "TypeScript", "Drizzle ORM", "PostgreSQL", "Vercel"],
    socials: { twitter: "https://twitter.com", linkedin: "https://linkedin.com", github: "https://github.com" },
  },
  {
    name: "Sarah Jenkins",
    role: "Head of CRO & UX Research",
    bio: "Behavioral analytics researcher who has audited over 200 high-growth SaaS landing pages.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    favoriteTech: ["Hotjar", "PostHog", "Figma", "Google Analytics 4"],
    socials: { twitter: "https://twitter.com", linkedin: "https://linkedin.com" },
  },
  {
    name: "Dr. Elena Rostova",
    role: "Technical Content Strategist",
    bio: "Senior conversion copywriter turning complex B2B software features into clear high-intent value propositions.",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    favoriteTech: ["MDX", "Notion", "Ahrefs", "Schema.org"],
    socials: { linkedin: "https://linkedin.com" },
  },
];

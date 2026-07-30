import { pgTable, serial, text, timestamp, integer, varchar } from "drizzle-orm/pg-core";

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  company: varchar("company", { length: 255 }),
  websiteUrl: varchar("website_url", { length: 255 }),
  projectType: varchar("project_type", { length: 100 }).notNull(),
  budgetRange: varchar("budget_range", { length: 100 }).notNull(),
  timeline: varchar("timeline", { length: 100 }),
  message: text("message").notNull(),
  status: varchar("status", { length: 50 }).default("new").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const newsletterSubscribers = pgTable("newsletter_subscribers", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  source: varchar("source", { length: 100 }).default("footer"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  clientName: varchar("client_name", { length: 255 }).notNull(),
  role: varchar("role", { length: 255 }),
  company: varchar("company", { length: 255 }).notNull(),
  rating: integer("rating").default(5).notNull(),
  content: text("content").notNull(),
  metrics: varchar("metrics", { length: 255 }),
  avatarUrl: text("avatar_url"),
  status: varchar("status", { length: 50 }).default("approved").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

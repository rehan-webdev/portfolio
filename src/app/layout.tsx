import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "DevLoop | High-Converting Next.js Web Agency",
    template: "%s | DevLoop Agency",
  },
  description:
    "We design and engineer bespoke Next.js websites for B2B SaaS, e-commerce, and high-growth brands. Guaranteed 3-week sprint delivery and sub-0.4s page speed.",
  metadataBase: new URL("https://devloop.agency"),
  keywords: [
    "Web Design Agency",
    "Next.js Development",
    "Conversion Rate Optimization",
    "UI/UX Design",
    "Headless E-Commerce",
    "B2B SaaS Marketing Website",
    "3-Week Delivery Guarantee",
  ],
  authors: [{ name: "DevLoop Agency Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devloop.agency",
    siteName: "DevLoop Agency",
    title: "DevLoop | High-Converting Web Design & Next.js Agency",
    description:
      "Websites that turn cold visitors into high-LTV customers. 3-week delivery guarantee, sub-0.4s load times, and fixed-scope transparent pricing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-[#0a0b10] text-slate-100 min-h-screen flex flex-col selection:bg-[#f57a1b] selection:text-white">
        <ThemeProvider>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

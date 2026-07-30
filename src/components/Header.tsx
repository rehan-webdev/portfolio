"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, PhoneCall, ArrowRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { DiscoveryCallModal } from "./DiscoveryCallModal";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "glass-panel bg-[#0a0b10]/85 border-b border-white/10 py-3 shadow-xl backdrop-blur-md"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-[#f57a1b] to-[#ff8c33] text-white font-extrabold shadow-lg shadow-[#f57a1b]/30 group-hover:scale-105 transition-transform">
                <span className="text-xl tracking-tighter">DL</span>
                <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#ffefd5] border-2 border-[#0a0b10] animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-tight font-display flex items-center gap-1">
                  DevLoop<span className="text-[#f57a1b]">.</span>
                </span>
                <span className="text-[10px] font-semibold text-[#ffefd5]/80 uppercase tracking-widest -mt-1 hidden sm:inline-block">
                  Agency
                </span>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-1 rounded-full px-4 py-1.5 glass-panel border border-white/10">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                      isActive ? "text-white font-semibold" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavTab"
                        className="absolute inset-0 rounded-full bg-[#f57a1b]/20 border border-[#f57a1b]/40"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* RIGHT ACTIONS */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl glass-panel border border-white/10 text-slate-300 hover:text-white hover:border-[#f57a1b]/40 transition-colors"
                title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {theme === "dark" ? <Sun className="w-4 h-4 text-[#ffefd5]" /> : <Moon className="w-4 h-4 text-[#f57a1b]" />}
              </button>

              {/* Call CTA */}
              <button
                onClick={() => setModalOpen(true)}
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#f57a1b] text-white font-bold text-sm hover:bg-[#e0680a] transition-all shadow-lg shadow-[#f57a1b]/25 glow-orange-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Book a Call</span>
              </button>
            </div>

            {/* MOBILE TOGGLE */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300"
              >
                {theme === "dark" ? <Sun className="w-4 h-4 text-[#ffefd5]" /> : <Moon className="w-4 h-4 text-[#f57a1b]" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE NAV DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[65px] z-30 bg-[#0a0b10]/95 backdrop-blur-xl border-b border-white/10 p-6 sm:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-semibold py-2 transition-colors ${
                    pathname === link.href ? "text-[#f57a1b]" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setModalOpen(true);
                  }}
                  className="w-full py-3 rounded-xl bg-[#f57a1b] text-white font-bold text-center glow-orange flex items-center justify-center gap-2"
                >
                  <span>Book a Discovery Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL */}
      <DiscoveryCallModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

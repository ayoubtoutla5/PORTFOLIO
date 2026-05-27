"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section detection via IntersectionObserver
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-gold/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-18 flex items-center justify-between py-4">
        {/* Logo — T&A monogram */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 group"
          aria-label="Toutla Ayoub"
        >
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer octagon border */}
            <polygon
              points="22,2 36,8 42,22 36,36 22,42 8,36 2,22 8,8"
              stroke="#C9A84C"
              strokeWidth="1.2"
              fill="none"
              opacity="0.5"
              style={{ transition: "opacity 0.3s" }}
              className="group-hover:opacity-100"
            />
            {/* Inner subtle fill */}
            <polygon
              points="22,5 34,10 39,22 34,34 22,39 10,34 5,22 10,10"
              fill="rgba(201,168,76,0.06)"
            />
            {/* T letter */}
            <line x1="9" y1="14" x2="20" y2="14" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="14.5" y1="14" x2="14.5" y2="30" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
            {/* & ligature — small gold ampersand */}
            <text
              x="21"
              y="25"
              fontSize="7"
              fontWeight="700"
              fill="#C9A84C"
              fontFamily="serif"
              textAnchor="middle"
              style={{ userSelect: "none" }}
            >
              &amp;
            </text>
            {/* A letter */}
            <line x1="25" y1="30" x2="30" y2="14" stroke="#C9A84C" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="30" y1="14" x2="35" y2="30" stroke="#C9A84C" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="27" y1="23" x2="33" y2="23" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="relative group text-sm font-body font-medium tracking-wide transition-colors"
              >
                <span className={isActive ? "text-gold" : "text-silver hover:text-white"}>
                  {link.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="nav-dot"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold rounded-full"
                  />
                )}
              </button>
            );
          })}
          <a
            href="/cv/CV_Ayoub_Toutla.pdf"
            download
            className="ml-2 text-sm px-4 py-2 border border-gold text-gold hover:bg-gold hover:text-dark transition-all duration-300 rounded font-body font-semibold tracking-wide"
          >
            CV ↓
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white hover:text-gold transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-navy/95 backdrop-blur-xl border-b border-gold/20"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <button
                    key={link.href}
                    onClick={() => handleClick(link.href)}
                    className={`text-left text-base font-body font-medium py-2 border-b border-gold/10 transition-colors ${
                      isActive ? "text-gold" : "text-silver"
                    }`}
                  >
                    {isActive && <span className="inline-block w-2 h-2 bg-gold rounded-full mr-2 mb-0.5" />}
                    {link.label}
                  </button>
                );
              })}
              <a
                href="/cv/CV_Ayoub_Toutla.pdf"
                download
                className="text-center py-3 border border-gold text-gold rounded font-body font-semibold"
              >
                Télécharger CV ↓
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

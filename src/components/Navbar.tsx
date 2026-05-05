"use client";

import { useState, useEffect } from "react";
import { Menu, X, LogIn } from "lucide-react";

const PREDROI_URL = "https://predroi.cityprophet.com";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Platform", href: "#platform" },
  { label: "Products", href: "#products" },
  { label: "Municipalities", href: "#municipalities" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-surface-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <span
            className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
              scrolled ? "text-text-primary" : "text-white"
            }`}
          >
            City <span className="font-light">PRoPH+ET</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 hover:opacity-80 ${
                scrolled ? "text-text-secondary" : "text-white/80"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={PREDROI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-300 hover:opacity-80 ${
              scrolled ? "text-text-secondary" : "text-white/80"
            }`}
          >
            <LogIn className="h-3.5 w-3.5" />
            Login
          </a>
          <a
            href="#contact"
            className="rounded-full bg-text-primary px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-text-secondary"
          >
            Request Demo
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X className={`h-6 w-6 ${scrolled ? "text-text-primary" : "text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${scrolled ? "text-text-primary" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-surface-border bg-white px-6 py-6 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-text-secondary hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href={PREDROI_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-full border border-surface-border px-5 py-2.5 text-sm font-semibold text-text-primary"
          >
            <LogIn className="h-3.5 w-3.5" />
            Login to PREDROI
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-text-primary px-5 py-2.5 text-center text-sm font-semibold text-white"
          >
            Request Demo
          </a>
        </div>
      )}
    </nav>
  );
}

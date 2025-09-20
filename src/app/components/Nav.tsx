"use client";
import { useState, useEffect } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-colors",
        scrolled
          ? "bg-white/90 backdrop-blur border-b border-slate-200"
          : "bg-white"
      ].join(" ")}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 bg-slate-900 text-white px-3 py-2 rounded">
        Skip to content
      </a>

      <div className="max-w-7xl mx-auto h-16 px-4 md:px-6 flex items-center justify-between">
        {/* Brand */}
        <a href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="VERIQON ADVISORY" width={32} height={32} className="rounded-md" />
          <span className="font-bold tracking-tight text-purple-900">VERIQON ADVISORY</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700" aria-label="Primary">
          <a href="#services" className="hover:text-purple-800">Services</a>
          <a href="#programs" className="hover:text-purple-800">Programs</a>
          <a href="#impact" className="hover:text-purple-800">Impact</a>
          <a href="#about" className="hover:text-purple-800">About</a>
          <a href="#resources" className="hover:text-purple-800">Resources</a>
          <a href="#contact" className="hover:text-purple-800">Contact</a>
          <a
            href="#contact"
            className="ml-1 px-3 py-2 rounded-xl bg-purple-700 text-white font-medium hover:bg-purple-600"
          >
            Request a Proposal
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-lg border border-slate-200"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden border-t border-slate-200 bg-white ${open ? "block" : "hidden"}`}
      >
        <nav className="max-w-7xl mx-auto px-4 py-4 grid gap-2 text-slate-800" aria-label="Mobile">
          {[
            ["Services", "#services"],
            ["Programs", "#programs"],
            ["Impact", "#impact"],
            ["About", "#about"],
            ["Resources", "#resources"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)} className="py-2">
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 px-4 py-2 rounded-xl bg-purple-700 text-white text-center font-medium"
          >
            Request a Proposal
          </a>
        </nav>
      </div>
    </header>
  );
}

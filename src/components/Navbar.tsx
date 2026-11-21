"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  Menu,
  X,
  Instagram,
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [playDropdownOpen, setPlayDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);

  // Play Veddie: text-only menu
  const playItems = [
    { name: "Champions Cup", href: "/champions-cup" },
    { name: "Champions League", href: "/champions-league" },
    { name: "Tournaments", href: "/tournaments" },
    { name: "Leagues", href: "/leagues" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-brand-navy/95 backdrop-blur-md border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-12 w-32 sm:w-36 flex items-center">
              <Image
                src="/veddie-logo.png"
                alt="Veddie Hockey"
                fill
                className="object-contain object-left filter brightness-110"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          {/* Nov 21 Edit: Play Veddie -> The Experience -> Find Your Division -> Company -> Team Rankings */}
          <nav className="hidden lg:flex items-center gap-7">
            {/* 1. Play Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPlayDropdownOpen(true)}
              onMouseLeave={() => setPlayDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 text-sm font-semibold tracking-wide uppercase text-brand-cream hover:text-brand-accent transition-colors py-2"
                onClick={() => setPlayDropdownOpen(!playDropdownOpen)}
                aria-expanded={playDropdownOpen}
              >
                Play Veddie
                <ChevronDown className={`w-4 h-4 transition-transform ${playDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {playDropdownOpen && (
                <div className="absolute top-full left-0 w-56 bg-brand-surface border border-brand-border rounded-xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="space-y-1">
                    {playItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setPlayDropdownOpen(false)}
                        className="block px-4 py-2.5 rounded-lg hover:bg-brand-card text-sm font-semibold text-brand-cream hover:text-brand-accent transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 2. The Experience */}
            <Link
              href="/experience"
              className="text-sm font-semibold tracking-wide uppercase text-brand-cream hover:text-brand-accent transition-colors"
            >
              The Experience
            </Link>

            {/* 3. Find Your Division */}
            <Link
              href="/divisions"
              className="text-sm font-semibold tracking-wide uppercase text-brand-cream hover:text-brand-accent transition-colors"
            >
              Find Your Division
            </Link>

            {/* 4. Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCompanyDropdownOpen(true)}
              onMouseLeave={() => setCompanyDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 text-sm font-semibold tracking-wide uppercase text-brand-cream hover:text-brand-accent transition-colors py-2"
                onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
                aria-expanded={companyDropdownOpen}
              >
                Company
                <ChevronDown className={`w-4 h-4 transition-transform ${companyDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {companyDropdownOpen && (
                <div className="absolute top-full right-0 w-[420px] bg-brand-surface border border-brand-border rounded-2xl shadow-2xl p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="space-y-4">
                    <span className="text-xs font-bold text-brand-muted uppercase tracking-wider block">
                      Veddie Hockey
                    </span>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <Link
                          href="/company"
                          onClick={() => setCompanyDropdownOpen(false)}
                          className="font-bold text-brand-cream hover:text-brand-accent transition-colors block"
                        >
                          About Veddie &rarr;
                        </Link>
                        <p className="text-xs text-brand-muted mt-0.5">Who runs Veddie, where we launch and our event philosophy.</p>
                      </li>
                      <li>
                        <Link
                          href="/our-story"
                          onClick={() => setCompanyDropdownOpen(false)}
                          className="font-bold text-brand-cream hover:text-brand-accent transition-colors block"
                        >
                          Our Story &rarr;
                        </Link>
                        <p className="text-xs text-brand-muted mt-0.5">Nobody ever set the room up for us. So we did.</p>
                      </li>
                      <li>
                        <Link
                          href="/contact"
                          onClick={() => setCompanyDropdownOpen(false)}
                          className="font-bold text-brand-cream hover:text-brand-accent transition-colors block"
                        >
                          Contact Desk &rarr;
                        </Link>
                        <p className="text-xs text-brand-muted mt-0.5">Toronto HQ operations, inquiries and team placements.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* 5. Team Rankings - moved to end of menu after Company per Nov 21 spec */}
            <Link
              href="/rankings"
              className="text-sm font-semibold tracking-wide uppercase text-brand-cream hover:text-brand-accent transition-colors"
            >
              Team Rankings
            </Link>
          </nav>

          {/* Action Button, Instagram & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/veddiehockey"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Veddie Hockey Instagram"
              className="hidden md:flex items-center text-brand-cream/80 hover:text-brand-accent transition-colors p-2"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <Link
              href="/play"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-brand-red text-brand-navy text-sm font-black tracking-wider uppercase hover:bg-brand-red-hover transition-all shadow-lg hover:shadow-brand-red/20 active:scale-95"
            >
              Find Your Game
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-brand-cream hover:bg-brand-surface border border-brand-border"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-surface border-b border-brand-border px-4 pt-3 pb-6 space-y-4">
          <div className="space-y-1">
            <div className="text-xs font-bold text-brand-muted uppercase tracking-wider px-3 py-1">
              Play Veddie
            </div>
            {playItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm text-brand-cream hover:bg-brand-card rounded-md font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-brand-border space-y-1">
            <Link
              href="/experience"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-brand-cream hover:bg-brand-card rounded-md font-medium uppercase tracking-wide"
            >
              The Experience
            </Link>
            <Link
              href="/divisions"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-brand-cream hover:bg-brand-card rounded-md font-medium uppercase tracking-wide"
            >
              Find Your Division
            </Link>
            <Link
              href="/company"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-brand-cream hover:bg-brand-card rounded-md font-medium uppercase tracking-wide"
            >
              Company
            </Link>
            <Link
              href="/rankings"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-brand-cream hover:bg-brand-card rounded-md font-medium uppercase tracking-wide"
            >
              Team Rankings
            </Link>
            <Link
              href="/expand"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-brand-cream hover:bg-brand-card rounded-md font-medium uppercase tracking-wide"
            >
              Expand Veddie
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-brand-cream hover:bg-brand-card rounded-md font-medium uppercase tracking-wide"
            >
              Contact
            </Link>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <Link
              href="/play"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 inline-flex items-center justify-center px-4 py-3 rounded-xl bg-brand-red text-brand-navy text-sm font-black tracking-wider uppercase text-center shadow-lg mr-3"
            >
              Find Your Game
            </Link>
            <a
              href="https://instagram.com/veddiehockey"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-brand-card border border-brand-border text-brand-cream"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

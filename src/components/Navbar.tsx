"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  MapPin,
  Mail,
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [playDropdownOpen, setPlayDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);

  // Client Edit 1, 3 & 7: Only names, no descriptions, no badges, no icons, no Pickup
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
                alt="Veddie Hockey Logo"
                fill
                className="object-contain object-left filter brightness-110"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {/* Play Dropdown */}
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

              {/* Client Edit 1 & 7: Clean dropdown showing only offering names as text links */}
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

            {/* Client Edit 6: Removed icons beside Team Rankings and The Experience */}
            <Link
              href="/rankings"
              className="text-sm font-semibold tracking-wide uppercase text-brand-cream hover:text-brand-accent transition-colors"
            >
              Team Rankings
            </Link>

            <Link
              href="/experience"
              className="text-sm font-semibold tracking-wide uppercase text-brand-cream hover:text-brand-accent transition-colors"
            >
              The Experience
            </Link>

            <Link
              href="/divisions"
              className="text-sm font-semibold tracking-wide uppercase text-brand-cream hover:text-brand-accent transition-colors"
            >
              Find Your Division
            </Link>

            {/* Company Mega-Menu (like Brodie Rec) */}
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
                <div className="absolute top-full right-0 w-[580px] bg-brand-surface border border-brand-border rounded-2xl shadow-2xl p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="grid grid-cols-2 gap-6">
                    {/* Left Links */}
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs font-bold text-brand-muted uppercase tracking-wider block mb-2">
                          Veddie
                        </span>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              href="/company"
                              onClick={() => setCompanyDropdownOpen(false)}
                              className="text-base font-bold text-brand-cream hover:text-brand-accent transition-colors block"
                            >
                              About &mdash;
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/our-story"
                              onClick={() => setCompanyDropdownOpen(false)}
                              className="text-base font-bold text-brand-cream hover:text-brand-accent transition-colors block"
                            >
                              Our Story &mdash;
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/company#careers"
                              onClick={() => setCompanyDropdownOpen(false)}
                              className="text-sm font-medium text-brand-muted hover:text-brand-cream transition-colors block"
                            >
                              Careers
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="pt-2 border-t border-brand-border">
                        <span className="text-xs font-bold text-brand-muted uppercase tracking-wider block mb-2">
                          Connect
                        </span>
                        <ul className="space-y-1.5 text-xs text-brand-muted">
                          <li>
                            <Link
                              href="/contact"
                              onClick={() => setCompanyDropdownOpen(false)}
                              className="text-sm font-bold text-brand-cream hover:text-brand-accent transition-colors block"
                            >
                              Contact &mdash;
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/company#investors"
                              onClick={() => setCompanyDropdownOpen(false)}
                              className="text-sm font-bold text-brand-cream hover:text-brand-accent transition-colors block"
                            >
                              Investors
                            </Link>
                          </li>
                          <li className="pt-1 text-brand-cream font-medium">info@veddiehockey.com</li>
                          <li className="text-[11px] text-brand-muted">
                            Toronto HQ • Greater Toronto Area, Ontario
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Right Card: We're Hiring (Brodie Style) */}
                    <Link
                      href="/company#careers"
                      onClick={() => setCompanyDropdownOpen(false)}
                      className="group relative rounded-xl overflow-hidden border border-brand-border bg-brand-card hover:border-brand-accent transition-all flex flex-col justify-end p-5"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent z-10" />
                      <div
                        className="absolute inset-0 bg-cover bg-center filter brightness-60 group-hover:scale-105 transition-transform duration-300"
                        style={{
                          backgroundImage:
                            "url('https://images.unsplash.com/photo-1515703407324-5f753eed2311?auto=format&fit=crop&w=600&q=80')",
                        }}
                      />
                      <div className="relative z-20">
                        <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-brand-red text-brand-navy w-fit mb-2 inline-block shadow-sm">
                          Careers
                        </span>
                        <h4 className="text-lg font-athletic text-brand-cream font-bold">
                          We’re Hiring.
                        </h4>
                        <p className="text-xs text-brand-muted mt-0.5 mb-2">
                          Build the adult hockey league of the future with us.
                        </p>
                        <span className="text-xs font-bold text-brand-cream group-hover:underline inline-flex items-center gap-1">
                          See open roles &rarr;
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
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
              href="/rankings"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-brand-cream hover:bg-brand-card rounded-md font-medium uppercase tracking-wide"
            >
              Team Rankings
            </Link>
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
              Company (About & Careers)
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

          <div className="pt-2">
            <Link
              href="/play"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl bg-brand-red text-brand-navy text-sm font-black tracking-wider uppercase text-center shadow-lg"
            >
              Find Your Game
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

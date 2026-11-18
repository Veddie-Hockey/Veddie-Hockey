"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, Trophy, Swords, Calendar, Users, Zap, Shield, Sparkles } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [playDropdownOpen, setPlayDropdownOpen] = useState(false);

  const playItems = [
    {
      name: "Champions Cup",
      href: "/champions-cup",
      tagline: "Flagship Invitation Championship",
      icon: Trophy,
      badge: "Accepting Interest",
    },
    {
      name: "Champions League",
      href: "/champions-league",
      tagline: "Cross-League Midweek Circuit",
      icon: Swords,
      badge: "Planned",
    },
    {
      name: "Tournaments",
      href: "/tournaments",
      tagline: "Standalone Weekend Invitationals",
      icon: Calendar,
      badge: "Accepting Interest",
    },
    {
      name: "Leagues",
      href: "/leagues",
      tagline: "Consistent Weekly Hockey Nights",
      icon: Users,
      badge: "Accepting Interest",
    },
    {
      name: "Pickup",
      href: "/pickup",
      tagline: "Upgraded Organized Ice Time",
      icon: Zap,
      badge: "Summer 2027",
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-brand-black/95 backdrop-blur-md border-b border-brand-border">
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
          <nav className="hidden lg:flex items-center gap-8">
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

              {playDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-brand-surface border border-brand-border rounded-xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-2 text-xs font-bold text-brand-muted uppercase tracking-wider border-b border-brand-border/50">
                    Five Ways to Play
                  </div>
                  <div className="mt-1 space-y-1">
                    {playItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setPlayDropdownOpen(false)}
                          className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-brand-card transition-all group"
                        >
                          <div className="p-2 bg-brand-card group-hover:bg-brand-accent/20 rounded-md transition-colors text-brand-cream group-hover:text-brand-accent">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-semibold text-brand-cream group-hover:text-brand-accent transition-colors">
                                {item.name}
                              </span>
                              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-brand-card text-brand-muted border border-brand-border">
                                {item.badge}
                              </span>
                            </div>
                            <p className="text-xs text-brand-muted mt-0.5">{item.tagline}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/rankings"
              className="text-sm font-semibold tracking-wide uppercase text-brand-cream hover:text-brand-accent transition-colors flex items-center gap-1.5"
            >
              <Shield className="w-4 h-4 text-brand-accent" />
              Team Rankings
            </Link>

            <Link
              href="/experience"
              className="text-sm font-semibold tracking-wide uppercase text-brand-cream hover:text-brand-accent transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-brand-accent" />
              The Experience
            </Link>

            <Link
              href="/divisions"
              className="text-sm font-semibold tracking-wide uppercase text-brand-cream hover:text-brand-accent transition-colors"
            >
              Find Your Division
            </Link>

            <Link
              href="/our-story"
              className="text-sm font-semibold tracking-wide uppercase text-brand-cream hover:text-brand-accent transition-colors"
            >
              Our Story
            </Link>
          </nav>

          {/* Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/play"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-brand-accent text-brand-black text-sm font-bold tracking-wider uppercase hover:bg-brand-accent-hover transition-all shadow-lg hover:shadow-brand-accent/20 active:scale-95"
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
                className="flex items-center justify-between px-3 py-2 text-sm text-brand-cream hover:bg-brand-card rounded-md font-medium"
              >
                <span>{item.name}</span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-brand-accent">
                  {item.badge}
                </span>
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
              href="/our-story"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-brand-cream hover:bg-brand-card rounded-md font-medium uppercase tracking-wide"
            >
              Our Story
            </Link>
            <Link
              href="/faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-brand-cream hover:bg-brand-card rounded-md font-medium uppercase tracking-wide"
            >
              FAQs
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
              className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg bg-brand-accent text-brand-black text-sm font-bold tracking-wider uppercase text-center"
            >
              Find Your Game
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

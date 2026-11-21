"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Instagram } from "lucide-react";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) return;
    setSubscribed(true);
    // Persist newsletter lead
    try {
      fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "newsletter",
          name: "Newsletter Subscriber",
          email: newsletterEmail,
        }),
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <footer className="bg-brand-navy border-t border-brand-border text-brand-muted text-sm pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP NEWSLETTER ROW */}
        <div className="pb-16 mb-12 border-b border-brand-border/60 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-md">
            <h3 className="text-2xl sm:text-3xl font-athletic text-brand-cream tracking-tight mb-2">
              Get Veddie News In Your Inbox
            </h3>
            {/* Nov 21 Edit: replaced newsletter description */}
            <p className="text-xs text-brand-muted">
              Dates, divisions and the Road to the Cup, straight to your inbox.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-brand-surface border border-brand-green/40 text-brand-green text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>You’re on the Veddie insider list!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                  className="w-full sm:w-80 px-4 py-3 rounded-full bg-brand-surface border border-brand-border text-brand-cream text-xs focus:outline-none focus:border-brand-accent transition-colors placeholder:text-brand-muted/60"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-brand-red text-brand-navy text-xs font-black uppercase tracking-wider hover:bg-brand-red-hover transition-all shadow-lg active:scale-95 shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
            <p className="text-[11px] text-brand-muted/70 mt-2">
              By subscribing, you agree to receive emails from Veddie Hockey. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Nov 21 Edit: Wordmark with "Your game. The pro treatment." and Instagram */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12 pb-8 border-b border-brand-border/50">
          <div className="flex items-center gap-4">
            <div className="relative h-10 w-28">
              <Image src="/veddie-logo.png" alt="Veddie Hockey" fill className="object-contain object-left" />
            </div>
            <span className="text-sm font-athletic text-brand-cream/90 tracking-wide border-l border-brand-border pl-4">
              Your game. The pro treatment.
            </span>
          </div>

          <a
            href="https://instagram.com/veddiehockey"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-brand-muted hover:text-brand-cream transition-colors"
          >
            <Instagram className="w-4 h-4 text-brand-accent" />
            <span>@veddiehockey</span>
          </a>
        </div>

        {/* 5-COLUMN MAIN FOOTER LAYOUT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">
          {/* Column 1: Contact (Single verified contact block) */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-cream font-athletic">
              Contact
            </h4>
            <div className="space-y-2 text-xs">
              <p className="text-brand-cream font-bold text-sm">
                Greater Toronto Area HQ
              </p>
              <p className="text-brand-muted leading-relaxed">
                5-1050 King Street W.<br />
                Toronto, Ontario M6K 0C7
              </p>
              <p className="pt-2">
                <a
                  href="mailto:info@veddiehockey.com"
                  className="text-brand-cream hover:text-brand-accent font-medium transition-colors"
                >
                  info@veddiehockey.com
                </a>
              </p>
            </div>
          </div>

          {/* Column 2: Company (Careers & Investors hidden per Nov 21 spec) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-cream mb-4 font-athletic">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/company" className="hover:text-brand-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="hover:text-brand-accent transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-accent transition-colors">
                  Contact Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Play Veddie */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-cream mb-4 font-athletic">
              Play Veddie
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/champions-cup" className="hover:text-brand-accent transition-colors">
                  Champions Cup
                </Link>
              </li>
              <li>
                <Link href="/champions-league" className="hover:text-brand-accent transition-colors">
                  Champions League
                </Link>
              </li>
              <li>
                <Link href="/tournaments" className="hover:text-brand-accent transition-colors">
                  Tournaments
                </Link>
              </li>
              <li>
                <Link href="/leagues" className="hover:text-brand-accent transition-colors">
                  Leagues
                </Link>
              </li>
              <li>
                <Link href="/play" className="text-brand-accent hover:underline inline-flex items-center gap-1 font-semibold pt-1">
                  Find Your Game &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Explore */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-cream mb-4 font-athletic">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/rankings" className="hover:text-brand-accent transition-colors">
                  Team Rankings
                </Link>
              </li>
              <li>
                <Link href="/road-to-the-cup" className="hover:text-brand-accent transition-colors">
                  Road to the Cup
                </Link>
              </li>
              <li>
                <Link href="/nominate" className="hover:text-brand-accent transition-colors">
                  Nominate a Team
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-brand-accent transition-colors">
                  The Experience
                </Link>
              </li>
              <li>
                <Link href="/divisions" className="hover:text-brand-accent transition-colors">
                  Find Your Division
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-brand-accent transition-colors">
                  General FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Expand (Request a city hidden per Nov 21 spec) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-cream mb-4 font-athletic">
              Expand
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/expand#start-league" className="hover:text-brand-accent transition-colors">
                  Start A League
                </Link>
              </li>
              <li>
                <Link href="/expand#venue" className="hover:text-brand-accent transition-colors">
                  Bring Veddie To Your Venue
                </Link>
              </li>
              <li>
                <Link href="/expand#ambassador" className="hover:text-brand-accent transition-colors">
                  Become An Ambassador
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-brand-accent transition-colors pt-1 block text-brand-muted/80">
                  Partnerships
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM LEGAL BAR */}
        {/* Nov 21 Edit: Removed "Organizer Desk", updated copyright to "© 2026 Veddie Hockey", removed ™ */}
        <div className="pt-8 border-t border-brand-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-muted">
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy" className="hover:text-brand-cream transition-colors">
              Privacy Policy
            </Link>
            <Link href="/refund-policy" className="hover:text-brand-cream transition-colors">
              Refund Policy
            </Link>
            <Link href="/terms" className="hover:text-brand-cream transition-colors">
              Participation Terms
            </Link>
            <Link href="/player-code" className="hover:text-brand-cream transition-colors">
              Player Code of Conduct
            </Link>
          </div>

          <p className="text-brand-muted/70 text-center md:text-right">
            © 2026 Veddie Hockey. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

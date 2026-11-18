import Link from "next/link";
import Image from "next/image";
import { Shield, Sparkles, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-brand-border text-brand-muted text-sm pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block relative h-12 w-36">
              <Image
                src="/veddie-logo.png"
                alt="Veddie Hockey"
                fill
                className="object-contain object-left filter brightness-110"
              />
            </Link>
            <div className="space-y-2">
              <p className="text-brand-cream font-bold text-lg tracking-tight font-athletic">
                STILL GOT IT.
              </p>
              <p className="text-brand-muted max-w-sm text-sm leading-relaxed">
                The pro hockey experience for the rest of your career. Prepared rooms, reviewed divisions, certified officiating, and moments worth keeping.
              </p>
            </div>
            <div className="pt-2 flex items-center gap-3 text-xs text-brand-muted">
              <span className="flex items-center gap-1.5 text-brand-cream">
                <MapPin className="w-3.5 h-3.5 text-brand-accent" />
                Greater Toronto Area & Southern Ontario
              </span>
            </div>
          </div>

          {/* Play Veddie */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-cream mb-4 font-athletic">
              Play Veddie
            </h4>
            <ul className="space-y-2.5">
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
                <Link href="/pickup" className="hover:text-brand-accent transition-colors">
                  Pickup
                </Link>
              </li>
              <li>
                <Link href="/play" className="text-brand-accent hover:underline inline-flex items-center gap-1 font-medium pt-1">
                  Find Your Game &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-cream mb-4 font-athletic">
              Explore
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/rankings" className="hover:text-brand-accent transition-colors flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-brand-accent" />
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
                <Link href="/experience" className="hover:text-brand-accent transition-colors flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
                  The Experience
                </Link>
              </li>
              <li>
                <Link href="/divisions" className="hover:text-brand-accent transition-colors">
                  Find Your Division
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="hover:text-brand-accent transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-brand-accent transition-colors">
                  General FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-cream mb-4 font-athletic">
              Connect & Legal
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/partners" className="hover:text-brand-accent transition-colors">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-accent transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-brand-accent hover:underline transition-colors text-xs font-medium">
                  Organizer Desk &rarr;
                </Link>
              </li>
              <li className="pt-2 border-t border-brand-border/60">
                <Link href="/privacy" className="hover:text-brand-accent transition-colors text-xs">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-brand-accent transition-colors text-xs">
                  Participation Terms
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-brand-accent transition-colors text-xs">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/player-code" className="hover:text-brand-accent transition-colors text-xs">
                  Player Code of Conduct
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Veddie Hockey. All rights reserved.</p>
          <p className="text-brand-muted/70 text-center sm:text-right">
            Still got it. A hockey vet isn’t an age. It’s someone who keeps coming back.
          </p>
        </div>
      </div>
    </footer>
  );
}

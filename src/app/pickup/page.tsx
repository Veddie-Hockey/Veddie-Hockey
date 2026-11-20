import type { Metadata } from "next";
import Link from "next/link";
import { Zap, ShieldCheck, Users, Clock, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export const metadata: Metadata = {
  title: "Organized Hockey Pickup | Veddie Hockey",
  description:
    "Your next skate, upgraded. Join the Veddie Pickup list for organized sessions matched to your area, playing level and availability.",
};

export default function PickupPage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-brand-navy via-brand-surface to-brand-navy border-b border-brand-border px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-accent/40 text-brand-accent text-xs font-bold tracking-widest uppercase mb-6">
            <Zap className="w-4 h-4" />
            ORGANIZED HOCKEY PICKUP • LAUNCHING SUMMER 2027
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-athletic text-brand-cream tracking-tight mb-6 font-black">
            Your next skate, upgraded.
          </h1>

          <p className="text-base sm:text-xl text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Organized skates, balanced teams and the Veddie touches that make getting to the rink worth it. No lopsided rosters, no ghosting goalies, no messy group-chat headaches. Book by session, lace up, and play hockey the way it was supposed to be played.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="#pickup-form"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-accent text-brand-navy font-bold font-bold uppercase tracking-wider text-sm hover:bg-brand-accent-hover transition-all shadow-xl hover:shadow-brand-accent/20"
            >
              Join the Pickup List
            </a>
            <a
              href="#pickup-details"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-card border border-brand-border text-brand-cream font-bold uppercase tracking-wider text-sm hover:bg-brand-card-hover transition-all"
            >
              How Pickup Works
            </a>
          </div>

          <p className="text-xs text-brand-muted">
            Launching in summer 2027 across the Greater Toronto Area and Kitchener-Waterloo.
          </p>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section id="pickup-details" className="py-24 bg-brand-navy border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
              The Upgrade
            </span>
            <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4">
              Fixing what’s broken about adult drop-in.
            </h2>
            <p className="text-base text-brand-muted">
              Regular pickup can be a gamble: one team brings 5 ex-juniors while the other team has one sub, or a goalie doesn't show up. Veddie fixes every variable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border">
              <ShieldCheck className="w-8 h-8 text-brand-accent mb-4" />
              <h3 className="text-xl font-athletic text-brand-cream mb-2">
                Level-Matched Rosters
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Sessions are capped and designated by skill tier (e.g. D2/D3 or D4). Our on-site host balances lines to ensure fast, fair, high-tempo hockey.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border">
              <Users className="w-8 h-8 text-brand-accent mb-4" />
              <h3 className="text-xl font-athletic text-brand-cream mb-2">
                Goalies Play Free
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Vetted goalies skate with zero fee through our dedicated netminder sub network. A guaranteed two goalies at every single session—period.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border">
              <Clock className="w-8 h-8 text-brand-accent mb-4" />
              <h3 className="text-xl font-athletic text-brand-cream mb-2">
                Host & Room Amenities
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                A dedicated Veddie host on-site, dressing room ready on arrival, stick/sock tape station, cold water, and music in the room.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SAMPLE SESSION CARD (Section 15 Specification) */}
      <section className="py-20 bg-brand-surface border-b border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
              Preview Format
            </span>
            <h3 className="text-2xl sm:text-3xl font-athletic text-brand-cream">
              How Live Sessions Appear
            </h3>
            <p className="text-sm text-brand-muted mt-1">
              Clear prices, remaining spots, and transparent goalie status for every ice booking.
            </p>
          </div>

          {/* Live Card Mockup */}
          <div className="bg-brand-card border border-brand-border rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-border pb-6 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">
                  Oakville • Open 18+ • D2/D3 Competitive
                </span>
                <h4 className="text-2xl font-athletic text-brand-cream mt-1">
                  Sixteen Mile Sports Complex — Rink 1
                </h4>
                <p className="text-xs text-brand-muted mt-1">
                  Thursday, July 15, 2027 • 9:15 PM – 10:45 PM (90 mins)
                </p>
              </div>
              <div className="sm:text-right">
                <span className="text-3xl font-athletic text-brand-cream font-bold block">
                  $28.00 <span className="text-xs font-sans text-brand-muted">CAD</span>
                </span>
                <span className="text-xs text-brand-muted">Taxes included</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-xs text-brand-muted">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-accent" />
                <span><strong className="text-brand-cream">6 of 20</strong> skater places available</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-green" />
                <span><strong className="text-brand-cream">2 of 2</strong> goalies confirmed</span>
              </div>
            </div>

            <div className="bg-brand-surface p-4 rounded-xl border border-brand-border text-xs text-brand-muted space-y-2 mb-6">
              <p><strong className="text-brand-cream">Inclusions:</strong> 90 minutes iced time, host check-in, room tape & towel service, hydration station, dark/white jerseys provided.</p>
              <p><strong className="text-brand-cream">Cancellation Rule:</strong> Full refund or credit up to 24 hours before ice time.</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <span className="text-xs text-brand-muted">Sample upcoming session card preview</span>
              <a
                href="#pickup-form"
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-brand-accent text-brand-navy font-bold text-xs font-bold uppercase tracking-wider hover:bg-brand-accent-hover transition-all text-center"
              >
                Join Summer 2027 Priority List
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE FORM */}
      <section className="py-24 bg-brand-navy px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
            Summer 2027 Early Access
          </span>
          <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4">
            Find your next skate.
          </h2>
          <p className="text-base text-brand-muted max-w-xl mx-auto">
            Share your area, skill level, and regular availability. We’ll notify you as pilot pickup ice times are scheduled.
          </p>
        </div>

        <LeadCaptureForm type="pickup" id="pickup-form" />
      </section>
    </div>
  );
}

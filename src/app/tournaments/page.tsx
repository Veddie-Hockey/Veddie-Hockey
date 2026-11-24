import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Trophy, ArrowRight, CheckCircle2, Shield, Clock, MapPin } from "lucide-react";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import ShareToCaptainButton from "@/components/ShareToCaptainButton";

export const metadata: Metadata = {
  title: "The Veddie Invitational",
  description:
    "Bring your team for a weekend of competitive hockey. Face teams at your level and play for a tournament title.",
};

export default function TournamentsPage() {
  const brackets = [
    { name: "Open (18+)", desc: "Competitive and recreational adult squads" },
    { name: "40+ Masters", desc: "Four decades of hockey instincts" },
    { name: "50+ Legends", desc: "Fast puck movement and great locker rooms" },
    { name: "60+ Classics", desc: "Lifelong players who still love the game" },
  ];

  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-brand-navy via-brand-surface to-brand-navy border-b border-brand-border px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-athletic text-brand-cream tracking-tight mb-4 font-black uppercase">
            Veddie Hockey Tournaments
          </h1>

          <p className="text-base sm:text-xl text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
            Bring your team for a weekend of competitive hockey. Face teams at your level and play for a tournament title.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="#upcoming-tournaments"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-red text-brand-navy font-black uppercase tracking-wider text-sm hover:bg-brand-red-hover transition-all shadow-xl hover:shadow-brand-red/30 active:scale-95"
            >
              View Upcoming Tournaments
            </a>
            <Link
              href="/divisions"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-card border border-brand-border text-brand-cream font-bold uppercase tracking-wider text-sm hover:bg-brand-card-hover transition-all"
            >
              Explore Divisions
            </Link>
          </div>

          <div>
            <ShareToCaptainButton variant="minimal" />
          </div>
        </div>
      </section>

      {/* UPCOMING TOURNAMENTS */}
      <section id="upcoming-tournaments" className="py-20 bg-brand-surface border-b border-brand-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
              Tournament Calendar
            </span>
            <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
              Upcoming Tournaments
            </h2>
            <p className="text-base text-brand-muted font-sans">
              Confirmed dates, guaranteed games, and divisions for adult squads.
            </p>
          </div>

          {/* Featured Tournament Card: The Veddie Invitational */}
          <div className="bg-[#0b203a] border-2 border-[#1c3f6e] rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-border/60 pb-6">
              <div>
                <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded bg-brand-accent text-brand-navy inline-block mb-3">
                  Early April 2027
                </span>
                <h3 className="text-3xl sm:text-4xl font-athletic text-brand-cream font-black">
                  Veddie Invitational · Early April 2027
                </h3>
                <p className="text-sm font-bold text-brand-cream/90 mt-1">
                  Three guaranteed games. Open, 40+, 50+ and 60+ divisions.
                </p>
              </div>

              <div className="shrink-0">
                <a
                  href="#tournament-form"
                  className="px-7 py-3.5 rounded-xl bg-brand-red text-brand-navy font-black text-xs uppercase tracking-wider hover:bg-brand-red-hover transition-all shadow-lg inline-flex items-center gap-2"
                >
                  Request an Invitational Spot
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Event Specs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-brand-muted">
              <div className="p-4 rounded-xl bg-brand-navy/60 border border-brand-border">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-accent block mb-1">
                  Venue & Location
                </span>
                <p className="text-brand-cream font-semibold text-sm">Richmond Hill / GTA</p>
                <p className="mt-0.5">Twin-pad premier facility</p>
              </div>
              <div className="p-4 rounded-xl bg-brand-navy/60 border border-brand-border">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-accent block mb-1">
                  Guaranteed Games
                </span>
                <p className="text-brand-cream font-semibold text-sm">3 Games Guaranteed</p>
                <p className="mt-0.5">Round robin + playoffs</p>
              </div>
              <div className="p-4 rounded-xl bg-brand-navy/60 border border-brand-border">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-accent block mb-1">
                  Offered Divisions
                </span>
                <p className="text-brand-cream font-semibold text-sm">Open, 40+, 50+, 60+</p>
                <p className="mt-0.5">D1 through D4 flights</p>
              </div>
              <div className="p-4 rounded-xl bg-brand-navy/60 border border-brand-border">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-accent block mb-1">
                  Entry Deadlines
                </span>
                <p className="text-brand-cream font-semibold text-sm">Rolling by Division</p>
                <p className="mt-0.5">Rosters due 14 days prior</p>
              </div>
            </div>

            {/* WHAT'S INCLUDED: The Room, The Game, The Coverage */}
            <div className="pt-6 border-t border-brand-border/60">
              <h4 className="text-lg font-athletic text-brand-cream font-bold mb-6">
                What’s Included: The Full Pro Treatment
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* The Room */}
                <div className="p-6 rounded-2xl bg-brand-navy/60 border border-brand-border">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2 font-athletic">
                    The Room
                  </span>
                  <ul className="space-y-2 text-xs text-slate-300 font-sans">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                      <span>Custom player stall nameplates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                      <span>Room ready before team arrival</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                      <span>Tape & essentials station ready</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                      <span>Fresh towel for every player</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                      <span>Pregame music playlist ready</span>
                    </li>
                  </ul>
                </div>

                {/* The Game */}
                <div className="p-6 rounded-2xl bg-brand-navy/60 border border-brand-border">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2 font-athletic">
                    The Game
                  </span>
                  <ul className="space-y-2 text-xs text-slate-300 font-sans">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                      <span>Two certified refs & scorekeeper</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                      <span>Strict skill & age division review</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                      <span>Warm-up pucks provided on ice</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                      <span>Live online stats and standings</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                      <span>Three Stars post-game recognition</span>
                    </li>
                  </ul>
                </div>

                {/* The Coverage */}
                <div className="p-6 rounded-2xl bg-brand-navy/60 border border-brand-border">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2 font-athletic">
                    The Coverage
                  </span>
                  <ul className="space-y-2 text-xs text-slate-300 font-sans">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                      <span>High-resolution team photo</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                      <span>Digital final-score graphic (72h)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                      <span>Highlights for the group chat</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                      <span>Division championship trophies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE VEDDIE EXPERIENCE CALLOUT */}
      <section className="py-16 bg-brand-navy border-b border-brand-border px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
            The Veddie Experience
          </span>
          <h2 className="text-2xl sm:text-4xl font-athletic text-brand-cream font-black mb-3">
            See what game day looks like, from the dressing room to the final whistle.
          </h2>
          <div className="pt-4">
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-card border border-brand-border hover:border-brand-accent text-brand-cream text-xs font-bold uppercase tracking-wider transition-all"
            >
              <span>Explore the Veddie Experience</span>
              <ArrowRight className="w-4 h-4 text-brand-accent" />
            </Link>
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE FORM */}
      <section id="tournament-form" className="py-24 bg-brand-surface px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
            Priority Entry
          </span>
          <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-2 font-black">
            Get Invitational Details
          </h2>
          <p className="text-sm text-brand-muted font-sans">
            Tell us about your team. We check team placement and reply within 2 business days. No payment today.
          </p>
        </div>

        <LeadCaptureForm
          type="tournaments"
          hideHeading={true}
          buttonText="Get Invitational Details"
          microcopy="We check team placement and reply within 2 business days. No payment today."
        />
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ShieldCheck, Trophy, Sparkles, ArrowRight, CheckCircle2, Users } from "lucide-react";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import ShareToCaptainButton from "@/components/ShareToCaptainButton";

export const metadata: Metadata = {
  title: "The Veddie Invitational, April 2027 | Veddie Hockey",
  description:
    "First Veddie Invitational · Early April 2027 in the GTA. Your game. The pro treatment. Open, 40+, 50+ and 60+. Real refs, three games minimum and your name above the stall.",
};

export default function TournamentsPage() {
  const brackets = [
    { name: "Open (18+)", status: "Planned", desc: "Competitive and recreational adult squads" },
    { name: "40+ Masters", status: "Planned", desc: "Four decades of hockey instincts" },
    { name: "50+ Legends", status: "Planned", desc: "Fast puck movement and great locker rooms" },
    { name: "60+ Classics", status: "Planned", desc: "Lifelong players who still love the game" },
  ];

  const atEveryEventAmenities = [
    "Player stall nameplates",
    "Room ready on arrival",
    "Tape & essentials station",
    "A fresh towel for every player",
    "Water & sports drinks in the room",
    "Pregame music ready",
    "Certified refs & timekeeper",
    "Warm-up pucks ready",
    "Live stats & standings",
    "Three Stars honours",
    "Team photo & final-score graphic within 72 hours",
    "Highlight clips",
  ];

  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative min-h-[65vh] flex items-center justify-center bg-gradient-to-b from-brand-navy via-brand-surface to-brand-navy border-b border-brand-border px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-accent/40 text-brand-accent text-xs font-bold tracking-widest uppercase mb-6">
            <Calendar className="w-4 h-4" />
            2027 Founding Season · Early April 2027
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-athletic text-brand-cream tracking-tight mb-6 font-black uppercase">
            Your game. The pro treatment.
          </h1>

          <p className="text-base sm:text-xl text-brand-muted max-w-2xl mx-auto mb-8 leading-relaxed font-sans">
            Open, 40+, 50+ and 60+. Real refs, three games minimum and your name above the stall.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="#tournament-form"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-red text-brand-navy font-black uppercase tracking-wider text-sm hover:bg-brand-red-hover transition-all shadow-xl hover:shadow-brand-red/30 active:scale-95"
            >
              Get the Captain's Package
            </a>
            <Link
              href="/divisions"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-card border border-brand-border text-brand-cream font-bold uppercase tracking-wider text-sm hover:bg-brand-card-hover transition-all"
            >
              Explore Divisions
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-brand-muted">
            <span>Playing without a team?</span>
            <ShareToCaptainButton variant="minimal" />
          </div>
        </div>
      </section>

      {/* CAPTAIN CALLOUT BLOCK WITH TEAM CHAT POLL */}
      <section className="py-20 bg-brand-navy border-b border-brand-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-[#0b203a] border-2 border-[#1c3f6e] text-center shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-athletic text-brand-cream mb-4 font-black">
            Captain, you’ve done enough.
          </h2>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto font-sans mb-8">
            Ice times. E-transfers. Chasing the guy who never pays. For April, we book the ice, the refs, the room, the schedule and the photos. You bring the game. We bring the show.
          </p>

          {/* Quick Team-Chat Poll Card */}
          <div className="p-4 rounded-2xl bg-brand-navy border border-brand-border/80 max-w-lg mx-auto text-left mb-8 shadow-inner">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-accent">
                Ready-To-Paste Team Chat Poll
              </span>
              <span className="text-[10px] text-brand-muted">Copy & paste into WhatsApp / iMessage</span>
            </div>
            <p className="text-xs font-mono text-brand-cream bg-brand-card p-3 rounded-lg border border-brand-border/60 select-all">
              "April 2027 · Richmond Hill · 3 games guaranteed + pro room. Who's in? Let me know by Friday."
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#tournament-form"
              className="px-8 py-3.5 rounded-xl bg-brand-red text-brand-navy font-black uppercase tracking-wider text-xs hover:bg-brand-red-hover transition-all shadow-lg"
            >
              Get the Captain's Package
            </a>
            <ShareToCaptainButton variant="secondary" />
          </div>
        </div>
      </section>

      {/* FOUNDING SEASON STATUS BANNER */}
      <section className="py-8 bg-brand-card/40 border-b border-brand-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-brand-muted">
          <div className="flex items-center gap-2 text-brand-cream font-bold">
            <Sparkles className="w-4 h-4 text-brand-accent shrink-0" />
            <span>2027 Founding Season Entrant Perks:</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>• Permanent "Est. 2027" card tag</span>
            <span>• Priority renewal rights</span>
            <span>• Founding Members Wall listing</span>
          </div>
        </div>
      </section>

      {/* PLANNED BRACKETS */}
      <section className="py-20 bg-brand-surface border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
              Age Categories
            </span>
            <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
              Every division gets the same treatment.
            </h2>
            <p className="text-sm sm:text-base text-brand-muted font-sans">
              Planned brackets for Early April 2027 in the Greater Toronto Area.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {brackets.map((b) => (
              <div key={b.name} className="p-6 rounded-2xl bg-brand-card border border-brand-border flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-athletic text-brand-cream font-bold text-xl">
                      {b.name}
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-surface text-brand-muted border border-brand-border">
                      {b.status}
                    </span>
                  </div>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* AT EVERY EVENT AMENITIES (Replaces The Pro Amenities per Nov 21 spec) */}
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-brand-card border border-brand-border">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-1">
                Standard Inclusions
              </span>
              <h3 className="text-2xl font-athletic text-brand-cream font-black">
                Ready at Every Veddie Event
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200">
              {atEveryEventAmenities.map((amenity) => (
                <div key={amenity} className="flex items-center gap-2 p-2.5 rounded-lg bg-brand-surface/60 border border-brand-border/40">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE FORM (Single H2, hide duplicate form heading) */}
      <section id="tournament-form" className="py-24 bg-brand-navy px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
            Priority Entry
          </span>
          <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-2 font-black">
            Get Invitational Details
          </h2>
          <p className="text-sm text-brand-muted">
            Tell us about your team. We check team placement and reply within 2 business days. No payment today.
          </p>
        </div>

        <LeadCaptureForm
          type="tournaments"
          hideHeading={true}
          buttonText="Get Invitational details"
          microcopy="We check team placement and reply within 2 business days. No payment today."
        />
      </section>
    </div>
  );
}

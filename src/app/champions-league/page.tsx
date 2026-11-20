import type { Metadata } from "next";
import Link from "next/link";
import { Swords, Calendar, Shield, ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export const metadata: Metadata = {
  title: "Champions League | Veddie Hockey",
  description:
    "Keep your league and chase a bigger title. Explore Veddie’s planned regional cross-league competition and register your team’s interest.",
};

export default function ChampionsLeaguePage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-brand-navy via-brand-surface to-brand-navy border-b border-brand-border px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-border text-brand-muted text-xs font-bold tracking-widest uppercase mb-6">
            <Swords className="w-4 h-4 text-brand-accent" />
            VEDDIE CHAMPIONS LEAGUE • PLANNED OFFERING
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-athletic text-brand-cream tracking-tight mb-6 font-black">
            Keep your league. Chase a bigger title.
          </h1>

          <p className="text-base sm:text-xl text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            The regular season is where your team’s rhythm lives. The Veddie Champions League is where your team tests its ceiling. A planned cross-league competition played on dedicated weeknights alongside your existing schedule, culminating in regional knockout rounds and a true adult hockey championship.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="#league-form"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-accent text-brand-navy font-bold font-bold uppercase tracking-wider text-sm hover:bg-brand-accent-hover transition-all shadow-xl hover:shadow-brand-accent/20"
            >
              Register Team Interest
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-card border border-brand-border text-brand-cream font-bold uppercase tracking-wider text-sm hover:bg-brand-card-hover transition-all"
            >
              How Champions League Works
            </a>
          </div>

          <p className="text-xs text-brand-muted">
            Planned cross-league competition. Join the regional interest list to help shape the first season’s footprint.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-brand-navy border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
              The Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4">
              The competition designed around adult hockey life.
            </h2>
            <p className="text-base text-brand-muted">
              You shouldn't have to leave the league you’ve played in for 10 years to experience elite tournament-style stakes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/20 text-brand-accent flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-athletic text-brand-cream mb-3">
                Alongside Your Home Season
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Matches are scheduled on designated off-nights with realistic travel radius windows. Keep your weekly tradition while hunting regional prestige.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/20 text-brand-accent flex items-center justify-center mb-6">
                <Swords className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-athletic text-brand-cream mb-3">
                Regional Knockout Format
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Group stages lead into single-elimination knockout brackets. Win and advance, with every goal and assist tracked under full arena production.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/20 text-brand-accent flex items-center justify-center mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-athletic text-brand-cream mb-3">
                Provincial Elo Points
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Champions League games feed directly into the official Veddie Team Rankings. Build your club’s legacy on the verified leaderboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REGIONAL FOOTPRINT */}
      <section className="py-20 bg-brand-surface border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-card p-8 sm:p-12 rounded-2xl border border-brand-border flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-accent">
                <MapPin className="w-4 h-4" />
                Target Launch Regions
              </div>
              <h3 className="text-2xl sm:text-3xl font-athletic text-brand-cream">
                Building Southern Ontario Circuits
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Initial pilot divisions focus on GTA West (Mississauga, Oakville, Burlington), Kitchener-Waterloo-Cambridge, and Toronto Central circuits.
              </p>
            </div>
            <a
              href="#league-form"
              className="px-6 py-3.5 rounded-xl bg-brand-accent text-brand-navy font-bold text-xs font-bold uppercase tracking-wider hover:bg-brand-accent-hover transition-all shrink-0"
            >
              Put Your Region on the Map
            </a>
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE FORM */}
      <section className="py-24 bg-brand-navy px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
            Regional Interest
          </span>
          <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4">
            Start your team’s next campaign.
          </h2>
          <p className="text-base text-brand-muted max-w-xl mx-auto">
            Help us build the regional field. Tell us where and when your team plays.
          </p>
        </div>

        <LeadCaptureForm type="champions-league" id="league-form" />
      </section>
    </div>
  );
}

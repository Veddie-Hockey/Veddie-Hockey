import type { Metadata } from "next";
import Link from "next/link";
import { Users, Clock, BarChart3, ShieldCheck, ArrowRight } from "lucide-react";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export const metadata: Metadata = {
  title: "Adult Hockey Leagues | Veddie Hockey",
  description:
    "Make this your hockey night. Register interest in Veddie Leagues as a team or individual and find the right fit for your level and schedule.",
};

export default function LeaguesPage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-brand-black via-brand-surface to-brand-black border-b border-brand-border px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-border text-brand-accent text-xs font-bold tracking-widest uppercase mb-6">
            <Users className="w-4 h-4" />
            VEDDIE LEAGUES • ACCEPTING INTEREST
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-athletic text-brand-cream tracking-tight mb-6 font-black">
            Make this your hockey night.
          </h1>

          <p className="text-base sm:text-xl text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            A consistent weekly game. A team to call your own. A season of rivalries, recognition and reasons to get to the rink. Veddie Leagues bring organized adult hockey together with certified officials, comprehensive stats and the pro hockey touches that make every week feel like game day.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="#league-form"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-accent text-brand-black font-bold uppercase tracking-wider text-sm hover:bg-brand-accent-hover transition-all shadow-xl hover:shadow-brand-accent/20"
            >
              Join the League Interest List
            </a>
            <Link
              href="/divisions"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-card border border-brand-border text-brand-cream font-bold uppercase tracking-wider text-sm hover:bg-brand-card-hover transition-all"
            >
              Explore Divisions
            </Link>
          </div>

          <p className="text-xs text-brand-muted">
            Accepting interest from full teams and individual players across Southern Ontario.
          </p>
        </div>
      </section>

      {/* WHY VEDDIE LEAGUES */}
      <section className="py-24 bg-brand-black border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
              Weekly Consistency
            </span>
            <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4">
              A league built for the way adults actually play.
            </h2>
            <p className="text-base text-brand-muted">
              We eliminated the frustrations common to beer leagues: midnight ice times, invisible organizers, and unreviewed skill divisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border">
              <Clock className="w-8 h-8 text-brand-accent mb-4" />
              <h3 className="text-xl font-athletic text-brand-cream mb-2">
                Predictable Scheduling
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Consistent game nights and reasonable start times. No midnight skates that leave you wrecked for Monday morning work.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border">
              <BarChart3 className="w-8 h-8 text-brand-accent mb-4" />
              <h3 className="text-xl font-athletic text-brand-cream mb-2">
                Live Stats & Media
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Live official scorekeeping, player leaderboards, goalie statistics, and highlight packages available within 24 hours of each game.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border">
              <Users className="w-8 h-8 text-brand-accent mb-4" />
              <h3 className="text-xl font-athletic text-brand-cream mb-2">
                Team & Individual Entry
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Register as an intact squad or sign up as a solo skater or goalie. Our placement review connects free agents with well-matched rooms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-24 bg-brand-surface px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
            Roster Placement
          </span>
          <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4">
            Find your hockey night.
          </h2>
          <p className="text-base text-brand-muted max-w-xl mx-auto">
            Bring your team or tell us you’re looking for one. We will follow up with division openings and schedule options.
          </p>
        </div>

        <LeadCaptureForm type="leagues" id="league-form" />
      </section>
    </div>
  );
}

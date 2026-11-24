import type { Metadata } from "next";
import Link from "next/link";
import { Users, Clock, BarChart3, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import ShareToCaptainButton from "@/components/ShareToCaptainButton";

export const metadata: Metadata = {
  title: "Adult Hockey Leagues",
  description:
    "Make it your team’s weekly hockey night. Bring your roster or join as a free agent and play in a division that fits your level.",
};

export default function LeaguesPage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-brand-navy via-brand-surface to-brand-navy border-b border-brand-border px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-accent mb-3">
            Coming September 2027
          </p>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-athletic text-brand-cream tracking-tight mb-4 font-black uppercase">
            Veddie Hockey Leagues
          </h1>

          <p className="text-base sm:text-xl text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
            Make it your team’s weekly hockey night. Bring your roster or join as a free agent and play in a division that fits your level.
          </p>

          {/* TWO WAYS TO JOIN */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10 text-left">
            {/* Captains: Bring your team */}
            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-1">
                  Captains
                </span>
                <h3 className="text-xl font-athletic text-brand-cream font-bold mb-2">
                  Bring your team.
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed mb-4">
                  Register full team interest for your preferred night, division and home arena.
                </p>
              </div>
              <a
                href="#league-form"
                className="w-full py-3 px-4 rounded-xl bg-brand-red text-brand-navy font-black text-xs uppercase tracking-wider hover:bg-brand-red-hover transition-all text-center"
              >
                Register Team Interest
              </a>
            </div>

            {/* Individual players: Looking for a team? */}
            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-1">
                  Individual Players & Goalies
                </span>
                <h3 className="text-xl font-athletic text-brand-cream font-bold mb-2">
                  Looking for a team?
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed mb-4">
                  Join the free-agent and goalie list to be placed on a balanced roster in your division.
                </p>
              </div>
              <a
                href="#league-form"
                className="w-full py-3 px-4 rounded-xl bg-brand-card border border-brand-border text-brand-cream font-bold text-xs uppercase tracking-wider hover:border-brand-accent transition-all text-center"
              >
                Join the Free Agent List
              </a>
            </div>
          </div>

          <div>
            <ShareToCaptainButton variant="minimal" />
          </div>
        </div>
      </section>

      {/* FEEL LIKE YOU'RE IN THE PROS */}
      <section className="py-16 bg-brand-surface border-b border-brand-border px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
            The Pro Treatment
          </span>
          <h2 className="text-2xl sm:text-4xl font-athletic text-brand-cream font-black mb-3">
            Feel like you’re in the pros
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans mb-6">
            Walk into the room and find your name above your stall. See what a Veddie game night looks like, from warmups to the final buzzer.
          </p>
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-card border border-brand-border hover:border-brand-accent text-brand-cream text-xs font-bold uppercase tracking-wider transition-all"
          >
            <span>Explore the Veddie Experience</span>
            <ArrowRight className="w-4 h-4 text-brand-accent" />
          </Link>
        </div>
      </section>

      {/* WHY VEDDIE LEAGUES */}
      <section className="py-24 bg-brand-navy border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
              Weekly Consistency
            </span>
            <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
              A league built for the way adults actually play.
            </h2>
            <p className="text-base text-brand-muted font-sans">
              Your weekly game, with the pro treatment: sensible ice times, an organizer you can reach and divisions we review so every game is close.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border">
              <Clock className="w-8 h-8 text-brand-accent mb-4" />
              <h3 className="text-xl font-athletic text-brand-cream mb-2 font-bold">
                Predictable Scheduling
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed font-sans">
                Evening ice times that get you home at a reasonable hour.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border">
              <BarChart3 className="w-8 h-8 text-brand-accent mb-4" />
              <h3 className="text-xl font-athletic text-brand-cream mb-2 font-bold">
                Live Stats & Standings
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed font-sans">
                Official on-ice scorekeeping, player goals, assists, goalie statistics, and verified division standings.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border">
              <Users className="w-8 h-8 text-brand-accent mb-4" />
              <h3 className="text-xl font-athletic text-brand-cream mb-2 font-bold">
                Captains, Players & Goalies
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed font-sans mb-3">
                Register as a team captain, solo skater, or goalie. Free agents are placed with teams 14 days prior to regular season puck drop following skill placement review.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM SECTION (Single H2, hide duplicate form heading) */}
      <section id="league-form" className="py-24 bg-brand-surface px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
            Roster Placement
          </span>
          <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-2 font-black">
            Find Your Hockey Night
          </h2>
          <p className="text-sm text-brand-muted">
            Tell us your preferred city, division and nights. Our operations desk will follow up within 2 business days.
          </p>
        </div>

        <LeadCaptureForm
          type="leagues"
          hideHeading={true}
          buttonText="Join the League Interest List"
        />
      </section>
    </div>
  );
}

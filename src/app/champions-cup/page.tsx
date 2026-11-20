import type { Metadata } from "next";
import Link from "next/link";
import { Trophy, Shield, Sparkles, CheckCircle2, ArrowRight, Award } from "lucide-react";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import QualificationCalculator from "@/components/QualificationCalculator";

export const metadata: Metadata = {
  title: "Champions Cup | Veddie Hockey",
  description:
    "Give your team a bigger stage. Explore Veddie Champions Cup qualification, divisions and the planned championship experience. Register team interest.",
};

export default function ChampionsCupPage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-brand-navy via-brand-surface to-brand-navy border-b border-brand-border px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-accent/40 text-brand-accent text-xs font-bold tracking-widest uppercase mb-6">
            <Trophy className="w-4 h-4" />
            VEDDIE CHAMPIONS CUP • ACCEPTING INTEREST
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-athletic text-brand-cream tracking-tight mb-6 font-black">
            Your league was just the beginning.
          </h1>

          <p className="text-base sm:text-xl text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            You’ve earned your place at home. Now give the team a bigger stage. The Veddie Champions Cup brings top adult teams together from across the province for a flagship championship with funded prizes, professional touches and a level of competition that justifies the drive.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="#cup-form"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-accent text-brand-navy font-bold font-bold uppercase tracking-wider text-sm hover:bg-brand-accent-hover transition-all shadow-xl hover:shadow-brand-accent/20"
            >
              Register Team Interest
            </a>
            <a
              href="#qualification"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-card border border-brand-border text-brand-cream font-bold uppercase tracking-wider text-sm hover:bg-brand-card-hover transition-all"
            >
              See How Qualification Works
            </a>
          </div>

          <p className="text-xs text-brand-muted">
            Join the first-edition interest list. Dates, location, divisions and entry details will be published before registration opens.
          </p>
        </div>
      </section>

      {/* REASON TO PLAY */}
      <section className="py-20 bg-brand-navy border-b border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-athletic text-brand-cream tracking-tight mb-6">
            Same team. Bigger stage.
          </h2>
          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            You already know what your team can do in your own league. The Cup gives you a new question to answer: how do you stack up against the best teams from other arenas? Fresh rivalries. Meaningful hardware. Zero sandbagging.
          </p>
        </div>
      </section>

      {/* PILOT FORMAT */}
      <section className="py-24 bg-brand-surface border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
              Inaugural Pilot Tournament
            </span>
            <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4">
              16 teams. Two divisions. One champion per division.
            </h2>
            <p className="text-base text-brand-muted">
              The inaugural Champions Cup runs as a focused 16-team pilot event: two divisions of eight teams each, built to test the experience and crown our first champions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="p-6 rounded-2xl bg-brand-card border border-brand-border text-center">
              <span className="text-3xl font-athletic font-bold text-brand-accent block mb-1">
                3
              </span>
              <h3 className="text-sm font-bold uppercase tracking-wider text-brand-cream mb-2">
                Guaranteed Games
              </h3>
              <p className="text-xs text-brand-muted">
                Each team plays three pool games. Semifinals and final follow for qualifying teams.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-card border border-brand-border text-center">
              <span className="text-3xl font-athletic font-bold text-brand-cream block mb-1">
                5
              </span>
              <h3 className="text-sm font-bold uppercase tracking-wider text-brand-cream mb-2">
                Games for Finalists
              </h3>
              <p className="text-xs text-brand-muted">
                Finalists play five games across the weekend to decide the championship banner.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-card border border-brand-border text-center">
              <span className="text-3xl font-athletic font-bold text-brand-accent block mb-1">
                $$$
              </span>
              <h3 className="text-sm font-bold uppercase tracking-wider text-brand-cream mb-2">
                Funded Cash Prize
              </h3>
              <p className="text-xs text-brand-muted">
                Division winners receive a funded team cash prize and championship honors.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-card border border-brand-accent/50 text-center bg-brand-accent/5">
              <span className="text-3xl font-athletic font-bold text-brand-accent block mb-1">
                $0
              </span>
              <h3 className="text-sm font-bold uppercase tracking-wider text-brand-cream mb-2">
                Inaugural Team Entry
              </h3>
              <p className="text-xs text-brand-muted">
                Entry fee covered by Veddie for the selected field in our inaugural pilot edition.
              </p>
            </div>
          </div>

          <p className="text-center text-xs text-brand-muted">
            Teams provide their own gear, uniforms and travel. Standby spots and attendance commitment rules will be published before acceptance.
          </p>
        </div>
      </section>

      {/* QUALIFICATION RULES */}
      <section id="qualification" className="py-24 bg-brand-navy border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
              Competitive Integrity
            </span>
            <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4">
              How qualification works
            </h2>
            <p className="text-base text-brand-muted">
              Entry into the Champions Cup is earned through your home league season, not through an open credit card checkout.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-accent mb-2">
                Primary Route
              </div>
              <h3 className="text-xl font-athletic text-brand-cream mb-3">
                Top 25% of Regular Season
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed mb-4">
                Finish in the top 25% of your home league division standings, rounded up: ceiling(N ÷ 4). In an 8-team division, 1st and 2nd qualify. In a 12-team division, top 3 qualify.
              </p>
              <div className="text-xs font-mono bg-brand-card p-2 rounded border border-brand-border text-brand-cream">
                Places = ceiling(teams ÷ 4)
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-accent mb-2">
                Championship Route
              </div>
              <h3 className="text-xl font-athletic text-brand-cream mb-3">
                Playoff Champions
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed mb-4">
                If your team finishes outside the top 25% but wins your home league playoff championship, your team qualifies for the Champions Cup. Duplicate qualifiers receive one entry.
              </p>
              <div className="text-xs font-mono bg-brand-card p-2 rounded border border-brand-border text-brand-cream">
                Playoff Winner = Direct Entry
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-accent mb-2">
                Secondary Tier
              </div>
              <h3 className="text-xl font-athletic text-brand-cream mb-3">
                Challengers Cup Route
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed mb-4">
                Remaining top-half teams (positions running from ceiling(N÷4)+1 through floor(N÷2)) are eligible for the Challengers Cup competition tier.
              </p>
              <div className="text-xs font-mono bg-brand-card p-2 rounded border border-brand-border text-brand-cream">
                Remaining Top 50% = Challengers
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-brand-card border border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4 mb-16">
            <span className="text-xs text-brand-muted">
              Standings verified against official home-league records prior to formal tournament invitations.
            </span>
            <a
              href="#cup-form"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-brand-accent text-brand-navy font-bold text-xs font-bold uppercase tracking-wider hover:bg-brand-accent-hover transition-colors"
            >
              Put Your Team Forward
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Interactive Calculator */}
          <QualificationCalculator />
        </div>
      </section>

      {/* PRO EXPERIENCE TOUCHES */}
      <section className="py-20 bg-brand-surface border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
                Player Experience
              </span>
              <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-6">
                Treated like pros from the moment you arrive.
              </h2>
              <div className="space-y-4 text-sm text-brand-muted leading-relaxed mb-8">
                <p>
                  No dingy locker rooms. No missing referees. No mystery scorekeeping.
                </p>
                <p>
                  Every team in the Champions Cup gets a spotless dressing room with stall nameplates, fresh towel service, tape & essentials station, athletic therapist on site, full game replays, and three stars of the game recognition.
                </p>
              </div>
              <Link
                href="/experience"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-accent hover:underline"
              >
                See all 29 pro features &rarr;
              </Link>
            </div>

            <div className="bg-brand-card p-8 rounded-2xl border border-brand-border space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-athletic text-brand-cream text-base">Dedicated Locker Room</h4>
                  <p className="text-xs text-brand-muted">Name on the door, whiteboard lineup, stall nameplates, fresh towels.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-athletic text-brand-cream text-base">In-Game Arena Production</h4>
                  <p className="text-xs text-brand-muted">Starting lineup announcements, music at stoppages, goal horns & songs.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-athletic text-brand-cream text-base">Full Media Coverage</h4>
                  <p className="text-xs text-brand-muted">HD game film replays, action photography, and social highlight clips.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-athletic text-brand-cream text-base">Elo Rankings Impact</h4>
                  <p className="text-xs text-brand-muted">Every game feeds your official provincial standing on the Veddie Leaderboard.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-24 bg-brand-navy px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
            Inaugural Edition
          </span>
          <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4">
            Put your team on the radar.
          </h2>
          <p className="text-base text-brand-muted max-w-xl mx-auto">
            Tell us about your team and your home league standing. We’ll review your details and reach out as pilot division brackets are finalized.
          </p>
        </div>

        <LeadCaptureForm type="cup" id="cup-form" />
      </section>
    </div>
  );
}

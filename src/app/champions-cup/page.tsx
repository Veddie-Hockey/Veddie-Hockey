import type { Metadata } from "next";
import Link from "next/link";
import { Trophy, ArrowRight, CheckCircle2 } from "lucide-react";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import ShareToCaptainButton from "@/components/ShareToCaptainButton";

export const metadata: Metadata = {
  title: "Veddie Champions Cup, April 2027",
  description:
    "Earn your spot in your home league. Then face qualifying teams from other leagues for the Cup.",
};

export default function ChampionsCupPage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-brand-navy via-brand-surface to-brand-navy border-b border-brand-border px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-athletic text-brand-cream tracking-tight mb-4 font-black uppercase">
            The Veddie Champions Cup
          </h1>

          <p className="text-base sm:text-xl text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
            Earn your spot in your home league. Then face qualifying teams from other leagues for the Cup.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="#next-cup"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-red text-brand-navy font-black uppercase tracking-wider text-sm hover:bg-brand-red-hover transition-all shadow-xl hover:shadow-brand-red/30 active:scale-95"
            >
              Next Champions Cup
            </a>
            <a
              href="#qualification"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-card border border-brand-border text-brand-cream font-bold uppercase tracking-wider text-sm hover:bg-brand-card-hover transition-all"
            >
              How Teams Qualify
            </a>
          </div>

          <div>
            <ShareToCaptainButton variant="minimal" />
          </div>
        </div>
      </section>

      {/* THREE STEP QUALIFYING PROCESS */}
      <section className="py-20 bg-brand-navy border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
              Three-Step Qualification
            </span>
            <h2 className="text-3xl sm:text-4xl font-athletic text-brand-cream tracking-tight font-black">
              Earned on the ice. Confirmed by us.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border text-center">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/20 text-brand-accent font-athletic font-black text-xl flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-athletic text-brand-cream font-bold mb-2">
                Check your standings.
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed font-sans">
                Win your league playoffs, or finish in the top quarter of its standings, rounded up. A 10-team league sends 3.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border text-center">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/20 text-brand-accent font-athletic font-black text-xl flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-athletic text-brand-cream font-bold mb-2">
                Submit your result.
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed font-sans">
                Enter your team name, home league, and link to your public standings or playoff bracket.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border text-center">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/20 text-brand-accent font-athletic font-black text-xl flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-athletic text-brand-cream font-bold mb-2">
                We confirm your spot.
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed font-sans">
                We verify your home-league standing, confirm your division tier, and issue your official invitation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TEAMS QUALIFY (Replaces calculator per Nov 22 spec) */}
      <section id="qualification" className="py-24 bg-brand-surface border-b border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
              Eligibility Standard
            </span>
            <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
              How teams qualify
            </h2>
            <p className="text-base sm:text-lg text-slate-200 font-sans leading-relaxed max-w-2xl mx-auto">
              Win your home-league playoffs or finish in the top quarter of your division to qualify. Round up to the next whole team when calculating the cutoff.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-brand-card border border-brand-border shadow-xl space-y-4 text-xs sm:text-sm text-brand-muted leading-relaxed font-sans">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-brand-cream">
              <div className="p-4 rounded-xl bg-brand-surface border border-brand-border">
                <span className="font-bold text-brand-accent block mb-1">Playoff Champions</span>
                <p className="text-xs text-brand-muted">Winning your division championship automatically punches your ticket to the Champions Cup.</p>
              </div>
              <div className="p-4 rounded-xl bg-brand-surface border border-brand-border">
                <span className="font-bold text-brand-accent block mb-1">Top Quarter Cutoff</span>
                <p className="text-xs text-brand-muted">An 8-team division sends 2. A 10-team league sends 3. A 12-team division sends 3.</p>
              </div>
            </div>
            <p className="text-xs text-brand-muted/80 pt-2 text-center">
              If the playoff champion also finished in the top quarter of the regular season, the next eligible team in the standings receives the invitation.
            </p>
          </div>
        </div>
      </section>

      {/* NEXT CHAMPIONS CUP (Nov 22 spec) */}
      <section id="next-cup" className="py-20 bg-brand-navy border-b border-brand-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-[#0b203a] border-2 border-[#1c3f6e] text-center shadow-2xl">
          <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded bg-brand-red text-brand-navy inline-block mb-4">
            Next Champions Cup
          </span>
          <h2 className="text-3xl sm:text-4xl font-athletic text-brand-cream font-black mb-3">
            Dates and venue to be announced.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-sans max-w-xl mx-auto leading-relaxed mb-8">
            Get notified when team entry opens. We’ll notify team captains and league organizers as soon as registration begins.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#cup-form"
              className="px-8 py-3.5 rounded-xl bg-brand-red text-brand-navy font-black text-xs uppercase tracking-wider hover:bg-brand-red-hover transition-all shadow-lg"
            >
              Get Cup Updates
            </a>
            <Link
              href="/nominate"
              className="px-8 py-3.5 rounded-xl bg-brand-card border border-brand-border hover:border-brand-accent text-brand-cream text-xs font-bold uppercase tracking-wider transition-all"
            >
              Nominate a Team
            </Link>
          </div>
        </div>
      </section>

      {/* THE VEDDIE EXPERIENCE CALLOUT (Replaces Championship Atmosphere per Nov 22 spec) */}
      <section className="py-16 bg-brand-surface border-b border-brand-border px-4 sm:px-6 lg:px-8 text-center">
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
      <section id="cup-form" className="py-24 bg-brand-navy px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
            Championship Verification
          </span>
          <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-2 font-black">
            Check My Team’s Eligibility
          </h2>
          <p className="text-sm text-brand-muted">
            We check your standings, then confirm your spot. No payment today.
          </p>
        </div>

        <LeadCaptureForm
          type="cup"
          hideHeading={true}
          buttonText="Check My Team's Eligibility"
          microcopy="We check your standings, then confirm your spot. No payment today."
        />
      </section>
    </div>
  );
}

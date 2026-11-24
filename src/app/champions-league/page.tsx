import type { Metadata } from "next";
import Link from "next/link";
import { Swords, Calendar, Shield, ArrowRight, Trophy, TrendingUp } from "lucide-react";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import ShareToCaptainButton from "@/components/ShareToCaptainButton";

export const metadata: Metadata = {
  title: "Champions League",
  description:
    "How does your team stack up against the next league over? Play 1–2 games per month against teams from other leagues while you keep playing your home season.",
};

export default function ChampionsLeaguePage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-brand-navy via-brand-surface to-brand-navy border-b border-brand-border px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-accent mb-3">
            Coming September 2027
          </p>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-athletic text-brand-cream tracking-tight mb-4 font-black uppercase">
            Veddie Champions League
          </h1>

          <p className="text-base sm:text-xl text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
            How does your team stack up against the next league over? Play 1–2 games per month against teams from other leagues while you keep playing your home season.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="#league-form"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-red text-brand-navy font-black uppercase tracking-wider text-sm hover:bg-brand-red-hover transition-all shadow-xl hover:shadow-brand-red/30 active:scale-95"
            >
              Get Champions League Updates
            </a>
            <a
              href="#what-youre-playing-for"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-card border border-brand-border text-brand-cream font-bold uppercase tracking-wider text-sm hover:bg-brand-card-hover transition-all"
            >
              What You’re Playing For
            </a>
          </div>

          <div>
            <ShareToCaptainButton variant="minimal" />
          </div>
        </div>
      </section>

      {/* WANT TO PLAY THIS APRIL? */}
      <section className="py-12 bg-brand-surface border-b border-brand-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-[#0b203a] border border-[#1c3f6e]">
          <div>
            <h3 className="text-lg font-athletic text-brand-cream font-bold mb-1">
              Want to play this April?
            </h3>
            <p className="text-xs text-brand-muted font-sans">
              Our confirmed April 2027 events are now accepting team submissions in the GTA.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/tournaments"
              className="px-5 py-2.5 rounded-xl bg-brand-card border border-brand-border hover:border-brand-accent text-brand-cream text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Invitational &rarr;
            </Link>
            <Link
              href="/champions-cup"
              className="px-5 py-2.5 rounded-xl bg-brand-red text-brand-navy text-xs font-black uppercase tracking-wider hover:bg-brand-red-hover transition-colors shadow-md"
            >
              Champions Cup &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* SCHEDULE INTEGRATION */}
      <section className="py-20 bg-brand-navy border-b border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
            Schedule Integration
          </span>
          <h2 className="text-3xl sm:text-4xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
            Alongside your home season.
          </h2>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans max-w-2xl mx-auto">
            Keep your regular league schedule. Your team plays 1–2 additional Champions League games per month.
          </p>
        </div>
      </section>

      {/* WHAT YOU'RE PLAYING FOR */}
      <section id="what-youre-playing-for" className="py-24 bg-brand-surface border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
              Championship Stakes
            </span>
            <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
              What you’re playing for
            </h2>
            <p className="text-base text-brand-muted font-sans">
              Compete beyond your local arena and see how your roster measures up across the region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* 1. Cross-league competition */}
            <div className="p-8 rounded-2xl bg-brand-card border border-brand-border flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-accent/20 text-brand-accent flex items-center justify-center mb-6">
                  <Swords className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-athletic text-brand-cream mb-3 font-bold">
                  Cross-league competition
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed font-sans">
                  Take the roster you play with every week and face teams you wouldn’t meet in your home league.
                </p>
              </div>
            </div>

            {/* 2. Team rankings */}
            <div className="p-8 rounded-2xl bg-brand-card border border-brand-border flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-accent/20 text-brand-accent flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-athletic text-brand-cream mb-3 font-bold">
                  Team rankings
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed font-sans">
                  Champions League results count toward your Veddie team ranking. Follow your team’s position as the season unfolds.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  href="/rankings"
                  className="text-xs text-brand-accent hover:underline font-bold"
                >
                  View Rankings &rarr;
                </Link>
              </div>
            </div>

            {/* 3. Free Champions Cup entry */}
            <div className="p-8 rounded-2xl bg-brand-card border border-brand-border flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-red/20 text-brand-red flex items-center justify-center mb-6">
                  <Trophy className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-athletic text-brand-cream mb-3 font-bold">
                  Free Champions Cup entry
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed font-sans">
                  Win the Champions League and your team earns free entry into the Champions Cup.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  href="/champions-cup"
                  className="text-xs text-brand-red hover:underline font-bold"
                >
                  See the Champions Cup &rarr;
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-accent hover:underline"
            >
              See the Veddie Experience &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE FORM */}
      <section id="league-form" className="py-24 bg-brand-navy px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
            Regional Updates
          </span>
          <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-2 font-black">
            Get Champions League Updates
          </h2>
          <p className="text-sm text-brand-muted">
            Tell us your home arena, league and night. We’ll follow up with schedule details.
          </p>
        </div>

        <LeadCaptureForm
          type="champions-league"
          hideHeading={true}
          buttonText="Get Champions League Updates"
        />
      </section>
    </div>
  );
}

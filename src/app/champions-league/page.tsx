import type { Metadata } from "next";
import Link from "next/link";
import { Swords, Calendar, Shield, ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import ShareToCaptainButton from "@/components/ShareToCaptainButton";

export const metadata: Metadata = {
  title: "Champions League | Veddie Hockey",
  description:
    "Keep your league. Chase a bigger title. Explore Veddie’s proposed regional cross-league competition and join the interest list.",
};

export default function ChampionsLeaguePage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative min-h-[65vh] flex items-center justify-center bg-gradient-to-b from-brand-navy via-brand-surface to-brand-navy border-b border-brand-border px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-accent/40 text-brand-accent text-xs font-bold tracking-widest uppercase mb-6">
            <Swords className="w-4 h-4" />
            PROPOSED REGIONAL CIRCUIT
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-athletic text-brand-cream tracking-tight mb-6 font-black uppercase">
            Keep your league. Chase a bigger title.
          </h1>

          <p className="text-base sm:text-xl text-brand-muted max-w-2xl mx-auto mb-8 leading-relaxed font-sans">
            A proposed midweek regional knockout competition running alongside your home regular season. You keep your weekly league routine while testing your team against top regional rivals.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="#league-form"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-red text-brand-navy font-black uppercase tracking-wider text-sm hover:bg-brand-red-hover transition-all shadow-xl hover:shadow-brand-red/30 active:scale-95"
            >
              Join the Champions League Interest List
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-card border border-brand-border text-brand-cream font-bold uppercase tracking-wider text-sm hover:bg-brand-card-hover transition-all"
            >
              How It Works
            </a>
          </div>

          <div>
            <ShareToCaptainButton variant="minimal" />
          </div>
        </div>
      </section>

      {/* WANT TO PLAY THIS APRIL? (Nov 21 spec) */}
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

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-brand-navy border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
              Proposed Schedule Integration
            </span>
            <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
              Designed to fit around adult hockey life.
            </h2>
            <p className="text-base text-brand-muted font-sans">
              You shouldn’t have to leave the home league you’ve played in for years to experience championship stakes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/20 text-brand-accent flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-athletic text-brand-cream mb-3 font-bold">
                Alongside Your Home Season
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed font-sans mb-4">
                Matches are scheduled on designated off-nights with short travel distances. Keep your weekly tradition while hunting regional prestige.
              </p>
              <div className="p-3 rounded-lg bg-brand-card border border-brand-border text-xs text-brand-cream/90 font-sans italic">
                Example: If your team plays Sundays, your Veddie fixture is scheduled on an alternate Tuesday within a 35-minute drive.
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/20 text-brand-accent flex items-center justify-center mb-6">
                <Swords className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-athletic text-brand-cream mb-3 font-bold">
                Regional Knockout Format
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed font-sans">
                Group stages lead into single-elimination knockout brackets. Certified referees, timekeeper, and published box scores every game.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/20 text-brand-accent flex items-center justify-center mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-athletic text-brand-cream mb-3 font-bold">
                Regional Standings
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed font-sans">
                Games contribute to ongoing regional power ratings. Build your club’s standing against opponents outside your arena.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE FORM */}
      <section id="league-form" className="py-24 bg-brand-surface px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
            Regional Interest
          </span>
          <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-2 font-black">
            Join the Champions League Interest List
          </h2>
          <p className="text-sm text-brand-muted">
            Tell us your home arena, league and night. We’ll follow up within 2 business days.
          </p>
        </div>

        <LeadCaptureForm
          type="champions-league"
          hideHeading={true}
          buttonText="Join the Champions League interest list"
        />
      </section>
    </div>
  );
}

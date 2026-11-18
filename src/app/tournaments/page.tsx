import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ShieldCheck, Trophy, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export const metadata: Metadata = {
  title: "Adult Hockey Tournaments | Veddie Hockey",
  description:
    "Same team. New rivals. Explore Veddie tournament plans and register for event updates by location, skill level and age category.",
};

export default function TournamentsPage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-brand-black via-brand-surface to-brand-black border-b border-brand-border px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-border text-brand-accent text-xs font-bold tracking-widest uppercase mb-6">
            <Calendar className="w-4 h-4" />
            VEDDIE TOURNAMENTS • ACCEPTING INTEREST
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-athletic text-brand-cream tracking-tight mb-6 font-black">
            Same team. New rivals.
          </h1>

          <p className="text-base sm:text-xl text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Get the team together for a standalone tournament weekend built around proper hockey atmosphere, clean facilities, reviewed divisions and games that actually matter. Three guaranteed games, competitive parity and the touches that make a road trip worthwhile.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="#tournament-form"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-accent text-brand-black font-bold uppercase tracking-wider text-sm hover:bg-brand-accent-hover transition-all shadow-xl hover:shadow-brand-accent/20"
            >
              Get Tournament Updates
            </a>
            <Link
              href="/divisions"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-card border border-brand-border text-brand-cream font-bold uppercase tracking-wider text-sm hover:bg-brand-card-hover transition-all"
            >
              Explore Divisions
            </Link>
          </div>

          <p className="text-xs text-brand-muted">
            Join the tournament list for updates on dates, destinations and division availability.
          </p>
        </div>
      </section>

      {/* WHY VEDDIE TOURNAMENTS */}
      <section className="py-24 bg-brand-black border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
              The Standard
            </span>
            <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4">
              The tournament weekend you’ve been waiting for.
            </h2>
            <p className="text-base text-brand-muted">
              We’ve all played tournaments with 11pm Sunday consolation games, absent scorekeepers, and undisclosed former pros in recreational brackets. We designed Veddie tournaments to fix all of that.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
                Guaranteed Ice
              </span>
              <h3 className="text-xl font-athletic text-brand-cream mb-3">
                3 Games Minimum
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Balanced pool play guarantees every squad three full-length games with ample rest between contests. Playoff qualifiers advance to Sunday brackets.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
                Strict Placement
              </span>
              <h3 className="text-xl font-athletic text-brand-cream mb-3">
                Zero Sandbagging Policy
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Rosters are vetted before the first puck drop. Playing histories are verified across D1 through D4 to preserve fair, authentic competition.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
                Full Production
              </span>
              <h3 className="text-xl font-athletic text-brand-cream mb-3">
                The Pro Amenities
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Dressing room nameplates, fresh towel service, athletic therapist on site, music during warmups and stoppages, and game highlight clips.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE FORM */}
      <section className="py-24 bg-brand-surface px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
            Priority Notification
          </span>
          <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4">
            Get the team’s next weekend on the radar.
          </h2>
          <p className="text-base text-brand-muted max-w-xl mx-auto">
            Tell us the kind of event you’re looking for. Intact teams and individual free agents are welcome.
          </p>
        </div>

        <LeadCaptureForm type="tournaments" id="tournament-form" />
      </section>
    </div>
  );
}

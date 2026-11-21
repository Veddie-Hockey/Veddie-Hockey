import type { Metadata } from "next";
import Link from "next/link";
import { Users, Clock, BarChart3, ShieldCheck, ArrowRight } from "lucide-react";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import ShareToCaptainButton from "@/components/ShareToCaptainButton";

export const metadata: Metadata = {
  title: "Adult Hockey Leagues | Veddie Hockey",
  description:
    "Make this your hockey night. Register interest in Veddie Leagues as a team captain, individual player, or goalie.",
};

export default function LeaguesPage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative min-h-[65vh] flex items-center justify-center bg-gradient-to-b from-brand-navy via-brand-surface to-brand-navy border-b border-brand-border px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-accent/40 text-brand-accent text-xs font-bold tracking-widest uppercase mb-6">
            <Users className="w-4 h-4" />
            WEEKLY LEAGUES • ACCEPTING INTEREST
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-athletic text-brand-cream tracking-tight mb-6 font-black uppercase">
            Make this your hockey night.
          </h1>

          <p className="text-base sm:text-xl text-brand-muted max-w-2xl mx-auto mb-8 leading-relaxed font-sans">
            A consistent weekly game. A team to call your own. Certified officials, comprehensive stats and player stall nameplates. Join as an intact team, individual skater, or goalie.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="#league-form"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-red text-brand-navy font-black uppercase tracking-wider text-sm hover:bg-brand-red-hover transition-all shadow-xl hover:shadow-brand-red/30 active:scale-95"
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

          <div>
            <ShareToCaptainButton variant="minimal" />
          </div>
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
              Reliable game nights, certified officiating, and clear division placement review.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border">
              <Clock className="w-8 h-8 text-brand-accent mb-4" />
              <h3 className="text-xl font-athletic text-brand-cream mb-2 font-bold">
                Tell Us Your Preferred Nights
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed font-sans">
                Predictable weekly schedules and confirmed start times. Tell us which weeknights work best for your squad.
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

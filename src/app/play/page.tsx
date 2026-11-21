import type { Metadata } from "next";
import Link from "next/link";
import { Trophy, Calendar, Swords, Users, HelpCircle, ArrowRight } from "lucide-react";
import ShareToCaptainButton from "@/components/ShareToCaptainButton";

export const metadata: Metadata = {
  title: "Find Your Game | Veddie Hockey",
  description:
    "Two April weekends. Pick yours. You bring the game. We bring the show. The Veddie Invitational and Champions Cup in the GTA.",
};

export default function PlayPage() {
  return (
    <div className="flex flex-col py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
          Find Your Game
        </span>
        <h1 className="text-4xl sm:text-6xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
          Two April weekends. Pick yours.
        </h1>
        <p className="text-base sm:text-xl text-brand-muted max-w-xl mx-auto font-sans">
          You bring the game. We bring the show.
        </p>
      </div>

      {/* Main Events - First two cards, larger than rest per Nov 21 spec */}
      <div className="max-w-4xl mx-auto w-full space-y-6 mb-12">
        <h2 className="text-xs font-bold uppercase tracking-wider text-brand-accent">
          April 2027 Events
        </h2>

        {/* Card 1: The April Invitational */}
        <Link
          href="/tournaments#tournament-form"
          className="flex flex-col sm:flex-row sm:items-center justify-between p-8 rounded-2xl bg-[#0b203a] border-2 border-[#1c3f6e] hover:border-brand-accent transition-all group shadow-xl"
        >
          <div className="flex items-start sm:items-center gap-5 mb-4 sm:mb-0">
            <div className="p-4 rounded-xl bg-brand-surface text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-navy transition-colors shrink-0">
              <Calendar className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <h3 className="text-2xl font-athletic text-brand-cream group-hover:text-brand-accent transition-colors font-black">
                  Play the April Invitational
                </h3>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-accent text-brand-navy font-bold">
                  Early April 2027
                </span>
              </div>
              <h4 className="text-sm font-semibold text-brand-cream/90 mb-1">
                Open, 40+, 50+ and 60+. Real refs, three games minimum and your name above the stall.
              </h4>
              <p className="text-xs text-slate-300 max-w-xl">
                Standalone weekend tournament with strict divisions, certified referees, and player stall nameplates.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-brand-accent sm:self-center shrink-0">
            <span>Select</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* Card 2: Champions Cup */}
        <Link
          href="/champions-cup#qualification"
          className="flex flex-col sm:flex-row sm:items-center justify-between p-8 rounded-2xl bg-[#0b203a] border-2 border-[#1c3f6e] hover:border-brand-red transition-all group shadow-xl"
        >
          <div className="flex items-start sm:items-center gap-5 mb-4 sm:mb-0">
            <div className="p-4 rounded-xl bg-brand-surface text-brand-red group-hover:bg-brand-red group-hover:text-brand-navy transition-colors shrink-0">
              <Trophy className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <h3 className="text-2xl font-athletic text-brand-cream group-hover:text-brand-red transition-colors font-black">
                  Check Champions Cup Eligibility
                </h3>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-red text-brand-navy font-bold">
                  Late April 2027 · Richmond Hill
                </span>
              </div>
              <h4 className="text-sm font-semibold text-brand-cream/90 mb-1">
                For teams that earn their spot in their home league. The closest thing to the show.
              </h4>
              <p className="text-xs text-slate-300 max-w-xl">
                Win your league playoffs or finish in the top quarter of your standings, rounded up.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-brand-red sm:self-center shrink-0">
            <span>Check Eligibility</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      </div>

      {/* Secondary Options - Champions League & Leagues below, smaller per Nov 21 spec */}
      <div className="max-w-4xl mx-auto w-full space-y-4 mb-16">
        <h2 className="text-xs font-bold uppercase tracking-wider text-brand-muted">
          Circuit & Season Formats
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 3: Champions League */}
          <Link
            href="/champions-league#league-form"
            className="p-6 rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-accent/50 hover:bg-brand-card transition-all group"
          >
            <div className="flex items-center gap-3 mb-2">
              <Swords className="w-5 h-5 text-brand-accent" />
              <h3 className="text-lg font-athletic text-brand-cream group-hover:text-brand-accent transition-colors font-bold">
                Champions League
              </h3>
              <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded bg-brand-card text-brand-muted border border-brand-border">
                Proposed
              </span>
            </div>
            <h4 className="text-xs font-semibold text-brand-cream/80 mb-1">
              Midweek regional competition.
            </h4>
            <p className="text-xs text-brand-muted">
              Weeknight games designed to run alongside your regular home league season.
            </p>
          </Link>

          {/* Card 4: Leagues */}
          <Link
            href="/leagues#league-form"
            className="p-6 rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-accent/50 hover:bg-brand-card transition-all group"
          >
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-5 h-5 text-brand-accent" />
              <h3 className="text-lg font-athletic text-brand-cream group-hover:text-brand-accent transition-colors font-bold">
                Weekly Leagues
              </h3>
              <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded bg-brand-card text-brand-muted border border-brand-border">
                Season
              </span>
            </div>
            <h4 className="text-xs font-semibold text-brand-cream/80 mb-1">
              Weekly team or individual entry.
            </h4>
            <p className="text-xs text-brand-muted">
              Consistent game nights, certified referees, full stats, and team or free-agent placement.
            </p>
          </Link>
        </div>
      </div>

      {/* Ask us / Help section per Nov 21 spec */}
      <div className="max-w-2xl mx-auto w-full p-8 rounded-2xl bg-brand-surface border border-brand-border text-center">
        <HelpCircle className="w-8 h-8 text-brand-accent mx-auto mb-3" />
        <h3 className="text-2xl font-athletic text-brand-cream mb-2 font-bold">
          Not sure where you fit?
        </h3>
        <p className="text-sm text-brand-muted leading-relaxed mb-6 font-sans">
          Tell us your location, level and what you’re looking for. We’ll help you find the right game.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact?topic=Division+placement"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-accent text-brand-navy font-bold text-xs uppercase tracking-wider hover:bg-brand-accent-hover transition-all"
          >
            Ask Us
            <ArrowRight className="w-4 h-4" />
          </Link>
          <ShareToCaptainButton variant="secondary" />
        </div>
      </div>
    </div>
  );
}

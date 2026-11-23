import type { Metadata } from "next";
import Link from "next/link";
import { Trophy, Calendar, Swords, Users, Sparkles, ArrowRight, ShieldCheck, Gift } from "lucide-react";
import ShareToCaptainButton from "@/components/ShareToCaptainButton";

export const metadata: Metadata = {
  title: "Find Your Game | Veddie Hockey",
  description:
    "2027 Founding Season. Two April weekends. Pick yours. You bring the game. We bring the show. The Veddie Invitational and Champions Cup in the GTA.",
};

export default function PlayPage() {
  return (
    <div className="flex flex-col py-20 px-4 sm:px-6 lg:px-8">
      {/* HERO */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-accent/40 text-brand-accent text-xs font-bold tracking-widest uppercase mb-4">
          <Sparkles className="w-4 h-4" />
          2027 Founding Season
        </div>
        <h1 className="text-4xl sm:text-6xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
          Two April weekends. Pick yours.
        </h1>
        <p className="text-base sm:text-xl text-brand-muted max-w-xl mx-auto font-sans">
          You bring the game. We bring the show.
        </p>
      </div>

      {/* THREE DOORS SECTION (Captains, Players, Free Agents) */}
      <div className="max-w-4xl mx-auto w-full mb-16">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-1">
            How Do You Want to Enter?
          </span>
          <h2 className="text-2xl sm:text-3xl font-athletic text-brand-cream font-black">
            Three Ways onto the Ice
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Door 1: Captains */}
          <div className="p-6 rounded-2xl bg-[#0b203a] border-2 border-[#1c3f6e] hover:border-brand-accent transition-all flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-surface text-brand-accent flex items-center justify-center mb-4 border border-brand-border">
                <Trophy className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-accent block mb-1">
                Door 1 · Team Entry
              </span>
              <h3 className="text-xl font-athletic text-brand-cream font-bold mb-2">
                Team Captains
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6 font-sans">
                Get the complete captain's package, ready-to-paste team-chat poll, and claim your team's spot across Open, 40+, 50+ or 60+.
              </p>
            </div>
            <Link
              href="/tournaments#tournament-form"
              className="w-full py-3 px-4 rounded-xl bg-brand-accent text-brand-navy font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-brand-accent-hover transition-all"
            >
              <span>Get Captain's Package</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Door 2: Individual on a Team */}
          <div className="p-6 rounded-2xl bg-[#0b203a] border-2 border-[#1c3f6e] hover:border-brand-cream transition-all flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-surface text-brand-cream flex items-center justify-center mb-4 border border-brand-border">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-cream/80 block mb-1">
                Door 2 · Roster Member
              </span>
              <h3 className="text-xl font-athletic text-brand-cream font-bold mb-2">
                Join Your Team
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6 font-sans">
                Is your captain already coordinating your squad? Sign up to receive your digital player card, stall nameplate confirmation, and event schedule.
              </p>
            </div>
            <Link
              href="/tournaments#tournament-form"
              className="w-full py-3 px-4 rounded-xl bg-brand-surface border border-brand-border text-brand-cream font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-brand-card transition-all"
            >
              <span>Confirm Roster Spot</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Door 3: Free Agent */}
          <div className="p-6 rounded-2xl bg-[#0b203a] border-2 border-[#1c3f6e] hover:border-brand-accent transition-all flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-surface text-brand-accent flex items-center justify-center mb-4 border border-brand-border">
                <Swords className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-accent block mb-1">
                Door 3 · Solo Player
              </span>
              <h3 className="text-xl font-athletic text-brand-cream font-bold mb-2">
                Free Agent Draft
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6 font-sans">
                No team? No problem. We place individual skaters and goalies onto balanced rosters 14 days before puck drop. Full pro treatment guaranteed.
              </p>
            </div>
            <Link
              href="/leagues#league-form"
              className="w-full py-3 px-4 rounded-xl bg-brand-card border border-brand-border hover:border-brand-accent text-brand-cream font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all"
            >
              <span>Enter Free Agent Draft</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* CONTEST BANNER */}
      <div className="max-w-4xl mx-auto w-full mb-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-brand-card via-[#0b203a] to-brand-card border border-brand-accent/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="p-3.5 rounded-xl bg-brand-accent/10 border border-brand-accent/30 text-brand-accent shrink-0">
            <Gift className="w-6 h-6" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-accent mb-1 font-mono">
              Contest · Win Your Team's Weekend
            </div>
            <h3 className="text-xl font-athletic text-brand-cream font-bold mb-1">
              "I Used To… Now I’m a Veddie"
            </h3>
            <p className="text-xs text-slate-300 max-w-lg font-sans">
              Share your favourite minor hockey memory for a chance to win a Veddie hoodie and a team entry into our Richmond Hill Invitational.
            </p>
          </div>
        </div>
        <Link
          href="/contest"
          className="shrink-0 px-6 py-3 rounded-xl bg-brand-accent text-brand-navy font-bold text-xs uppercase tracking-wider hover:bg-brand-accent-hover transition-all"
        >
          Enter Contest &rarr;
        </Link>
      </div>

      {/* Main Events - First two cards, larger than rest per Nov 21 spec */}
      <div className="max-w-4xl mx-auto w-full space-y-6 mb-12">
        <h2 className="text-xs font-bold uppercase tracking-wider text-brand-accent">
          April 2027 Events · 2027 Founding Season
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

      {/* Secondary Options - Champions League & Leagues */}
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

      {/* Need Help Choosing? Renamed to "Ask us" per Nov 21 spec */}
      <div className="max-w-xl mx-auto w-full text-center p-8 rounded-2xl bg-brand-surface border border-brand-border">
        <h3 className="text-lg font-athletic text-brand-cream mb-2 font-bold">
          Not sure which program fits your squad?
        </h3>
        <p className="text-xs text-brand-muted mb-4 font-sans">
          Tell us where your team plays today and your age group. We’ll recommend the right division.
        </p>
        <Link
          href="/contact?topic=Division+placement"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand-card border border-brand-border hover:border-brand-accent text-brand-cream text-xs font-bold uppercase tracking-wider transition-all"
        >
          <span>Ask Us</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

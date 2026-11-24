import type { Metadata } from "next";
import Link from "next/link";
import { Trophy, Calendar, Swords, Users, ArrowRight, ShieldCheck, Gift } from "lucide-react";
import ShareToCaptainButton from "@/components/ShareToCaptainButton";

export const metadata: Metadata = {
  title: "Find Your Game",
  description:
    "Play men’s rec hockey in the GTA. Bring your team for a tournament weekend, find a weekly league or see where your home-league results can take you.",
};

export default function PlayPage() {
  return (
    <div className="flex flex-col py-20 px-4 sm:px-6 lg:px-8">
      {/* HERO */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl sm:text-6xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
          Find your game.
        </h1>
        <p className="text-base sm:text-xl text-brand-muted max-w-2xl mx-auto font-sans leading-relaxed mb-6">
          Play men’s rec hockey in the GTA. Bring your team for a tournament weekend, find a weekly league or see where your home-league results can take you.
        </p>
        <div>
          <a
            href="#upcoming-events"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-accent hover:underline"
          >
            See upcoming events &darr;
          </a>
        </div>
      </div>

      {/* WAYS TO PLAY (Moved above Upcoming Events per Nov 22 spec) */}
      <div className="max-w-4xl mx-auto w-full space-y-6 mb-20">
        <div className="text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-1">
            Program Overview
          </span>
          <h2 className="text-2xl sm:text-3xl font-athletic text-brand-cream font-black">
            Ways to Play
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Leagues */}
          <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-accent/50 transition-all flex flex-col justify-between group shadow-lg">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-brand-muted font-sans font-medium">
                  Coming September 2027
                </span>
                <Users className="w-5 h-5 text-brand-accent" />
              </div>
              <h3 className="text-2xl font-athletic text-brand-cream group-hover:text-brand-accent transition-colors font-bold mb-2">
                Leagues
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans mb-6">
                Play every week with your team or sign up as a free agent.
              </p>
            </div>
            <Link
              href="/leagues"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-accent group-hover:text-brand-cream transition-colors"
            >
              <span>Explore Leagues</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 2: Tournaments */}
          <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-accent/50 transition-all flex flex-col justify-between group shadow-lg">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-brand-accent font-sans font-semibold">
                  Tournament Weekends
                </span>
                <Calendar className="w-5 h-5 text-brand-accent" />
              </div>
              <h3 className="text-2xl font-athletic text-brand-cream group-hover:text-brand-accent transition-colors font-bold mb-2">
                Tournaments
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans mb-6">
                Bring your team for a weekend of hockey against teams at your level.
              </p>
            </div>
            <Link
              href="/tournaments"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-accent group-hover:text-brand-cream transition-colors"
            >
              <span>View Upcoming Tournaments</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 3: Champions League */}
          <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-accent/50 transition-all flex flex-col justify-between group shadow-lg">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-brand-muted font-sans font-medium">
                  Coming September 2027
                </span>
                <Swords className="w-5 h-5 text-brand-accent" />
              </div>
              <h3 className="text-2xl font-athletic text-brand-cream group-hover:text-brand-accent transition-colors font-bold mb-2">
                Champions League
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans mb-6">
                Keep playing in your home league and face teams from other leagues in midweek regional competition.
              </p>
            </div>
            <Link
              href="/champions-league"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-accent group-hover:text-brand-cream transition-colors"
            >
              <span>Explore Champions League</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 4: Champions Cup */}
          <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-red/50 transition-all flex flex-col justify-between group shadow-lg">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-brand-red font-sans font-semibold">
                  Premier Championship
                </span>
                <Trophy className="w-5 h-5 text-brand-red" />
              </div>
              <h3 className="text-2xl font-athletic text-brand-cream group-hover:text-brand-red transition-colors font-bold mb-2">
                Champions Cup
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans mb-6">
                Win your league playoffs or finish in the top quarter of your division to qualify for the Cup.
              </p>
            </div>
            <Link
              href="/champions-cup"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-red group-hover:text-brand-cream transition-colors"
            >
              <span>Check My Team’s Eligibility</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* UPCOMING EVENTS */}
      <div id="upcoming-events" className="max-w-4xl mx-auto w-full space-y-6 mb-20 scroll-mt-24">
        <div className="text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-1">
            Confirmed GTA Events
          </span>
          <h2 className="text-2xl sm:text-3xl font-athletic text-brand-cream font-black">
            Upcoming Events
          </h2>
        </div>

        {/* Card 1: The April Invitational */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-8 rounded-2xl bg-[#0b203a] border-2 border-[#1c3f6e] hover:border-brand-accent transition-all group shadow-xl gap-6">
          <div className="flex items-start sm:items-center gap-5">
            <div className="p-4 rounded-xl bg-brand-surface text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-navy transition-colors shrink-0">
              <Calendar className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <h3 className="text-2xl font-athletic text-brand-cream font-black">
                  The Veddie Invitational
                </h3>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-accent text-brand-navy font-bold">
                  Early April 2027
                </span>
              </div>
              <h4 className="text-sm font-semibold text-brand-cream/90 mb-1">
                Open, 40+, 50+ and 60+. Real refs, three games minimum and your name above the stall.
              </h4>
              <p className="text-xs text-slate-300 max-w-xl font-sans">
                Standalone weekend tournament with strict divisions, certified referees, and player stall nameplates.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:items-end gap-3 shrink-0">
            <Link
              href="/tournaments#tournament-form"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-accent text-brand-navy font-bold text-xs uppercase tracking-wider hover:bg-brand-accent-hover transition-all"
            >
              <span>Get Invitational Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <ShareToCaptainButton variant="minimal" customUrl="https://veddiehockey.com/tournaments" />
          </div>
        </div>

        {/* Card 2: Champions Cup */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-8 rounded-2xl bg-[#0b203a] border-2 border-[#1c3f6e] hover:border-brand-red transition-all group shadow-xl gap-6">
          <div className="flex items-start sm:items-center gap-5">
            <div className="p-4 rounded-xl bg-brand-surface text-brand-red group-hover:bg-brand-red group-hover:text-brand-navy transition-colors shrink-0">
              <Trophy className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <h3 className="text-2xl font-athletic text-brand-cream font-black">
                  The Veddie Champions Cup
                </h3>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-red text-brand-navy font-bold">
                  Dates & venue TBA
                </span>
              </div>
              <h4 className="text-sm font-semibold text-brand-cream/90 mb-1">
                For teams that earn their spot in their home league. The closest thing to the show.
              </h4>
              <p className="text-xs text-slate-300 max-w-xl font-sans">
                Win your league playoffs or finish in the top quarter of your standings, rounded up.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:items-end gap-3 shrink-0">
            <Link
              href="/champions-cup#qualification"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-red text-brand-navy font-black text-xs uppercase tracking-wider hover:bg-brand-red-hover transition-all"
            >
              <span>How Teams Qualify</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <ShareToCaptainButton variant="minimal" customUrl="https://veddiehockey.com/champions-cup" />
          </div>
        </div>
      </div>

      {/* NOT SURE WHERE YOU FIT */}
      <div className="max-w-2xl mx-auto w-full text-center p-8 rounded-2xl bg-brand-surface border border-brand-border">
        <h3 className="text-xl font-athletic text-brand-cream mb-2 font-bold">
          Not sure where you fit?
        </h3>
        <p className="text-xs text-brand-muted mb-6 font-sans max-w-md mx-auto leading-relaxed">
          Tell us where your team plays today and your age group. We’ll help you find the right level and event.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/divisions"
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-brand-card border border-brand-border hover:border-brand-accent text-brand-cream text-xs font-bold uppercase tracking-wider transition-all"
          >
            Explore Divisions
          </Link>
          <Link
            href="/contact?topic=Division+placement"
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-brand-red text-brand-navy text-xs font-black uppercase tracking-wider hover:bg-brand-red-hover transition-all"
          >
            Contact Placement Desk
          </Link>
        </div>
      </div>
    </div>
  );
}

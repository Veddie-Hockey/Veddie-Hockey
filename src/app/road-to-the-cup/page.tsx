import type { Metadata } from "next";
import Link from "next/link";
import { Trophy, Shield, CheckCircle2, ArrowRight, ExternalLink, Mail, Calendar } from "lucide-react";
import ShareToCaptainButton from "@/components/ShareToCaptainButton";

export const metadata: Metadata = {
  title: "Road to the Cup",
  description:
    "Road to the Champions Cup. The closest thing to the show starts in your home league. Who’s the team to beat in yours?",
};

export default function RoadToTheCupPage() {
  return (
    <div className="flex flex-col py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Hero */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-accent/40 text-brand-accent text-xs font-bold tracking-widest uppercase mb-6">
          <Trophy className="w-4 h-4" />
          HOME LEAGUE QUALIFICATION
        </div>

        <h1 className="text-4xl sm:text-6xl font-athletic text-brand-cream tracking-tight mb-4 font-black uppercase">
          Road to the Champions Cup
        </h1>

        <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto mb-8 font-sans font-medium">
          The closest thing to the show starts in your home league. Who’s the team to beat in yours?
        </p>

        {/* Rule copy & rounding example per Nov 21 spec */}
        <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-brand-surface border border-brand-border text-xs text-brand-muted leading-relaxed mb-8">
          <p className="text-sm font-bold text-brand-cream mb-2 font-athletic">
            Official Qualification Rule
          </p>
          <p>
            Win your league’s playoffs, or finish in the top quarter of its standings, rounded up. <strong>A 10-team league sends 3. In an 8-team division, 2 qualify.</strong>
          </p>
        </div>

        {/* Status labels per Nov 22 spec */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
          <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-brand-surface border border-brand-border text-brand-cream">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-accent" />
            In qualifying position
          </span>
          <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-brand-surface border border-brand-border text-brand-cream">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-green" />
            Qualified
          </span>
          <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-brand-surface border border-brand-border text-brand-cream">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-red" />
            Confirmed for April
          </span>
        </div>
      </div>

      {/* DATED VERIFIED STANDINGS NOTICE (Nov 21 spec: Remove current placeholder tables, publish first verified update Dec 1) */}
      <div className="p-8 sm:p-12 rounded-3xl bg-brand-surface border border-brand-border text-center max-w-3xl mx-auto mb-16 shadow-2xl">
        <div className="w-14 h-14 rounded-2xl bg-brand-accent/20 text-brand-accent flex items-center justify-center mx-auto mb-6">
          <Calendar className="w-7 h-7" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-athletic text-brand-cream font-black mb-3">
          First Verified Update Publishes December 1
        </h3>
        <p className="text-sm text-brand-muted max-w-xl mx-auto leading-relaxed mb-8 font-sans">
          We are currently auditing winter home league standings across Greater Toronto Area and Southern Ontario adult leagues. Each verified table will display its home league, division tier, official source link, and verification date.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/champions-cup#cup-form"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-brand-red text-brand-navy font-black text-xs uppercase tracking-wider hover:bg-brand-red-hover transition-all shadow-lg"
          >
            Claim Your Team’s Spot
          </Link>
          <a
            href="mailto:info@veddiehockey.com?subject=Claim%20or%20Correct%20Team%20Standings"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-brand-card border border-brand-border text-brand-cream text-xs font-bold uppercase tracking-wider hover:bg-brand-surface transition-all flex items-center justify-center gap-2"
          >
            <Mail className="w-3.5 h-3.5 text-brand-accent" />
            Claim or correct this team
          </a>
        </div>
      </div>

      {/* LEAGUE ORGANIZER BLOCK (Nov 21 spec) */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#0b203a] border-2 border-[#1c3f6e] max-w-4xl mx-auto text-center mb-16 shadow-2xl">
        <h3 className="text-2xl sm:text-3xl font-athletic text-brand-cream font-black mb-2">
          Your best teams represent your league on a bigger stage.
        </h3>
        <p className="text-sm text-slate-300 max-w-xl mx-auto mb-8 font-sans leading-relaxed">
          Home league commissioners and operations directors: submit your division leaders and playoff champions for formal eligibility verification.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/nominate"
            className="px-8 py-3.5 rounded-xl bg-brand-cream text-brand-navy font-black text-xs uppercase tracking-wider hover:bg-white transition-all shadow-md"
          >
            Nominate Your Top Teams
          </Link>
          <ShareToCaptainButton />
        </div>
      </div>
    </div>
  );
}

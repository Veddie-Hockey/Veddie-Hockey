"use client";

import Link from "next/link";
import { Shield, Trophy, ArrowRight, HelpCircle } from "lucide-react";
import ShareToCaptainButton from "@/components/ShareToCaptainButton";

export default function RankingsPage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-brand-navy via-brand-surface to-brand-navy border-b border-brand-border px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-accent/40 text-brand-accent text-xs font-bold tracking-widest uppercase mb-6">
            <Shield className="w-4 h-4" />
            VEDDIE TEAM RANKINGS
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-athletic text-brand-cream tracking-tight mb-6 font-black uppercase">
            Who’s the team to beat?
          </h1>

          <p className="text-base sm:text-xl text-brand-muted max-w-2xl mx-auto mb-8 leading-relaxed font-sans">
            Your home-league standings decide Champions Cup qualification. Once the puck drops this April, verified tournament and cup matches will determine the official Veddie Team Rankings.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link
              href="/road-to-the-cup"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-red text-brand-navy font-black uppercase tracking-wider text-sm hover:bg-brand-red-hover transition-all shadow-xl hover:shadow-brand-red/30 active:scale-95"
            >
              Follow the Road to the Cup
            </Link>
            <Link
              href="/champions-cup"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-card border border-brand-border text-brand-cream font-bold uppercase tracking-wider text-sm hover:bg-brand-card-hover transition-all"
            >
              Champions Cup Details
            </Link>
          </div>

          <div>
            <ShareToCaptainButton variant="minimal" />
          </div>
        </div>
      </section>

      {/* DATED EMPTY STATE PER NOV 21 SPEC */}
      <section className="py-24 bg-brand-navy border-b border-brand-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto p-10 sm:p-14 rounded-3xl bg-brand-surface border border-brand-border text-center shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-brand-accent/20 text-brand-accent flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-8 h-8" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-athletic text-brand-cream font-black mb-4">
            Real Results Only.
          </h2>
          <p className="text-base sm:text-lg text-slate-200 max-w-xl mx-auto leading-relaxed mb-8 font-sans">
            Veddie standings start with the first puck drop in April. Until then, follow the Road to the Cup to see which teams are in position to represent their home leagues.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/road-to-the-cup"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-red text-brand-navy text-xs font-black uppercase tracking-wider hover:bg-brand-red-hover transition-all shadow-lg"
            >
              Follow the Road to the Cup
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </Link>
            <Link
              href="/nominate"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-card border border-brand-border text-brand-cream text-xs font-bold uppercase tracking-wider hover:bg-brand-surface transition-all"
            >
              Nominate a Team
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs (Preserved and enhanced per Nov 21 spec) */}
      <section id="faqs" className="py-20 bg-brand-surface px-4 sm:px-6 lg:px-8 border-b border-brand-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-athletic text-brand-cream tracking-tight mb-8 text-center font-black">
            Rankings FAQs
          </h2>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-brand-card border border-brand-border">
              <h3 className="font-athletic text-brand-cream text-lg mb-2 font-bold">
                How do you rank the teams?
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed font-sans">
                We use the Elo rating system to rank teams based on Champions League and Champions Cup results. After each game, the winner gains points and the losing team gives up points. The change depends on how the two teams were rated before the game. Beating a higher-rated team earns you more points than beating a lower-rated team.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-card border border-brand-border">
              <h3 className="font-athletic text-brand-cream text-lg mb-2 font-bold">
                Do Champions Cup and Champions League count together?
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed font-sans">
                Yes. Eligible games from both competitions contribute to the same rating within your age and skill category.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-card border border-brand-border">
              <h3 className="font-athletic text-brand-cream text-lg mb-2 font-bold">
                Does entering more events automatically improve our ranking?
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed font-sans">
                No. More games provide more evidence, but your rating can rise or fall with results. There are no points simply for entering.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-card border border-brand-border">
              <h3 className="font-athletic text-brand-cream text-lg mb-2 font-bold">
                Can a D4 team be compared with a D1 team?
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed font-sans">
                Not through one combined ranking. Each age and skill category has its own table to preserve competitive integrity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

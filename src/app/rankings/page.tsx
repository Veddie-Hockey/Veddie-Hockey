"use client";

import { useState } from "react";
import Link from "next/link";
import { TEAMS_DATA, TeamProfile } from "@/data/rankings";
import EloInteractiveSandbox from "@/components/EloInteractiveSandbox";
import {
  Shield,
  Search,
  Filter,
  ArrowUp,
  ArrowDown,
  Minus,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Info,
} from "lucide-react";

export default function RankingsPage() {
  const [selectedDivision, setSelectedDivision] = useState<string>("All");
  const [selectedAge, setSelectedAge] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filtering
  const filteredTeams = TEAMS_DATA.filter((team) => {
    const matchesDiv = selectedDivision === "All" || team.division === selectedDivision;
    const matchesAge = selectedAge === "All" || team.ageCategory === selectedAge;
    const matchesSearch =
      searchQuery === "" ||
      team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      team.homeLeague.toLowerCase().includes(searchQuery.toLowerCase()) ||
      team.region.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDiv && matchesAge && matchesSearch;
  });

  // Sort by rating descending
  const sortedTeams = [...filteredTeams].sort((a, b) => b.rating - a.rating);

  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-brand-black via-brand-surface to-brand-black border-b border-brand-border px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-accent/40 text-brand-accent text-xs font-bold tracking-widest uppercase mb-6">
            <Shield className="w-4 h-4" />
            VEDDIE TEAM RANKINGS
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-athletic text-brand-cream tracking-tight mb-6 font-black">
            Earn your place. Make your name.
          </h1>

          <p className="text-base sm:text-xl text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Who’s setting the standard? Who’s climbing? Who’s next? The Veddie Team Rankings bring verified Champions League and Champions Cup results together so your team’s reputation is built on the ice.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#rankings"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-accent text-brand-black font-bold uppercase tracking-wider text-sm hover:bg-brand-accent-hover transition-all shadow-xl hover:shadow-brand-accent/20"
            >
              View the Rankings
            </a>
            <Link
              href="/play"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-card border border-brand-border text-brand-cream font-bold uppercase tracking-wider text-sm hover:bg-brand-card-hover transition-all"
            >
              Get Your Team Involved
            </Link>
          </div>
        </div>
      </section>

      {/* LEADERBOARD SECTION */}
      <section id="rankings" className="py-20 bg-brand-black border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-athletic text-brand-cream tracking-tight mb-2">
                See where your team stands.
              </h2>
              <p className="text-sm text-brand-muted">
                Choose your skill division and age category to explore teams competing in the Veddie championship network.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search team or league..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-brand-surface border border-brand-border text-brand-cream text-xs focus:outline-none focus:border-brand-accent transition-colors"
              />
            </div>
          </div>

          {/* Filter Bar */}
          <div className="p-4 rounded-2xl bg-brand-surface border border-brand-border mb-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-muted flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-brand-accent" />
                Skill:
              </span>
              <div className="flex items-center gap-1">
                {["All", "D1", "D2", "D3", "D4"].map((div) => (
                  <button
                    key={div}
                    onClick={() => setSelectedDivision(div)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                      selectedDivision === div
                        ? "bg-brand-accent text-brand-black"
                        : "bg-brand-card text-brand-muted hover:text-brand-cream"
                    }`}
                  >
                    {div}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-4 w-px bg-brand-border hidden sm:block" />

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                Age Category:
              </span>
              <div className="flex items-center gap-1">
                {["All", "Open 18+", "40+", "50+", "60+"].map((age) => (
                  <button
                    key={age}
                    onClick={() => setSelectedAge(age)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                      selectedAge === age
                        ? "bg-brand-accent text-brand-black"
                        : "bg-brand-card text-brand-muted hover:text-brand-cream"
                    }`}
                  >
                    {age}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Leaderboard Table */}
          <div className="bg-brand-surface border border-brand-border rounded-2xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-brand-border text-[11px] font-bold uppercase tracking-wider text-brand-muted bg-brand-card/70">
                    <th className="py-4 px-6">Rank</th>
                    <th className="py-4 px-4 text-center">Δ</th>
                    <th className="py-4 px-6">Team</th>
                    <th className="py-4 px-4">Division</th>
                    <th className="py-4 px-6">Home League / Region</th>
                    <th className="py-4 px-4 text-center">Record</th>
                    <th className="py-4 px-4 text-center">Games</th>
                    <th className="py-4 px-6 text-right">Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-border/40">
                  {sortedTeams.length > 0 ? (
                    sortedTeams.map((team, index) => {
                      const isProvisional = team.provisional;
                      return (
                        <tr
                          key={team.slug}
                          className="hover:bg-brand-card/60 transition-colors group"
                        >
                          {/* Rank */}
                          <td className="py-4 px-6 font-athletic font-bold text-base text-brand-cream">
                            {isProvisional ? (
                              <span className="text-xs font-sans text-brand-muted px-2 py-0.5 rounded bg-brand-card border border-brand-border">
                                Prov.
                              </span>
                            ) : (
                              `#${index + 1}`
                            )}
                          </td>

                          {/* Movement */}
                          <td className="py-4 px-4 text-center">
                            {team.movement === "NEW" ? (
                              <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-brand-accent/20 text-brand-accent">
                                NEW
                              </span>
                            ) : team.movement > 0 ? (
                              <span className="text-xs font-bold text-brand-green flex items-center justify-center gap-0.5">
                                <ArrowUp className="w-3.5 h-3.5" />
                                {team.movement}
                              </span>
                            ) : team.movement < 0 ? (
                              <span className="text-xs font-bold text-brand-red flex items-center justify-center gap-0.5">
                                <ArrowDown className="w-3.5 h-3.5" />
                                {Math.abs(team.movement)}
                              </span>
                            ) : (
                              <Minus className="w-3.5 h-3.5 text-brand-muted mx-auto" />
                            )}
                          </td>

                          {/* Team Name */}
                          <td className="py-4 px-6">
                            <Link
                              href={`/teams/${team.slug}`}
                              className="font-bold text-brand-cream group-hover:text-brand-accent transition-colors flex items-center gap-1.5"
                            >
                              <span>{team.name}</span>
                              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                          </td>

                          {/* Division */}
                          <td className="py-4 px-4">
                            <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-brand-card border border-brand-border text-brand-cream">
                              {team.division} • {team.ageCategory}
                            </span>
                          </td>

                          {/* League & Region */}
                          <td className="py-4 px-6 text-xs text-brand-muted">
                            <div className="text-brand-cream font-medium">{team.homeLeague}</div>
                            <div className="text-brand-muted text-[11px]">{team.region}</div>
                          </td>

                          {/* Record */}
                          <td className="py-4 px-4 text-center font-mono text-xs text-brand-cream">
                            {team.record.wins}–{team.record.losses}–{team.record.ties}
                          </td>

                          {/* Games */}
                          <td className="py-4 px-4 text-center font-mono text-xs text-brand-muted">
                            {team.gamesPlayed}
                          </td>

                          {/* Rating */}
                          <td className="py-4 px-6 text-right font-athletic font-bold text-lg text-brand-accent">
                            {team.rating}
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={8} className="py-12 text-center text-brand-muted text-sm">
                        No teams match those filters yet. Try another combination or{" "}
                        <Link href="/play" className="text-brand-accent underline">
                          register your team’s interest
                        </Link>
                        .
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="px-6 py-4 bg-brand-card/40 border-t border-brand-border text-xs text-brand-muted flex flex-col sm:flex-row items-center justify-between gap-2">
              <span className="flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-brand-accent" />
                Updated after verified match results are published. Teams under 5 games shown as Provisional.
              </span>
              <a href="#methodology" className="text-brand-accent hover:underline font-semibold">
                How Rankings Work &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY & INTERACTIVE SANDBOX */}
      <section id="methodology" className="py-24 bg-brand-surface border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
                Mathematical Model
              </span>
              <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-6">
                How the Elo rating system works.
              </h2>
              <div className="space-y-4 text-sm text-brand-muted leading-relaxed">
                <p>
                  Rather than accumulating hollow participation points, Veddie uses a modified competitive Elo system designed to reward opponent quality.
                </p>
                <div className="p-4 rounded-xl bg-brand-card border border-brand-border space-y-2 text-xs">
                  <p><strong>Base Rating:</strong> Every new team starts at 1,000 points in its respective division.</p>
                  <p><strong>Sensitivity:</strong> Fixed $K=32$ weight per match. Beating a higher-rated opponent yields significantly larger rating gains than beating an unranked team.</p>
                  <p><strong>Provisional Threshold:</strong> Numbered ranks appear after 5 verified matches. Earlier teams display as Provisional.</p>
                  <p><strong>Scope:</strong> Rating pools operate within each skill division and age bracket. Excludes forfeits and unplayed exhibitions.</p>
                </div>
              </div>
            </div>

            {/* Interactive Sandbox Widget */}
            <div>
              <EloInteractiveSandbox />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-brand-black px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-athletic text-brand-cream tracking-tight mb-8 text-center">
            Rankings FAQs
          </h2>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border">
              <h3 className="font-athletic text-brand-cream text-lg mb-2">
                Do Champions Cup and Champions League count together?
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Yes. Eligible games from both competitions contribute to the same rating within your age and skill category.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border">
              <h3 className="font-athletic text-brand-cream text-lg mb-2">
                Does entering more events automatically improve our ranking?
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                No. More games provide more evidence, but your rating can rise or fall with results. There are no points simply for entering.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border">
              <h3 className="font-athletic text-brand-cream text-lg mb-2">
                Can a D4 team be compared with a D1 team?
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Not through one combined ranking. Each age and skill category has its own table to preserve competitive integrity.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border">
              <h3 className="font-athletic text-brand-cream text-lg mb-2">
                Why might a Cup winner not be ranked first?
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                The Cup title reflects that event’s outcome. The ranking reflects the team’s wider eligible record and opponent strength across all rated games.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

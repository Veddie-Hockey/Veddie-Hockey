import type { Metadata } from "next";
import Link from "next/link";
import { Trophy, Shield, CheckCircle2, AlertCircle, ArrowRight, ExternalLink } from "lucide-react";
import QualificationCalculator from "@/components/QualificationCalculator";

export const metadata: Metadata = {
  title: "Road to the Cup Watchlist | Veddie Hockey",
  description:
    "Follow the official Road to the Cup watchlist tracking qualifying adult hockey teams across Southern Ontario leagues.",
};

interface WatchlistLeague {
  leagueName: string;
  region: string;
  division: string;
  totalTeams: number;
  qualifyingPlaces: number; // ceiling(N/4)
  standings: {
    rank: number;
    teamName: string;
    points: number;
    record: string;
    status: "Confirmed Entrant" | "Eligible for Invitation" | "In Qualification Zone" | "Playoff Bubble" | "Outside";
  }[];
}

const WATCHLIST_DATA: WatchlistLeague[] = [
  {
    leagueName: "Halton Adult Hockey League",
    region: "GTA West / Halton",
    division: "Tier 1 Elite (D1 Open)",
    totalTeams: 8,
    qualifyingPlaces: 2, // ceiling(8/4) = 2
    standings: [
      { rank: 1, teamName: "Oakville Steelheads", points: 28, record: "13–1–2", status: "Confirmed Entrant" },
      { rank: 2, teamName: "Burlington Blades", points: 24, record: "11–3–2", status: "In Qualification Zone" },
      { rank: 3, teamName: "Milton Predators", points: 21, record: "10–5–1", status: "Playoff Bubble" },
      { rank: 4, teamName: "Halton Hawks", points: 18, record: "8–6–2", status: "Outside" },
    ],
  },
  {
    leagueName: "Metro North Senior Hockey",
    region: "Toronto / GTA North",
    division: "Premier Division (D1 Open)",
    totalTeams: 10,
    qualifyingPlaces: 3, // ceiling(10/4) = 3
    standings: [
      { rank: 1, teamName: "Toronto Brass Anchors", points: 34, record: "16–2–2", status: "Confirmed Entrant" },
      { rank: 2, teamName: "Vaughan Vipers", points: 31, record: "14–3–3", status: "Eligible for Invitation" },
      { rank: 3, teamName: "Richmond Hill Kings", points: 29, record: "13–4–3", status: "In Qualification Zone" },
      { rank: 4, teamName: "Markham Thunder", points: 26, record: "12–6–2", status: "Playoff Bubble" },
    ],
  },
  {
    leagueName: "Grand River Men's League",
    region: "Kitchener-Waterloo",
    division: "Masters Competitive (D2 40+)",
    totalTeams: 6,
    qualifyingPlaces: 2, // ceiling(6/4) = 2
    standings: [
      { rank: 1, teamName: "Kitchener Dutchmen Masters", points: 26, record: "12–2–2", status: "Eligible for Invitation" },
      { rank: 2, teamName: "Waterloo Wolves Alumni", points: 23, record: "10–3–3", status: "In Qualification Zone" },
      { rank: 3, teamName: "Cambridge Hornets", points: 19, record: "8–5–3", status: "Playoff Bubble" },
      { rank: 4, teamName: "Guelph Rusty Blades", points: 15, record: "6–7–3", status: "Outside" },
    ],
  },
];

export default function RoadToTheCupPage() {
  return (
    <div className="flex flex-col py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Hero */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-accent/40 text-brand-accent text-xs font-bold tracking-widest uppercase mb-6">
          <Trophy className="w-4 h-4" />
          QUALIFICATION TRACKER
        </div>

        <h1 className="text-4xl sm:text-6xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
          Road to the Champions Cup
        </h1>

        <p className="text-base sm:text-lg text-brand-muted max-w-2xl mx-auto mb-8">
          The live watchlist tracking teams inside the qualification line across Southern Ontario leagues. Earn your place on the ice.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-surface border border-brand-border text-brand-cream">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-green" />
            Top 25% Rule: ceiling(N ÷ 4)
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-surface border border-brand-border text-brand-cream">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-accent" />
            Playoff Champion Auto-Bid
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-surface border border-brand-border text-brand-cream">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-ice" />
            $0 Entry Inaugural Pilot
          </span>
        </div>
      </div>

      {/* Leagues Watchlist */}
      <div className="space-y-10 mb-16">
        {WATCHLIST_DATA.map((league) => (
          <div
            key={league.leagueName}
            className="bg-brand-surface border border-brand-border rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="p-6 bg-brand-card border-b border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block">
                  {league.region}
                </span>
                <h3 className="text-2xl font-athletic text-brand-cream tracking-tight mt-1">
                  {league.leagueName}
                </h3>
                <p className="text-xs text-brand-muted mt-0.5">
                  Division: <strong className="text-brand-cream">{league.division}</strong> • {league.totalTeams} Total Teams
                </p>
              </div>

              <div className="bg-brand-surface border border-brand-border px-4 py-2 rounded-xl text-center self-start sm:self-auto">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-muted block">
                  Guaranteed Cup Bids
                </span>
                <span className="text-lg font-athletic font-bold text-brand-accent">
                  Top {league.qualifyingPlaces} Teams
                </span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-brand-border text-[11px] font-bold uppercase tracking-wider text-brand-muted bg-brand-surface">
                    <th className="py-3 px-6">Pos</th>
                    <th className="py-3 px-6">Team</th>
                    <th className="py-3 px-4 text-center">PTS</th>
                    <th className="py-3 px-4 text-center">Record</th>
                    <th className="py-3 px-6 text-right">Qualification Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-border/40">
                  {league.standings.map((team) => {
                    const isCutoff = team.rank === league.qualifyingPlaces;
                    return (
                      <tr
                        key={team.teamName}
                        className={`hover:bg-brand-card/50 transition-colors ${
                          isCutoff ? "border-b-2 border-brand-accent/40" : ""
                        }`}
                      >
                        <td className="py-4 px-6 font-athletic font-bold text-base text-brand-cream">
                          #{team.rank}
                        </td>
                        <td className="py-4 px-6 font-bold text-brand-cream">
                          {team.teamName}
                        </td>
                        <td className="py-4 px-4 text-center font-mono font-bold text-brand-cream">
                          {team.points}
                        </td>
                        <td className="py-4 px-4 text-center font-mono text-xs text-brand-muted">
                          {team.record}
                        </td>
                        <td className="py-4 px-6 text-right">
                          <span
                            className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                              team.status === "Confirmed Entrant"
                                ? "bg-brand-green/20 text-brand-green border-brand-green/40"
                                : team.status === "Eligible for Invitation"
                                ? "bg-brand-accent/20 text-brand-accent border-brand-accent/40"
                                : team.status === "In Qualification Zone"
                                ? "bg-brand-ice/20 text-brand-ice border-brand-ice/40"
                                : team.status === "Playoff Bubble"
                                ? "bg-brand-card text-brand-cream border-brand-border"
                                : "bg-brand-navy text-brand-muted border-brand-border"
                            }`}
                          >
                            {team.status}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="px-6 py-3 bg-brand-navy/50 border-t border-brand-border text-[11px] text-brand-muted flex items-center justify-between">
              <span>Cutoff line indicated after position #{league.qualifyingPlaces}.</span>
              <Link
                href="/champions-cup#cup-form"
                className="text-brand-accent hover:underline font-semibold"
              >
                Claim or verify team &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Qualification Calculator */}
      <div className="mb-16">
        <QualificationCalculator />
      </div>

      {/* Standings Verification CTA */}
      <div className="p-8 sm:p-12 rounded-2xl bg-brand-surface border border-brand-accent/30 text-center">
        <h3 className="text-2xl sm:text-3xl font-athletic text-brand-cream mb-3">
          Is your team leading your home division?
        </h3>
        <p className="text-sm text-brand-muted max-w-xl mx-auto mb-6">
          Submit your league standings link to add your division to the official Road to the Cup watchlist.
        </p>
        <Link
          href="/champions-cup#cup-form"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-accent text-brand-navy font-bold text-xs font-bold uppercase tracking-wider hover:bg-brand-accent-hover transition-all"
        >
          Put Your Team Forward
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TEAMS_DATA } from "@/data/rankings";
import {
  Shield,
  Trophy,
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Share2,
  ExternalLink,
  Award,
} from "lucide-react";

interface TeamPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return TEAMS_DATA.map((team) => ({
    slug: team.slug,
  }));
}

export function generateMetadata({ params }: TeamPageProps): Metadata {
  const team = TEAMS_DATA.find((t) => t.slug === params.slug);
  if (!team) {
    return { title: "Team Not Found | Veddie Hockey" };
  }
  return {
    title: `${team.name} | Veddie Team Profile`,
    description: `Official rating, match record and tournament history for ${team.name} in Veddie adult hockey competition.`,
  };
}

export default function TeamProfilePage({ params }: TeamPageProps) {
  const team = TEAMS_DATA.find((t) => t.slug === params.slug);

  if (!team) {
    notFound();
  }

  return (
    <div className="flex flex-col py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto w-full">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/rankings"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-muted hover:text-brand-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Team Rankings
          </Link>
        </div>

        {/* Team Profile Header Card */}
        <div className="bg-brand-surface border border-brand-border rounded-2xl p-6 sm:p-10 mb-8 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="text-xs font-bold font-mono px-2.5 py-1 rounded bg-brand-card border border-brand-border text-brand-accent">
                  {team.division} • {team.ageCategory}
                </span>
                <span className="text-xs text-brand-muted">
                  {team.region} Region
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-2 font-black">
                {team.name}
              </h1>
              <p className="text-sm text-brand-muted">
                Home League: <strong className="text-brand-cream">{team.homeLeague}</strong>
              </p>
            </div>

            {/* Rating Display */}
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 text-center min-w-[160px] self-start">
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-muted block mb-1">
                Current Elo Rating
              </span>
              <span className="text-4xl font-athletic font-bold text-brand-accent block">
                {team.rating}
              </span>
              <span className="text-xs font-mono text-brand-muted">
                {team.provisional ? "Provisional Status" : "Official Standing"}
              </span>
            </div>
          </div>

          <p className="text-sm text-brand-muted leading-relaxed mb-8 max-w-2xl">
            {team.bio}
          </p>

          {/* Stats Summary Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-brand-navy/60 border border-brand-border text-center">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-muted block">
                Total Games
              </span>
              <span className="text-xl font-athletic text-brand-cream font-bold">
                {team.gamesPlayed}
              </span>
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-muted block">
                Wins
              </span>
              <span className="text-xl font-athletic text-brand-green font-bold">
                {team.record.wins}
              </span>
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-muted block">
                Losses
              </span>
              <span className="text-xl font-athletic text-brand-red font-bold">
                {team.record.losses}
              </span>
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-muted block">
                Ties
              </span>
              <span className="text-xl font-athletic text-brand-muted font-bold">
                {team.record.ties}
              </span>
            </div>
          </div>
        </div>

        {/* Honours & Awards */}
        {team.honours.length > 0 && (
          <div className="mb-8 p-6 rounded-2xl bg-brand-surface border border-brand-accent/30">
            <h3 className="text-base font-athletic text-brand-cream uppercase tracking-wide flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-brand-accent" />
              Honours & Trophies
            </h3>
            <div className="flex flex-wrap gap-2">
              {team.honours.map((honour, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg bg-brand-card border border-brand-border text-xs text-brand-cream font-medium"
                >
                  🏆 {honour}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Verified Match History */}
        <div className="bg-brand-surface border border-brand-border rounded-2xl p-6 sm:p-8">
          <h3 className="text-xl font-athletic text-brand-cream tracking-tight mb-6">
            Verified Competition Match Log
          </h3>

          {team.matches.length > 0 ? (
            <div className="space-y-3">
              {team.matches.map((match) => (
                <div
                  key={match.id}
                  className="p-4 rounded-xl bg-brand-card border border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs text-brand-muted mb-1">
                      <span>{match.date}</span>
                      <span>•</span>
                      <span className="text-brand-accent font-semibold">{match.competition}</span>
                      <span>•</span>
                      <span>{match.round}</span>
                    </div>
                    <div className="text-base font-bold text-brand-cream flex items-center gap-2">
                      <span>vs. {match.opponentName}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 sm:self-center">
                    <span className="font-mono text-base font-bold text-brand-cream">
                      {match.score}
                    </span>
                    <span
                      className={`px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider ${
                        match.outcome === "W"
                          ? "bg-brand-green/20 text-brand-green border border-brand-green/40"
                          : match.outcome === "L"
                          ? "bg-brand-red/20 text-brand-red border border-brand-red/40"
                          : "bg-brand-accent/20 text-brand-accent border border-brand-accent/40"
                      }`}
                    >
                      {match.outcome === "W" ? "WIN" : match.outcome === "L" ? "LOSS" : "TIE"}
                    </span>
                    <span
                      className={`text-xs font-mono font-bold ${
                        match.ratingChange >= 0 ? "text-brand-green" : "text-brand-red"
                      }`}
                    >
                      {match.ratingChange >= 0 ? `+${match.ratingChange}` : match.ratingChange}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 rounded-xl bg-brand-card/50 border border-brand-border text-center text-xs text-brand-muted">
              Official verified match records will populate here following upcoming tournament play.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TEAMS_DATA, findTeamBySlug } from "@/data/rankings";
import {
  Shield,
  Trophy,
  ArrowLeft,
  Mail,
  Award,
} from "lucide-react";
import ShareToCaptainButton from "@/components/ShareToCaptainButton";

interface TeamPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const slugs: { slug: string }[] = [];
  TEAMS_DATA.forEach((team) => {
    slugs.push({ slug: team.slug });
    if (team.aliases) {
      team.aliases.forEach((alias) => slugs.push({ slug: alias }));
    }
  });
  return slugs;
}

export function generateMetadata({ params }: TeamPageProps): Metadata {
  const team = findTeamBySlug(params.slug);
  if (!team) {
    return { title: "Team Not Found" };
  }
  return {
    title: `${team.name} - Team Profile`,
    description: `Official profile and qualification status for ${team.name} in Veddie adult hockey competition.`,
  };
}

export default function TeamProfilePage({ params }: TeamPageProps) {
  const team = findTeamBySlug(params.slug);

  if (!team) {
    notFound();
  }

  return (
    <div className="flex flex-col py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto w-full">
        {/* Back Link */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/road-to-the-cup"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-muted hover:text-brand-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Road to the Cup
          </Link>

          <ShareToCaptainButton variant="minimal" />
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

            {/* Standing Status Display */}
            <div className="bg-brand-card border border-brand-border rounded-xl p-5 text-center min-w-[200px] self-start">
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-muted block mb-1">
                Veddie Standing
              </span>
              <span className="text-xl font-athletic font-bold text-brand-accent block">
                Pending April 2027
              </span>
              <span className="text-xs font-mono text-brand-muted">
                Real Results Only
              </span>
            </div>
          </div>

          <p className="text-sm text-brand-muted leading-relaxed mb-8 max-w-2xl font-sans">
            {team.bio}
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-brand-navy/60 border border-brand-border text-center">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-muted block">
                Games Played
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
                {team.record?.wins ?? "—"}
              </span>
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-muted block">
                Losses
              </span>
              <span className="text-xl font-athletic text-brand-red font-bold">
                {team.record?.losses ?? "—"}
              </span>
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-muted block">
                Ties
              </span>
              <span className="text-xl font-athletic text-brand-muted font-bold">
                {team.record?.ties ?? "—"}
              </span>
            </div>
          </div>
        </div>

        {/* Home League Honours (Nov 21 spec: shown separately with source) */}
        {team.honours.length > 0 && (
          <div className="mb-8 p-6 rounded-2xl bg-brand-surface border border-brand-accent/30">
            <h3 className="text-base font-athletic text-brand-cream uppercase tracking-wide flex items-center gap-2 mb-4 font-bold">
              <Award className="w-5 h-5 text-brand-accent" />
              Home League Honours & Verifications
            </h3>
            <div className="flex flex-wrap gap-2">
              {team.honours.map((honour, i) => (
                <span
                  key={i}
                  className="px-3.5 py-2 rounded-xl bg-brand-card border border-brand-border text-xs text-brand-cream font-medium"
                >
                  🏆 {honour}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Verified Match History */}
        <div className="bg-brand-surface border border-brand-border rounded-2xl p-6 sm:p-8 mb-8">
          <h3 className="text-xl font-athletic text-brand-cream tracking-tight mb-4 font-bold">
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
                  <div className="font-mono text-base font-bold text-brand-cream">
                    {match.score}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 rounded-xl bg-brand-card/50 border border-brand-border text-center text-xs text-brand-muted font-sans leading-relaxed">
              Official verified match records will populate here following puck drop at the April 2027 Invitational and Champions Cup tournaments.
            </div>
          )}
        </div>

        {/* Profile Correction Contact (Nov 21 spec) */}
        <div className="p-6 rounded-2xl bg-brand-card border border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span className="text-brand-muted">
            Are you the captain of {team.name}? Need to update home league standings or roster notes?
          </span>
          <a
            href={`mailto:info@veddiehockey.com?subject=Profile%20Update%20Request%20-%20${encodeURIComponent(team.name)}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-surface border border-brand-border text-brand-cream hover:text-brand-accent transition-colors font-bold uppercase tracking-wider shrink-0"
          >
            <Mail className="w-3.5 h-3.5 text-brand-accent" />
            Claim or correct this profile
          </a>
        </div>
      </div>
    </div>
  );
}

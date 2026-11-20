import type { Metadata } from "next";
import Link from "next/link";
import { Trophy, Swords, Calendar, Users, HelpCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Find Your Game | Veddie Hockey",
  description:
    "A title, a weekly team or your next skate. Choose how you want to play and register your interest with Veddie Hockey.",
};

export default function PlayPage() {
  const choices = [
    {
      title: "Champions Cup",
      tagline: "My team wants to represent our league.",
      description: "Flagship championship for qualifying teams. $0 team entry pilot with funded prizes.",
      href: "/champions-cup#cup-form",
      icon: Trophy,
      badge: "Accepting Interest",
    },
    {
      title: "Champions League",
      tagline: "My team wants a cross-league challenge.",
      description: "Midweek regional knockout competition running alongside your home regular season.",
      href: "/champions-league#league-form",
      icon: Swords,
      badge: "Planned Circuit",
    },
    {
      title: "Tournaments",
      tagline: "We want a standalone event.",
      description: "Weekend invitationals with 3 guaranteed games, strict divisions, and pro atmosphere.",
      href: "/tournaments#tournament-form",
      icon: Calendar,
      badge: "Accepting Interest",
    },
    {
      title: "Leagues",
      tagline: "I want a team or a full season.",
      description: "Consistent weekly game nights, certified referees, full stats, and intact or free-agent entry.",
      href: "/leagues#league-form",
      icon: Users,
      badge: "Accepting Interest",
    },
  ];

  return (
    <div className="flex flex-col py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
          Interactive Navigator
        </span>
        <h1 className="text-4xl sm:text-6xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
          What are you playing for?
        </h1>
        <p className="text-base sm:text-lg text-brand-muted max-w-xl mx-auto">
          A title. A weekly team. A great skate. Choose your next game and we’ll point you in the right direction.
        </p>
      </div>

      {/* Choice Grid */}
      <div className="max-w-4xl mx-auto w-full space-y-4 mb-16">
        {choices.map((choice) => {
          const Icon = choice.icon;
          return (
            <Link
              key={choice.title}
              href={choice.href}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-6 sm:p-8 rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-accent/60 hover:bg-brand-card transition-all group shadow-lg"
            >
              <div className="flex items-start sm:items-center gap-4 mb-4 sm:mb-0">
                <div className="p-3.5 rounded-xl bg-brand-card group-hover:bg-brand-accent/20 text-brand-cream group-hover:text-brand-accent transition-colors shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-athletic text-brand-cream group-hover:text-brand-accent transition-colors">
                      {choice.title}
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-card text-brand-muted border border-brand-border">
                      {choice.badge}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-brand-cream/90 mb-1">
                    {choice.tagline}
                  </h4>
                  <p className="text-xs text-brand-muted max-w-lg">
                    {choice.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-accent sm:self-center shrink-0">
                <span>Select</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Not sure yet? */}
      <div className="max-w-2xl mx-auto w-full p-8 rounded-2xl bg-brand-surface border border-brand-accent/30 text-center">
        <HelpCircle className="w-8 h-8 text-brand-accent mx-auto mb-3" />
        <h3 className="text-2xl font-athletic text-brand-cream mb-2">
          Not sure yet?
        </h3>
        <p className="text-sm text-brand-muted leading-relaxed mb-6">
          Tell us your location, level and what you’re looking for. We’ll help you find a starting point.
        </p>
        <Link
          href="/contact?topic=help-choosing"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-accent text-brand-navy font-bold text-xs font-bold uppercase tracking-wider hover:bg-brand-accent-hover transition-all"
        >
          Help Me Choose
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

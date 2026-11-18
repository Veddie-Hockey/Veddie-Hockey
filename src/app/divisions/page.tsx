import type { Metadata } from "next";
import Link from "next/link";
import { Shield, CheckCircle2, AlertTriangle, ArrowRight, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Find Your Hockey Division | Veddie Hockey",
  description:
    "Understand Veddie’s D1–D4 levels and Open 18+, 40+, 50+ and 60+ categories. Find a fit based on current ability and playing background.",
};

export default function DivisionsPage() {
  const divisions = [
    {
      code: "D1",
      name: "Elite",
      tagline: "Former Major Junior, NCAA, Pro & USports Alumni",
      badgeColor: "text-brand-accent border-brand-accent/40 bg-brand-accent/10",
      description:
        "Strong teams featuring former professional, university, college, or major junior players. Former professionals are permitted; the strongest amateur teams are also welcome. Currently active professionals are excluded.",
      background: [
        "Former NHL, AHL, ECHL, European Pro alumni",
        "NCAA Division I & III, USports, Major Junior (OHL/WHL/QMJHL)",
        "Junior A alumni & top-tier competitive men's squads",
      ],
      keyRule: "Active professionals excluded. Former pros permitted.",
    },
    {
      code: "D2",
      name: "Competitive",
      tagline: "AAA, AA, Junior B/C & Advanced Recreational",
      badgeColor: "text-brand-cream border-brand-border bg-brand-surface",
      description:
        "Strong recreational teams, typically with AAA, AA, A or extensive organized-hockey experience. No former professionals. Junior, college and university experience triggers an Elite review; Competitive placement requires approval based on the level played, player age, years since that level and current ability.",
      background: [
        "AAA and AA minor hockey alumni",
        "Junior B and Junior C alumni (subject to age and hiatus review)",
        "Accomplished competitive recreational players",
      ],
      keyRule: "No former professionals. Junior alumni reviewed based on recency.",
    },
    {
      code: "D3",
      name: "Intermediate",
      tagline: "Strong Recreational, High School & House A",
      badgeColor: "text-brand-cream border-brand-border bg-brand-surface",
      description:
        "Balanced recreational teams with solid hockey sense and team skating. Players with high school, select, or upper house-league backgrounds. Standout skaters and goalies are reviewed to prevent division distortion.",
      background: [
        "High school varsity & Select hockey alumni",
        "Established adult recreational players",
        "Competent team systems and structured play",
      ],
      keyRule: "No AAA or Junior alumni permitted without long hiatus and committee approval.",
    },
    {
      code: "D4",
      name: "Recreational",
      tagline: "True Rec, Adult-Learners & House League",
      badgeColor: "text-brand-muted border-brand-border bg-brand-black",
      description:
        "Teams primarily from house-league, adult-entry and lower-level recreational backgrounds. No former professionals and no players whose current ability materially exceeds the division. A strong AAA player is not automatically eligible simply because they never played junior.",
      background: [
        "Adult-onset hockey players & lower house-league veterans",
        "Fun, social hockey focused on fitness, exercise and camaraderie",
        "Zero tolerance for aggressive or overly dominant play",
      ],
      keyRule: "Strictly enforced ceiling. Over-skilled players reassigned.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-brand-black via-brand-surface to-brand-black border-b border-brand-border px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-border text-brand-accent text-xs font-bold tracking-widest uppercase mb-6">
            <Shield className="w-4 h-4" />
            COMPETITIVE INTEGRITY
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-athletic text-brand-cream tracking-tight mb-6 font-black">
            Find your pace. Find your people.
          </h1>

          <p className="text-base sm:text-xl text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Good hockey starts with players who belong on the same ice. Our 16-division menu combines four clear skill levels with four age categories to preserve fair, authentic competition.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/play"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-accent text-brand-black font-bold uppercase tracking-wider text-sm hover:bg-brand-accent-hover transition-all shadow-xl hover:shadow-brand-accent/20"
            >
              Find Your Game
            </Link>
            <Link
              href="/contact?topic=Division%20placement"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-card border border-brand-border text-brand-cream font-bold uppercase tracking-wider text-sm hover:bg-brand-card-hover transition-all"
            >
              Ask About Placement
            </Link>
          </div>
        </div>
      </section>

      {/* SKILL DIVISIONS BREAKDOWN */}
      <section className="py-24 bg-brand-black border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
              The Four Skill Tiers
            </span>
            <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4">
              Skill divisions explained.
            </h2>
            <p className="text-base text-brand-muted">
              We look beyond simplistic home-league letter grades (A, B, C, D) and assess current roster caliber and player backgrounds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {divisions.map((div) => (
              <div
                key={div.code}
                className="bg-brand-surface border border-brand-border rounded-2xl p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-sm font-athletic font-bold px-3 py-1 rounded-lg border uppercase tracking-wider ${div.badgeColor}`}
                    >
                      {div.code} — {div.name}
                    </span>
                    <span className="text-xs text-brand-muted font-mono">
                      Tier {div.code}
                    </span>
                  </div>

                  <h3 className="text-xl font-athletic text-brand-cream mb-2">
                    {div.tagline}
                  </h3>
                  <p className="text-sm text-brand-muted leading-relaxed mb-6">
                    {div.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-cream block">
                      Typical Background:
                    </span>
                    {div.background.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-brand-muted">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-brand-card border border-brand-border flex items-center gap-2.5 text-xs text-brand-cream">
                  <AlertTriangle className="w-4 h-4 text-brand-accent shrink-0" />
                  <span>
                    <strong>Rule:</strong> {div.keyRule}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* AGE CATEGORIES BREAKDOWN */}
          <div className="p-8 sm:p-12 rounded-2xl bg-brand-surface border border-brand-border">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
              Inclusivity & Speed Matching
            </span>
            <h3 className="text-2xl sm:text-4xl font-athletic text-brand-cream mb-4">
              Four Age Categories
            </h3>
            <p className="text-sm text-brand-muted max-w-2xl mb-8 leading-relaxed">
              Every player must meet the selected category’s minimum age on the published competition-wide cutoff date. Open has no upper age limit.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-xl bg-brand-card border border-brand-border">
                <span className="text-2xl font-athletic text-brand-accent font-bold block mb-1">
                  Open 18+
                </span>
                <p className="text-xs text-brand-muted">
                  Ages 18 and older. Fastest tempo with no age cap.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-brand-card border border-brand-border">
                <span className="text-2xl font-athletic text-brand-accent font-bold block mb-1">
                  40+ Masters
                </span>
                <p className="text-xs text-brand-muted">
                  Minimum age 40 by cutoff. Competitive veteran hockey.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-brand-card border border-brand-border">
                <span className="text-2xl font-athletic text-brand-accent font-bold block mb-1">
                  50+ Seniors
                </span>
                <p className="text-xs text-brand-muted">
                  Minimum age 50 by cutoff. Great hockey with seasoned hockey sense.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-brand-card border border-brand-border">
                <span className="text-2xl font-athletic text-brand-accent font-bold block mb-1">
                  60+ Legends
                </span>
                <p className="text-xs text-brand-muted">
                  Minimum age 60 by cutoff. Lifelong hockey players who still bring it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLACEMENT REVIEW CALLOUT */}
      <section className="py-20 bg-brand-surface px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <HelpCircle className="w-10 h-10 text-brand-accent mx-auto mb-4" />
          <h2 className="text-3xl font-athletic text-brand-cream mb-3">
            Unsure which division fits your roster?
          </h2>
          <p className="text-sm text-brand-muted mb-8 leading-relaxed">
            Our placement team reviews captain submissions, player backgrounds, and standings history to guarantee fair games for everyone.
          </p>
          <Link
            href="/contact?topic=Division%20placement"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-accent text-brand-black text-xs font-bold uppercase tracking-wider hover:bg-brand-accent-hover transition-all"
          >
            Request Division Review
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

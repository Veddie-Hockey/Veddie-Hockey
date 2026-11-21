import type { Metadata } from "next";
import Link from "next/link";
import { Trophy, Shield, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import QualificationCalculator from "@/components/QualificationCalculator";
import ShareToCaptainButton from "@/components/ShareToCaptainButton";

export const metadata: Metadata = {
  title: "Veddie Champions Cup, April 2027 | Veddie Hockey",
  description:
    "The closest thing to the show. Late April in Richmond Hill, for teams that earn their spot in their home league.",
};

export default function ChampionsCupPage() {
  const atEventCupAmenities = [
    { title: "Player stall nameplates", desc: "Your personalized name, squad number, and team crest above your stall." },
    { title: "Room ready on arrival", desc: "Team name on the door, clean room, and lineup board ready." },
    { title: "Starting lineup intros", desc: "Starting goalie and skaters announced over arena sound before puck drop." },
    { title: "PA announcements", desc: "In-game goal calls, penalties, and period summaries over the arena sound." },
    { title: "Certified refs & timekeeper", desc: "Two certified on-ice officials and a dedicated scorekeeper every game." },
    { title: "Athletic therapist on site", desc: "Pregame taping, acute injury assessment, and ice bags in the room." },
    { title: "Team photo & final-score graphic", desc: "Team photo, final-score graphic and highlights for every team within 72 hours." },
    { title: "Livestream of the finals", desc: "Championship final broadcasts streamed live with score overlay." },
    { title: "Post-game interview wall", desc: "Captain and player interviews against the official championship backdrop." },
    { title: "Post-game refreshments", desc: "Cold beverages ready in the room after the final buzzer." },
  ];

  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-brand-navy via-brand-surface to-brand-navy border-b border-brand-border px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-accent/40 text-brand-accent text-xs font-bold tracking-widest uppercase mb-6">
            <Trophy className="w-4 h-4" />
            Late April 2027 · Richmond Hill
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-athletic text-brand-cream tracking-tight mb-4 font-black uppercase">
            Your league was just the beginning.
          </h1>

          <p className="text-xl sm:text-2xl font-bold text-brand-accent font-athletic uppercase tracking-wider mb-6">
            The closest thing to the show.
          </p>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
            Late April in Richmond Hill, for teams that earn their spot in their home league. Win your playoffs or finish in the top quarter of your standings to represent your league.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="#cup-form"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-red text-brand-navy font-black uppercase tracking-wider text-sm hover:bg-brand-red-hover transition-all shadow-xl hover:shadow-brand-red/30 active:scale-95"
            >
              Check My Team’s Eligibility
            </a>
            <a
              href="#qualification"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-card border border-brand-border text-brand-cream font-bold uppercase tracking-wider text-sm hover:bg-brand-card-hover transition-all"
            >
              See How Qualification Works
            </a>
          </div>

          <div>
            <ShareToCaptainButton variant="minimal" />
          </div>
        </div>
      </section>

      {/* THREE STEP QUALIFYING PROCESS (Nov 21 spec) */}
      <section className="py-20 bg-brand-navy border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
              Three-Step Qualification
            </span>
            <h2 className="text-3xl sm:text-4xl font-athletic text-brand-cream tracking-tight font-black">
              Earned on the ice. Confirmed by us.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border text-center">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/20 text-brand-accent font-athletic font-black text-xl flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-athletic text-brand-cream font-bold mb-2">
                Check your standings.
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed font-sans">
                Win your league playoffs, or finish in the top quarter of its standings, rounded up. A 10-team league sends 3.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border text-center">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/20 text-brand-accent font-athletic font-black text-xl flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-athletic text-brand-cream font-bold mb-2">
                Submit your result.
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed font-sans">
                Enter your team name, home league, and link to your public standings or playoff bracket.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border text-center">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/20 text-brand-accent font-athletic font-black text-xl flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-athletic text-brand-cream font-bold mb-2">
                We confirm your spot.
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed font-sans">
                We verify your home-league standing, confirm your division tier, and issue your official invitation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUALIFICATION RULES & CALCULATOR */}
      <section id="qualification" className="py-24 bg-brand-surface border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
              Rule Copy
            </span>
            <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
              How do teams get into the Champions Cup?
            </h2>
            <p className="text-base text-brand-muted font-sans leading-relaxed">
              Win your league’s playoffs, or finish in the top quarter of its standings, rounded up. A 10-team league sends 3. An 8-team division sends 2. If the playoff champion is also a top-quarter team, the next eligible team is invited.
            </p>
          </div>

          <div className="mb-16">
            <QualificationCalculator />
          </div>

          <div className="p-6 rounded-2xl bg-brand-card border border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-brand-muted font-sans">
              Are you a home league organizer? Nominate your top division squads directly.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="/nominate"
                className="px-6 py-2.5 rounded-xl bg-brand-surface border border-brand-border hover:border-brand-accent text-brand-cream text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Nominate Your Top Teams
              </Link>
              <a
                href="#cup-form"
                className="px-6 py-2.5 rounded-xl bg-brand-red text-brand-navy text-xs font-black uppercase tracking-wider hover:bg-brand-red-hover transition-colors shadow-md"
              >
                Check My Team’s Eligibility
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EVERYTHING BUT THE PRO CONTRACT */}
      <section className="py-20 bg-brand-navy border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
              Championship Atmosphere
            </span>
            <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
              Everything but the pro contract.
            </h2>
            <p className="text-base text-brand-muted font-sans">
              Every detail set up for the championship weekend: from starting lineup calls to final-score graphics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {atEventCupAmenities.map((item) => (
              <div key={item.title} className="p-5 rounded-2xl bg-brand-surface border border-brand-border flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-athletic text-brand-cream text-base font-bold mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-accent hover:underline"
            >
              See the Veddie Experience &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE FORM (Single H2, hide duplicate form heading) */}
      <section id="cup-form" className="py-24 bg-brand-surface px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
            Championship Verification
          </span>
          <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-2 font-black">
            Check My Team’s Eligibility
          </h2>
          <p className="text-sm text-brand-muted">
            We check your standings, then confirm your spot. No payment today.
          </p>
        </div>

        <LeadCaptureForm
          type="cup"
          hideHeading={true}
          buttonText="Check My Team's Eligibility"
          microcopy="We check your standings, then confirm your spot. No payment today."
        />
      </section>
    </div>
  );
}

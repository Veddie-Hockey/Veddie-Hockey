import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story | Veddie Hockey",
  description:
    "A hockey vet is someone who keeps coming back. Meet the idea behind Veddie and the pro hockey experience for the rest of your career.",
};

export default function OurStoryPage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-brand-black via-brand-surface to-brand-black border-b border-brand-border px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-border text-brand-accent text-xs font-bold tracking-widest uppercase mb-6">
            <Heart className="w-4 h-4" />
            OUR STORY
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-athletic text-brand-cream tracking-tight mb-6 font-black">
            A hockey vet is someone who keeps coming back.
          </h1>

          <p className="text-base sm:text-xl text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            The name comes from hockey “vet.” It celebrates the experienced player who still wants the room, the rivalry, the big save, the goal and the team.
          </p>
        </div>
      </section>

      {/* ESSAY / MANIFESTO */}
      <section className="py-24 bg-brand-black border-b border-brand-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-brand-cream/90 text-base sm:text-lg leading-relaxed">
          <p>
            Somewhere between minor hockey banquets, junior tryouts, college teams, or adult-learn-to-play clinics, every hockey player realizes the same thing: <strong className="text-brand-cream">you don’t play in the NHL, but you still care just as much.</strong>
          </p>

          <p>
            Yet adult hockey culture has accepted a strange compromise: late ice times, dirty dressing rooms, unverified skill divisions, missing timekeepers, and zero acknowledgment of the milestones and highlights that make the game magical.
          </p>

          <div className="p-8 rounded-2xl bg-brand-surface border border-brand-accent/30 my-8">
            <h3 className="text-2xl font-athletic text-brand-cream mb-3">
              We built Veddie to change that standard.
            </h3>
            <p className="text-sm text-brand-muted leading-relaxed">
              We believe adult hockey players deserve a professional-grade experience: spotless rooms with player nameplates, clean towel service, certified referees, high-definition game replays, verified Elo rankings, and an authentic community of players who love the game.
            </p>
          </div>

          <p>
            Whether you’re an ex-major junior player in D1 or an adult-onset skater in D4, when you step through the arena doors for a Veddie game, you are treated like a professional.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/experience"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-accent text-brand-black font-bold uppercase tracking-wider text-sm hover:bg-brand-accent-hover transition-all text-center"
            >
              See The Experience
            </Link>
            <Link
              href="/play"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-card border border-brand-border text-brand-cream font-bold uppercase tracking-wider text-sm hover:bg-brand-card-hover transition-all text-center"
            >
              Find Your Game
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

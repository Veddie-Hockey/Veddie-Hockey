"use client";

import { useState } from "react";
import Link from "next/link";
import { PRO_FEATURES, ProFeature, FeatureCategory } from "@/data/proFeatures";
import ShareToCaptainButton from "@/components/ShareToCaptainButton";
import {
  Sparkles,
  DoorClosed,
  Tag,
  Scissors,
  Shirt,
  Droplets,
  Music,
  ShieldCheck,
  Disc,
  Volume2,
  TrendingUp,
  HeartPulse,
  Wrench,
  Package,
  Video,
  Film,
  Camera,
  Tv,
  Star,
  Mic,
  Mic2,
  Coffee,
  Award,
  Users,
  BarChart3,
  ArrowRight,
  Shield,
  Calendar,
  Trophy,
} from "lucide-react";

// Icon mapping helper
const ICON_MAP: Record<string, any> = {
  DoorClosed,
  Tag,
  Scissors,
  Shirt,
  Droplets,
  Music,
  ShieldCheck,
  Disc,
  Volume2,
  TrendingUp,
  HeartPulse,
  Wrench,
  Sparkles,
  Package,
  Video,
  Film,
  Camera,
  Tv,
  Star,
  Mic,
  Mic2,
  Coffee,
  Award,
  Users,
  BarChart3,
};

const PILLAR_LINES: Record<string, string> = {
  "The room": "Ready before you are.",
  "The game": "Hockey that counts.",
  "The coverage": "A final score worth keeping.",
};

export default function ExperiencePage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "The room", "The game", "The coverage"];

  const filteredFeatures =
    activeCategory === "All"
      ? PRO_FEATURES
      : PRO_FEATURES.filter((f) => f.category === activeCategory);

  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-brand-navy via-brand-surface to-brand-navy border-b border-brand-border px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-accent/40 text-brand-accent text-xs font-bold tracking-widest uppercase mb-6">
            <Sparkles className="w-4 h-4" />
            THE VEDDIE EXPERIENCE
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-athletic text-brand-cream tracking-tight mb-6 font-black uppercase">
            You don’t have to be a pro to feel like one.
          </h1>

          <p className="text-base sm:text-xl text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
            You’ve put in years of late skates because you love the game. You don’t have to be a pro to feel like one. Your name above the stall, certified refs and a final score worth keeping, at every level.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link
              href="/divisions"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-card border border-brand-border text-brand-cream font-bold uppercase tracking-wider text-sm hover:bg-brand-card-hover transition-all"
            >
              Explore Divisions
            </Link>
          </div>

          <div>
            <ShareToCaptainButton variant="minimal" />
          </div>
        </div>
      </section>

      {/* THREE PILLAR CARDS OVERVIEW */}
      <section className="py-16 bg-brand-navy border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
                Pillar 01
              </span>
              <h2 className="text-2xl font-athletic text-brand-cream font-bold mb-1">
                The room.
              </h2>
              <p className="text-sm font-semibold text-brand-cream/80 mb-3 italic">
                “Ready before you are.”
              </p>
              <p className="text-xs text-brand-muted leading-relaxed">
                Walk in with your team. Your name is above the stall, the tape is ready and your playlist is on.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
                Pillar 02
              </span>
              <h2 className="text-2xl font-athletic text-brand-cream font-bold mb-1">
                The game.
              </h2>
              <p className="text-sm font-semibold text-brand-cream/80 mb-3 italic">
                “Hockey that counts.”
              </p>
              <p className="text-xs text-brand-muted leading-relaxed">
                Play teams at your level, with certified refs and a score that counts toward the standings.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
                Pillar 03
              </span>
              <h2 className="text-2xl font-athletic text-brand-cream font-bold mb-1">
                The coverage.
              </h2>
              <p className="text-sm font-semibold text-brand-cream/80 mb-3 italic">
                “A final score worth keeping.”
              </p>
              <p className="text-xs text-brand-muted leading-relaxed">
                Relive it the next morning with the team photo, a final-score graphic and clips for the group chat.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* FULL FEATURES LIST */}
      <section className="py-20 bg-brand-surface border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
              Everything but the pro contract.
            </h2>
            <p className="text-sm sm:text-base text-brand-muted font-sans">
              Filter by pillar to see what’s ready at every event, exclusive to the Champions Cup, or in development.
            </p>
          </div>

          {/* FILTER TABS */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-6 mb-12 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "bg-brand-red text-brand-navy font-black shadow-lg"
                    : "bg-brand-card border border-brand-border text-brand-muted hover:text-brand-cream"
                }`}
              >
                {cat}
                {cat !== "All" && PILLAR_LINES[cat] ? ` — ${PILLAR_LINES[cat]}` : ""}
              </button>
            ))}
          </div>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFeatures.map((feat) => {
              const Icon = ICON_MAP[feat.iconName] || Sparkles;
              return (
                <div
                  key={feat.id}
                  className="bg-brand-card border border-brand-border rounded-2xl p-6 hover:border-brand-accent/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-brand-surface text-brand-accent group-hover:bg-brand-accent/20 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                          feat.availability === "At every event"
                            ? "bg-brand-green/15 text-brand-green border border-brand-green/30"
                            : feat.availability === "Champions Cup only"
                            ? "bg-brand-red/15 text-brand-red border border-brand-red/30"
                            : "bg-brand-surface text-brand-muted border border-brand-border"
                        }`}
                      >
                        {feat.availability}
                      </span>
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-muted block mb-1">
                      {feat.category}
                    </span>
                    <h3 className="text-lg font-athletic text-brand-cream tracking-tight mb-2 group-hover:text-brand-accent transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-brand-muted leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="py-20 bg-brand-navy border-b border-brand-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
              On-Ice Schedule
            </span>
            <h2 className="text-3xl sm:text-4xl font-athletic text-brand-cream font-black">
              Upcoming Events
            </h2>
            <p className="text-sm text-brand-muted font-sans mt-2">
              Experience the full pro treatment at our premier GTA events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Event 1: Invitational */}
            <div className="bg-[#0b203a] border-2 border-[#1c3f6e] hover:border-brand-accent rounded-2xl p-8 flex flex-col justify-between transition-all group shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded bg-brand-accent text-brand-navy">
                    Early April 2027
                  </span>
                  <span className="text-xs font-semibold text-brand-muted uppercase">
                    Tournament
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-athletic text-brand-cream font-black mb-2">
                  The Veddie Invitational
                </h3>
                <p className="text-sm font-bold text-brand-cream/90 mb-4">
                  Early April 2027 · Open, 40+, 50+ and 60+
                </p>
                <p className="text-xs text-slate-300 leading-relaxed mb-6 font-sans">
                  Three guaranteed games, strict divisions, certified refs and your name above the stall.
                </p>
              </div>
              <div className="space-y-3">
                <Link
                  href="/tournaments"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-brand-red text-brand-navy text-xs font-black uppercase tracking-wider hover:bg-brand-red-hover transition-all shadow-md"
                >
                  View Invitational Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <ShareToCaptainButton variant="minimal" customUrl="https://veddiehockey.com/tournaments" />
              </div>
            </div>

            {/* Event 2: Champions Cup */}
            <div className="bg-[#0b203a] border-2 border-[#1c3f6e] hover:border-brand-red rounded-2xl p-8 flex flex-col justify-between transition-all group shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded bg-brand-red text-brand-navy">
                    Championship Event
                  </span>
                  <span className="text-xs font-semibold text-brand-muted uppercase">
                    GTA
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-athletic text-brand-cream font-black mb-2">
                  The Veddie Champions Cup
                </h3>
                <p className="text-sm font-bold text-brand-cream/90 mb-4">
                  Dates and venue to be announced
                </p>
                <p className="text-xs text-slate-300 leading-relaxed mb-6 font-sans">
                  Earn your spot in your home league. Then face qualifying teams from other leagues for the Cup.
                </p>
              </div>
              <div className="space-y-3">
                <Link
                  href="/champions-cup#qualification"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-brand-cream text-brand-navy text-xs font-black uppercase tracking-wider hover:bg-white transition-all shadow-md"
                >
                  How Teams Qualify
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <ShareToCaptainButton variant="minimal" customUrl="https://veddiehockey.com/champions-cup" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL BOTTOM CALLOUT */}
      <section className="py-24 bg-brand-navy px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
            You bring the game. We bring the show.
          </h2>
          <p className="text-base text-brand-muted mb-8 max-w-xl mx-auto">
            Ready to get your team onto the ice? Find your format and claim your place.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/play"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-xl bg-brand-red text-brand-navy font-black uppercase tracking-wider text-sm hover:bg-brand-red-hover transition-all shadow-xl active:scale-95"
            >
              Find Your Game
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </Link>
            <ShareToCaptainButton />
          </div>
        </div>
      </section>
    </div>
  );
}

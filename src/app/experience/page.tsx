"use client";

import { useState } from "react";
import Link from "next/link";
import { PRO_FEATURES, ProFeature } from "@/data/proFeatures";
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
  Megaphone,
  Volume2,
  Radio,
  BarChart3,
  HeartPulse,
  Wrench,
  Package,
  Video,
  Film,
  Camera,
  Tv,
  Star,
  Mic,
  Coffee,
  Newspaper,
  Award,
  UserCheck,
  Flame,
  ArrowRight,
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
  Megaphone,
  Volume2,
  Radio,
  BarChart3,
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
  Coffee,
  Newspaper,
  Award,
  UserCheck,
  Flame,
  Whistle: Radio,
};

export default function ExperiencePage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Dressing Room & Prep",
    "Game Day Atmosphere",
    "Staff & Equipment Care",
    "Media & Recognition",
  ];

  const filteredFeatures =
    activeCategory === "All"
      ? PRO_FEATURES
      : PRO_FEATURES.filter((f) => f.category === activeCategory);

  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative min-h-[65vh] flex items-center justify-center bg-gradient-to-b from-brand-black via-brand-surface to-brand-black border-b border-brand-border px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-accent/40 text-brand-accent text-xs font-bold tracking-widest uppercase mb-6">
            <Sparkles className="w-4 h-4" />
            THE VEDDIE EXPERIENCE
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-athletic text-brand-cream tracking-tight mb-6 font-black">
            You may not play in the show. We’ll treat you like you do.
          </h1>

          <p className="text-base sm:text-xl text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Adult hockey players have spent decades settling for dirty dressing rooms, missing referees, 11:45 PM ice times and zero recognition. We’re changing that standard with 29 specific touches built around how hockey players deserve to be treated.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/play"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-accent text-brand-black font-bold uppercase tracking-wider text-sm hover:bg-brand-accent-hover transition-all shadow-xl hover:shadow-brand-accent/20"
            >
              Find Your Game
            </Link>
            <Link
              href="/divisions"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-card border border-brand-border text-brand-cream font-bold uppercase tracking-wider text-sm hover:bg-brand-card-hover transition-all"
            >
              Explore Divisions
            </Link>
          </div>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="py-12 bg-brand-black border-b border-brand-border sticky top-20 z-30 backdrop-blur-md bg-brand-black/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "bg-brand-accent text-brand-black shadow-lg shadow-brand-accent/20"
                    : "bg-brand-surface border border-brand-border text-brand-muted hover:text-brand-cream"
                }`}
              >
                {cat} {cat === "All" ? `(${PRO_FEATURES.length})` : ""}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 29 PRO FEATURES GRID */}
      <section className="py-20 bg-brand-surface border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-muted">
                        {feat.category}
                      </span>
                    </div>

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

      {/* FINAL BOTTOM CALLOUT */}
      <section className="py-24 bg-brand-black px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4">
            Ready to experience adult hockey the right way?
          </h2>
          <p className="text-base text-brand-muted mb-8">
            Tell us where you play and let’s get you or your team on the ice.
          </p>
          <Link
            href="/play"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-accent text-brand-black font-bold uppercase tracking-wider text-sm hover:bg-brand-accent-hover transition-all"
          >
            Find Your Game
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

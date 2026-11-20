"use client";

import { useState } from "react";
import {
  Tag,
  Scissors,
  Shirt,
  Droplets,
  Music,
  HeartPulse,
  Wrench,
  CheckCircle2,
  Sparkles,
  Info,
} from "lucide-react";

interface Hotspot {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: any;
  highlightDetails: string[];
}

const HOTSPOTS: Hotspot[] = [
  {
    id: "stall",
    title: "Player Stall Nameplates",
    tagline: "Your name. Your number. Your room.",
    description: "Every player spot has a customized acrylic stall nameplate with player surname, roster number, and official team crest. No fighting over stalls.",
    icon: Tag,
    highlightDetails: ["Custom team crest & colors", "Magnetic or mounted pro-grade acrylic", "Clean whiteboard lineup ready on arrival"],
  },
  {
    id: "tape",
    title: "Tape & Essentials Station",
    tagline: "Never ask a teammate for clear tape again.",
    description: "A fully stocked station in the center of the room with black & white cloth stick tape, clear poly sock tape, professional scissors, spare laces, and anti-fog visor spray.",
    icon: Scissors,
    highlightDetails: ["Unlimited stick tape & clear poly", "Spare laces in multiple lengths", "Helmet repair screws & drivers on standby"],
  },
  {
    id: "towels",
    title: "Commercial Fresh Towel Service",
    tagline: "No soggy gym bags on the ride home.",
    description: "Crisp, sanitized commercial white bath towels pre-folded at every stall. When you’re done showering, toss it in the bin—we handle all post-game laundry.",
    icon: Shirt,
    highlightDetails: ["Clean 100% cotton towels ready in room", "Post-game hamper collection", "Zero dirty laundry in your hockey bag"],
  },
  {
    id: "hydration",
    title: "Stocked Hydration Bar",
    tagline: "Cramps are a thing of the past.",
    description: "Ice-cold water dispensers, electrolyte drink mix packets, and sanitized bottles ready for your team before taking the ice.",
    icon: Droplets,
    highlightDetails: ["Pre-mixed electrolyte solutions", "Sanitized team squeeze bottles", "Cold bench replenishment between periods"],
  },
  {
    id: "sound",
    title: "Pregame & Intermission Sound",
    tagline: "The soundtrack to your game.",
    description: "High-output Bluetooth locker room speaker synced to your team’s pregame playlist. Lock in before warmups and celebrate after big wins.",
    icon: Music,
    highlightDetails: ["Team-controlled mobile pairing", "High-fidelity bass for locker room atmosphere", "Pre-set pump-up playlist options"],
  },
  {
    id: "therapist",
    title: "Athletic Therapist & Staff",
    tagline: "Pro-level player care at the rink.",
    description: "Certified athletic therapist available in the room for pre-game ankle/wrist taping, groin stretches, acute injury assessments, and emergency bench support.",
    icon: HeartPulse,
    highlightDetails: ["Pre-game preventative taping", "Immediate ice & concussion assessment", "Bench attendance during all tournament games"],
  },
];

export default function LockerRoomVisualizer() {
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot>(HOTSPOTS[0]);

  return (
    <div className="bg-brand-surface border border-brand-border rounded-2xl p-6 sm:p-10 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-brand-border">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-1">
            Interactive Experience Showcase
          </span>
          <h3 className="text-2xl sm:text-3xl font-athletic text-brand-cream tracking-tight">
            Step Inside the Veddie Dressing Room
          </h3>
          <p className="text-xs text-brand-muted mt-1">
            Click any touchpoint below to see how we transform the amateur locker room into a pro-grade environment.
          </p>
        </div>
      </div>

      {/* Hotspots Selector Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
        {HOTSPOTS.map((spot) => {
          const Icon = spot.icon;
          const isSelected = selectedHotspot.id === spot.id;
          return (
            <button
              key={spot.id}
              onClick={() => setSelectedHotspot(spot)}
              className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between group ${
                isSelected
                  ? "bg-brand-accent text-brand-navy font-bold border-brand-accent shadow-lg shadow-brand-accent/20"
                  : "bg-brand-card border-brand-border text-brand-cream hover:border-brand-accent/50"
              }`}
            >
              <div
                className={`p-2 rounded-lg mb-2 w-fit ${
                  isSelected ? "bg-brand-navy/20 text-brand-navy font-bold" : "bg-brand-surface text-brand-accent"
                }`}
              >
                <Icon className="w-4 h-4" />
              </div>
              <span
                className={`text-xs font-athletic font-bold uppercase tracking-wider block ${
                  isSelected ? "text-brand-navy font-bold" : "text-brand-cream group-hover:text-brand-accent"
                }`}
              >
                {spot.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Detail Showcase Card */}
      <div className="bg-brand-card border border-brand-border rounded-2xl p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-brand-accent text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Standard at Every Veddie Competition
            </div>

            <h4 className="text-2xl sm:text-3xl font-athletic text-brand-cream mb-1">
              {selectedHotspot.title}
            </h4>
            <p className="text-sm font-semibold text-brand-accent mb-4">
              {selectedHotspot.tagline}
            </p>
            <p className="text-sm text-brand-muted leading-relaxed mb-6">
              {selectedHotspot.description}
            </p>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-cream block">
                Standard Inclusions:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedHotspot.highlightDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-brand-muted">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-brand-surface p-6 rounded-xl border border-brand-border text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-brand-accent/20 text-brand-accent flex items-center justify-center mb-4">
              <selectedHotspot.icon className="w-8 h-8" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-cream mb-1 font-athletic">
              Player Experience Vibe
            </span>
            <p className="text-xs text-brand-muted">
              Included for all registered teams without hidden upcharges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

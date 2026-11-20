"use client";

import { useState } from "react";
import { calculateElo } from "@/data/rankings";
import { Calculator, ArrowRight, ShieldAlert, Award } from "lucide-react";

export default function EloInteractiveSandbox() {
  const [teamARating, setTeamARating] = useState(1050);
  const [teamBRating, setTeamBRating] = useState(1000);
  const [outcome, setOutcome] = useState<"W" | "L" | "T">("W");

  const result = calculateElo(teamARating, teamBRating, outcome);

  return (
    <div className="bg-brand-surface border border-brand-border rounded-2xl p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 bg-brand-accent/20 text-brand-accent rounded-lg">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-athletic text-brand-cream tracking-tight">
            Live Elo Rating Calculator
          </h3>
          <p className="text-xs text-brand-muted">
            Test the math: $K = 32$, base 1,000 rating, expected win probabilities calculated dynamically.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Team A */}
        <div className="bg-brand-card p-5 rounded-xl border border-brand-border">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">
              Team A (Your Team)
            </span>
            <span className="text-xs font-mono text-brand-muted">
              Win Prob: {(result.expectedA * 100).toFixed(1)}%
            </span>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min="800"
              max="1400"
              step="10"
              value={teamARating}
              onChange={(e) => setTeamARating(Number(e.target.value))}
              className="flex-1 accent-brand-accent"
            />
            <span className="font-mono font-bold text-lg text-brand-cream w-14 text-right">
              {teamARating}
            </span>
          </div>
        </div>

        {/* Team B */}
        <div className="bg-brand-card p-5 rounded-xl border border-brand-border">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-muted">
              Team B (Opponent)
            </span>
            <span className="text-xs font-mono text-brand-muted">
              Win Prob: {(result.expectedB * 100).toFixed(1)}%
            </span>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min="800"
              max="1400"
              step="10"
              value={teamBRating}
              onChange={(e) => setTeamBRating(Number(e.target.value))}
              className="flex-1 accent-brand-accent"
            />
            <span className="font-mono font-bold text-lg text-brand-cream w-14 text-right">
              {teamBRating}
            </span>
          </div>
        </div>
      </div>

      {/* Outcome Selector */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-muted mr-2">
          Match Outcome for Team A:
        </span>
        <button
          onClick={() => setOutcome("W")}
          className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
            outcome === "W"
              ? "bg-brand-green text-brand-navy font-bold shadow-md shadow-brand-green/20"
              : "bg-brand-card border border-brand-border text-brand-muted hover:text-brand-cream"
          }`}
        >
          Win (+{result.deltaA > 0 ? result.deltaA : 0})
        </button>
        <button
          onClick={() => setOutcome("T")}
          className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
            outcome === "T"
              ? "bg-brand-accent text-brand-navy font-bold shadow-md shadow-brand-accent/20"
              : "bg-brand-card border border-brand-border text-brand-muted hover:text-brand-cream"
          }`}
        >
          Tie ({result.deltaA >= 0 ? `+${result.deltaA}` : result.deltaA})
        </button>
        <button
          onClick={() => setOutcome("L")}
          className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
            outcome === "L"
              ? "bg-brand-red text-brand-cream shadow-md shadow-brand-red/20"
              : "bg-brand-card border border-brand-border text-brand-muted hover:text-brand-cream"
          }`}
        >
          Loss ({result.deltaA})
        </button>
      </div>

      {/* Calculation Summary Card */}
      <div className="p-4 rounded-xl bg-brand-navy/60 border border-brand-border flex flex-col sm:flex-row items-center justify-around gap-4 text-center">
        <div>
          <span className="text-xs text-brand-muted block uppercase">Team A New Rating</span>
          <span className="text-2xl font-athletic text-brand-cream">
            {result.newRatingA}{" "}
            <span
              className={`text-sm font-sans font-bold ${
                result.deltaA >= 0 ? "text-brand-green" : "text-brand-red"
              }`}
            >
              ({result.deltaA >= 0 ? `+${result.deltaA}` : result.deltaA})
            </span>
          </span>
        </div>
        <ArrowRight className="w-5 h-5 text-brand-border hidden sm:block" />
        <div>
          <span className="text-xs text-brand-muted block uppercase">Team B New Rating</span>
          <span className="text-2xl font-athletic text-brand-cream">
            {result.newRatingB}{" "}
            <span
              className={`text-sm font-sans font-bold ${
                result.deltaB >= 0 ? "text-brand-green" : "text-brand-red"
              }`}
            >
              ({result.deltaB >= 0 ? `+${result.deltaB}` : result.deltaB})
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

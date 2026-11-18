"use client";

import { useState } from "react";
import { Trophy, Shield, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

export default function QualificationCalculator() {
  const [divisionSize, setDivisionSize] = useState<number>(8);
  const [currentPosition, setCurrentPosition] = useState<number>(2);

  // Exact math from client document:
  // Champions League/Cup: ceiling(N / 4)
  // Challengers Cup: from ceiling(N / 4) + 1 through floor(N / 2)
  const championsCupPlaces = Math.ceil(divisionSize / 4);
  const challengersCupPlacesEnd = Math.floor(divisionSize / 2);

  const qualifiesChampionsCup = currentPosition <= championsCupPlaces;
  const qualifiesChallengersCup =
    !qualifiesChampionsCup && currentPosition <= challengersCupPlacesEnd;

  return (
    <div className="bg-brand-surface border border-brand-border rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-brand-accent/20 text-brand-accent rounded-xl">
          <Trophy className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-athletic text-brand-cream tracking-tight">
            “Do We Qualify?” Instant Eligibility Calculator
          </h3>
          <p className="text-xs text-brand-muted">
            Test your home league standing against the official ceiling(N ÷ 4) qualification formula.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="bg-brand-card p-4 rounded-xl border border-brand-border">
          <label className="text-xs font-bold uppercase tracking-wider text-brand-muted block mb-1">
            Total Teams in Your Division ($N$)
          </label>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min="4"
              max="20"
              step="1"
              value={divisionSize}
              onChange={(e) => {
                const newSize = Number(e.target.value);
                setDivisionSize(newSize);
                if (currentPosition > newSize) setCurrentPosition(newSize);
              }}
              className="flex-1 accent-brand-accent"
            />
            <span className="font-mono font-bold text-lg text-brand-cream w-8 text-right">
              {divisionSize}
            </span>
          </div>
          <span className="text-[11px] text-brand-muted mt-1 block">
            Guaranteed Cup spots: <strong>{championsCupPlaces}</strong>
          </span>
        </div>

        <div className="bg-brand-card p-4 rounded-xl border border-brand-border">
          <label className="text-xs font-bold uppercase tracking-wider text-brand-muted block mb-1">
            Your Current Standing Position
          </label>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min="1"
              max={divisionSize}
              step="1"
              value={currentPosition}
              onChange={(e) => setCurrentPosition(Number(e.target.value))}
              className="flex-1 accent-brand-accent"
            />
            <span className="font-mono font-bold text-lg text-brand-cream w-8 text-right">
              #{currentPosition}
            </span>
          </div>
          <span className="text-[11px] text-brand-muted mt-1 block">
            Out of {divisionSize} total division teams
          </span>
        </div>
      </div>

      {/* Result Status Banner */}
      <div
        className={`p-5 rounded-xl border transition-all ${
          qualifiesChampionsCup
            ? "bg-brand-green/10 border-brand-green/40 text-brand-green"
            : qualifiesChallengersCup
            ? "bg-brand-ice/10 border-brand-ice/40 text-brand-ice"
            : "bg-brand-accent/10 border-brand-accent/40 text-brand-accent"
        }`}
      >
        <div className="flex items-start gap-3">
          {qualifiesChampionsCup ? (
            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          )}

          <div className="flex-1">
            <h4 className="font-athletic text-lg font-bold text-brand-cream">
              {qualifiesChampionsCup
                ? "Qualified for Champions Cup! (Top 25%)"
                : qualifiesChallengersCup
                ? "Eligible for Challengers Cup Tier (Top 50%)"
                : "Playoff Championship Route Required"}
            </h4>

            <p className="text-xs text-brand-muted mt-1 leading-relaxed">
              {qualifiesChampionsCup ? (
                <>
                  In a {divisionSize}-team division, positions 1 through {championsCupPlaces} earn automatic invitations into the <strong>Veddie Champions Cup</strong>. Your team is currently in an automatic bid spot!
                </>
              ) : qualifiesChallengersCup ? (
                <>
                  Your team sits between positions {championsCupPlaces + 1} and {challengersCupPlacesEnd}. You qualify for the <strong>Challengers Cup</strong>, or you can earn a direct Champions Cup invitation by winning your home league playoff championship!
                </>
              ) : (
                <>
                  Your team is currently outside the regular season top half. However, <strong>home league playoff champions</strong> receive direct automatic invitations to the Champions Cup regardless of regular season finish!
                </>
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-brand-border flex items-center justify-between text-xs">
        <span className="text-brand-muted">
          Formula: ceiling(N ÷ 4) rounded up
        </span>
        <a
          href="#cup-form"
          className="text-brand-accent hover:underline font-bold uppercase tracking-wider inline-flex items-center gap-1"
        >
          Claim Your Team's Spot &rarr;
        </a>
      </div>
    </div>
  );
}

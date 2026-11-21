"use client";

import { useState } from "react";
import { Trophy, CheckCircle2, AlertCircle } from "lucide-react";

export default function QualificationCalculator() {
  const [divisionSize, setDivisionSize] = useState<number>(8);
  const [currentPosition, setCurrentPosition] = useState<number>(2);

  // Qualification: Top quarter of standings, rounded up.
  const championsCupPlaces = Math.ceil(divisionSize / 4);
  const qualifiesChampionsCup = currentPosition <= championsCupPlaces;

  return (
    <div className="bg-brand-surface border border-brand-border rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto shadow-2xl">
      <div className="flex items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-brand-accent/20 text-brand-accent rounded-xl">
            <Trophy className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-athletic text-brand-cream tracking-tight">
              “Do We Qualify?” Eligibility Calculator
            </h3>
            <p className="text-xs text-brand-muted">
              Win your playoffs or finish in the top quarter of your home league standings, rounded up.
            </p>
          </div>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-card text-brand-muted border border-brand-border">
          Example
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="bg-brand-card p-4 rounded-xl border border-brand-border">
          <label className="text-xs font-bold uppercase tracking-wider text-brand-muted block mb-1">
            Teams in your division
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
            Qualifying spots: <strong>Top {championsCupPlaces}</strong>
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
                ? `Qualifies for Champions Cup (Inside Top ${championsCupPlaces})`
                : "Playoff Championship Route"}
            </h4>

            <p className="text-xs text-brand-muted mt-1 leading-relaxed">
              {qualifiesChampionsCup ? (
                <>
                  In a {divisionSize}-team division, positions 1 through {championsCupPlaces} qualify for the <strong>Veddie Champions Cup</strong>. Your team is currently inside the line!
                </>
              ) : (
                <>
                  Your team is currently outside the regular season cutline. However, <strong>home league playoff champions</strong> earn direct entry regardless of regular season finish!
                </>
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-brand-border flex items-center justify-between text-xs">
        <span className="text-brand-muted">
          A 10-team league sends 3. An 8-team division sends 2.
        </span>
        <a
          href="#cup-form"
          className="text-brand-accent hover:underline font-bold uppercase tracking-wider inline-flex items-center gap-1"
        >
          Check My Team’s Eligibility &rarr;
        </a>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Shield, CheckCircle2, ChevronDown, ChevronUp, ArrowRight, HelpCircle } from "lucide-react";
import ShareToCaptainButton from "@/components/ShareToCaptainButton";

export default function DivisionsPage() {
  const [selectedEvent, setSelectedEvent] = useState<"Invitational" | "Champions Cup" | "Leagues">("Invitational");
  const [selectedAge, setSelectedAge] = useState<"Open 18+" | "40+" | "50+" | "60+">("Open 18+");
  const [selectedSkill, setSelectedSkill] = useState<"D1" | "D2" | "D3" | "D4">("D2");
  const [showFullRules, setShowFullRules] = useState<boolean>(false);

  // Status matrix based on client offerings
  const getBracketStatus = (event: string, age: string, skill: string) => {
    if (event === "Champions Cup") {
      if ((skill === "D1" || skill === "D2") && (age === "Open 18+" || age === "40+")) {
        return { status: "Confirmed", note: "16-team pilot field in Richmond Hill" };
      }
      return { status: "Proposed", note: "Subject to home league qualification demand" };
    }
    if (event === "Invitational") {
      if (age === "Open 18+" || age === "40+") {
        return { status: "Confirmed", note: "Early April 2027 tournament weekend" };
      }
      return { status: "Planned", note: "Planned bracket for April 2027" };
    }
    if (event === "Leagues") {
      return { status: "Proposed", note: "Weekly season circuits in Southern Ontario" };
    }
    return { status: "Proposed", note: "In development" };
  };

  const currentBracket = getBracketStatus(selectedEvent, selectedAge, selectedSkill);

  const skillOneLiners = [
    { code: "D1", name: "Elite", summary: "Played junior, university or pro." },
    { code: "D2", name: "Competitive", summary: "Played AAA or AA." },
    { code: "D3", name: "Intermediate", summary: "Strong rec or high school hockey." },
    { code: "D4", name: "Recreational", summary: "House league, or learned as an adult." },
  ];

  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-brand-navy via-brand-surface to-brand-navy border-b border-brand-border px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-athletic text-brand-cream tracking-tight mb-4 font-black uppercase">
            Find Your Division
          </h1>

          <p className="text-lg sm:text-2xl text-brand-accent max-w-2xl mx-auto mb-4 font-athletic font-bold">
            Pick your age group, then find the level that sounds like your team.
          </p>

          <p className="text-sm sm:text-base text-brand-muted max-w-xl mx-auto mb-8 font-sans">
            A 60+ D4 team gets the same room, refs and coverage as an Open D1 team. Base placement on the whole team’s current strength.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/play"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-red text-brand-navy font-black uppercase tracking-wider text-sm hover:bg-brand-red-hover transition-all shadow-xl active:scale-95"
            >
              Find Your Game
            </Link>
            <Link
              href="/contact?topic=Division+placement"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-card border border-brand-border text-brand-cream font-bold uppercase tracking-wider text-sm hover:bg-brand-card-hover transition-all"
            >
              Ask About Placement
            </Link>
          </div>
        </div>
      </section>

      {/* INTERACTIVE DIVISION PICKER (Nov 21 spec) */}
      <section className="py-20 bg-brand-surface border-b border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
              Division & Bracket Explorer
            </span>
            <h2 className="text-3xl sm:text-4xl font-athletic text-brand-cream font-black">
              Select Your Event, Age & Skill Level
            </h2>
          </div>

          <div className="bg-brand-card p-6 sm:p-8 rounded-3xl border border-brand-border shadow-2xl space-y-8">
            {/* 1. Event Picker */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-3">
                1. Select Event:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(["Invitational", "Champions Cup", "Leagues"] as const).map((ev) => (
                  <button
                    key={ev}
                    onClick={() => setSelectedEvent(ev)}
                    className={`py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                      selectedEvent === ev
                        ? "bg-brand-red text-brand-navy border-brand-red font-black shadow-md"
                        : "bg-brand-surface text-brand-muted hover:text-brand-cream border-brand-border"
                    }`}
                  >
                    {ev}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Age Group Picker */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-3">
                2. Select Age Group:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {(["Open 18+", "40+", "50+", "60+"] as const).map((age) => (
                  <button
                    key={age}
                    onClick={() => setSelectedAge(age)}
                    className={`py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                      selectedAge === age
                        ? "bg-brand-accent text-brand-navy border-brand-accent font-black shadow-md"
                        : "bg-brand-surface text-brand-muted hover:text-brand-cream border-brand-border"
                    }`}
                  >
                    {age}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Skill Level Picker */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-3">
                3. Select Skill Level:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {(["D1", "D2", "D3", "D4"] as const).map((sk) => (
                  <button
                    key={sk}
                    onClick={() => setSelectedSkill(sk)}
                    className={`py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                      selectedSkill === sk
                        ? "bg-brand-cream text-brand-navy border-brand-cream font-black shadow-md"
                        : "bg-brand-surface text-brand-muted hover:text-brand-cream border-brand-border"
                    }`}
                  >
                    {sk}
                  </button>
                ))}
              </div>
            </div>

            {/* Result Bracket Card */}
            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-athletic text-xl sm:text-2xl text-brand-cream font-black">
                    {selectedEvent} · {selectedAge} {selectedSkill}
                  </span>
                  <span
                    className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full ${
                      currentBracket.status === "Confirmed"
                        ? "bg-brand-green/20 text-brand-green border border-brand-green/40"
                        : "bg-brand-accent/20 text-brand-accent border border-brand-accent/40"
                    }`}
                  >
                    {currentBracket.status}
                  </span>
                </div>
                <p className="text-xs text-brand-muted">{currentBracket.note}</p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <Link
                  href="/contact?topic=Division+placement"
                  className="px-5 py-2.5 rounded-xl bg-brand-card border border-brand-border hover:border-brand-accent text-brand-cream text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Ask About Placement
                </Link>
                <Link
                  href={
                    selectedEvent === "Invitational"
                      ? "/tournaments#tournament-form"
                      : selectedEvent === "Champions Cup"
                      ? "/champions-cup#cup-form"
                      : "/leagues#league-form"
                  }
                  className="px-5 py-2.5 rounded-xl bg-brand-red text-brand-navy text-xs font-black uppercase tracking-wider hover:bg-brand-red-hover transition-colors shadow-md"
                >
                  Claim Spot &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* D1-D4 SKILL CARDS WITH ITALICIZED COPY PER NOV 22 SPEC */}
      <section className="py-20 bg-brand-navy border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
              Skill Hierarchy
            </span>
            <h2 className="text-3xl sm:text-4xl font-athletic text-brand-cream font-black mb-4">
              Skill divisions explained.
            </h2>
            <p className="text-sm text-brand-muted font-sans">
              Base placement on your whole team’s current strength.
            </p>
          </div>

          {/* Age Groups shown together above skill cards per Nov 22 spec */}
          <div className="mb-8 p-4 rounded-2xl bg-brand-surface border border-brand-border flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">
              Offered Age Groups:
            </span>
            <span className="px-3 py-1 rounded-lg bg-brand-card text-brand-cream text-xs font-bold">Open (18+)</span>
            <span className="px-3 py-1 rounded-lg bg-brand-card text-brand-cream text-xs font-bold">40+</span>
            <span className="px-3 py-1 rounded-lg bg-brand-card text-brand-cream text-xs font-bold">50+</span>
            <span className="px-3 py-1 rounded-lg bg-brand-card text-brand-cream text-xs font-bold">60+</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* D1 · Elite */}
            <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border flex flex-col justify-between">
              <div>
                <span className="text-xs font-athletic font-bold px-3 py-1 rounded-lg border uppercase tracking-wider bg-brand-card text-brand-accent border-brand-border inline-block mb-3">
                  D1 · Elite
                </span>
                <h3 className="text-xl font-athletic text-brand-cream font-bold mb-2">
                  Top tier pace and execution
                </h3>
                <p className="text-xs text-brand-muted mb-4 font-sans leading-relaxed">
                  Fast-paced hockey with former junior, university, or high-level alumni. Full-speed breakouts and sharp positioning.
                </p>
              </div>
              <p className="text-xs sm:text-sm text-brand-cream/90 italic border-t border-brand-border/60 pt-4 leading-relaxed font-sans">
                “You’ve got a nasty toe drag, had at least a cup of coffee at a high level, and somebody on the other bench has already looked you up on Elite Prospects or Hockey DB.”
              </p>
            </div>

            {/* D2 · Competitive */}
            <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border flex flex-col justify-between">
              <div>
                <span className="text-xs font-athletic font-bold px-3 py-1 rounded-lg border uppercase tracking-wider bg-brand-card text-brand-accent border-brand-border inline-block mb-3">
                  D2 · Competitive
                </span>
                <h3 className="text-xl font-athletic text-brand-cream font-bold mb-2">
                  Competitive adult club play
                </h3>
                <p className="text-xs text-brand-muted mb-4 font-sans leading-relaxed">
                  Experienced players with AAA/AA backgrounds or accomplished rec chemistry. Structured play and strong instincts.
                </p>
              </div>
              <p className="text-xs sm:text-sm text-brand-cream/90 italic border-t border-brand-border/60 pt-4 leading-relaxed font-sans">
                “You still remember the power play from your AAA days. You’ve drawn it on the dressing-room whiteboard.”
              </p>
            </div>

            {/* D3 · Intermediate */}
            <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border flex flex-col justify-between">
              <div>
                <span className="text-xs font-athletic font-bold px-3 py-1 rounded-lg border uppercase tracking-wider bg-brand-card text-brand-accent border-brand-border inline-block mb-3">
                  D3 · Intermediate
                </span>
                <h3 className="text-xl font-athletic text-brand-cream font-bold mb-2">
                  Established rec squads
                </h3>
                <p className="text-xs text-brand-muted mb-4 font-sans leading-relaxed">
                  High school varsity, select, and longtime rec players. Great passing and veteran hockey sense without the junior-speed track meet.
                </p>
              </div>
              <p className="text-xs sm:text-sm text-brand-cream/90 italic border-t border-brand-border/60 pt-4 leading-relaxed font-sans">
                “You’ve played with your winger for ten years. You know exactly where he’ll be. You’re still going to yell his name.”
              </p>
            </div>

            {/* D4 · Recreational */}
            <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border flex flex-col justify-between">
              <div>
                <span className="text-xs font-athletic font-bold px-3 py-1 rounded-lg border uppercase tracking-wider bg-brand-card text-brand-accent border-brand-border inline-block mb-3">
                  D4 · Recreational
                </span>
                <h3 className="text-xl font-athletic text-brand-cream font-bold mb-2">
                  Pure rec & lifelong hockey
                </h3>
                <p className="text-xs text-brand-muted mb-4 font-sans leading-relaxed">
                  House league veterans and adult-onset skaters. Competitive spirit, balanced pace, and great locker-room camaraderie.
                </p>
              </div>
              <p className="text-xs sm:text-sm text-brand-cream/90 italic border-t border-brand-border/60 pt-4 leading-relaxed font-sans">
                “You scored one off your shin pad and immediately pointed to the teammate who passed it. Chemistry like that takes time.”
              </p>
            </div>
          </div>

          {/* BETWEEN DIVISIONS BLOCK (Nov 22 spec) */}
          <div className="p-8 rounded-2xl bg-brand-surface border border-brand-accent/40 max-w-2xl mx-auto text-center mb-12 shadow-xl">
            <h3 className="text-xl font-athletic text-brand-cream font-bold mb-2">
              Between divisions?
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted font-sans leading-relaxed mb-6">
              Tell us your captain’s home league, current division, and standings link. Our placement team will recommend the right bracket for close, competitive games.
            </p>
            <Link
              href="/contact?topic=Division+placement"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-brand-red text-brand-navy font-black text-xs uppercase tracking-wider hover:bg-brand-red-hover transition-all shadow-md"
            >
              Ask About Team Placement
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* COLLAPSIBLE FULL PLACEMENT RULES */}
          <div className="bg-brand-surface border border-brand-border rounded-2xl overflow-hidden">
            <button
              onClick={() => setShowFullRules(!showFullRules)}
              className="w-full p-6 text-left flex items-center justify-between hover:bg-brand-card transition-colors"
            >
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-brand-accent" />
                <span className="font-athletic text-lg font-bold text-brand-cream">
                  Full Placement & Eligibility Rules
                </span>
              </div>
              {showFullRules ? <ChevronUp className="w-5 h-5 text-brand-muted" /> : <ChevronDown className="w-5 h-5 text-brand-muted" />}
            </button>

            {showFullRules && (
              <div className="p-6 pt-0 border-t border-brand-border/60 text-xs text-brand-muted space-y-4 leading-relaxed font-sans">
                <div>
                  <h4 className="font-bold text-brand-cream mb-1">D1 Elite</h4>
                  <p>Former NHL, AHL, ECHL, European Pro alumni; NCAA Division I & III, USports, Major Junior (OHL/WHL/QMJHL), and Junior A alumni. Active professionals are excluded; former professionals are permitted.</p>
                </div>
                <div>
                  <h4 className="font-bold text-brand-cream mb-1">D2 Competitive</h4>
                  <p>AAA, AA, and accomplished competitive recreational alumni. No former professionals. Junior and university alumni undergo recency review based on years since playing at that level.</p>
                </div>
                <div>
                  <h4 className="font-bold text-brand-cream mb-1">D3 Intermediate</h4>
                  <p>High school varsity, select, and established recreational players with structured team play backgrounds. No AAA or Junior alumni permitted without extended hiatus.</p>
                </div>
                <div>
                  <h4 className="font-bold text-brand-cream mb-1">D4 Recreational</h4>
                  <p>House league veterans and adult-onset skaters. Players whose current ability materially exceeds the division are reassigned to higher flights.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* PLACEMENT REVIEW CALLOUT */}
      <section className="py-20 bg-brand-surface px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <HelpCircle className="w-10 h-10 text-brand-accent mx-auto mb-4" />
          <h2 className="text-3xl font-athletic text-brand-cream mb-3 font-bold">
            Unsure which division fits your roster?
          </h2>
          <p className="text-sm text-brand-muted mb-8 leading-relaxed font-sans">
            Our placement team reviews captain submissions, player backgrounds, and standings history to keep games fair for everyone.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?topic=Division+placement"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-red text-brand-navy font-black text-xs uppercase tracking-wider hover:bg-brand-red-hover transition-all shadow-md"
            >
              Request Division Review
              <ArrowRight className="w-4 h-4" />
            </Link>
            <ShareToCaptainButton />
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Gift, Trophy, Sparkles, MessageSquare, ArrowRight, ShieldCheck, Heart } from "lucide-react";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export const metadata: Metadata = {
  title: "Win Your Team a Weekend - Contest",
  description:
    "Submit your 'I used to… Now I’m a Veddie' hockey memory to enter the draw for a Veddie hoodie and a team entry into our Richmond Hill Invitational.",
};

export default function ContestPage() {
  return (
    <div className="flex flex-col py-20 px-4 sm:px-6 lg:px-8">
      {/* HERO */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-accent/40 text-brand-accent text-xs font-bold tracking-widest uppercase mb-6">
          <Gift className="w-4 h-4" />
          VEDDIE HOCKEY CONTEST
        </div>

        <h1 className="text-4xl sm:text-6xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
          Win your team a weekend at the Veddie Invitational.
        </h1>

        <p className="text-base sm:text-xl text-brand-muted max-w-2xl mx-auto leading-relaxed font-sans mb-8">
          The name comes from hockey "vet." It celebrates the player who still wants the room, the rivalry, the big save, and the team.
        </p>

        {/* Nostalgia Quote Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0b203a] border-2 border-[#1c3f6e] max-w-2xl mx-auto text-left shadow-2xl relative overflow-hidden">
          <div className="flex items-start gap-4">
            <span className="text-4xl text-brand-accent font-serif leading-none select-none">“</span>
            <div>
              <p className="text-sm sm:text-base text-slate-200 font-sans italic leading-relaxed mb-2">
                I used to find away games with my dad, an arena book, and a map the size of a matchbox with four streets on it. Now I’m a Veddie.
              </p>
              <span className="text-xs font-bold text-brand-accent uppercase tracking-wider block">
                What's your hockey memory?
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* PRIZE HIGHLIGHTS */}
      <div className="max-w-3xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        <div className="p-5 rounded-2xl bg-brand-surface border border-brand-border flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-brand-card text-brand-accent flex items-center justify-center shrink-0 border border-brand-border">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-athletic text-brand-cream text-lg font-bold">
              Full Team Entry
            </h3>
            <p className="text-xs text-brand-muted">
              Early April 2027 Invitational in Richmond Hill (3 games guaranteed + pro room).
            </p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-brand-surface border border-brand-border flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-brand-card text-brand-accent flex items-center justify-center shrink-0 border border-brand-border">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-athletic text-brand-cream text-lg font-bold">
              Official Veddie Hoodie
            </h3>
            <p className="text-xs text-brand-muted">
              Heavyweight black & cream embroidered Veddie championship hoodie.
            </p>
          </div>
        </div>
      </div>

      {/* ENTRY FORM */}
      <div className="max-w-2xl mx-auto w-full mb-16">
        <LeadCaptureForm type="contest" />
      </div>

      {/* LEGAL & RULES DISCLOSURE */}
      <div className="max-w-2xl mx-auto w-full p-6 rounded-2xl bg-brand-card/40 border border-brand-border text-xs text-brand-muted space-y-2">
        <h4 className="font-bold text-brand-cream uppercase tracking-wider text-[11px]">
          Contest Rules & Eligibility (Competition Act Disclosure)
        </h4>
        <p>
          Open to legal residents of Ontario aged 18 and older. No purchase necessary. One entry per person. To enter, submit a valid hockey memory through the form above.
        </p>
        <p>
          Grand Prize consists of one (1) team registration into the 2027 Veddie Invitational tournament in Richmond Hill ($1,500 approx. retail value) and one (1) official Veddie hoodie ($95 value). If the winning captain's team has already paid for registration, the registration fee will be refunded in full.
        </p>
        <p>
          Random draw will be conducted from all eligible entries. Odds of winning depend on the number of eligible entries received. Mathematical skill-testing question required.
        </p>
      </div>
    </div>
  );
}

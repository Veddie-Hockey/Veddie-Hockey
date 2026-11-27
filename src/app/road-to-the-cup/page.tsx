import type { Metadata } from "next";
import Link from "next/link";
import {
  Trophy,
  ExternalLink,
  Mail,
  FileText,
  Download,
  CheckCircle2,
} from "lucide-react";
import ShareToCaptainButton from "@/components/ShareToCaptainButton";

export const metadata: Metadata = {
  title: "Road to the Cup - Standings & Qualification",
  description:
    "Road to the Champions Cup. The closest thing to the show starts in your home league. Check verified qualification standings.",
};

export default function RoadToTheCupPage() {
  return (
    <div className="flex flex-col py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Hero */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-accent/40 text-brand-accent text-xs font-bold tracking-widest uppercase mb-6">
          <Trophy className="w-4 h-4" />
          HOME LEAGUE QUALIFICATION
        </div>

        <h1 className="text-4xl sm:text-6xl font-athletic text-brand-cream tracking-tight mb-4 font-black uppercase">
          Road to the Champions Cup
        </h1>

        <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto mb-8 font-sans font-medium">
          The closest thing to the show starts in your home league. Who’s the team to beat in yours?
        </p>

        {/* Rule copy & rounding example */}
        <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-brand-surface border border-brand-border text-xs text-brand-muted leading-relaxed mb-8">
          <p className="text-sm font-bold text-brand-cream mb-2 font-athletic">
            Official Qualification Rule
          </p>
          <p>
            Win your league’s playoffs, or finish in the top quarter of its standings, rounded up. <strong>A 10-team league sends 3. In an 8-team division, 2 qualify.</strong>
          </p>
        </div>

        {/* Status labels */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
          <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-brand-surface border border-brand-border text-brand-cream">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-accent" />
            In qualifying position
          </span>
          <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-brand-surface border border-brand-border text-brand-cream">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-green" />
            Qualified
          </span>
          <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-brand-surface border border-brand-border text-brand-cream">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-red" />
            Confirmed for April
          </span>
        </div>
      </div>

      {/* EMBEDDED STANDINGS DOCUMENT */}
      <div className="w-full my-4 rounded-3xl overflow-hidden border border-brand-border bg-brand-surface shadow-2xl">
        {/* Document Header Bar */}
        <div className="p-4 sm:p-6 bg-brand-card border-b border-brand-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-accent/20 text-brand-accent flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-athletic text-brand-cream font-bold">
                Veddie Champions Cup — Qualification Watch
              </h2>
              <p className="text-xs text-brand-muted font-sans">
                Official Audit Report · Updated November 27, 2026
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="/documents/road-to-the-cup.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-surface border border-brand-border text-brand-cream hover:text-white hover:bg-brand-surface/80 text-xs font-bold transition-all shadow-sm"
            >
              <ExternalLink className="w-4 h-4 text-brand-muted" />
              Full Screen
            </a>
            <a
              href="/documents/road-to-the-cup.pdf"
              download="Veddie-Road-to-the-Cup-Standings.pdf"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-accent text-brand-navy hover:bg-brand-accent/90 text-xs font-black uppercase tracking-wider transition-all shadow-md"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          </div>
        </div>

        {/* Responsive PDF Viewer */}
        <div className="w-full h-[650px] sm:h-[800px] lg:h-[950px] bg-slate-950">
          <iframe
            src="/documents/road-to-the-cup.pdf#toolbar=1&navpanes=0&scrollbar=1&view=FitH"
            className="w-full h-full border-0"
            title="Veddie Champions Cup Qualification Standings"
          />
        </div>

        {/* Verification Footer Notes & Action Links */}
        <div className="p-6 bg-brand-card/60 border-t border-brand-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-xs text-brand-muted">
            <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
            <span>
              Standings audited across ASHL (Mississauga, Oakville, Oshawa, York), Balmy Beach, Brampton, Burlington, Chesswood, Humber Valley, Loose Ends, Newmarket, Oak Ridges & WHCT.
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
            <Link
              href="/champions-cup#cup-form"
              className="px-6 py-2.5 rounded-xl bg-brand-red text-brand-navy font-black text-xs uppercase tracking-wider hover:bg-brand-red-hover transition-all shadow-md text-center"
            >
              Claim Your Spot
            </Link>
            <a
              href="mailto:info@veddiehockey.com?subject=Claim%20or%20Correct%20Team%20Standings"
              className="px-5 py-2.5 rounded-xl bg-brand-surface border border-brand-border text-brand-cream text-xs font-bold hover:bg-brand-card transition-all flex items-center gap-2 text-center"
            >
              <Mail className="w-3.5 h-3.5 text-brand-accent" />
              Claim / Correct Team
            </a>
          </div>
        </div>
      </div>

      {/* LEAGUE ORGANIZER BLOCK */}
      <div className="mt-12 p-8 sm:p-12 rounded-3xl bg-[#0b203a] border-2 border-[#1c3f6e] max-w-4xl mx-auto text-center shadow-2xl">
        <h3 className="text-2xl sm:text-3xl font-athletic text-brand-cream font-black mb-2">
          Your best teams represent your league on a bigger stage.
        </h3>
        <p className="text-sm text-slate-300 max-w-xl mx-auto mb-8 font-sans leading-relaxed">
          Home league commissioners and operations directors: submit your division leaders and playoff champions for formal eligibility verification.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/nominate"
            className="px-8 py-3.5 rounded-xl bg-brand-cream text-brand-navy font-black text-xs uppercase tracking-wider hover:bg-white transition-all shadow-md"
          >
            Nominate Your Top Teams
          </Link>
          <ShareToCaptainButton />
        </div>
      </div>
    </div>
  );
}

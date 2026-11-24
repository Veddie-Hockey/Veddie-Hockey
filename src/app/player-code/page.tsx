import type { Metadata } from "next";
import { ShieldCheck, Mail, AlertTriangle, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Player Code of Conduct",
  description: "Official Player Code of Conduct, sportsmanship rules, and incident reporting for Veddie Hockey.",
};

export default function PlayerCodePage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-brand-cream/90 leading-relaxed text-sm">
      <div className="mb-8">
        <h1 className="text-4xl font-athletic text-brand-cream tracking-tight mb-3 font-black">
          Player Code of Conduct
        </h1>
        <p className="text-xs text-brand-muted">
          Last Updated: November 2026 • Veddie Hockey Operations
        </p>
      </div>

      {/* Shareable Summary for Captains */}
      <div className="mb-10 p-6 rounded-2xl bg-brand-surface border border-brand-accent/40">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-accent mb-2">
          <FileText className="w-4 h-4" />
          Captain's 30-Second Summary (Share with your squad)
        </div>
        <p className="text-sm text-brand-cream font-medium mb-3">
          We want fast, competitive, high-level hockey where everyone goes to work on Monday.
        </p>
        <ul className="space-y-1.5 text-xs text-brand-muted list-disc pl-5">
          <li><strong>Respect the game:</strong> Competitive body contact is permitted, but reckless hits, cheap shots, and intent to injure lead to ejection and tournament bans.</li>
          <li><strong>Respect officials:</strong> Two certified referees are on the ice. Verbal abuse or threats carry immediate expulsion.</li>
          <li><strong>Respect the room:</strong> Leave dressing rooms clean, look after the tape station, and treat arena facilities with care.</li>
          <li><strong>Zero discrimination:</strong> Discriminatory or derogatory language of any kind results in immediate, indefinite removal.</li>
        </ul>
      </div>

      <div className="space-y-6 mb-12">
        <section className="bg-brand-surface p-6 rounded-xl border border-brand-border">
          <h2 className="text-lg font-athletic text-brand-cream mb-2">1. Respect for Opponents & Player Safety</h2>
          <p className="text-brand-muted">
            We play competitive, intense hockey, but every participant has work, family, and responsibilities the next morning. Clean, hard competition is encouraged; dangerous checks from behind, hits to the head, and retaliatory violence will result in ejection and potential event expulsion.
          </p>
        </section>

        <section className="bg-brand-surface p-6 rounded-xl border border-brand-border">
          <h2 className="text-lg font-athletic text-brand-cream mb-2">2. Respect for Certified Officials & Staff</h2>
          <p className="text-brand-muted">
            Veddie provides certified on-ice referees and digital scorekeepers to ensure player safety and fair play. Abuse, harassment, threats, or confrontation directed toward officials or facility staff will result in an immediate match penalty and suspension review.
          </p>
        </section>

        <section className="bg-brand-surface p-6 rounded-xl border border-brand-border">
          <h2 className="text-lg font-athletic text-brand-cream mb-2">3. Dressing Room & Facility Care</h2>
          <p className="text-brand-muted">
            Teams are expected to treat the locker rooms, essentials tape stations, towels, and arena premises with respect. Vandalism, theft, or deliberate property damage will result in team disqualification and facility damage fees.
          </p>
        </section>

        <section className="bg-brand-surface p-6 rounded-xl border border-brand-border">
          <h2 className="text-lg font-athletic text-brand-cream mb-2">4. Zero Tolerance for Discrimination</h2>
          <p className="text-brand-muted">
            Veddie Hockey is open to all hockey players regardless of race, background, or identity. Any racial, homophobic, or discriminatory slurs on or off the ice carry immediate indefinite bans.
          </p>
        </section>
      </div>

      {/* Incident Reporting & Resolution */}
      <div className="p-6 rounded-xl bg-brand-surface border border-brand-border">
        <h3 className="text-lg font-athletic text-brand-cream mb-2 font-bold flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-brand-accent" />
          Incident Reporting & Dispute Resolution
        </h3>
        <p className="text-xs text-brand-muted leading-relaxed mb-4">
          Any incident involving unsafe play, referee abuse, or conduct violations can be reported directly by team captains or game officials.
        </p>
        <div className="space-y-2 text-xs text-brand-muted">
          <p>
            <strong className="text-brand-cream">Who reviews reports:</strong> All incident reports are reviewed by our Chief Officiating Supervisor and Operations Committee.
          </p>
          <p>
            <strong className="text-brand-cream">How captains hear back:</strong> Both team captains receive a written summary and ruling within 48 hours of an official incident submission.
          </p>
          <p>
            <strong className="text-brand-cream">Reporting contact:</strong> Email{" "}
            <a href="mailto:info@veddiehockey.com" className="text-brand-accent hover:underline font-mono">
              info@veddiehockey.com
            </a>{" "}
            with the subject line <span className="font-mono text-brand-cream">Incident Report - [Team Names]</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

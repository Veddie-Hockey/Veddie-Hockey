import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Participation Terms | Veddie Hockey",
  description: "Official Participation Terms, Registration Rules, and Agreement for Veddie Hockey.",
};

export default function TermsPage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-brand-cream/90 leading-relaxed text-sm">
      <h1 className="text-4xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
        Participation Terms
      </h1>
      <p className="text-xs text-brand-muted mb-8">
        Last Updated: November 2026 • Veddie Hockey Operations
      </p>

      <div className="space-y-6">
        <section className="bg-brand-surface p-6 rounded-xl border border-brand-border">
          <h2 className="text-lg font-athletic text-brand-cream mb-2">1. Interest Inquiries & Eligibility Review</h2>
          <p className="text-brand-muted">
            Submission of an interest form or team nomination does not constitute a confirmed team booking, reserved roster spot, or binding contract. Team entry is confirmed only upon organizer review, division placement verification, and completed registration confirmation.
          </p>
        </section>

        <section className="bg-brand-surface p-6 rounded-xl border border-brand-border">
          <h2 className="text-lg font-athletic text-brand-cream mb-2">2. Invitation Acceptance & Registration Commitment</h2>
          <p className="text-brand-muted">
            Teams receiving an official invitation to the Champions Cup or confirmation for the Veddie Invitational must accept within the designated response window (typically 5 business days). Failure to accept within the window allows Veddie to invite the next eligible team from the verified standby list.
          </p>
        </section>

        <section className="bg-brand-surface p-6 rounded-xl border border-brand-border">
          <h2 className="text-lg font-athletic text-brand-cream mb-2">3. Division Placement & Roster Integrity</h2>
          <p className="text-brand-muted">
            All teams and players agree to provide truthful playing background information. Veddie Hockey reserves the right to review roster eligibility to keep games fair and competitive across all D1–D4 brackets.
          </p>
        </section>

        <section className="bg-brand-surface p-6 rounded-xl border border-brand-border">
          <h2 className="text-lg font-athletic text-brand-cream mb-2">4. Assumption of Risk & Liability</h2>
          <p className="text-brand-muted">
            Ice hockey is a physical sport involving inherent risks. All participants must sign the standard event liability waiver, wear CSA-approved protective equipment, and adhere to facility safety regulations before taking the ice.
          </p>
        </section>

        <section className="bg-brand-surface p-6 rounded-xl border border-brand-border">
          <h2 className="text-lg font-athletic text-brand-cream mb-2">5. Officiating & Sportsmanship</h2>
          <p className="text-brand-muted">
            All games are officiated by certified referees. On-ice referee decisions are final. All players, coaches, and captains are bound by the{" "}
            <Link href="/player-code" className="text-brand-accent hover:underline">
              Veddie Player Code of Conduct
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}

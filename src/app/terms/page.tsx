import type { Metadata } from "next";

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
          <h2 className="text-lg font-athletic text-brand-cream mb-2">1. Registration & Interest Inquiries</h2>
          <p className="text-brand-muted">
            Submission of an interest form on this website does not constitute a confirmed team booking, reserved roster slot, or binding contract. Confirmation is granted only upon organizer review, division placement verification, and completed registration agreements.
          </p>
        </section>

        <section className="bg-brand-surface p-6 rounded-xl border border-brand-border">
          <h2 className="text-lg font-athletic text-brand-cream mb-2">2. Eligibility & Placement Integrity</h2>
          <p className="text-brand-muted">
            All teams and players agree to provide truthful playing background information. Veddie Hockey reserves the right to reassign teams or disqualify ineligible ringers who distort division competitive balance without prior authorization.
          </p>
        </section>

        <section className="bg-brand-surface p-6 rounded-xl border border-brand-border">
          <h2 className="text-lg font-athletic text-brand-cream mb-2">3. Assumption of Risk & Liability</h2>
          <p className="text-brand-muted">
            Ice hockey is a physical contact sport involving inherent risks of injury. All participants must execute an approved liability waiver, wear CSA-approved protective equipment, and adhere to facility safety standards before taking the ice.
          </p>
        </section>

        <section className="bg-brand-surface p-6 rounded-xl border border-brand-border">
          <h2 className="text-lg font-athletic text-brand-cream mb-2">4. Official Officiating Standard</h2>
          <p className="text-brand-muted">
            All games are governed by sanctioned adult hockey rules and certified officials. Decisions of on-ice referees are final in all sporting outcomes. Abuse of officials triggers immediate suspension.
          </p>
        </section>
      </div>
    </div>
  );
}

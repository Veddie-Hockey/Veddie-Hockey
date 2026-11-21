import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy | Veddie Hockey",
  description: "Official Refund and Cancellation Policy for Veddie Hockey events.",
};

export default function RefundPolicyPage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-brand-cream/90 leading-relaxed text-sm">
      <h1 className="text-4xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
        Refund & Cancellation Policy
      </h1>
      <p className="text-xs text-brand-muted mb-8">
        Last Updated: November 2026 • Veddie Hockey Operations
      </p>

      <div className="space-y-6">
        <section className="bg-brand-surface p-6 rounded-xl border border-brand-border">
          <h2 className="text-lg font-athletic text-brand-cream mb-2">1. Veddie Champions Cup Pilot (Late April 2027)</h2>
          <p className="text-brand-muted">
            The April 2027 Champions Cup in Richmond Hill is an invitational pilot with no team registration fee for verified qualifiers. Teams accepted into the Cup incur no entry cost. If an accepted team must withdraw, captains are requested to notify Veddie Operations at least 14 days prior to puck drop so the next verified qualifying team can be invited.
          </p>
        </section>

        <section className="bg-brand-surface p-6 rounded-xl border border-brand-border">
          <h2 className="text-lg font-athletic text-brand-cream mb-2">2. Veddie Invitational (Early April 2027)</h2>
          <p className="text-brand-muted">
            For paid team entries in the Veddie Invitational, team deposits and registration fees are refundable up to 30 days prior to tournament start date, less a standard administrative processing fee ($50 CAD). Within 30 days of the event, withdrawals are non-refundable unless a replacement squad from the division waitlist takes the spot.
          </p>
        </section>

        <section className="bg-brand-surface p-6 rounded-xl border border-brand-border">
          <h2 className="text-lg font-athletic text-brand-cream mb-2">3. Arena Closures & Force Majeure</h2>
          <p className="text-brand-muted">
            If tournament ice times are canceled due to arena mechanical failures, severe weather events, or municipal facility emergencies, Veddie Hockey will provide rescheduled ice slots or a full refund of entry fees.
          </p>
        </section>

        <section className="bg-brand-surface p-6 rounded-xl border border-brand-border">
          <h2 className="text-lg font-athletic text-brand-cream mb-2">4. Questions & Inquiries</h2>
          <p className="text-brand-muted">
            For cancellation requests or questions regarding billing, contact our operations desk at{" "}
            <a href="mailto:info@veddiehockey.com" className="text-brand-accent hover:underline">
              info@veddiehockey.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}

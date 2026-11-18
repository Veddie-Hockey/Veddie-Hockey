import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Veddie Hockey",
  description: "Official Refund and Cancellation Policy for Veddie Hockey tournaments, leagues, and pickup sessions.",
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
          <h2 className="text-lg font-athletic text-brand-cream mb-2">1. Tournaments & Cup Events</h2>
          <p className="text-brand-muted">
            For paid tournament entries, deposits and registration fees are refundable up to 30 days prior to the tournament start date, less a standard administrative processing fee. Withdrawals within 30 days are non-refundable unless a replacement team from the verified standby list takes the spot.
          </p>
        </section>

        <section className="bg-brand-surface p-6 rounded-xl border border-brand-border">
          <h2 className="text-lg font-athletic text-brand-cream mb-2">2. Adult Leagues</h2>
          <p className="text-brand-muted">
            League entry fees are committed to arena ice contracts and officiating rosters. Team or player cancellations requested prior to the published schedule release are eligible for a prorated credit. Once the regular season begins, fees are non-refundable.
          </p>
        </section>

        <section className="bg-brand-surface p-6 rounded-xl border border-brand-border">
          <h2 className="text-lg font-athletic text-brand-cream mb-2">3. Pickup Sessions</h2>
          <p className="text-brand-muted">
            Drop-in pickup skaters may cancel and receive a full credit or refund up to 24 hours prior to the scheduled ice time. Cancellations inside 24 hours are non-refundable as ice costs are fixed.
          </p>
        </section>

        <section className="bg-brand-surface p-6 rounded-xl border border-brand-border">
          <h2 className="text-lg font-athletic text-brand-cream mb-2">4. Event Force Majeure / Arena Closures</h2>
          <p className="text-brand-muted">
            If an event or ice session is canceled due to arena mechanical failures, severe weather, or municipal emergencies, Veddie will offer rescheduled ice times or full credits.
          </p>
        </section>
      </div>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Player Code of Conduct | Veddie Hockey",
  description: "Official Player Code of Conduct and Sportsmanship Guidelines for Veddie Hockey.",
};

export default function PlayerCodePage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-brand-cream/90 leading-relaxed text-sm">
      <h1 className="text-4xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
        Player Code of Conduct
      </h1>
      <p className="text-xs text-brand-muted mb-8">
        Last Updated: November 2026 • Veddie Hockey Operations
      </p>

      <div className="space-y-6">
        <section className="bg-brand-surface p-6 rounded-xl border border-brand-border">
          <h2 className="text-lg font-athletic text-brand-cream mb-2">1. Respect for the Game and Opponents</h2>
          <p className="text-brand-muted">
            We play competitive, intense hockey, but every player has work, family, and responsibilities the next morning. Hard, clean competition is expected; reckless hits, intent to injure, and unsportsmanlike behavior will result in ejection and potential league bans.
          </p>
        </section>

        <section className="bg-brand-surface p-6 rounded-xl border border-brand-border">
          <h2 className="text-lg font-athletic text-brand-cream mb-2">2. Respect for Officials and Staff</h2>
          <p className="text-brand-muted">
            Veddie provides certified on-ice referees and dedicated scorekeepers to protect player safety and uphold the rules. Verbal abuse, threats, or physical confrontation directed at officials, timekeepers, or arena attendants will result in immediate permanent expulsion.
          </p>
        </section>

        <section className="bg-brand-surface p-6 rounded-xl border border-brand-border">
          <h2 className="text-lg font-athletic text-brand-cream mb-2">3. Facility and Dressing Room Stewardship</h2>
          <p className="text-brand-muted">
            Teams are expected to treat arena rooms, amenities, and equipment stations with care. Vandalism, theft, or leaving rooms in unacceptable disarray will incur cleaning surcharges and forfeiture of attendance deposits.
          </p>
        </section>

        <section className="bg-brand-surface p-6 rounded-xl border border-brand-border">
          <h2 className="text-lg font-athletic text-brand-cream mb-2">4. Zero Tolerance for Discrimination</h2>
          <p className="text-brand-muted">
            Veddie Hockey is open to all hockey enthusiasts regardless of race, background, sexual orientation, or identity. Any racial, homophobic, or discriminatory slurs on or off the ice carry immediate indefinite bans.
          </p>
        </section>
      </div>
    </div>
  );
}

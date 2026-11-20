import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Veddie Hockey",
  description: "Official Privacy Policy for Veddie Hockey participants, captains, and website visitors.",
};

export default function PrivacyPage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-brand-cream/90 leading-relaxed text-sm">
      <h1 className="text-4xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
        Privacy Policy
      </h1>
      <p className="text-xs text-brand-muted mb-8">
        Last Updated: November 2026 • Veddie Hockey Operations
      </p>

      <div className="space-y-6">
        <section className="bg-brand-surface p-6 rounded-xl border border-brand-border">
          <h2 className="text-lg font-athletic text-brand-cream mb-2">1. Overview</h2>
          <p className="text-brand-muted">
            Veddie Hockey (“Veddie”, “we”, “our”) respects your privacy and is committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard the data you provide when interacting with our website, submitting interest forms, or participating in our hockey programs.
          </p>
        </section>

        <section className="bg-brand-surface p-6 rounded-xl border border-brand-border">
          <h2 className="text-lg font-athletic text-brand-cream mb-2">2. Information We Collect</h2>
          <p className="text-brand-muted mb-3">
            We collect information strictly necessary to coordinate adult hockey activities, verify division eligibility, and communicate program details:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-brand-muted">
            <li><strong>Contact Details:</strong> Name, email address, phone number, and geographic area.</li>
            <li><strong>Hockey Background:</strong> Home league, team name, playing history, skill level, and age bracket.</li>
            <li><strong>Media:</strong> Photos and game video captured during events (with participant consent).</li>
          </ul>
        </section>

        <section className="bg-brand-surface p-6 rounded-xl border border-brand-border">
          <h2 className="text-lg font-athletic text-brand-cream mb-2">3. How We Use Your Information</h2>
          <p className="text-brand-muted">
            We use collected data solely to: evaluate division balance; notify you of opening tournaments and leagues; organize match schedules; and maintain verified team Elo ratings. We never sell or rent your personal data to third-party advertisers.
          </p>
        </section>

        <section className="bg-brand-surface p-6 rounded-xl border border-brand-border">
          <h2 className="text-lg font-athletic text-brand-cream mb-2">4. Communication & Unsubscribe</h2>
          <p className="text-brand-muted">
            You may unsubscribe from optional promotional emails at any time by clicking the unsubscribe link in any message or contacting our operations desk directly.
          </p>
        </section>
      </div>
    </div>
  );
}

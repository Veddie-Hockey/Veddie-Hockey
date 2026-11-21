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
            Veddie Hockey (“Veddie”, “we”, “our”) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard data when you visit our website, submit interest or nomination forms, or participate in our hockey events.
          </p>
        </section>

        <section className="bg-brand-surface p-6 rounded-xl border border-brand-border">
          <h2 className="text-lg font-athletic text-brand-cream mb-2">2. Information We Collect</h2>
          <p className="text-brand-muted mb-3">
            We collect information strictly necessary to coordinate tournament brackets, verify qualification eligibility, and communicate event logistics:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-brand-muted">
            <li><strong>Contact Information:</strong> Name, email address, phone number, and city/region.</li>
            <li><strong>Team & Playing Background:</strong> Team name, home league, division standings, playing experience, and skill tier.</li>
            <li><strong>Team Nominations:</strong> Details submitted by league commissioners, referees, or nominators for Champions Cup review.</li>
            <li><strong>Media & Coverage Preferences:</strong> In-event team photos and highlight recordings, including opt-out preferences indicated at check-in.</li>
            <li><strong>Newsletter & Communication Preferences:</strong> Email preferences for event announcements, schedule drops, and Road to the Cup updates.</li>
          </ul>
        </section>

        <section className="bg-brand-surface p-6 rounded-xl border border-brand-border">
          <h2 className="text-lg font-athletic text-brand-cream mb-2">3. How We Use Your Information</h2>
          <p className="text-brand-muted">
            We use collected data solely to: evaluate division balance, verify qualification eligibility, coordinate match schedules, deliver post-game photos, and send requested tournament communications. We never sell, rent, or trade your personal information with third-party advertisers.
          </p>
        </section>

        <section className="bg-brand-surface p-6 rounded-xl border border-brand-border">
          <h2 className="text-lg font-athletic text-brand-cream mb-2">4. Data Inquiries & Removal Requests</h2>
          <p className="text-brand-muted">
            If you have questions about your data, wish to update your contact details, or would like your information removed from our records, please contact our team at{" "}
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

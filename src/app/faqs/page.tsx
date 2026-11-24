import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers about the Veddie Invitational, the Champions Cup, qualification rules, amenities, and registration details.",
};

export default function FAQsPage() {
  const faqs = [
    {
      q: "What is the difference between the two April events?",
      a: "The Veddie Invitational in early April 2027 is open to all teams across Open, 40+, 50+ and 60+ divisions with balanced D1–D4 skill tiers. The Veddie Champions Cup in late April in Richmond Hill is an invitational championship strictly for league champions and top-quarter finishers.",
      link: { href: "/play", label: "Compare April Events" },
    },
    {
      q: "How do teams get into the Champions Cup?",
      a: "Win your league's playoffs, or finish in the top quarter of its standings, rounded up. A 10-team league sends 3. We verify official regular-season and playoff standings before issuing an invitation.",
      link: { href: "/champions-cup", label: "View Champions Cup Qualification" },
    },
    {
      q: "How do captains hear back?",
      a: "After you submit an interest or nomination form, our team reviews your team background and division fit, and replies within 2 business days to confirm availability and next steps.",
      link: { href: "/contact", label: "Get in Touch" },
    },
    {
      q: "What do captains have to do?",
      a: "Tell us about your team. We book the ice, the refs, the room, the schedule and the photos. You bring the game. We bring the show.",
      link: { href: "/tournaments", label: "Claim an Invitational Spot" },
    },
    {
      q: "What are the fees?",
      a: "The Champions Cup pilot has no entry fee for qualifying teams. The Veddie Invitational entry fees will be published when registrations open. No payment is required today to express interest.",
      link: { href: "/refund-policy", label: "Read Refund Policy" },
    },
    {
      q: "What do teammates receive?",
      a: "Every team gets dressing rooms with custom nameplates, essentials tape station, fresh cold towels, certified referees, digital scorekeeping, post-game result graphics, and high-res team photos delivered within 72 hours.",
      link: { href: "/experience", label: "See the Full Experience" },
    },
    {
      q: "What is Veddie?",
      a: "Veddie runs men's hockey events in the GTA set up the way the pros have it: your name on the stall, real refs, real standings and a final score worth keeping. First up are the Veddie Invitational in early April 2027 and the Champions Cup in late April in Richmond Hill.",
      link: { href: "/our-story", label: "Read Our Story" },
    },
    {
      q: "Is Veddie only for older players?",
      a: "No. The Invitational has Open, 40+, 50+ and 60+ divisions, and every division gets the same treatment.",
      link: { href: "/divisions", label: "Explore Divisions" },
    },
    {
      q: "Where can I play?",
      a: "April events are in the GTA. The Champions Cup is in Richmond Hill.",
      link: { href: "/play", label: "See Locations & Events" },
    },
    {
      q: "Are players photographed or filmed?",
      a: "Yes. Every team gets a team photo, a final-score graphic and highlights. Tell us at check-in if you'd rather not be filmed.",
      link: { href: "/experience", label: "See Media Coverage" },
    },
    {
      q: "Is there body checking?",
      a: "Contact rules will be published for each program before registration. Non-checking with competitive body contact allowances to keep games fair and safe.",
      link: { href: "/player-code", label: "Read Player Code of Conduct" },
    },
    {
      q: "Can I get a refund?",
      a: "Deposits and entry fees are refundable up to 30 days prior to event start date, less a standard administrative processing fee. Read our full Refund Policy for details.",
      link: { href: "/refund-policy", label: "View Refund Policy" },
    },
    {
      q: "Can I join without a team?",
      a: "Yes. Individual players can submit an interest form. We place free agents on balanced rosters 14 days before puck drop.",
      link: { href: "/play", label: "Find Your Game" },
    },
    {
      q: "Do I need to have played at a high level?",
      a: "No. Our division framework runs from D1 Elite (junior, university, pro) to D4 Recreational (house league or learned as an adult). Every tier gets identical pro treatment.",
      link: { href: "/divisions", label: "Check Division Criteria" },
    },
    {
      q: "What equipment do I need?",
      a: "Bring your full hockey equipment with a CSA-approved helmet. Specific jersey guidelines and required protective gear are shared prior to puck drop.",
      link: { href: "/contact", label: "Ask Equipment Questions" },
    },
  ];

  return (
    <div className="flex flex-col py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-border text-brand-accent text-xs font-bold tracking-widest uppercase mb-6">
          <HelpCircle className="w-4 h-4" />
          FREQUENTLY ASKED QUESTIONS
        </div>

        <h1 className="text-4xl sm:text-6xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
          A few things before you lace up.
        </h1>

        <p className="text-base sm:text-lg text-brand-muted max-w-xl mx-auto">
          Everything you need to know about the April events, qualification, team amenities, and division rules.
        </p>
      </div>

      <div className="max-w-3xl mx-auto w-full space-y-4 mb-16">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="p-6 sm:p-8 rounded-2xl bg-brand-surface border border-brand-border transition-colors hover:border-brand-border-focus"
          >
            <h3 className="text-lg font-athletic text-brand-cream mb-2">
              {faq.q}
            </h3>
            <p className="text-sm text-brand-muted leading-relaxed mb-4">
              {faq.a}
            </p>
            {faq.link && (
              <Link
                href={faq.link.href}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-accent hover:text-brand-accent-hover transition-colors"
              >
                <span>{faq.link.label}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Still have a question? */}
      <div className="max-w-xl mx-auto text-center p-8 rounded-2xl bg-brand-surface border border-brand-accent/30">
        <h3 className="text-2xl font-athletic text-brand-cream mb-2">
          I still have a question.
        </h3>
        <p className="text-sm text-brand-muted mb-6">
          We’d like to hear it. Send us a message and our team will get back to you within 2 business days.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-accent text-brand-navy font-bold text-xs font-bold uppercase tracking-wider hover:bg-brand-accent-hover transition-all"
        >
          Contact Veddie
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Hockey Questions & Answers | Veddie Hockey",
  description:
    "Learn how Veddie works, from skill divisions and age categories to team applications, individual interest and program details.",
};

export default function FAQsPage() {
  const faqs = [
    {
      q: "What is Veddie?",
      a: "Veddie is a premium adult hockey brand being built around organized competition, player experience and community. Our five ways to play are Champions Cup, Champions League, Tournaments, Leagues and Pickup.",
    },
    {
      q: "Do I need to have played at a high level?",
      a: "No. Our division framework runs from D1 Elite to D4 Recreational. You should choose a program suited to your current ability.",
    },
    {
      q: "Is Veddie only for older players?",
      a: "No. Open is for adults aged 18 and older. We also have planned 40+, 50+ and 60+ categories where demand supports them.",
    },
    {
      q: "Can I join without a team?",
      a: "Yes. Pickup is for individuals, and league interest forms include an individual-player option. Some tournaments may also offer individual player placement.",
    },
    {
      q: "Where can I play?",
      a: "Locations will be published as programs are confirmed. Tell us your preferred area (e.g. GTA, Kitchener-Waterloo, Oakville, London) so we can contact you about suitable opportunities.",
    },
    {
      q: "What equipment do I need?",
      a: "Bring your full hockey equipment. The required protective equipment and any uniform instructions will be stated in your program rules before registration.",
    },
    {
      q: "Is there body checking?",
      a: "Contact rules will be published for each program before registration. Do not assume a division label tells you its checking rules. (Most adult programs are strict non-checking with competitive body contact allowances).",
    },
    {
      q: "What is included?",
      a: "Each listing will state its game package, amenities, support, media and price. Pickup has a different package from full championship competitions.",
    },
    {
      q: "Are players photographed or filmed?",
      a: "Media coverage varies by program. We will explain coverage, use of images and the applicable consent process before participation.",
    },
    {
      q: "Can I get a refund?",
      a: "Each program will show its cancellation, refund and credit rules before payment. Read the terms for the specific booking.",
    },
    {
      q: "Does joining an interest list guarantee a place?",
      a: "No. An interest submission is not a booking, acceptance or payment. We will explain the next steps when relevant programs are confirmed.",
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
          Everything you need to know about our competition structure, division rules, and player experience.
        </p>
      </div>

      <div className="max-w-3xl mx-auto w-full space-y-4 mb-16">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="p-6 sm:p-8 rounded-2xl bg-brand-surface border border-brand-border"
          >
            <h3 className="text-lg font-athletic text-brand-cream mb-2">
              {faq.q}
            </h3>
            <p className="text-sm text-brand-muted leading-relaxed">
              {faq.a}
            </p>
          </div>
        ))}
      </div>

      {/* Still have a question? */}
      <div className="max-w-xl mx-auto text-center p-8 rounded-2xl bg-brand-surface border border-brand-accent/30">
        <h3 className="text-2xl font-athletic text-brand-cream mb-2">
          I still have a question.
        </h3>
        <p className="text-sm text-brand-muted mb-6">
          We’d like to hear it. Send us a message and our team will get back to you promptly.
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

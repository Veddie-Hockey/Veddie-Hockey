import type { Metadata } from "next";
import { MessageSquare, Instagram, Mail } from "lucide-react";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Ask about the Invitational, the Champions Cup, team nomination, division placement, or partnerships.",
};

interface ContactPageProps {
  searchParams: {
    topic?: string;
  };
}

export default function ContactPage({ searchParams }: ContactPageProps) {
  const initialTopic =
    searchParams?.topic === "help-choosing"
      ? "Division placement"
      : searchParams?.topic || "The Invitational";

  return (
    <div className="flex flex-col py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-border text-brand-accent text-xs font-bold tracking-widest uppercase mb-6">
          <MessageSquare className="w-4 h-4" />
          GET IN TOUCH
        </div>

        <h1 className="text-4xl sm:text-6xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
          Contact Veddie
        </h1>

        <p className="text-base sm:text-lg text-brand-muted max-w-xl mx-auto mb-6">
          Questions about the Invitational, the Champions Cup, nominating a squad, or division placement? Send us a note and we’ll reply within 2 business days.
        </p>

        {/* Instagram DM prompt */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-surface border border-brand-border text-xs sm:text-sm text-brand-muted">
          <Instagram className="w-4 h-4 text-brand-accent shrink-0" />
          <span>
            Or DM us on Instagram{" "}
            <a
              href="https://instagram.com/veddiehockey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-cream font-bold hover:text-brand-accent underline underline-offset-2"
            >
              @veddiehockey
            </a>
            : <strong className="text-brand-accent">INVITE</strong> for the Invitational,{" "}
            <strong className="text-brand-accent">CUP</strong> for the Champions Cup.
          </span>
        </div>
      </div>

      <LeadCaptureForm
        type="contact"
        defaultTopic={initialTopic}
        hideHeading={true}
        buttonText="Send Message"
      />
    </div>
  );
}

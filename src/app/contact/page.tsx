import type { Metadata } from "next";
import { Mail, MessageSquare } from "lucide-react";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export const metadata: Metadata = {
  title: "Contact Veddie Hockey",
  description:
    "Ask about Veddie divisions, team entry, and partnerships. Get help finding your next hockey opportunity.",
};

interface ContactPageProps {
  searchParams: {
    topic?: string;
  };
}

export default function ContactPage({ searchParams }: ContactPageProps) {
  const initialTopic =
    searchParams?.topic === "help-choosing"
      ? "Choosing a program"
      : searchParams?.topic || "Choosing a program";

  return (
    <div className="flex flex-col py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-border text-brand-accent text-xs font-bold tracking-widest uppercase mb-6">
          <MessageSquare className="w-4 h-4" />
          GET IN TOUCH
        </div>

        <h1 className="text-4xl sm:text-6xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
          Let’s talk hockey.
        </h1>

        <p className="text-base sm:text-lg text-brand-muted max-w-xl mx-auto">
          Questions about your division, team entry, or a partnership? Send us a note and we’ll help with the next step.
        </p>
      </div>

      <LeadCaptureForm type="contact" defaultTopic={initialTopic} />
    </div>
  );
}

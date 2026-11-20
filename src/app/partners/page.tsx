import type { Metadata } from "next";
import { Handshake, Building, Trophy, Sparkles, Shield } from "lucide-react";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export const metadata: Metadata = {
  title: "League & Brand Partnerships | Veddie Hockey",
  description:
    "Help build a better adult hockey experience. Explore Veddie partnerships for leagues, sponsors, arenas and local service providers.",
};

export default function PartnersPage() {
  const partnerTypes = [
    {
      title: "League Commissioners",
      description: "Partner with Veddie to offer your division champions and top-25% squads automatic qualification bids into the Champions Cup.",
      icon: Trophy,
    },
    {
      title: "Arena Facilities",
      description: "Provide prime ice inventory for tournaments, Champions League fixtures, and recurring adult sessions in modern twin/quad pad venues.",
      icon: Building,
    },
    {
      title: "Brand Sponsors",
      description: "Put your brand directly in front of thousands of active, dedicated adult athletes, professionals, and community leaders across Southern Ontario.",
      icon: Sparkles,
    },
    {
      title: "Local Service Providers",
      description: "Partner with Veddie as an official provider of skate sharpening, athletic therapy, equipment repair, or player recovery nutrition.",
      icon: Shield,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative min-h-[55vh] flex items-center justify-center bg-gradient-to-b from-brand-navy via-brand-surface to-brand-navy border-b border-brand-border px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-border text-brand-accent text-xs font-bold tracking-widest uppercase mb-6">
            <Handshake className="w-4 h-4" />
            COLLABORATION
          </div>

          <h1 className="text-4xl sm:text-6xl font-athletic text-brand-cream tracking-tight mb-6 font-black">
            Let’s build something for hockey players.
          </h1>

          <p className="text-base sm:text-xl text-brand-muted max-w-2xl mx-auto leading-relaxed">
            Help build a better adult hockey experience. Explore Veddie partnerships for leagues, sponsors, arenas and local service providers.
          </p>
        </div>
      </section>

      {/* PARTNERSHIP TIERS */}
      <section className="py-20 bg-brand-navy border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {partnerTypes.map((tier) => {
              const Icon = tier.icon;
              return (
                <div
                  key={tier.title}
                  className="p-6 rounded-2xl bg-brand-surface border border-brand-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-card text-brand-accent flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-athletic text-brand-cream mb-2">
                    {tier.title}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {tier.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-24 bg-brand-surface px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-athletic text-brand-cream tracking-tight mb-2">
            Start the Conversation
          </h2>
          <p className="text-sm text-brand-muted">
            Tell us about your organization and how we can collaborate.
          </p>
        </div>

        <LeadCaptureForm type="partners" />
      </section>
    </div>
  );
}

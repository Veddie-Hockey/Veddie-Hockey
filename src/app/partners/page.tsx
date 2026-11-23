import type { Metadata } from "next";
import Link from "next/link";
import {
  Handshake,
  Trophy,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Camera,
  DoorClosed,
  Share2,
  Beer,
  Building,
  Briefcase,
} from "lucide-react";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export const metadata: Metadata = {
  title: "Partners | Veddie Hockey",
  description:
    "Partner with Veddie Hockey. Opportunities for league organizers, brand sponsors, and community partners across the GTA.",
};

export default function PartnersPage() {
  const sponsorOptions = [
    {
      title: "A Division",
      description: "Naming rights on division schedules, bracket boards, and championship trophies.",
      icon: Trophy,
    },
    {
      title: "The Room",
      description: "Branding on custom player nameplates, essentials tape station, and dressing room towels.",
      icon: DoorClosed,
    },
    {
      title: "Player Services",
      description: "Direct exposure for local physiotherapy, chiro, sports rehab, wealth advisory, or real estate practices.",
      icon: Briefcase,
    },
    {
      title: "Result Cards",
      description: "Logo integration on digital final-score cards saved and shared to team group chats.",
      icon: Share2,
    },
    {
      title: "Event Photo & Video",
      description: "Presenting sponsor on high-resolution team photo galleries and gameday highlight packages.",
      icon: Camera,
    },
    {
      title: "The Post-Game",
      description: "Exclusive beverage, hospitality, and recovery partner in the post-game lounge.",
      icon: Beer,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-brand-navy via-brand-surface to-brand-navy border-b border-brand-border px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-border text-brand-accent text-xs font-bold tracking-widest uppercase mb-6">
            <Handshake className="w-4 h-4" />
            PARTNERSHIPS
          </div>

          <h1 className="text-4xl sm:text-6xl font-athletic text-brand-cream tracking-tight mb-6 font-black">
            Two ways to partner with Veddie.
          </h1>

          <p className="text-base sm:text-xl text-brand-muted max-w-2xl mx-auto leading-relaxed">
            For league organizers sending their best squads to a bigger stage, and sponsors looking to connect with adult hockey players where they actually look.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#leagues"
              className="px-6 py-3 rounded-xl bg-brand-card border border-brand-border text-brand-cream text-xs font-bold uppercase tracking-wider hover:border-brand-accent transition-colors"
            >
              For League Organizers &darr;
            </a>
            <a
              href="#sponsors"
              className="px-6 py-3 rounded-xl bg-brand-accent text-brand-navy text-xs font-bold uppercase tracking-wider hover:bg-brand-accent-hover transition-colors"
            >
              For Sponsors &darr;
            </a>
          </div>
        </div>
      </section>

      {/* PATH 1: LEAGUE ORGANIZERS */}
      <section id="leagues" className="py-20 bg-brand-navy border-b border-brand-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="p-8 sm:p-12 rounded-2xl bg-brand-surface border border-brand-border relative overflow-hidden">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
                Path 1 · League Organizers & Commissioners
              </span>
              <h2 className="text-3xl sm:text-4xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
                Your best teams represent your league on a bigger stage.
              </h2>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed mb-6">
                We partner with recreational leagues across Ontario to recognize top performance. Submit your division standings or playoff champions, and we verify eligibility for the Veddie Champions Cup in Richmond Hill.
              </p>

              {/* Standings check process */}
              <div className="space-y-3 mb-8 p-5 rounded-xl bg-brand-card border border-brand-border/60">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-cream block">
                  How the Standings Check Works
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-brand-muted">
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-brand-cream">1. Share Standings:</strong> Provide a public link or official table of your division standings or playoff results.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-brand-cream">2. Top 25% Rule:</strong> We verify teams finishing in your division's top quarter (rounded up: a 10-team league sends 3) or playoff champions.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-brand-cream">3. Official Invitation:</strong> Qualifying captains receive an official invitation package with no entry fee for the pilot.
                    </span>
                  </li>
                </ul>
              </div>

              <Link
                href="/nominate"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-accent text-brand-navy font-bold text-xs font-bold uppercase tracking-wider hover:bg-brand-accent-hover transition-all"
              >
                Nominate your top teams
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PATH 2: SPONSORS */}
      <section id="sponsors" className="py-24 bg-brand-surface border-b border-brand-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
              Path 2 · Brand Partnerships
            </span>
            <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
              Put your name where adult hockey players actually look: the room and the group chat.
            </h2>
            <p className="text-base text-brand-muted leading-relaxed">
              Adult hockey players don’t watch perimeter rink board banners while racing back on defense. They look at their custom stall nameplate, cold towel, and the final-score graphic that gets shared into WhatsApp and iMessage.
            </p>
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-card border border-brand-border text-xs text-brand-accent font-semibold">
              <span>Projected reach: 1,000+ active adult hockey players across the GTA</span>
            </div>
          </div>

          {/* Sponsor Opportunities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {sponsorOptions.map((opt) => {
              const Icon = opt.icon;
              return (
                <div
                  key={opt.title}
                  className="p-6 rounded-2xl bg-brand-card border border-brand-border hover:border-brand-accent/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-surface text-brand-accent flex items-center justify-center mb-4 border border-brand-border">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-athletic text-brand-cream mb-2">
                    {opt.title}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {opt.description}
                  </p>
                </div>
              );
            })}

            {/* Sample Placement Card */}
            <div className="p-6 rounded-2xl bg-brand-card border-2 border-dashed border-brand-accent/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-brand-accent text-brand-navy font-mono">
                    Sample
                  </span>
                  <Sparkles className="w-4 h-4 text-brand-accent" />
                </div>
                <h3 className="text-lg font-athletic text-brand-cream mb-2">
                  Sample Gameday Placement
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed mb-4">
                  "Presented by [Your Brand]" watermark on all digital post-game result cards and high-res dressing room nameplates.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-brand-surface border border-brand-border text-center">
                <span className="text-xs text-brand-cream font-mono font-bold">
                  VEDDIE INVITATIONAL · [YOUR LOGO HERE]
                </span>
              </div>
            </div>
          </div>

          {/* Locker Room Partners (April Trial) */}
          <div className="mb-12 p-8 rounded-2xl bg-[#0b203a] border-2 border-[#1c3f6e] max-w-4xl mx-auto shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  Product-For-Placement Program
                </div>
                <h3 className="text-2xl font-athletic text-brand-cream font-bold mb-2">
                  Locker Room Partners · April Trial
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl font-sans leading-relaxed">
                  Supply product (hydration, recovery nutrition, tape, or shower products) for ~240 adult athletes at our April events. In return, get staged locker room photography, product placement in player stalls, distribution verification, and direct player feedback within 3 business days.
                </p>
              </div>
              <a
                href="#partner-form"
                className="shrink-0 px-6 py-3.5 rounded-xl bg-brand-accent text-brand-navy font-bold text-xs uppercase tracking-wider hover:bg-brand-accent-hover transition-all text-center"
              >
                Apply for April Trial &rarr;
              </a>
            </div>
          </div>

          <div className="text-center mb-16">
            <a
              href="#partner-form"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-accent text-brand-navy font-bold text-xs uppercase tracking-wider hover:bg-brand-accent-hover transition-all"
            >
              Partner on a division or the post-game
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Arena notice */}
          <div className="p-5 rounded-xl bg-brand-card border border-brand-border max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-xs text-brand-muted">
              <Building className="w-4 h-4 text-brand-accent shrink-0" />
              <span>
                Operating an arena facility? Send arena ice inquiries directly to our{" "}
                <Link href="/expand" className="text-brand-cream underline hover:text-brand-accent font-semibold">
                  Venue Partnership form on /expand
                </Link>
                .
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section id="partner-form" className="py-24 bg-brand-navy px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-athletic text-brand-cream tracking-tight mb-2">
            Start a Partnership Conversation
          </h2>
          <p className="text-sm text-brand-muted">
            Tell us about your brand or league. We reply within 2 business days.
          </p>
        </div>

        <LeadCaptureForm
          type="partners"
          hideHeading={true}
          buttonText="Partner on a division or the post-game"
        />
      </section>
    </div>
  );
}

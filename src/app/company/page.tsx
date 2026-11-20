import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Building,
  Users,
  Briefcase,
  TrendingUp,
  MapPin,
  Mail,
  ArrowRight,
  Shield,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Company | Veddie Hockey",
  description:
    "About Veddie Hockey, our mission to build the pro adult hockey league of the future, careers, investors, and headquarters.",
};

export default function CompanyPage() {
  const openRoles = [
    {
      title: "Arena Operations Director",
      department: "League Operations",
      location: "Toronto / GTA, ON",
      type: "Full-Time",
      description:
        "Lead on-site gameday operations across our twin/quad pad arena hubs. Ensure dressing rooms, towel services, timekeeping, and on-ice scheduling run with professional precision.",
    },
    {
      title: "Chief Officiating Supervisor",
      department: "Sporting Integrity",
      location: "Southern Ontario",
      type: "Part-Time / Contract",
      description:
        "Manage certified referee recruitment, evaluate division placement standards, enforce the Player Code of Conduct, and resolve competitive parity reviews.",
    },
    {
      title: "Gameday Video & Highlight Editor",
      department: "Media & Content",
      location: "Toronto, ON (Hybrid)",
      type: "Contract",
      description:
        "Turn raw HD game footage into weekly top-10 plays, social media snipes, and player profile clips that give adult hockey life beyond the group chat.",
    },
    {
      title: "Host & Equipment Attendant",
      department: "Player Experience",
      location: "Oakville / Kitchener / Toronto",
      type: "Part-Time / Evenings",
      description:
        "Welcome teams at the rink, manage stall nameplates, essentials taping bars, hydration stations, and provide first-class player care.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-brand-navy via-brand-surface to-brand-navy border-b border-brand-border px-4 sm:px-6 lg:px-8 py-20 text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15 filter brightness-50 pointer-events-none"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?auto=format&fit=crop&w=1600&q=80')",
          }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-accent/40 text-brand-accent text-xs font-bold tracking-widest uppercase mb-6">
            <Building className="w-4 h-4" />
            VEDDIE SPORTS GROUP
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-athletic text-brand-cream tracking-tight mb-6 font-black">
            The League for Hockey Vets.
          </h1>

          <p className="text-base sm:text-xl text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
            We are building the modern infrastructure for adult sports: professional treatment, fair competition, authentic media, and lasting community for players whose careers continue outside the show.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold uppercase tracking-wider">
            <a
              href="#about"
              className="px-6 py-3 rounded-xl bg-brand-surface border border-brand-border text-brand-cream hover:border-brand-accent transition-colors"
            >
              About Veddie
            </a>
            <a
              href="#careers"
              className="px-6 py-3 rounded-xl bg-brand-accent text-brand-navy hover:bg-brand-accent-hover transition-colors"
            >
              We’re Hiring &rarr;
            </a>
            <a
              href="#investors"
              className="px-6 py-3 rounded-xl bg-brand-surface border border-brand-border text-brand-cream hover:border-brand-accent transition-colors"
            >
              Investors
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-brand-navy border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2 font-athletic">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-6">
                Redefining adult recreational hockey.
              </h2>
              <div className="space-y-4 text-sm text-brand-muted leading-relaxed font-sans">
                <p>
                  Founded in Ontario, Veddie was born from a simple observation: millions of adults dedicate their evenings and weekends to ice hockey, yet the leagues they play in treat them like an afterthought.
                </p>
                <p>
                  Cold dressing rooms, missing referees, 11:45 PM puck drops, unverified skill levels, and zero media coverage became the beer-league norm. We rejected that compromise.
                </p>
                <p className="text-brand-cream font-medium">
                  Veddie introduces an integrated experience: spotless dressing rooms with nameplates, fresh towel service, certified referees, high-definition replays, verified mathematical Elo rankings, and funded tournament championship prizes.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="/our-story"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-accent hover:underline"
                >
                  Read Our Full Brand Story &rarr;
                </Link>
              </div>
            </div>

            {/* Photo Card */}
            <div className="relative rounded-2xl overflow-hidden border border-brand-border shadow-2xl h-[450px]">
              <div
                className="absolute inset-0 bg-cover bg-center filter brightness-90"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1515703407324-5f753eed2311?auto=format&fit=crop&w=1000&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-brand-surface/90 backdrop-blur-md border border-brand-border">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-accent block">
                  Operating Standard
                </span>
                <p className="text-sm font-athletic text-brand-cream mt-1">
                  “A hockey vet isn’t an age. It’s someone who keeps coming back.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAREERS SECTION (BRODIE SPEC) */}
      <section id="careers" className="py-24 bg-brand-surface border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent text-xs font-bold uppercase tracking-wider mb-3">
                <Briefcase className="w-3.5 h-3.5" />
                Join The Team
              </div>
              <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight">
                We’re Hiring. Build the league with us.
              </h2>
              <p className="text-sm text-brand-muted mt-2 max-w-xl">
                We are building a world-class team of sports operators, certified officials, video editors, and on-site hospitality hosts.
              </p>
            </div>

            <a
              href="mailto:careers@veddiehockey.com?subject=Veddie%20Career%20Application"
              className="px-6 py-3.5 rounded-xl bg-brand-accent text-brand-navy text-xs font-bold uppercase tracking-wider hover:bg-brand-accent-hover transition-all shrink-0"
            >
              General Application &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openRoles.map((role) => (
              <div
                key={role.title}
                className="p-8 rounded-2xl bg-brand-card border border-brand-border hover:border-brand-accent/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">
                      {role.department}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-surface border border-brand-border text-brand-cream">
                      {role.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-athletic text-brand-cream mb-1">
                    {role.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-brand-muted mb-4">
                    <MapPin className="w-3.5 h-3.5 text-brand-accent" />
                    <span>{role.location}</span>
                  </div>

                  <p className="text-xs text-brand-muted leading-relaxed mb-6 font-sans">
                    {role.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-border flex items-center justify-between">
                  <a
                    href={`mailto:careers@veddiehockey.com?subject=Application:%20${encodeURIComponent(
                      role.title
                    )}`}
                    className="text-xs font-bold uppercase tracking-wider text-brand-cream hover:text-brand-accent transition-colors flex items-center gap-1.5"
                  >
                    Apply For Role <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTORS SECTION */}
      <section id="investors" className="py-24 bg-brand-navy border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2 font-athletic">
              Growth & Capital
            </span>
            <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4">
              Scaling premium recreational sports.
            </h2>
            <p className="text-sm sm:text-base text-brand-muted font-sans leading-relaxed">
              Veddie operates an asset-light, high-margin model pairing guaranteed arena ice inventory with premium tournament entries, recurring league seasons, drop-in sessions, and brand partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border">
              <span className="text-2xl font-athletic text-brand-accent font-bold block mb-1">
                Repeat Ritual
              </span>
              <p className="text-xs text-brand-muted font-sans">
                High player retention through weekly league play, verified Elo tracking, and perennial championship eligibility.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border">
              <span className="text-2xl font-athletic text-brand-accent font-bold block mb-1">
                Asset-Light
              </span>
              <p className="text-xs text-brand-muted font-sans">
                Leverages existing multi-pad municipal and private arena infrastructure without capital real-estate expenditure.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border">
              <span className="text-2xl font-athletic text-brand-accent font-bold block mb-1">
                Scalable Hubs
              </span>
              <p className="text-xs text-brand-muted font-sans">
                Proven Ontario playbook ready for turnkey replication across major North American hockey metropolitan markets.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-athletic text-brand-cream text-lg">
                Investor Relations & Partnership Inquiries
              </h4>
              <p className="text-xs text-brand-muted mt-0.5">
                Contact our corporate growth desk for executive briefings and expansion plans.
              </p>
            </div>
            <a
              href="mailto:investors@veddiehockey.com"
              className="px-6 py-3 rounded-xl bg-brand-cream text-brand-navy text-xs font-bold uppercase tracking-wider hover:bg-white transition-all shrink-0"
            >
              Contact Investor Relations &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* HEADQUARTERS & CONTACT */}
      <section className="py-20 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2 font-athletic">
                Headquarters
              </span>
              <h3 className="text-2xl sm:text-4xl font-athletic text-brand-cream tracking-tight mb-4">
                Toronto, Ontario
              </h3>
              <p className="text-sm text-brand-muted font-sans leading-relaxed mb-6">
                Our central operations hub coordinates regional tournament circuits, certified referee dispatch, and player experience across the Greater Toronto Area, Halton, and Southwestern Ontario.
              </p>

              <div className="space-y-3 text-xs text-brand-cream">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-accent shrink-0" />
                  <span>5-1050 King Street W., Toronto, Ontario M6K 0C7</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-brand-accent shrink-0" />
                  <span>info@veddiehockey.com</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-brand-navy border border-brand-border text-center">
              <h4 className="text-xl font-athletic text-brand-cream mb-2">
                Have a Question for Our Team?
              </h4>
              <p className="text-xs text-brand-muted font-sans mb-6">
                Whether you’re a team captain, arena manager, or prospective partner, we’d love to connect.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-accent text-brand-navy text-xs font-bold uppercase tracking-wider hover:bg-brand-accent-hover transition-all"
              >
                Send Us A Note <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

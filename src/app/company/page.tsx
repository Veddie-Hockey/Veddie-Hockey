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
      {/* =========================================================================
          01 / HERO (RINK NAVY + ARENA PHOTOGRAPHY + BRAND ACCENT)
      ========================================================================= */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-brand-navy border-b border-brand-border px-4 sm:px-6 lg:px-8 py-20 text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 filter brightness-50 pointer-events-none"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/70 to-brand-navy/50 pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex justify-center mb-4">
            <div className="h-1.5 w-12 bg-brand-red rounded-full" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-card border border-brand-border text-brand-cream text-xs font-bold tracking-widest uppercase mb-6 shadow-lg">
            <Building className="w-4 h-4 text-brand-red" />
            VEDDIE SPORTS GROUP • ABOUT & CAREERS
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-athletic text-brand-cream tracking-tight mb-6 font-black">
            The League for Hockey Vets.
          </h1>

          <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
            We are building the modern infrastructure for adult sports: professional treatment, fair competition, authentic media, and lasting community for players whose careers continue outside the show.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-black uppercase tracking-wider">
            <a
              href="#about"
              className="px-6 py-3.5 rounded-xl bg-brand-cream text-brand-navy hover:bg-white transition-all shadow-md"
            >
              About Veddie
            </a>
            <a
              href="#careers"
              className="px-6 py-3.5 rounded-xl bg-brand-red text-brand-navy hover:bg-brand-red-hover transition-all shadow-lg"
            >
              We’re Hiring &rarr;
            </a>
            <a
              href="#investors"
              className="px-6 py-3.5 rounded-xl bg-[#0b203a] border-2 border-[#1c3f6e] text-brand-cream hover:border-brand-cream transition-all shadow-md"
            >
              Investors
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02 / ABOUT SECTION (HERITAGE CREAM SECTION — 30% BRAND GUIDE STANDARD)
      ========================================================================= */}
      <section id="about" className="py-24 bg-brand-cream text-brand-navy border-b border-brand-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="h-1.5 w-12 bg-brand-red rounded-full mb-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand-slate block mb-2 font-athletic">
                Who We Are
              </span>
              <h2 className="text-4xl sm:text-5xl font-athletic text-brand-navy tracking-tight mb-6 font-black">
                Redefining adult recreational hockey.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-brand-slate leading-relaxed font-sans">
                <p>
                  Founded in Ontario, Veddie was born from a simple observation: millions of adults dedicate their evenings and weekends to ice hockey, yet the leagues they play in treat them like an afterthought.
                </p>
                <p>
                  Cold dressing rooms, missing referees, 11:45 PM puck drops, unverified skill levels, and zero media coverage became the beer-league norm. We rejected that compromise.
                </p>
                <p className="text-brand-navy font-bold">
                  Veddie introduces an integrated experience: spotless dressing rooms with nameplates, fresh towel service, certified referees, high-definition replays, verified mathematical Elo rankings, and funded tournament championship prizes.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="/our-story"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-red text-brand-navy font-black text-xs uppercase tracking-wider hover:bg-brand-red-hover transition-all shadow-md"
                >
                  Read Our Full Brand Story &rarr;
                </Link>
              </div>
            </div>

            {/* Photo Card */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-brand-navy/20 shadow-2xl h-[450px]">
              <div
                className="absolute inset-0 bg-cover bg-center filter brightness-90"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1515703407324-5f753eed2311?auto=format&fit=crop&w=1000&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-brand-navy/95 backdrop-blur-md border border-brand-border text-brand-cream">
                <div className="h-1 w-8 bg-brand-red mb-2" />
                <span className="text-xs font-bold uppercase tracking-wider text-brand-cream/80 block">
                  Operating Standard
                </span>
                <p className="text-base font-athletic text-brand-cream mt-1 font-bold">
                  “A hockey vet isn’t an age. It’s someone who keeps coming back.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          03 / CAREERS SECTION (HIGH CONTRAST RINK NAVY CARDS)
      ========================================================================= */}
      <section id="careers" className="py-24 bg-brand-navy border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="h-1.5 w-12 bg-brand-red rounded-full mb-4" />
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red text-brand-navy text-xs font-black uppercase tracking-wider mb-3 shadow-md">
                <Briefcase className="w-3.5 h-3.5" />
                Join The Team
              </div>
              <h2 className="text-4xl sm:text-6xl font-athletic text-brand-cream tracking-tight font-black">
                We’re Hiring. Build the league with us.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-xl font-sans">
                We are building a world-class team of sports operators, certified officials, video editors, and on-site hospitality hosts.
              </p>
            </div>

            <a
              href="mailto:careers@veddiehockey.com?subject=Veddie%20Career%20Application"
              className="px-8 py-4 rounded-xl bg-brand-red text-brand-navy text-xs font-black uppercase tracking-wider hover:bg-brand-red-hover transition-all shrink-0 shadow-lg"
            >
              General Application &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openRoles.map((role) => (
              <div
                key={role.title}
                className="p-8 rounded-2xl bg-[#0b203a] border-2 border-[#1c3f6e] hover:border-brand-red transition-all flex flex-col justify-between shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-cream">
                      {role.department}
                    </span>
                    <span className="text-xs font-bold uppercase px-2.5 py-1 rounded bg-brand-cream text-brand-navy">
                      {role.type}
                    </span>
                  </div>

                  <h3 className="text-2xl font-athletic text-brand-cream mb-1 font-black group-hover:text-brand-cream-light">
                    {role.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 mb-4 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-brand-red" />
                    <span>{role.location}</span>
                  </div>

                  <p className="text-sm text-slate-200 leading-relaxed mb-6 font-sans">
                    {role.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-border flex items-center justify-between">
                  <a
                    href={`mailto:careers@veddiehockey.com?subject=Application:%20${encodeURIComponent(
                      role.title
                    )}`}
                    className="text-xs font-black uppercase tracking-wider text-brand-cream group-hover:text-brand-red transition-colors flex items-center gap-1.5"
                  >
                    Apply For Role <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          04 / INVESTORS SECTION
      ========================================================================= */}
      <section id="investors" className="py-24 bg-brand-navy border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="h-1.5 w-12 bg-brand-red rounded-full mb-4" />
            <span className="text-xs font-bold uppercase tracking-wider text-brand-cream/80 block mb-2 font-athletic">
              Growth & Capital
            </span>
            <h2 className="text-4xl sm:text-6xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
              Scaling premium recreational sports.
            </h2>
            <p className="text-base text-slate-300 font-sans leading-relaxed">
              Veddie operates an asset-light, high-margin model pairing guaranteed arena ice inventory with premium tournament entries, recurring league seasons, drop-in sessions, and brand partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="p-7 rounded-2xl bg-[#0b203a] border-2 border-[#1c3f6e] shadow-xl">
              <span className="text-2xl font-athletic text-brand-cream font-black block mb-2">
                Repeat Ritual
              </span>
              <p className="text-sm text-slate-200 font-sans">
                High player retention through weekly league play, verified Elo tracking, and perennial championship eligibility.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#0b203a] border-2 border-[#1c3f6e] shadow-xl">
              <span className="text-2xl font-athletic text-brand-cream font-black block mb-2">
                Asset-Light
              </span>
              <p className="text-sm text-slate-200 font-sans">
                Leverages existing multi-pad municipal and private arena infrastructure without capital real-estate expenditure.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#0b203a] border-2 border-[#1c3f6e] shadow-xl">
              <span className="text-2xl font-athletic text-brand-cream font-black block mb-2">
                Scalable Hubs
              </span>
              <p className="text-sm text-slate-200 font-sans">
                Proven Ontario playbook ready for turnkey replication across major North American hockey metropolitan markets.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#0b203a] border-2 border-[#1c3f6e] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h4 className="font-athletic text-brand-cream text-xl font-bold">
                Investor Relations & Partnership Inquiries
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Contact our corporate growth desk for executive briefings and expansion plans.
              </p>
            </div>
            <a
              href="mailto:investors@veddiehockey.com"
              className="px-6 py-3.5 rounded-xl bg-brand-cream text-brand-navy text-xs font-bold uppercase tracking-wider hover:bg-white transition-all shrink-0 shadow-md"
            >
              Contact Investor Relations &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          05 / HEADQUARTERS & CONTACT
      ========================================================================= */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-1.5 w-12 bg-brand-red rounded-full mb-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand-cream/80 block mb-2 font-athletic">
                Headquarters
              </span>
              <h3 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
                Toronto, Ontario
              </h3>
              <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed mb-6">
                Our central operations hub coordinates regional tournament circuits, certified referee dispatch, and player experience across the Greater Toronto Area, Halton, and Southwestern Ontario.
              </p>

              <div className="space-y-3 text-sm text-brand-cream">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-red shrink-0" />
                  <span>5-1050 King Street W., Toronto, Ontario M6K 0C7</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-brand-red shrink-0" />
                  <span>info@veddiehockey.com</span>
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-2xl bg-[#0b203a] border-2 border-[#1c3f6e] text-center shadow-2xl">
              <h4 className="text-2xl font-athletic text-brand-cream mb-2 font-black">
                Have a Question for Our Team?
              </h4>
              <p className="text-sm text-slate-200 font-sans mb-6">
                Whether you’re a team captain, arena manager, or prospective partner, we’d love to connect.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-red text-brand-navy text-xs font-black uppercase tracking-wider hover:bg-brand-red-hover transition-all shadow-lg"
              >
                Send Us A Note <ArrowRight className="w-4 h-4 stroke-[3]" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

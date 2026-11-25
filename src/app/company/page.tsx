import type { Metadata } from "next";
import Link from "next/link";
import {
  Building,
  Users,
  Briefcase,
  MapPin,
  Mail,
  ArrowRight,
  Shield,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Company",
  description:
    "About Veddie Hockey, who runs it, where it launches, operations in Southern Ontario, careers, and headquarters.",
};

export default function CompanyPage() {
  const openRoles = [
    {
      title: "Arena Operations Director",
      department: "Event Operations",
      location: "Toronto / GTA, ON",
      type: "Event Contract",
      description:
        "Lead on-site gameday operations across event rinks. Ensure dressing rooms, towel service, timekeeping, and on-ice scheduling run smoothly.",
    },
    {
      title: "Chief Officiating Supervisor",
      department: "Officiating & Safety",
      location: "Southern Ontario",
      type: "Part-Time / Contract",
      description:
        "Manage certified referee assignment, enforce the Player Code of Conduct, and oversee division balance.",
    },
    {
      title: "Gameday Video & Highlight Editor",
      department: "Media & Content",
      location: "Toronto, ON (Hybrid)",
      type: "Contract",
      description:
        "Produce post-game final-score graphics, team photos, and highlight reels delivered within 72 hours of tournament play.",
    },
    {
      title: "Host & Equipment Attendant",
      department: "Player Experience",
      location: "Richmond Hill / GTA",
      type: "Event Weekends",
      description:
        "Welcome teams at the rink, manage custom stall nameplates, essentials tape station, cold towels, and player check-in.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative min-h-[480px] lg:min-h-[520px] flex items-center justify-center bg-brand-navy border-b border-brand-border px-4 sm:px-6 lg:px-8 py-20 text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 filter brightness-50 pointer-events-none"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-brand-navy/60 pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-card border border-brand-border text-brand-cream text-xs font-bold tracking-widest uppercase mb-6 shadow-lg">
            <Building className="w-4 h-4 text-brand-accent" />
            VEDDIE HOCKEY · ABOUT THE COMPANY
          </div>

          <h1 className="text-4xl sm:text-6xl font-athletic text-brand-cream tracking-tight mb-6 font-black">
            The pro treatment for adult hockey.
          </h1>

          <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto mb-8 leading-relaxed font-sans">
            Veddie is operated by lifelong hockey players and tournament directors based in Ontario. We run premier men's hockey events across the Greater Toronto Area, starting with the Veddie Invitational and Champions Cup in April 2027.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold uppercase tracking-wider">
            <a
              href="#about"
              className="px-6 py-3.5 rounded-xl bg-brand-cream text-brand-navy hover:bg-white transition-all shadow-md"
            >
              Who Runs Veddie
            </a>
            <a
              href="#partnerships"
              className="px-6 py-3.5 rounded-xl bg-brand-accent text-brand-navy hover:bg-brand-accent-hover transition-all shadow-lg"
            >
              For League Organizers
            </a>
            <a
              href="#careers"
              className="px-6 py-3.5 rounded-xl bg-brand-card border border-brand-border text-brand-cream hover:border-brand-accent transition-all shadow-md"
            >
              Work With Us
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT & LEADERSHIP */}
      <section id="about" className="py-24 bg-brand-cream text-brand-navy border-b border-brand-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-slate block mb-2 font-athletic">
                Who Runs Veddie
              </span>
              <h2 className="text-4xl sm:text-5xl font-athletic text-brand-navy tracking-tight mb-6 font-black">
                Run by players, for players.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-brand-slate leading-relaxed font-sans">
                <p>
                  Veddie was founded by competitive hockey players who have spent decades playing across junior, varsity, and recreational leagues in Ontario. We understand what matters most on game night: a ready room, fair officiating, proper competition, and teammates who want to be there.
                </p>
                <p>
                  We launch in April 2027 with two flagship events in the Greater Toronto Area: the Veddie Invitational for open entry across four age divisions, and the Champions Cup in Richmond Hill for qualifying league winners.
                </p>
                <p className="text-brand-navy font-bold">
                  Our operational standard is straightforward: custom stall nameplates, essentials tape station, cold towels, certified referees, digital scorekeeping, and photos delivered to your phone.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="/our-story"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-navy text-brand-cream font-bold text-xs uppercase tracking-wider hover:bg-brand-navy-light transition-all shadow-md"
                >
                  Read Our Story &rarr;
                </Link>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border-2 border-brand-navy/20 shadow-2xl h-[420px]">
              <div
                className="absolute inset-0 bg-cover bg-center filter brightness-95"
                style={{
                  backgroundImage:
                    "url('/images/hockey/hero-mens-hockey.jpg')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-brand-navy/95 backdrop-blur-md border border-brand-border text-brand-cream">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-1">
                  Operating Principle
                </span>
                <p className="text-base font-athletic text-brand-cream font-bold">
                  “You don't have to be a pro to feel like one.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY LEAGUE ORGANIZERS WORK WITH VEDDIE */}
      <section id="partnerships" className="py-24 bg-brand-surface border-b border-brand-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
              Collaboration
            </span>
            <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
              Why league organizers work with us.
            </h2>
            <p className="text-base text-brand-muted">
              Veddie complements existing adult hockey leagues by providing an aspirational championship stage without competing with regular weekly schedules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-brand-card border border-brand-border">
              <h3 className="text-lg font-athletic text-brand-cream mb-2 font-bold">
                1. Elevate League Value
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                Offer your teams the chance to represent your league at the year-end Champions Cup in Richmond Hill.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-brand-card border border-brand-border">
              <h3 className="text-lg font-athletic text-brand-cream mb-2 font-bold">
                2. Zero Operational Work
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                We handle the ice, refs, hospitality, schedule, and photography. You simply verify standings or nominate top teams.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-brand-card border border-brand-border">
              <h3 className="text-lg font-athletic text-brand-cream mb-2 font-bold">
                3. Fair Verification
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                Qualification is based on transparent criteria: playoff champions or top-quarter regular-season finishers.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/nominate"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-accent text-brand-navy font-bold text-xs uppercase tracking-wider hover:bg-brand-accent-hover transition-all"
            >
              Nominate your league's top teams
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section id="careers" className="py-24 bg-brand-navy border-b border-brand-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-card border border-brand-border text-brand-cream text-xs font-bold uppercase tracking-wider mb-3">
                <Briefcase className="w-3.5 h-3.5 text-brand-accent" />
                EVENT CREW & ROLES
              </div>
              <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight font-black">
                Work With Veddie
              </h2>
              <p className="text-sm sm:text-base text-brand-muted mt-2 max-w-xl">
                We’re building an on-site team of event operators, certified officials, video editors, and locker room hosts for our April 2027 events.
              </p>
            </div>

            <a
              href="mailto:careers@veddiehockey.com?subject=Veddie%20Gameday%20Inquiry"
              className="px-8 py-3.5 rounded-xl bg-brand-accent text-brand-navy text-xs font-bold uppercase tracking-wider hover:bg-brand-accent-hover transition-all shrink-0 shadow-lg"
            >
              General Application &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openRoles.map((role) => (
              <div
                key={role.title}
                className="p-8 rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-accent transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">
                      {role.department}
                    </span>
                    <span className="text-xs font-bold uppercase px-2.5 py-1 rounded bg-brand-card text-brand-cream border border-brand-border">
                      {role.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-athletic text-brand-cream mb-1 font-bold">
                    {role.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-brand-muted mb-4 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-brand-accent" />
                    <span>{role.location}</span>
                  </div>

                  <p className="text-sm text-brand-muted leading-relaxed mb-6 font-sans">
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
                    Apply For Role <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HEADQUARTERS & CONTACT */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2 font-athletic">
                Headquarters
              </span>
              <h3 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
                Toronto, Ontario
              </h3>
              <p className="text-sm sm:text-base text-brand-muted font-sans leading-relaxed mb-6">
                Our operations team coordinates event scheduling, certified officials, and gameday experience across the Greater Toronto Area.
              </p>

              <div className="space-y-3 text-sm text-brand-cream">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-accent shrink-0" />
                  <span>Greater Toronto Area, Ontario</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-brand-accent shrink-0" />
                  <span>info@veddiehockey.com</span>
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-2xl bg-brand-surface border border-brand-border text-center">
              <h4 className="text-2xl font-athletic text-brand-cream mb-2 font-bold">
                Have a Question for Our Team?
              </h4>
              <p className="text-sm text-brand-muted font-sans mb-6">
                Whether you’re a team captain, league organizer, or prospective partner, we’d love to connect.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-accent text-brand-navy text-xs font-bold uppercase tracking-wider hover:bg-brand-accent-hover transition-all shadow-lg"
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

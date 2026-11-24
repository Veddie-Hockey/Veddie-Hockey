import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Trophy,
  Calendar,
  Gift,
  Swords,
  Users,
} from "lucide-react";
import ShareToCaptainButton from "@/components/ShareToCaptainButton";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* =========================================================================
          1. HERO SECTION (Nov 22 Spec)
          - Headline: "Men’s rec hockey with the pro treatment."
          - Paragraph: "Bring your team for a tournament weekend, make it a weekly league night, or take on the best from other leagues in the Champions League and Champions Cup. However you play, we’ll make it feel like the show."
          - Buttons: "Explore Upcoming Events" -> #upcoming-events, "See the Experience" -> /experience
      ========================================================================= */}
      <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center justify-center bg-brand-navy border-b border-brand-border overflow-hidden px-4 sm:px-6 lg:px-8 py-20">
        {/* Authentic Hockey Arena Background */}
        <div
          className="absolute inset-0 bg-cover bg-center filter brightness-40 scale-105 pointer-events-none"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-brand-navy/60 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-athletic tracking-tight text-brand-cream mb-6 font-black uppercase">
            Men’s rec hockey with the pro treatment.
          </h1>

          <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
            Bring your team for a tournament weekend, make it a weekly league night, or take on the best from other leagues in the Champions League and Champions Cup. However you play, we’ll make it feel like the show.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#upcoming-events"
              className="w-full sm:w-auto px-9 py-4 rounded-xl bg-brand-red text-brand-navy font-black uppercase tracking-wider text-sm hover:bg-brand-red-hover transition-all shadow-xl hover:shadow-brand-red/30 active:scale-95 flex items-center justify-center gap-2"
            >
              Explore Upcoming Events
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </a>

            <Link
              href="/experience"
              className="w-full sm:w-auto px-9 py-4 rounded-xl bg-brand-surface border border-brand-border text-brand-cream font-bold uppercase tracking-wider text-sm hover:bg-brand-card transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
            >
              See the Experience
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. THE VEDDIE EXPERIENCE (Nov 22 Spec)
          - Placed between the opening and Upcoming Events
          - Heading: "You don’t have to be a pro to feel like one."
          - Subhead: "Your name above the stall. A division that fits your team. Highlights worth sending to the group chat. From league nights to championship weekends, this is Veddie Hockey."
          - Three features with authentic photos: The Room, The Game, The Coverage
          - Tagline: "A 60+ D4 team gets the same pro treatment as an Open D1 team."
          - Link: "Explore the Full Experience" -> /experience
      ========================================================================= */}
      <section className="py-24 bg-brand-surface border-b border-brand-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2 font-athletic">
              The Veddie Standard
            </span>
            <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
              You don’t have to be a pro to feel like one.
            </h2>
            <p className="text-base sm:text-lg text-brand-muted font-sans leading-relaxed">
              Your name above the stall. A division that fits your team. Highlights worth sending to the group chat. From league nights to championship weekends, this is Veddie Hockey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* The Room */}
            <div className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden flex flex-col justify-between group shadow-xl">
              <div className="relative h-60 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage: "url('/images/hockey/pickup.jpg')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-brand-card/30 to-transparent" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-1 font-athletic">
                  The Room
                </span>
                <h3 className="text-2xl font-athletic text-brand-cream font-bold mb-2">
                  Ready before you are.
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Walk in with your team. Your name is above the stall, the tape is ready and your playlist is on.
                </p>
              </div>
            </div>

            {/* The Game */}
            <div className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden flex flex-col justify-between group shadow-xl">
              <div className="relative h-60 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage: "url('/images/hockey/tournaments.jpg')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-brand-card/30 to-transparent" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-1 font-athletic">
                  The Game
                </span>
                <h3 className="text-2xl font-athletic text-brand-cream font-bold mb-2">
                  Hockey that counts.
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Play teams at your level, with certified refs and a score that counts toward the standings.
                </p>
              </div>
            </div>

            {/* The Coverage */}
            <div className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden flex flex-col justify-between group shadow-xl">
              <div className="relative h-60 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage: "url('/images/hockey/champions-cup.jpg')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-brand-card/30 to-transparent" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-1 font-athletic">
                  The Coverage
                </span>
                <h3 className="text-2xl font-athletic text-brand-cream font-bold mb-2">
                  A final score worth keeping.
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Relive it the next morning with the team photo, a final-score graphic and clips for the group chat.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm font-semibold text-brand-cream/90 italic mb-6">
              “A 60+ D4 team gets the same pro treatment as an Open D1 team.”
            </p>
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-card border border-brand-border hover:border-brand-accent text-brand-cream text-xs font-bold uppercase tracking-wider transition-all"
            >
              <span>Explore the Full Experience</span>
              <ArrowRight className="w-4 h-4 text-brand-accent" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. UPCOMING EVENTS (Nov 22 Spec)
          - Placed between the experience and Ways to Play
          - Side by side on desktop, stacked on mobile
          - Invitational: "View Invitational Details" -> /tournaments + Share link
          - Champions Cup: "How Teams Qualify" -> /champions-cup#qualification + Share link
      ========================================================================= */}
      <section id="upcoming-events" className="py-24 bg-brand-navy border-b border-brand-border px-4 sm:px-6 lg:px-8 scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2 font-athletic">
              Event Schedule
            </span>
            <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
              Upcoming Events
            </h2>
            <p className="text-base text-brand-muted font-sans">
              Confirmed dates, divisions and venues in the Greater Toronto Area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Event Card 1: The Veddie Invitational */}
            <div className="bg-[#0b203a] border-2 border-[#1c3f6e] hover:border-brand-accent rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all group shadow-2xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded bg-brand-accent text-brand-navy">
                    Early April 2027
                  </span>
                  <span className="text-xs font-semibold text-brand-muted uppercase">
                    Tournament
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-athletic text-brand-cream font-black mb-2">
                  The Veddie Invitational
                </h3>
                <p className="text-sm font-bold text-brand-cream/90 mb-4">
                  Early April 2027 · Open, 40+, 50+ and 60+
                </p>
                <p className="text-xs text-slate-300 leading-relaxed font-sans mb-8">
                  Standalone weekend tournament with 3 guaranteed games, strict divisions, certified referees, and player stall nameplates.
                </p>
              </div>

              <div className="space-y-3">
                <Link
                  href="/tournaments"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-brand-red text-brand-navy text-xs font-black uppercase tracking-wider hover:bg-brand-red-hover transition-all shadow-md"
                >
                  View Invitational Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="text-center pt-1">
                  <ShareToCaptainButton variant="minimal" customUrl="https://veddiehockey.com/tournaments" />
                </div>
              </div>
            </div>

            {/* Event Card 2: The Veddie Champions Cup */}
            <div className="bg-[#0b203a] border-2 border-[#1c3f6e] hover:border-brand-red rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all group shadow-2xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded bg-brand-red text-brand-navy">
                    Championship Event
                  </span>
                  <span className="text-xs font-semibold text-brand-muted uppercase">
                    GTA
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-athletic text-brand-cream font-black mb-2">
                  The Veddie Champions Cup
                </h3>
                <p className="text-sm font-bold text-brand-cream/90 mb-4">
                  Dates and venue to be announced
                </p>
                <p className="text-xs text-slate-300 leading-relaxed font-sans mb-8">
                  For teams that earn their spot in their home league. Win your playoffs or finish in the top quarter of your standings to represent your league.
                </p>
              </div>

              <div className="space-y-3">
                <Link
                  href="/champions-cup#qualification"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-brand-cream text-brand-navy text-xs font-black uppercase tracking-wider hover:bg-white transition-all shadow-md"
                >
                  How Teams Qualify
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="text-center pt-1">
                  <ShareToCaptainButton variant="minimal" customUrl="https://veddiehockey.com/champions-cup" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. WAYS TO PLAY (Nov 22 Spec)
          - Placed between Upcoming Events and Road to the Cup
          - 4 cards: Leagues, Tournaments, Champions League, Champions Cup
          - Underneath: "No team? Join the free-agent and goalie list."
      ========================================================================= */}
      <section className="py-24 bg-brand-surface border-b border-brand-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2 font-athletic">
              Formats
            </span>
            <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
              Ways to Play
            </h2>
            <p className="text-base text-brand-muted font-sans">
              Choose the program that fits your team's commitment and competition level.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* 1. Leagues */}
            <div className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden flex flex-col justify-between group shadow-lg">
              <div className="relative h-44 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: "url('/images/hockey/leagues.jpg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] text-brand-accent font-semibold block mb-1">
                    Coming September 2027
                  </span>
                  <h3 className="text-xl font-athletic text-brand-cream font-bold mb-2">
                    Leagues
                  </h3>
                  <p className="text-xs text-brand-muted font-sans leading-relaxed mb-4">
                    Play every week with your team or sign up as a free agent.
                  </p>
                </div>
                <Link
                  href="/leagues"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-accent hover:text-brand-cream transition-colors"
                >
                  <span>Explore Leagues</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 2. Tournaments */}
            <div className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden flex flex-col justify-between group shadow-lg">
              <div className="relative h-44 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: "url('/images/hockey/tournaments.jpg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] text-brand-accent font-semibold block mb-1">
                    Weekend Tournaments
                  </span>
                  <h3 className="text-xl font-athletic text-brand-cream font-bold mb-2">
                    Tournaments
                  </h3>
                  <p className="text-xs text-brand-muted font-sans leading-relaxed mb-4">
                    Bring your team for a weekend of hockey against teams at your level.
                  </p>
                </div>
                <Link
                  href="/tournaments"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-accent hover:text-brand-cream transition-colors"
                >
                  <span>View Upcoming Tournaments</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 3. Champions League */}
            <div className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden flex flex-col justify-between group shadow-lg">
              <div className="relative h-44 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: "url('/images/hockey/champions-league.jpg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] text-brand-accent font-semibold block mb-1">
                    Coming September 2027
                  </span>
                  <h3 className="text-xl font-athletic text-brand-cream font-bold mb-2">
                    Champions League
                  </h3>
                  <p className="text-xs text-brand-muted font-sans leading-relaxed mb-4">
                    Keep playing in your home league and face teams from other leagues in midweek regional competition.
                  </p>
                </div>
                <Link
                  href="/champions-league"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-accent hover:text-brand-cream transition-colors"
                >
                  <span>Explore Champions League</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 4. Champions Cup */}
            <div className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden flex flex-col justify-between group shadow-lg">
              <div className="relative h-44 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: "url('/images/hockey/champions-cup.jpg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] text-brand-red font-semibold block mb-1">
                    Championship Stage
                  </span>
                  <h3 className="text-xl font-athletic text-brand-cream font-bold mb-2">
                    Champions Cup
                  </h3>
                  <p className="text-xs text-brand-muted font-sans leading-relaxed mb-4">
                    Win your league playoffs or finish in the top quarter of your division to qualify for the Cup.
                  </p>
                </div>
                <Link
                  href="/champions-cup"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-red hover:text-brand-cream transition-colors"
                >
                  <span>Check My Team’s Eligibility</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Pickup replacement line per Nov 22 spec */}
          <div className="text-center">
            <Link
              href="/leagues#league-form"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-card border border-brand-border hover:border-brand-accent text-brand-cream text-xs font-bold uppercase tracking-wider transition-all"
            >
              <span>No team? Join the free-agent and goalie list &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. ROAD TO THE CUP (Nov 22 Spec)
          - Closes the homepage
          - Heading: "Who’s the team to beat in your league?"
          - Copy: "The road to the Champions Cup starts in your home rink. Follow the teams in the hunt, see who’s qualified and nominate a team we should be watching."
          - Buttons: "Follow the Road to the Cup" -> /road-to-the-cup, "Nominate a Team" -> /nominate
      ========================================================================= */}
      <section className="py-24 bg-brand-navy border-b border-brand-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2 font-athletic">
            Home League Qualification
          </span>
          <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
            Who’s the team to beat in your league?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto font-sans">
            The road to the Champions Cup starts in your home rink. Follow the teams in the hunt, see who’s qualified and nominate a team we should be watching.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/road-to-the-cup"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-red text-brand-navy font-black uppercase tracking-wider text-sm hover:bg-brand-red-hover transition-all shadow-xl flex items-center justify-center gap-2"
            >
              Follow the Road to the Cup
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </Link>
            <Link
              href="/nominate"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-surface border border-brand-border text-brand-cream font-bold uppercase tracking-wider text-sm hover:bg-brand-card transition-all flex items-center justify-center gap-2"
            >
              Nominate a Team
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CONTEST BANNER
      ========================================================================= */}
      <section className="py-20 bg-[#071322] border-b border-brand-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-brand-surface via-[#0b203a] to-brand-surface border-2 border-brand-accent/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider mb-3">
              <Gift className="w-4 h-4" />
              WIN YOUR TEAM A WEEKEND IN RICHMOND HILL
            </div>
            <h2 className="text-3xl sm:text-4xl font-athletic text-brand-cream font-black mb-3">
              "I Used To… Now I’m a Veddie."
            </h2>
            <p className="text-sm text-slate-200 font-sans italic mb-4 leading-relaxed">
              “I used to find away games with my dad, an arena book, and a map the size of a matchbox with four streets on it. Now I’m a Veddie.”
            </p>
            <p className="text-xs text-brand-muted font-sans leading-relaxed">
              Submit your favourite hockey memory for a chance to win an official Veddie championship hoodie and your team’s entry into our April Invitational.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full sm:w-auto shrink-0">
            <Link
              href="/contest"
              className="px-8 py-4 rounded-xl bg-brand-accent text-brand-navy font-bold text-xs uppercase tracking-wider hover:bg-brand-accent-hover transition-all shadow-xl text-center flex items-center justify-center gap-2"
            >
              <span>Enter The Contest</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <ShareToCaptainButton variant="secondary" />
          </div>
        </div>
      </section>
    </div>
  );
}

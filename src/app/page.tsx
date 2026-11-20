import Link from "next/link";
import {
  Trophy,
  Swords,
  Calendar,
  Users,
  Zap,
  ArrowRight,
  Shield,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Star,
  Activity,
} from "lucide-react";
import { TEAMS_DATA } from "@/data/rankings";

export default function HomePage() {
  const topTeams = TEAMS_DATA.slice(0, 5);

  return (
    <div className="flex flex-col">
      {/* 01 / HERO WITH ARENA BACKGROUND (BRODIE STYLE) */}
      <section className="relative min-h-[88vh] flex items-center justify-center bg-brand-navy border-b border-brand-border overflow-hidden px-4 sm:px-6 lg:px-8 py-24">
        {/* Authentic Hockey Arena Background */}
        <div
          className="absolute inset-0 bg-cover bg-center filter brightness-40 scale-105 pointer-events-none"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/70 to-brand-navy/50 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card/90 backdrop-blur-md border border-brand-accent/40 text-brand-accent text-xs font-bold tracking-widest uppercase mb-6 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            PREMIUM ADULT HOCKEY
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-athletic tracking-tight text-brand-cream mb-4 font-black">
            STILL GOT IT.
          </h1>

          <p className="text-xl sm:text-2xl text-brand-accent font-semibold tracking-wide uppercase mb-6 font-athletic">
            The pro hockey experience for the rest of your career.
          </p>

          <p className="text-base sm:text-lg text-brand-cream/80 max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
            The room. The rivalry. The feeling of burying one when it matters. Veddie brings it all together with organized competition, professional touches, and a genuine hockey community.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/play"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-accent text-brand-navy font-bold uppercase tracking-wider text-sm hover:bg-brand-accent-hover transition-all shadow-xl hover:shadow-brand-accent/20 active:scale-95 flex items-center justify-center gap-2"
            >
              Find Your Game
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/experience"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-card/80 backdrop-blur-md border border-brand-border text-brand-cream font-bold uppercase tracking-wider text-sm hover:bg-brand-card hover:border-brand-accent/50 transition-all flex items-center justify-center gap-2"
            >
              Explore the Experience
            </Link>
          </div>

          <p className="text-xs text-brand-muted font-medium tracking-wide uppercase">
            Teams. Individual players. Goalies. Your next chapter starts here.
          </p>
        </div>
      </section>

      {/* 02 / THE EMOTIONAL HOOK */}
      <section className="py-20 bg-brand-navy border-b border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-athletic text-brand-cream tracking-tight mb-6">
            You’ve still got hockey left in you.
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-brand-muted leading-relaxed max-w-3xl mx-auto font-sans">
            <p>
              Maybe you played junior. Maybe you’ve worn the same team colours for twenty years. Maybe the body complains a little louder on Monday mornings. But when the tape goes on and you step out onto fresh ice, none of that matters.
            </p>
            <p className="text-brand-cream font-medium">
              You still care about the game. You deserve a place that cares about your experience just as much.
            </p>
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-brand-surface border border-brand-accent/30 max-w-2xl mx-auto relative shadow-xl">
            <div className="text-brand-accent text-4xl font-editorial absolute -top-5 left-8 bg-brand-surface px-2">
              “
            </div>
            <p className="text-xl sm:text-2xl font-editorial text-brand-cream italic tracking-wide">
              A hockey vet isn’t an age. It’s someone who keeps coming back.
            </p>
          </div>
        </div>
      </section>

      {/* 03 / FIVE WAYS TO PLAY (WITH BRODIE-STYLE VISUAL PHOTO CARDS) */}
      <section className="py-24 bg-brand-surface border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4">
              Your game. Your level. Your next chapter.
            </h2>
            <p className="text-base sm:text-lg text-brand-muted font-sans">
              Chase a championship. Build a weekly ritual. Or just get out for a great skate. Find the Veddie program that fits your game.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Champions Cup */}
            <div className="bg-brand-card border border-brand-border hover:border-brand-accent/50 rounded-2xl overflow-hidden flex flex-col justify-between transition-all group hover:shadow-2xl hover:shadow-brand-accent/10">
              <div className="relative h-44 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500 filter brightness-75"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=800&q=80')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent" />
                <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-brand-navy/90 backdrop-blur-md text-brand-accent border border-brand-accent/40">
                  Accepting Interest
                </span>
              </div>
              <div className="p-7 pt-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-athletic text-brand-cream tracking-tight mb-1 group-hover:text-brand-accent transition-colors">
                    Champions Cup
                  </h3>
                  <h4 className="text-sm font-semibold text-brand-accent mb-3">
                    Your league was just the beginning.
                  </h4>
                  <p className="text-xs text-brand-muted leading-relaxed font-sans">
                    Represent your home league against qualifying teams in Veddie’s flagship championship. Fresh rivals, a pro atmosphere, funded cash prizes and zero entry fee for the inaugural pilot.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-brand-border">
                  <Link
                    href="/champions-cup"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-cream group-hover:text-brand-accent transition-colors"
                  >
                    Explore the Champions Cup
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2: Champions League */}
            <div className="bg-brand-card border border-brand-border hover:border-brand-accent/50 rounded-2xl overflow-hidden flex flex-col justify-between transition-all group hover:shadow-2xl hover:shadow-brand-accent/10">
              <div className="relative h-44 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500 filter brightness-75"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1515703407324-5f753eed2311?auto=format&fit=crop&w=800&q=80')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent" />
                <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-brand-navy/90 backdrop-blur-md text-brand-muted border border-brand-border">
                  Planned Offering
                </span>
              </div>
              <div className="p-7 pt-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-athletic text-brand-cream tracking-tight mb-1 group-hover:text-brand-accent transition-colors">
                    Champions League
                  </h3>
                  <h4 className="text-sm font-semibold text-brand-accent mb-3">
                    Keep your league. Chase a bigger title.
                  </h4>
                  <p className="text-xs text-brand-muted leading-relaxed font-sans">
                    A planned cross-league competition alongside your regular season. Regional knockout rounds. A meaningful championship banner to hang next to your home league hardware.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-brand-border">
                  <Link
                    href="/champions-league"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-cream group-hover:text-brand-accent transition-colors"
                  >
                    Explore Champions League
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3: Tournaments */}
            <div className="bg-brand-card border border-brand-border hover:border-brand-accent/50 rounded-2xl overflow-hidden flex flex-col justify-between transition-all group hover:shadow-2xl hover:shadow-brand-accent/10">
              <div className="relative h-44 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500 filter brightness-75"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent" />
                <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-brand-navy/90 backdrop-blur-md text-brand-accent border border-brand-accent/40">
                  Accepting Interest
                </span>
              </div>
              <div className="p-7 pt-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-athletic text-brand-cream tracking-tight mb-1 group-hover:text-brand-accent transition-colors">
                    Tournaments
                  </h3>
                  <h4 className="text-sm font-semibold text-brand-accent mb-3">
                    Same team. New rivals.
                  </h4>
                  <p className="text-xs text-brand-muted leading-relaxed font-sans">
                    Get the team together for a standalone tournament with reviewed divisions, a proper hockey atmosphere, three guaranteed games, and zero sandbagging nonsense.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-brand-border">
                  <Link
                    href="/tournaments"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-cream group-hover:text-brand-accent transition-colors"
                  >
                    Explore Tournaments
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 4: Leagues */}
            <div className="bg-brand-card border border-brand-border hover:border-brand-accent/50 rounded-2xl overflow-hidden flex flex-col justify-between transition-all group hover:shadow-2xl hover:shadow-brand-accent/10">
              <div className="relative h-44 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500 filter brightness-75"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1543351611-58f69d7c1781?auto=format&fit=crop&w=800&q=80')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent" />
                <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-brand-navy/90 backdrop-blur-md text-brand-accent border border-brand-accent/40">
                  Accepting Interest
                </span>
              </div>
              <div className="p-7 pt-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-athletic text-brand-cream tracking-tight mb-1 group-hover:text-brand-accent transition-colors">
                    Leagues
                  </h3>
                  <h4 className="text-sm font-semibold text-brand-accent mb-3">
                    Make this your hockey night.
                  </h4>
                  <p className="text-xs text-brand-muted leading-relaxed font-sans">
                    A consistent weekly game. A team to call your own. A season of rivalries, recognition and reasons to get to the rink. Join as an intact team or register as an individual player.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-brand-border">
                  <Link
                    href="/leagues"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-cream group-hover:text-brand-accent transition-colors"
                  >
                    Explore Leagues
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 5: Pickup */}
            <div className="bg-brand-card border border-brand-border hover:border-brand-accent/50 rounded-2xl overflow-hidden flex flex-col justify-between transition-all group hover:shadow-2xl hover:shadow-brand-accent/10 lg:col-span-2">
              <div className="relative h-44 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500 filter brightness-75"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?auto=format&fit=crop&w=1200&q=80')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent" />
                <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-brand-navy/90 backdrop-blur-md text-brand-accent border border-brand-accent/40">
                  Summer 2027 Launch
                </span>
              </div>
              <div className="p-7 pt-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-athletic text-brand-cream tracking-tight mb-1 group-hover:text-brand-accent transition-colors">
                    Pickup
                  </h3>
                  <h4 className="text-sm font-semibold text-brand-accent mb-3">
                    Your next skate, upgraded.
                  </h4>
                  <p className="text-xs text-brand-muted leading-relaxed font-sans max-w-2xl">
                    Organized skates, balanced teams, and the Veddie touches that make getting to the rink worth it. No lopsided rosters, no ghosting goalies, no messy group-chat headaches. Vetted goalies play free.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-brand-border flex items-center justify-between">
                  <Link
                    href="/pickup"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-cream group-hover:text-brand-accent transition-colors"
                  >
                    Explore Pickup
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <span className="text-xs text-brand-muted hidden sm:inline font-mono">
                    Pay-per-skate • Free goalie network
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 / EXPERIENCE PREVIEW */}
      <section className="py-24 bg-brand-navy border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2 font-athletic">
              The Standard
            </span>
            <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4">
              You may not play in the show. We’ll treat you like you do.
            </h2>
            <p className="text-base sm:text-lg text-brand-muted font-sans">
              We’re building Veddie around the details players notice, from the first step into the room to the recap on the way home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border">
              <h3 className="text-lg font-athletic text-brand-cream mb-2">
                A room ready for you.
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed font-sans">
                Tape, towels, water and music. The little things that make you feel expected the moment you walk through the arena door.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border">
              <h3 className="text-lg font-athletic text-brand-cream mb-2">
                Competition that fits.
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed font-sans">
                Clear divisions and placement review. Good hockey starts with players who belong on the same ice—no ringers, no sandbaggers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border">
              <h3 className="text-lg font-athletic text-brand-cream mb-2">
                Someone handling the details.
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed font-sans">
                Clear arrival information, organized games, certified officials, and an on-site point of contact to take care of everything.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border">
              <h3 className="text-lg font-athletic text-brand-cream mb-2">
                Moments worth keeping.
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed font-sans">
                Photos, clips and player stories that give your hockey life a place beyond the group chat. Relive the big save and the snipe.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border">
              <h3 className="text-lg font-athletic text-brand-cream mb-2">
                Something to play for.
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed font-sans">
                Fresh opponents, team pride and recognition for the moments that matter. Build your standing on the ice.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border">
              <h3 className="text-lg font-athletic text-brand-cream mb-2">
                Your people.
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed font-sans">
                The teammate who always has a story. The goalie who bails you out. The room you want to come back to week after week.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-brand-border/60">
            <p className="text-xs text-brand-muted font-sans">
              Exact amenities, support and media coverage are listed with each program before registration.
            </p>
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-accent text-brand-navy text-xs font-bold uppercase tracking-wider hover:bg-brand-accent-hover transition-all"
            >
              See the Full 29-Feature Veddie Experience
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 05 / DIVISION PREVIEW */}
      <section className="py-24 bg-brand-surface border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2 font-athletic">
                Balanced Competition
              </span>
              <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-6">
                Find your pace. Find your people.
              </h2>
              <p className="text-base sm:text-lg text-brand-muted leading-relaxed mb-8 font-sans">
                Four skill levels. Four age categories. Placement based on current ability, playing background and organizer review. Good hockey starts with players who belong on the same ice.
              </p>

              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl bg-brand-card border border-brand-border">
                  <span className="text-xs font-bold text-brand-accent uppercase tracking-wider block mb-1">
                    Skill Divisions
                  </span>
                  <p className="text-sm font-semibold text-brand-cream font-sans">
                    D1 — Elite • D2 — Competitive • D3 — Intermediate • D4 — Recreational
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-brand-card border border-brand-border">
                  <span className="text-xs font-bold text-brand-accent uppercase tracking-wider block mb-1">
                    Age Categories
                  </span>
                  <p className="text-sm font-semibold text-brand-cream font-sans">
                    Open 18+ • 40+ • 50+ • 60+
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Link
                  href="/divisions"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-card border border-brand-border text-brand-cream text-xs font-bold uppercase tracking-wider hover:border-brand-accent/50 hover:bg-brand-card-hover transition-all"
                >
                  Explore Division Breakdown
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-xs text-brand-muted">
                  Available combinations vary by program.
                </span>
              </div>
            </div>

            {/* Division Visual Matrix Card */}
            <div className="bg-brand-navy p-6 sm:p-8 rounded-2xl border border-brand-border shadow-2xl">
              <h3 className="text-base font-bold uppercase tracking-wider text-brand-cream mb-4 font-athletic flex items-center justify-between">
                <span>The 16-Division Menu</span>
                <span className="text-xs font-mono text-brand-accent">4 Levels × 4 Age Brackets</span>
              </h3>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-brand-surface border border-brand-border">
                  <div className="font-bold text-brand-cream">D1 Elite</div>
                  <div className="text-brand-muted mt-1 text-[11px]">Ex-Pro, NCAA, Major Jr</div>
                </div>
                <div className="p-3.5 rounded-xl bg-brand-surface border border-brand-border">
                  <div className="font-bold text-brand-cream">D2 Competitive</div>
                  <div className="text-brand-muted mt-1 text-[11px]">AAA, AA, Jr B/C alumni</div>
                </div>
                <div className="p-3.5 rounded-xl bg-brand-surface border border-brand-border">
                  <div className="font-bold text-brand-cream">D3 Intermediate</div>
                  <div className="text-brand-muted mt-1 text-[11px]">Strong House, High Rec</div>
                </div>
                <div className="p-3.5 rounded-xl bg-brand-surface border border-brand-border">
                  <div className="font-bold text-brand-cream">D4 Recreational</div>
                  <div className="text-brand-muted mt-1 text-[11px]">Adult entry, True Rec</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-brand-border text-[11px] text-brand-muted flex items-center justify-between">
                <span>All levels available across Open 18+, 40+, 50+, 60+</span>
                <Link href="/divisions" className="text-brand-accent hover:underline font-semibold">
                  Eligibility Rules &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 / TEAM RANKINGS PREVIEW */}
      <section className="py-24 bg-brand-navy border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2 font-athletic">
                Verified Competition
              </span>
              <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4">
                Don’t just win the night. Build your reputation.
              </h2>
              <p className="text-base text-brand-muted max-w-2xl font-sans">
                Your Champions Cup and Champions League results will build your place in the Veddie Team Rankings: an ongoing rating system for adult hockey teams across the province.
              </p>
            </div>
            <Link
              href="/rankings"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-accent text-brand-navy text-xs font-bold uppercase tracking-wider hover:bg-brand-accent-hover transition-all self-start lg:self-auto shrink-0"
            >
              Explore Full Leaderboard
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Top 5 Table */}
          <div className="bg-brand-surface border border-brand-border rounded-2xl overflow-hidden shadow-2xl">
            <div className="px-6 py-4 bg-brand-card border-b border-brand-border flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-cream flex items-center gap-2">
                <Shield className="w-4 h-4 text-brand-accent" />
                D1 Elite • Open 18+ Leaderboard Preview
              </span>
              <span className="text-xs text-brand-muted font-mono">
                Mathematical Elo Engine (K = 32)
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-brand-border/60 text-[11px] font-bold uppercase tracking-wider text-brand-muted bg-brand-surface">
                    <th className="py-3 px-6">Rank</th>
                    <th className="py-3 px-6">Team</th>
                    <th className="py-3 px-6">Home League</th>
                    <th className="py-3 px-6 text-center">Record</th>
                    <th className="py-3 px-6 text-right">Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-border/40">
                  {topTeams.map((team, idx) => (
                    <tr
                      key={team.slug}
                      className="hover:bg-brand-card/60 transition-colors group"
                    >
                      <td className="py-4 px-6 font-athletic font-bold text-base text-brand-cream">
                        #{idx + 1}
                      </td>
                      <td className="py-4 px-6">
                        <Link
                          href={`/teams/${team.slug}`}
                          className="font-bold text-brand-cream group-hover:text-brand-accent transition-colors block"
                        >
                          {team.name}
                        </Link>
                        <span className="text-xs text-brand-muted">{team.region}</span>
                      </td>
                      <td className="py-4 px-6 text-xs text-brand-muted">{team.homeLeague}</td>
                      <td className="py-4 px-6 text-center font-mono text-xs">
                        {team.record.wins}–{team.record.losses}–{team.record.ties}
                      </td>
                      <td className="py-4 px-6 text-right font-athletic font-bold text-base text-brand-accent">
                        {team.rating}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-3 bg-brand-navy/60 border-t border-brand-border text-[11px] text-brand-muted flex items-center justify-between">
              <span>Updated after verified results are recorded.</span>
              <Link href="/rankings" className="text-brand-accent hover:underline font-semibold">
                View all divisions &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 07 / JOINING STEPS */}
      <section className="py-24 bg-brand-surface border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2 font-athletic">
              Simple Onboarding
            </span>
            <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4">
              You bring the gear. We’ll handle the next steps.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-12">
            <div className="p-8 rounded-2xl bg-brand-card border border-brand-border relative shadow-lg">
              <div className="w-10 h-10 rounded-full bg-brand-accent text-brand-navy font-athletic font-black text-lg flex items-center justify-center mb-6">
                1
              </div>
              <h3 className="text-xl font-athletic text-brand-cream mb-2">
                Pick your game.
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed font-sans">
                Choose a championship, tournament, league or pickup skate that matches what you and your team want.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-brand-card border border-brand-border relative shadow-lg">
              <div className="w-10 h-10 rounded-full bg-brand-accent text-brand-navy font-athletic font-black text-lg flex items-center justify-center mb-6">
                2
              </div>
              <h3 className="text-xl font-athletic text-brand-cream mb-2">
                Tell us where you fit.
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed font-sans">
                Share your city, age category and playing background so we can ensure proper competitive placement.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-brand-card border border-brand-border relative shadow-lg">
              <div className="w-10 h-10 rounded-full bg-brand-accent text-brand-navy font-athletic font-black text-lg flex items-center justify-center mb-6">
                3
              </div>
              <h3 className="text-xl font-athletic text-brand-cream mb-2">
                Get the details.
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed font-sans">
                We’ll follow up with relevant opportunities and confirmed program information before you commit.
              </p>
            </div>
          </div>

          <Link
            href="/play"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-accent text-brand-navy font-bold uppercase tracking-wider text-sm hover:bg-brand-accent-hover transition-all shadow-xl hover:shadow-brand-accent/20"
          >
            Find Your Game
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 08 / COMMUNITY (BRODIE STYLE) */}
      <section className="py-24 bg-brand-navy border-b border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4">
            Your highlights deserve more than the group chat.
          </h2>
          <p className="text-base sm:text-lg text-brand-muted mb-12 max-w-2xl mx-auto font-sans">
            Big saves. Scrappy goals. Familiar faces. Teams with twenty years of stories and players writing their next chapter.
          </p>

          <div className="p-8 sm:p-12 rounded-2xl bg-brand-surface border border-brand-accent/30 text-left shadow-2xl relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-cover bg-center hidden md:block"
                 style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515703407324-5f753eed2311?auto=format&fit=crop&w=600&q=80')" }} />
            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2 font-athletic">
                Founding Hockey Community
              </span>
              <h3 className="text-2xl sm:text-3xl font-athletic text-brand-cream mb-4">
                Help write the first chapter.
              </h3>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed mb-6 max-w-xl font-sans">
                We’re building our founding hockey community in Southern Ontario. Tell us where you play and what you care about.
              </p>
              <Link
                href="/play"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-accent text-brand-navy text-xs font-bold uppercase tracking-wider hover:bg-brand-accent-hover transition-all shadow-lg"
              >
                Be Part of Veddie
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 09 / FINAL CONVERSION */}
      <section className="py-24 bg-gradient-to-t from-brand-surface to-brand-navy text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
            The next chapter still has your name on it.
          </h2>
          <p className="text-lg text-brand-muted mb-10 font-sans">
            Bring your team. Find your team. Or just find your next skate.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/play"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-accent text-brand-navy font-bold uppercase tracking-wider text-sm hover:bg-brand-accent-hover transition-all shadow-xl hover:shadow-brand-accent/20 flex items-center justify-center gap-2"
            >
              Find Your Game
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-card border border-brand-border text-brand-cream font-bold uppercase tracking-wider text-sm hover:bg-brand-card-hover transition-all flex items-center justify-center gap-2"
            >
              Ask Us a Question
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

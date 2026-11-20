import Link from "next/link";
import {
  Trophy,
  Swords,
  Calendar,
  Users,
  ArrowRight,
  Shield,
  Sparkles,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { TEAMS_DATA } from "@/data/rankings";

export default function HomePage() {
  const topTeams = TEAMS_DATA.slice(0, 5);

  return (
    <div className="flex flex-col">
      {/* =========================================================================
          HERO SECTION
          Client Edit 2: Removed red line, removed "01 Identity", removed "Still Got It".
          Keep main content beneath each label.
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
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/75 to-brand-navy/60 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-athletic tracking-tight text-brand-cream mb-6 font-black uppercase">
            The pro hockey experience for the rest of your career.
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
            The room. The rivalry. The feeling of burying one when it matters. Veddie brings it all together with organized competition, professional touches, and a genuine hockey community.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/play"
              className="w-full sm:w-auto px-9 py-4 rounded-xl bg-brand-red text-brand-navy font-black uppercase tracking-wider text-sm hover:bg-brand-red-hover transition-all shadow-xl hover:shadow-brand-red/30 active:scale-95 flex items-center justify-center gap-2"
            >
              Find Your Game
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </Link>

            <Link
              href="/experience"
              className="w-full sm:w-auto px-9 py-4 rounded-xl bg-brand-cream text-brand-navy font-bold uppercase tracking-wider text-sm hover:bg-white transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
            >
              Explore the Experience
            </Link>
          </div>

          <p className="text-xs text-brand-muted font-medium tracking-wide uppercase">
            Teams • Individual Players • Goalies — Your next chapter starts here.
          </p>
        </div>
      </section>

      {/* =========================================================================
          BRAND FOUNDATION
          Client Edit 2: Removed red line & "02 Brand Foundation"
      ========================================================================= */}
      <section className="py-24 bg-brand-cream text-brand-navy border-b border-brand-cream-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-6xl font-athletic text-brand-navy tracking-tight mb-4 font-black">
            THE GAME CONTINUES.
          </h2>

          <p className="text-lg sm:text-xl font-semibold text-brand-navy/90 mb-8 max-w-2xl mx-auto">
            Experienced players. Meaningful competition. A reason to keep coming back.
          </p>

          <div className="space-y-4 text-base sm:text-lg text-brand-slate leading-relaxed max-w-3xl mx-auto font-sans">
            <p>
              Maybe you played junior. Maybe you’ve worn the same team colours for twenty years. Maybe the body complains a little louder on Monday mornings. But when the tape goes on and you step out onto fresh ice, none of that matters.
            </p>
            <p className="text-brand-navy font-bold">
              You still care about the game. You deserve a place that cares about your experience just as much.
            </p>
          </div>

          {/* Rink Navy Quote Card */}
          <div className="mt-12 p-8 sm:p-10 rounded-2xl bg-brand-navy text-brand-cream border-2 border-brand-border max-w-2xl mx-auto relative shadow-2xl text-left">
            <div className="text-brand-red text-5xl font-black absolute -top-5 left-8 bg-brand-navy px-2 leading-none">
              “
            </div>
            <p className="text-xl sm:text-2xl font-editorial italic tracking-wide text-brand-cream mb-6 pt-2">
              A hockey vet isn’t an age. It’s someone who keeps coming back.
            </p>
            <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between text-xs uppercase tracking-wider font-athletic text-brand-cream/80">
              <span>Three Things to Prove</span>
              <span className="text-brand-cream font-bold">Competition • Experience • Recognition</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FOUR WAYS TO PLAY
          Client Edit 2: Removed red line & "08 Voice & Naming"
          Client Edit 3: Removed Pickup (now 4 offerings: Cup, League, Tournaments, Leagues)
      ========================================================================= */}
      <section className="py-24 bg-brand-navy border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-6xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
              NEXT CHAPTER.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-sans">
              Chase a championship. Build a weekly ritual. Or get the team together for a tournament. Find the Veddie program that fits your game.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* ---------------- CARD 1: CHAMPIONS CUP ---------------- */}
            <div className="bg-[#0b203a] border-2 border-[#1c3f6e] hover:border-brand-red rounded-2xl overflow-hidden flex flex-col justify-between transition-all group hover:shadow-2xl hover:shadow-brand-red/15">
              <div className="relative h-44 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500 filter brightness-85"
                  style={{
                    backgroundImage: "url('/images/hockey/champions-cup.jpg')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b203a] via-transparent to-transparent" />
                <span className="absolute top-4 right-4 text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-md bg-brand-red text-brand-navy shadow-lg">
                  Accepting Interest
                </span>
              </div>
              <div className="p-6 pt-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-athletic text-brand-cream tracking-tight mb-1 font-black">
                    Champions Cup
                  </h3>
                  <h4 className="text-xs font-bold text-brand-cream/90 mb-3 font-sans">
                    Your league was just the beginning.
                  </h4>
                  <p className="text-xs text-slate-200 leading-relaxed font-sans mb-6">
                    Represent your home league against qualifying teams in Veddie’s flagship championship. Fresh rivals, a pro atmosphere, funded cash prizes and zero entry fee for the inaugural pilot.
                  </p>
                </div>
                <div className="pt-4 border-t border-brand-border">
                  <Link
                    href="/champions-cup"
                    className="w-full py-2.5 px-4 rounded-xl bg-brand-red text-brand-navy font-black text-xs uppercase tracking-wider hover:bg-brand-red-hover transition-all flex items-center justify-between shadow-md"
                  >
                    <span>Register Interest</span>
                    <ChevronRight className="w-4 h-4 stroke-[3]" />
                  </Link>
                </div>
              </div>
            </div>

            {/* ---------------- CARD 2: CHAMPIONS LEAGUE ---------------- */}
            <div className="bg-[#0b203a] border-2 border-[#1c3f6e] hover:border-brand-cream rounded-2xl overflow-hidden flex flex-col justify-between transition-all group hover:shadow-2xl">
              <div className="relative h-44 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500 filter brightness-85"
                  style={{
                    backgroundImage: "url('/images/hockey/champions-league.jpg')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b203a] via-transparent to-transparent" />
                <span className="absolute top-4 right-4 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md bg-brand-cream text-brand-navy shadow-lg">
                  Planned Offering
                </span>
              </div>
              <div className="p-6 pt-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-athletic text-brand-cream tracking-tight mb-1 font-black">
                    Champions League
                  </h3>
                  <h4 className="text-xs font-bold text-brand-cream/90 mb-3 font-sans">
                    Keep your league. Chase a bigger title.
                  </h4>
                  <p className="text-xs text-slate-200 leading-relaxed font-sans mb-6">
                    A planned cross-league competition alongside your regular season. Regional knockout rounds. A meaningful championship banner to hang next to your home league hardware.
                  </p>
                </div>
                <div className="pt-4 border-t border-brand-border">
                  <Link
                    href="/champions-league"
                    className="w-full py-2.5 px-4 rounded-xl bg-brand-cream text-brand-navy font-bold text-xs uppercase tracking-wider hover:bg-white transition-all flex items-center justify-between shadow-md"
                  >
                    <span>Explore League</span>
                    <ChevronRight className="w-4 h-4 stroke-[3]" />
                  </Link>
                </div>
              </div>
            </div>

            {/* ---------------- CARD 3: TOURNAMENTS ---------------- */}
            <div className="bg-[#0b203a] border-2 border-[#1c3f6e] hover:border-brand-red rounded-2xl overflow-hidden flex flex-col justify-between transition-all group hover:shadow-2xl hover:shadow-brand-red/15">
              <div className="relative h-44 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500 filter brightness-85"
                  style={{
                    backgroundImage: "url('/images/hockey/tournaments.jpg')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b203a] via-transparent to-transparent" />
                <span className="absolute top-4 right-4 text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-md bg-brand-red text-brand-navy shadow-lg">
                  Accepting Interest
                </span>
              </div>
              <div className="p-6 pt-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-athletic text-brand-cream tracking-tight mb-1 font-black">
                    Tournaments
                  </h3>
                  <h4 className="text-xs font-bold text-brand-cream/90 mb-3 font-sans">
                    Same team. New rivals.
                  </h4>
                  <p className="text-xs text-slate-200 leading-relaxed font-sans mb-6">
                    Get the team together for a standalone tournament with reviewed divisions, a proper hockey atmosphere, three guaranteed games, and zero sandbagging nonsense.
                  </p>
                </div>
                <div className="pt-4 border-t border-brand-border">
                  <Link
                    href="/tournaments"
                    className="w-full py-2.5 px-4 rounded-xl bg-brand-red text-brand-navy font-black text-xs uppercase tracking-wider hover:bg-brand-red-hover transition-all flex items-center justify-between shadow-md"
                  >
                    <span>Register Team</span>
                    <ChevronRight className="w-4 h-4 stroke-[3]" />
                  </Link>
                </div>
              </div>
            </div>

            {/* ---------------- CARD 4: LEAGUES ---------------- */}
            <div className="bg-[#0b203a] border-2 border-[#1c3f6e] hover:border-brand-red rounded-2xl overflow-hidden flex flex-col justify-between transition-all group hover:shadow-2xl hover:shadow-brand-red/15">
              <div className="relative h-44 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500 filter brightness-85"
                  style={{
                    backgroundImage: "url('/images/hockey/leagues.jpg')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b203a] via-transparent to-transparent" />
                <span className="absolute top-4 right-4 text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-md bg-brand-red text-brand-navy shadow-lg">
                  Accepting Interest
                </span>
              </div>
              <div className="p-6 pt-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-athletic text-brand-cream tracking-tight mb-1 font-black">
                    Leagues
                  </h3>
                  <h4 className="text-xs font-bold text-brand-cream/90 mb-3 font-sans">
                    Make this your hockey night.
                  </h4>
                  <p className="text-xs text-slate-200 leading-relaxed font-sans mb-6">
                    A consistent weekly game. A team to call your own. A season of rivalries, recognition and reasons to get to the rink. Join as an intact team or register as an individual player.
                  </p>
                </div>
                <div className="pt-4 border-t border-brand-border">
                  <Link
                    href="/leagues"
                    className="w-full py-2.5 px-4 rounded-xl bg-brand-red text-brand-navy font-black text-xs uppercase tracking-wider hover:bg-brand-red-hover transition-all flex items-center justify-between shadow-md"
                  >
                    <span>Explore Leagues</span>
                    <ChevronRight className="w-4 h-4 stroke-[3]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          THE EXPERIENCE
          Client Edit 2: Removed red line & "07 Art Direction"
          Client Edit 4: Changed button text to "See the Veddie Experience" (no 29 features reference)
      ========================================================================= */}
      <section className="py-24 bg-brand-navy border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl sm:text-6xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
              You may not play in the show. We’ll treat you like you do.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-sans">
              We’re building Veddie around the details players notice, from the first step into the room to the recap on the way home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-7 rounded-2xl bg-[#0b203a] border-2 border-[#1c3f6e] hover:border-brand-red transition-all shadow-xl">
              <div className="h-0.5 w-8 bg-brand-red mb-4" />
              <h3 className="text-xl font-athletic text-brand-cream mb-2 font-black">
                A room ready for you.
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed font-sans">
                Tape, towels, water and music. The little things that make you feel expected the moment you walk through the arena door.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#0b203a] border-2 border-[#1c3f6e] hover:border-brand-red transition-all shadow-xl">
              <div className="h-0.5 w-8 bg-brand-red mb-4" />
              <h3 className="text-xl font-athletic text-brand-cream mb-2 font-black">
                Competition that fits.
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed font-sans">
                Clear divisions and placement review. Good hockey starts with players who belong on the same ice—no ringers, no sandbaggers.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#0b203a] border-2 border-[#1c3f6e] hover:border-brand-red transition-all shadow-xl">
              <div className="h-0.5 w-8 bg-brand-red mb-4" />
              <h3 className="text-xl font-athletic text-brand-cream mb-2 font-black">
                Someone handling details.
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed font-sans">
                Clear arrival information, organized games, certified officials, and an on-site point of contact to take care of everything.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#0b203a] border-2 border-[#1c3f6e] hover:border-brand-red transition-all shadow-xl">
              <div className="h-0.5 w-8 bg-brand-red mb-4" />
              <h3 className="text-xl font-athletic text-brand-cream mb-2 font-black">
                Moments worth keeping.
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed font-sans">
                Photos, clips and player stories that give your hockey life a place beyond the group chat. Relive the big save and the snipe.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#0b203a] border-2 border-[#1c3f6e] hover:border-brand-red transition-all shadow-xl">
              <div className="h-0.5 w-8 bg-brand-red mb-4" />
              <h3 className="text-xl font-athletic text-brand-cream mb-2 font-black">
                Something to play for.
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed font-sans">
                Fresh opponents, team pride and recognition for the moments that matter. Build your standing on the ice.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#0b203a] border-2 border-[#1c3f6e] hover:border-brand-red transition-all shadow-xl">
              <div className="h-0.5 w-8 bg-brand-red mb-4" />
              <h3 className="text-xl font-athletic text-brand-cream mb-2 font-black">
                Your people.
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed font-sans">
                The teammate who always has a story. The goalie who bails you out. The room you want to come back to week after week.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-brand-border">
            <p className="text-xs text-brand-muted font-sans">
              Real hockey. Proper treatment. Exact amenities confirmed with each program before registration.
            </p>
            {/* Client Edit 4: Changed button text to "See the Veddie Experience" */}
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-red text-brand-navy text-xs font-black uppercase tracking-wider hover:bg-brand-red-hover transition-all shadow-lg"
            >
              See the Veddie Experience
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          COMPETITION LABELS
          Client Edit 2: Removed red line & "09 Competition Labels"
      ========================================================================= */}
      <section className="py-24 bg-brand-cream text-brand-navy border-b border-brand-cream-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-6xl font-athletic text-brand-navy tracking-tight mb-4 font-black">
            EVERY LEVEL COUNTS.
          </h2>

          <p className="text-base sm:text-lg text-brand-slate font-sans mb-10">
            Use the same naming hierarchy across registration, event graphics, schedules and results.
          </p>

          {/* 4 Division Row Strips */}
          <div className="space-y-3 mb-12">
            <div className="bg-white rounded-xl p-5 shadow-sm border border-brand-navy/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="font-athletic font-black text-lg text-brand-navy tracking-tight">
                D1 / Elite
              </span>
              <span className="text-sm font-medium text-brand-slate">
                Former pro, college/university and high-level junior
              </span>
            </div>

            <div className="bg-[#ebd8b0]/70 rounded-xl p-5 border border-brand-navy/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="font-athletic font-black text-lg text-brand-navy tracking-tight">
                D2 / Competitive
              </span>
              <span className="text-sm font-medium text-brand-slate">
                Junior, AAA and AA backgrounds; placement reviewed
              </span>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm border border-brand-navy/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="font-athletic font-black text-lg text-brand-navy tracking-tight">
                D3 / Intermediate
              </span>
              <span className="text-sm font-medium text-brand-slate">
                Experienced organized and established recreational players
              </span>
            </div>

            <div className="bg-[#ebd8b0]/70 rounded-xl p-5 border border-brand-navy/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="font-athletic font-black text-lg text-brand-navy tracking-tight">
                D4 / Recreational
              </span>
              <span className="text-sm font-medium text-brand-slate">
                Lower-tempo recreational hockey with basic game skills
              </span>
            </div>
          </div>

          {/* Two-Column Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-brand-navy/15 mb-10">
            <div>
              <h3 className="text-xl font-athletic text-brand-navy font-black mb-3">
                Age categories
              </h3>
              <p className="text-sm text-brand-navy font-bold mb-2">
                Open (18+) / 40+ / 50+ / 60+
              </p>
              <p className="text-xs text-brand-slate mb-1">
                Example: <span className="font-semibold text-brand-navy">Champions Cup · Open D2</span>
              </p>
              <p className="text-xs text-brand-slate">
                Publish the eligibility date and available divisions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-athletic text-brand-navy font-black mb-3">
                Rankings presentation
              </h3>
              <p className="text-xs text-brand-slate leading-relaxed mb-2">
                Label the age group, division, season and update date.
              </p>
              <p className="text-xs text-brand-slate leading-relaxed">
                Rankings are based on Champions League / Champions Cup results; publish the scoring method before launch.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-brand-navy/10">
            <p className="text-xs text-brand-slate">
              Brand labels do not replace eligibility rules. D3/D4 descriptions and placement policies remain subject to competition rules.
            </p>
            <Link
              href="/divisions"
              className="px-8 py-3.5 rounded-xl bg-brand-red text-brand-navy text-xs font-black uppercase tracking-wider hover:bg-brand-red-hover transition-all shadow-md shrink-0"
            >
              Explore Division Breakdown &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          TEAM RANKINGS
          Client Edit 2: Removed red line & "Verified Competition"
      ========================================================================= */}
      <section className="py-24 bg-brand-navy border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-4xl sm:text-6xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
                Don’t just win the night. Build your reputation.
              </h2>
              <p className="text-base text-slate-300 max-w-2xl font-sans">
                Your Champions Cup and Champions League results will build your place in the Veddie Team Rankings: an ongoing rating system for adult hockey teams across the province.
              </p>
            </div>
            <Link
              href="/rankings"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-red text-brand-navy text-xs font-black uppercase tracking-wider hover:bg-brand-red-hover transition-all self-start lg:self-auto shrink-0 shadow-xl"
            >
              Explore Full Leaderboard
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </Link>
          </div>

          {/* Top 5 Table */}
          <div className="bg-[#0b203a] border-2 border-[#1c3f6e] rounded-2xl overflow-hidden shadow-2xl">
            <div className="px-6 py-4 bg-[#0e2749] border-b border-brand-border flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-cream flex items-center gap-2">
                <Shield className="w-4 h-4 text-brand-red" />
                D1 Elite • Open 18+ Leaderboard Preview
              </span>
              <span className="text-xs text-brand-cream/70 font-mono">
                Mathematical Elo Engine (K = 32)
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-brand-border text-xs font-bold uppercase tracking-wider text-brand-cream/80 bg-[#07192f]">
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
                      className="hover:bg-brand-card/80 transition-colors group"
                    >
                      <td className="py-4 px-6 font-athletic font-black text-lg text-brand-cream">
                        #{idx + 1}
                      </td>
                      <td className="py-4 px-6">
                        <Link
                          href={`/teams/${team.slug}`}
                          className="font-bold text-brand-cream group-hover:text-brand-cream-light transition-colors block"
                        >
                          {team.name}
                        </Link>
                        <span className="text-xs text-slate-300">{team.region}</span>
                      </td>
                      <td className="py-4 px-6 text-xs text-slate-300">{team.homeLeague}</td>
                      <td className="py-4 px-6 text-center font-mono text-xs text-slate-200">
                        {team.record.wins}–{team.record.losses}–{team.record.ties}
                      </td>
                      <td className="py-4 px-6 text-right font-athletic font-black text-lg text-brand-cream">
                        {team.rating}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-3.5 bg-[#07192f] border-t border-brand-border text-xs text-slate-300 flex items-center justify-between">
              <span>Updated after verified results are recorded.</span>
              <Link href="/rankings" className="text-brand-cream hover:underline font-bold">
                View all divisions &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ONBOARDING STEPS
          Client Edit 2: Removed red line & "08 Voice in Practice"
          Client Edit 3: Removed Pickup reference in Step 1
      ========================================================================= */}
      <section className="py-24 bg-brand-navy border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-6xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
              You get the team together. We’ll handle the details.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-12">
            <div className="p-8 rounded-2xl bg-[#0b203a] border-2 border-[#1c3f6e] relative shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-brand-red text-brand-navy font-athletic font-black text-xl flex items-center justify-center mb-6 shadow-lg">
                1
              </div>
              <h3 className="text-2xl font-athletic text-brand-cream mb-2 font-black">
                Pick your game.
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed font-sans">
                Choose a championship, tournament, or league that matches what you and your team want.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#0b203a] border-2 border-[#1c3f6e] relative shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-brand-red text-brand-navy font-athletic font-black text-xl flex items-center justify-center mb-6 shadow-lg">
                2
              </div>
              <h3 className="text-2xl font-athletic text-brand-cream mb-2 font-black">
                Tell us where you fit.
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed font-sans">
                Share your city, age category and playing background so we can ensure proper competitive placement.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#0b203a] border-2 border-[#1c3f6e] relative shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-brand-red text-brand-navy font-athletic font-black text-xl flex items-center justify-center mb-6 shadow-lg">
                3
              </div>
              <h3 className="text-2xl font-athletic text-brand-cream mb-2 font-black">
                Get the details.
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed font-sans">
                We’ll follow up with relevant opportunities and confirmed program information before you commit.
              </p>
            </div>
          </div>

          <Link
            href="/play"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-xl bg-brand-red text-brand-navy font-black uppercase tracking-wider text-sm hover:bg-brand-red-hover transition-all shadow-xl hover:shadow-brand-red/30"
          >
            Find Your Game
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </Link>
        </div>
      </section>

      {/* =========================================================================
          FINAL CALL TO ACTION
          Client Edit 2: Removed red line & "VEDDIE HOCKEY • STILL GOT IT."
          Client Edit 3: Removed pickup reference
      ========================================================================= */}
      <section className="py-24 bg-brand-navy px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-3xl bg-brand-cream text-brand-navy p-10 sm:p-16 shadow-2xl border-4 border-brand-cream-dark text-center relative overflow-hidden">
          <h2 className="text-4xl sm:text-6xl font-athletic text-brand-navy tracking-tight mb-4 font-black">
            The next chapter still has your name on it.
          </h2>

          <p className="text-lg text-brand-slate mb-10 max-w-xl mx-auto font-sans font-medium">
            Bring your team. Find your team. Experience pro adult hockey built for the rest of your career.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/play"
              className="w-full sm:w-auto px-9 py-4 rounded-xl bg-brand-red text-brand-navy font-black uppercase tracking-wider text-sm hover:bg-brand-red-hover transition-all shadow-xl hover:shadow-brand-red/30 flex items-center justify-center gap-2 active:scale-95"
            >
              Find Your Game
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-9 py-4 rounded-xl bg-brand-navy text-brand-cream font-bold uppercase tracking-wider text-sm hover:bg-[#0b203a] transition-all flex items-center justify-center gap-2 active:scale-95 shadow-md"
            >
              Ask Us a Question
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

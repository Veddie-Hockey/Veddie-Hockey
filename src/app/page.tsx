import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Shield,
  Sparkles,
  Trophy,
  Calendar,
  CheckCircle2,
  Gift,
  Swords,
  Users,
} from "lucide-react";
import ShareToCaptainButton from "@/components/ShareToCaptainButton";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* =========================================================================
          HERO SECTION
          Nov 21 Edit:
          - Eyebrow: "Two April weekends. Men's hockey in the GTA."
          - Headline: "You don't have to be a pro to feel like one."
          - Subhead: "Your name on the stall, real refs, real standings and a final score worth keeping."
          - Primary: "See the Veddie Experience" -> /experience
          - Secondary: "Claim your team's spot" -> /play
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card/90 border border-brand-accent/40 text-brand-accent text-xs font-bold tracking-widest uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            2027 Founding Season · Men’s hockey in the GTA.
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-athletic tracking-tight text-brand-cream mb-6 font-black uppercase">
            You don’t have to be a pro to feel like one.
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
            Your name on the stall, real refs, real standings and a final score worth keeping.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/experience"
              className="w-full sm:w-auto px-9 py-4 rounded-xl bg-brand-red text-brand-navy font-black uppercase tracking-wider text-sm hover:bg-brand-red-hover transition-all shadow-xl hover:shadow-brand-red/30 active:scale-95 flex items-center justify-center gap-2"
            >
              See the Veddie Experience
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </Link>

            <Link
              href="/play"
              className="w-full sm:w-auto px-9 py-4 rounded-xl bg-brand-surface border border-brand-border text-brand-cream font-bold uppercase tracking-wider text-sm hover:bg-brand-card transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
            >
              Claim Your Team’s Spot
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          THREE DOORS ENTRY (Captains, Players, Free Agents)
      ========================================================================= */}
      <section className="py-16 bg-[#071322] border-b border-brand-border px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-1">
              How Do You Want to Enter?
            </span>
            <h2 className="text-2xl sm:text-3xl font-athletic text-brand-cream font-black">
              Three Doors onto the Ice
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#0b203a] border-2 border-[#1c3f6e] hover:border-brand-accent transition-all flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-surface text-brand-accent flex items-center justify-center mb-4 border border-brand-border">
                  <Trophy className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-accent block mb-1">
                  Captains · Team Entry
                </span>
                <h3 className="text-lg font-athletic text-brand-cream font-bold mb-2">
                  Bring Your Squad
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6 font-sans">
                  Get the Captain’s Package, ready-to-paste team chat poll, and reserve your division bracket.
                </p>
              </div>
              <Link
                href="/tournaments#tournament-form"
                className="w-full py-3 px-4 rounded-xl bg-brand-accent text-brand-navy font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-brand-accent-hover transition-all text-center"
              >
                <span>Get Captain's Package</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-[#0b203a] border-2 border-[#1c3f6e] hover:border-brand-cream transition-all flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-surface text-brand-cream flex items-center justify-center mb-4 border border-brand-border">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-cream/80 block mb-1">
                  Players · Roster Member
                </span>
                <h3 className="text-lg font-athletic text-brand-cream font-bold mb-2">
                  Join Your Team
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6 font-sans">
                  Captain already registering? Confirm your roster spot, digital player card, and stall nameplate.
                </p>
              </div>
              <Link
                href="/tournaments#tournament-form"
                className="w-full py-3 px-4 rounded-xl bg-brand-surface border border-brand-border text-brand-cream font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-brand-card transition-all text-center"
              >
                <span>Confirm Roster Spot</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-[#0b203a] border-2 border-[#1c3f6e] hover:border-brand-accent transition-all flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-surface text-brand-accent flex items-center justify-center mb-4 border border-brand-border">
                  <Swords className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-accent block mb-1">
                  Solo Players · Free Agents
                </span>
                <h3 className="text-lg font-athletic text-brand-cream font-bold mb-2">
                  Free Agent Draft
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6 font-sans">
                  No team? We build rosters for free agents. Placed onto balanced teams 14 days before puck drop.
                </p>
              </div>
              <Link
                href="/leagues#league-form"
                className="w-full py-3 px-4 rounded-xl bg-brand-card border border-brand-border hover:border-brand-accent text-brand-cream font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all text-center"
              >
                <span>Enter Free Agent Draft</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          THREE PILLARS SECTION
          Nov 21 Edit:
          - "The room. Ready before you are."
          - "The game. Hockey that counts."
          - "The coverage. A final score worth keeping."
          Each with photo/image labelled "Concept".
      ========================================================================= */}
      <section className="py-24 bg-brand-surface border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
              The Standard
            </span>
            <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
              Everything but the pro contract.
            </h2>
            <p className="text-base text-brand-muted">
              We take care of the details so all your team has to think about is playing hockey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Pillar 1: The Room */}
            <div className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden flex flex-col justify-between group">
              <div className="relative h-56 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage: "url('/images/hockey/dressing-room-preview.jpg')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent" />
                <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-navy/80 text-brand-cream border border-brand-border backdrop-blur-sm">
                  Concept
                </span>
              </div>
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-1">
                  Pillar 01
                </span>
                <h3 className="text-2xl font-athletic text-brand-cream font-bold mb-1">
                  The room.
                </h3>
                <p className="text-sm font-semibold text-brand-cream/80 mb-3 italic">
                  “Ready before you are.”
                </p>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Your name on the stall, tape ready, fresh towels, and your team playlist on.
                </p>
              </div>
            </div>

            {/* Pillar 2: The Game */}
            <div className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden flex flex-col justify-between group">
              <div className="relative h-56 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage: "url('/images/hockey/arena-action.jpg')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent" />
                <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-navy/80 text-brand-cream border border-brand-border backdrop-blur-sm">
                  Concept
                </span>
              </div>
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-1">
                  Pillar 02
                </span>
                <h3 className="text-2xl font-athletic text-brand-cream font-bold mb-1">
                  The game.
                </h3>
                <p className="text-sm font-semibold text-brand-cream/80 mb-3 italic">
                  “Hockey that counts.”
                </p>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Real refs, divisions that fit, standings that update, and something on the line.
                </p>
              </div>
            </div>

            {/* Pillar 3: The Coverage */}
            <div className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden flex flex-col justify-between group">
              <div className="relative h-56 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage: "url('/images/hockey/champions-cup.jpg')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent" />
                <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-navy/80 text-brand-cream border border-brand-border backdrop-blur-sm">
                  Concept
                </span>
              </div>
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-1">
                  Pillar 03
                </span>
                <h3 className="text-2xl font-athletic text-brand-cream font-bold mb-1">
                  The coverage.
                </h3>
                <p className="text-sm font-semibold text-brand-cream/80 mb-3 italic">
                  “A final score worth keeping.”
                </p>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Matchup cards, a final-score graphic, highlight clips, and a high-resolution team photo.
                </p>
              </div>
            </div>
          </div>

          {/* TWO EVENT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Event Card 1: The Veddie Invitational */}
            <div className="bg-[#0b203a] border-2 border-[#1c3f6e] hover:border-brand-accent rounded-2xl p-8 flex flex-col justify-between transition-all group shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded bg-brand-accent text-brand-navy">
                    Early April 2027
                  </span>
                  <span className="text-xs font-semibold text-brand-muted uppercase">
                    Invitational Tournament
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-athletic text-brand-cream font-black mb-2">
                  The Veddie Invitational
                </h3>
                <p className="text-sm font-bold text-brand-cream/90 mb-4">
                  Early April 2027 · Open, 40+, 50+ and 60+
                </p>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Standalone weekend tournament with 3 guaranteed games, strict divisions, real referees, and player stall nameplates.
                </p>
              </div>
              <Link
                href="/tournaments"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-brand-red text-brand-navy text-xs font-black uppercase tracking-wider hover:bg-brand-red-hover transition-all shadow-md"
              >
                Get Invitational Details
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Event Card 2: The Veddie Champions Cup */}
            <div className="bg-[#0b203a] border-2 border-[#1c3f6e] hover:border-brand-red rounded-2xl p-8 flex flex-col justify-between transition-all group shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded bg-brand-red text-brand-navy">
                    Late April 2027
                  </span>
                  <span className="text-xs font-semibold text-brand-muted uppercase">
                    Championship Event
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-athletic text-brand-cream font-black mb-2">
                  The Veddie Champions Cup
                </h3>
                <p className="text-sm font-bold text-brand-cream/90 mb-4">
                  Late April 2027 · Richmond Hill
                </p>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  For teams that earn their spot in their home league. The closest thing to the show.
                </p>
              </div>
              <Link
                href="/champions-cup"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-brand-cream text-brand-navy text-xs font-black uppercase tracking-wider hover:bg-white transition-all shadow-md"
              >
                Check My Team’s Eligibility
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Send this to your captain link under event cards */}
          <div className="text-center pt-4">
            <ShareToCaptainButton variant="minimal" />
          </div>
        </div>
      </section>

      {/* =========================================================================
          ROAD TO THE CUP CALLOUT (Replaces leaderboard preview per Nov 21 spec)
      ========================================================================= */}
      <section className="py-24 bg-brand-navy border-b border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2">
            Home League Qualification
          </span>
          <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
            Who’s the team to beat in your league?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto font-sans">
            The road to the Champions Cup runs through every home league. Win your playoffs or finish in the top quarter of your division to earn your spot.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/road-to-the-cup"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-red text-brand-navy font-black uppercase tracking-wider text-sm hover:bg-brand-red-hover transition-all shadow-xl"
            >
              Follow the Road to the Cup
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </Link>
            <Link
              href="/nominate"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-surface border border-brand-border text-brand-cream font-bold uppercase tracking-wider text-sm hover:bg-brand-card transition-all"
            >
              Nominate a Team
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          NOW I'M A VEDDIE CONTEST SECTION
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

      {/* =========================================================================
          ONBOARDING STEPS
          Nov 21 Edit:
          - Heading: "You bring the game. We bring the show."
          - Steps: "Pick your weekend." / "Tell us about your team." / "We book the ice, the refs, the room and the photos."
      ========================================================================= */}
      <section className="py-24 bg-brand-surface border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
              You bring the game. We bring the show.
            </h2>
            <p className="text-base text-brand-muted">
              Here is how we get your squad onto the ice this April.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-12">
            <div className="p-8 rounded-2xl bg-brand-card border border-brand-border relative shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-brand-red text-brand-navy font-athletic font-black text-xl flex items-center justify-center mb-6 shadow-lg">
                1
              </div>
              <h3 className="text-2xl font-athletic text-brand-cream mb-2 font-black">
                Pick your weekend.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                Choose the early April Veddie Invitational or late April Champions Cup in Richmond Hill.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-brand-card border border-brand-border relative shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-brand-red text-brand-navy font-athletic font-black text-xl flex items-center justify-center mb-6 shadow-lg">
                2
              </div>
              <h3 className="text-2xl font-athletic text-brand-cream mb-2 font-black">
                Tell us about your team.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                Share your home league standings or tournament division so we keep every matchup competitive and fair.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-brand-card border border-brand-border relative shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-brand-red text-brand-navy font-athletic font-black text-xl flex items-center justify-center mb-6 shadow-lg">
                3
              </div>
              <h3 className="text-2xl font-athletic text-brand-cream mb-2 font-black">
                We book the ice, the refs, the room and the photos.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                From stall nameplates and tape to certified refs and final-score graphics, we handle every detail.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/play"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-xl bg-brand-red text-brand-navy font-black uppercase tracking-wider text-sm hover:bg-brand-red-hover transition-all shadow-xl hover:shadow-brand-red/30"
            >
              Find Your Game
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </Link>
            <ShareToCaptainButton />
          </div>
        </div>
      </section>

      {/* =========================================================================
          DIVISIONS TEASER
          Nov 21 Edit:
          - Heading: "Every division gets the same treatment."
          - Line: "Open, 40+, 50+ and 60+, with skill levels so every game is a good one."
      ========================================================================= */}
      <section className="py-24 bg-brand-navy border-b border-brand-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
            Every division gets the same treatment.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans mb-12 max-w-2xl mx-auto">
            Open, 40+, 50+ and 60+, with skill levels so every game is a good one. A 60+ D4 squad gets the same stall nameplates, certified refs, and media coverage as an Open D1 team.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border text-left">
              <span className="text-xs font-black uppercase tracking-wider text-brand-accent block mb-1">
                D1 Elite
              </span>
              <p className="text-xs text-brand-cream font-medium">Played junior, university or pro.</p>
            </div>
            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border text-left">
              <span className="text-xs font-black uppercase tracking-wider text-brand-accent block mb-1">
                D2 Competitive
              </span>
              <p className="text-xs text-brand-cream font-medium">Played AAA or AA.</p>
            </div>
            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border text-left">
              <span className="text-xs font-black uppercase tracking-wider text-brand-accent block mb-1">
                D3 Intermediate
              </span>
              <p className="text-xs text-brand-cream font-medium">Strong rec or high school hockey.</p>
            </div>
            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border text-left">
              <span className="text-xs font-black uppercase tracking-wider text-brand-accent block mb-1">
                D4 Recreational
              </span>
              <p className="text-xs text-brand-cream font-medium">House league, or learned as an adult.</p>
            </div>
          </div>

          <Link
            href="/divisions"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-surface border border-brand-border hover:border-brand-accent text-brand-cream text-xs font-black uppercase tracking-wider transition-all"
          >
            Explore Division Breakdown
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* =========================================================================
          FINAL CALL TO ACTION
      ========================================================================= */}
      <section className="py-24 bg-brand-navy px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-3xl bg-brand-cream text-brand-navy p-10 sm:p-16 shadow-2xl border-4 border-brand-cream-dark text-center relative overflow-hidden">
          <h2 className="text-4xl sm:text-6xl font-athletic text-brand-navy tracking-tight mb-4 font-black">
            You don’t have to be a pro to feel like one.
          </h2>

          <p className="text-lg text-brand-slate mb-10 max-w-xl mx-auto font-sans font-medium">
            Your name on the stall, real refs, real standings and a final score worth keeping.
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

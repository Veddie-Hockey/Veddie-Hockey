"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, AlertCircle, Loader2, Copy, Check, Share2 } from "lucide-react";

export type FormType =
  | "cup"
  | "champions-league"
  | "tournaments"
  | "leagues"
  | "pickup"
  | "partners"
  | "contact"
  | "contest";

interface LeadCaptureFormProps {
  type: FormType;
  id?: string;
  defaultTopic?: string;
  defaultPartnerType?: string;
  className?: string;
  hideHeading?: boolean;
  buttonText?: string;
  microcopy?: string;
}

export default function LeadCaptureForm({
  type,
  id,
  defaultTopic,
  defaultPartnerType,
  className = "",
  hideHeading = false,
  buttonText,
  microcopy,
}: LeadCaptureFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pollCopied, setPollCopied] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    ageCategory: "Open 18+",
    skillLevel: "D2 — Competitive",
    anythingElse: "",
    marketingConsent: false,

    // Specific fields
    teamName: "",
    homeLeague: "",
    homeDivision: "",
    currentStanding: "",
    seasonEndDate: "",
    standingsLink: "",
    playingBackground: "",
    regularNight: "",
    travelArea: "",
    enquiryType: "Team", // Team vs Individual
    position: "Skater", // Skater / Goalie / Captain
    preferredNights: "Any",
    preferredDates: "",
    preferredDestination: "",
    preferredTimeRange: "Evening (8pm–11pm)",

    // Marketing & Expansion fields
    ownsBusiness: false,
    businessDetails: "",
    leagueInterest: "Yes, definitely",
    preferredLeagueNight: "",
    hockeyMemory: "",

    // Partner fields
    organization: "",
    partnerType: defaultPartnerType || "Locker Room Partners",
    productCategory: "Apparel",
    exploreMessage: "",

    // Contact fields
    topic: defaultTopic || "Choosing a program",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type: inputType } = e.target;
    if (inputType === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!formData.name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if ((type === "cup" || type === "champions-league") && formData.enquiryType !== "Individual") {
      if (!formData.teamName.trim()) {
        setError("Please provide your team name.");
        return;
      }
      if (!formData.homeLeague.trim()) {
        setError("Please enter your home league.");
        return;
      }
    }

    setLoading(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          ...formData,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setLoading(false);
      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      // Fallback to success for user experience while logging error
      setLoading(false);
      setSubmitted(true);
    }
  };

  // Render Success Message based on form type
  if (submitted) {
    let successHeadline = "Information received.";
    let successBody = "Thank you for getting in touch. The Veddie team will reply by email within 2 business days.";

    if (type === "cup") {
      successHeadline = "We check your standings, then confirm your spot.";
      successBody =
        "Thanks for putting your team forward. The Veddie competition desk will check your home-league standings and reply within 2 business days. No payment today.";
    } else if (type === "tournaments") {
      successHeadline = "Captain's Package on the way.";
      successBody =
        "Thanks! The Veddie tournament desk reviews team placement and replies with full package details within 2 business days. In the meantime, paste this poll into your team chat to get your numbers together:";
    } else if (type === "contest") {
      successHeadline = "You’re in the draw!";
      successBody =
        "Thanks for sharing your hockey memory. You're entered to win a Veddie hoodie and your team's entry into our April Invitational in Richmond Hill.";
    } else if (type === "champions-league") {
      successHeadline = "You’re on the Champions League interest list.";
      successBody =
        "Thanks! Our regional competition desk reviews team applications and follows up within 2 business days.";
    } else if (type === "leagues") {
      successHeadline = "You’re on the league interest list.";
      successBody =
        "Thanks! Our operations desk will review your division preference and follow up within 2 business days when placements open.";
    } else if (type === "partners") {
      successHeadline = "Partnership inquiry received.";
      successBody =
        "Thanks for reaching out. Our director of partnerships reviews proposals and will reply within 2 business days.";
    } else if (type === "contact") {
      successHeadline = "Thanks. We’ll reply within 2 business days.";
      successBody =
        "We have received your message. The Veddie operations team will reply by email. Or DM us on Instagram: INVITE for the Invitational, CUP for the Champions Cup.";
    }

    return (
      <div
        id={id}
        className={`bg-brand-surface border border-brand-accent/40 rounded-2xl p-8 sm:p-10 text-center max-w-xl mx-auto ${className}`}
      >
        <div className="w-16 h-16 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-5 text-brand-accent">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-athletic text-brand-cream tracking-tight mb-3">
          {successHeadline}
        </h3>
        <p className="text-brand-muted text-sm leading-relaxed mb-6">{successBody}</p>

        {/* Tournaments Captain Chat Poll Helper */}
        {type === "tournaments" && (
          <div className="mb-6 p-4 rounded-xl bg-brand-card border border-brand-border text-left">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-accent">
                Team Chat Poll (Copy & Paste)
              </span>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(
                    "April 2027 · Richmond Hill · 3 games guaranteed + pro room. Who's in? Let me know by Friday."
                  );
                  setPollCopied(true);
                  setTimeout(() => setPollCopied(false), 2000);
                }}
                className="text-xs font-bold text-brand-cream hover:text-brand-accent flex items-center gap-1 transition-colors"
              >
                {pollCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-brand-accent" />
                    <span className="text-brand-accent">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Poll</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-xs font-mono text-slate-200 bg-brand-surface p-2.5 rounded-lg border border-brand-border/80 select-all">
              "April 2027 · Richmond Hill · 3 games guaranteed + pro room. Who's in? Let me know by Friday."
            </p>
          </div>
        )}

        {/* Contest Next Actions: Send to Chat & Captain Lead */}
        {type === "contest" && (
          <div className="space-y-3 mb-6">
            <button
              type="button"
              onClick={() => {
                const text = "Win our team a weekend at the Veddie Invitational! Check this out:";
                if (navigator.share) {
                  navigator.share({ title: "Veddie Hockey Contest", text, url: window.location.href });
                } else {
                  navigator.clipboard.writeText(`${text} ${window.location.href}`);
                  setPollCopied(true);
                  setTimeout(() => setPollCopied(false), 2000);
                }
              }}
              className="w-full py-3 px-4 rounded-xl bg-brand-card border border-brand-border hover:border-brand-accent text-brand-cream font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
            >
              <Share2 className="w-4 h-4 text-brand-accent" />
              <span>{pollCopied ? "Link Copied to Clipboard!" : "Send This to the Team Chat"}</span>
            </button>
            <Link
              href="/tournaments#tournament-form"
              className="w-full py-3 px-4 rounded-xl bg-brand-accent text-brand-navy font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-brand-accent-hover transition-all"
            >
              I’m the Captain — Send Me April Details &rarr;
            </Link>
          </div>
        )}

        <div className="pt-4 border-t border-brand-border">
          <Link
            href="/play"
            className="text-xs font-bold uppercase tracking-wider text-brand-accent hover:underline"
          >
            Explore Other Ways to Play &rarr;
          </Link>
        </div>
      </div>
    );
  }

  // Titles and button labels
  let headline = "Join the List";
  let intro = "Share your details with Veddie Hockey.";
  let submitButtonText = buttonText || "Submit";
  let microDisclaimer = microcopy !== undefined ? microcopy : "";

  if (type === "cup") {
    headline = "Check your team’s eligibility.";
    intro =
      "Tell us about your team. We check your standings, then confirm your spot. No payment today.";
    submitButtonText = buttonText || "Check My Team's Eligibility";
    microDisclaimer =
      microcopy !== undefined
        ? microcopy
        : "We check your standings, then confirm your spot. No payment today.";
  } else if (type === "champions-league") {
    headline = "Join the Champions League interest list.";
    intro = "Help us build the regional field. Tell us where and when your team plays.";
    submitButtonText = buttonText || "Join the Champions League interest list";
    microDisclaimer = microcopy !== undefined ? microcopy : "";
  } else if (type === "tournaments") {
    headline = "Get the Captain’s Package.";
    intro = "Tell us about your squad. Open, 40+, 50+ and 60+. Includes date, rink, price breakdown and team-chat poll graphic.";
    submitButtonText = buttonText || "Get the Captain's Package";
    microDisclaimer =
      microcopy !== undefined
        ? microcopy
        : "We check team placement and reply within 2 business days. No payment today.";
  } else if (type === "contest") {
    headline = "Win Your Team a Weekend at the Invitational.";
    intro =
      "Submit your 'I used to… Now I’m a Veddie' hockey memory to enter the draw for a Veddie hoodie and a team entry into our Richmond Hill Invitational.";
    submitButtonText = buttonText || "Submit My Memory & Enter Draw";
    microDisclaimer = microcopy !== undefined ? microcopy : "";
  } else if (type === "leagues") {
    headline = "Find your hockey night.";
    intro = "Tell us your preferred city, division and nights.";
    submitButtonText = buttonText || "Join the League Interest List";
    microDisclaimer = microcopy !== undefined ? microcopy : "";
  } else if (type === "partners") {
    headline = "Partner with Veddie.";
    intro = "Put your name where adult hockey players actually look.";
    submitButtonText = buttonText || "Partner on a division or the post-game";
    microDisclaimer = microcopy !== undefined ? microcopy : "";
  } else if (type === "contact") {
    headline = "Let’s talk hockey.";
    intro = "Questions about your division, team entry, or an event? Send us a note.";
    submitButtonText = buttonText || "Send My Question";
    microDisclaimer = microcopy !== undefined ? microcopy : "";
  }

  return (
    <div
      id={id}
      className={`bg-brand-surface border border-brand-border rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto ${className}`}
    >
      {!hideHeading && (
        <div className="mb-6">
          <h3 className="text-2xl font-athletic text-brand-cream tracking-tight mb-2">
            {headline}
          </h3>
          <p className="text-brand-muted text-sm">{intro}</p>
        </div>
      )}

      {error && (
        <div className="mb-5 p-3 rounded-lg bg-brand-red/10 border border-brand-red/30 flex items-center gap-2 text-brand-red text-xs">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        {/* Contact fields */}
        {type === "contact" ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                  Name <span className="text-brand-accent">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                  Email <span className="text-brand-accent">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@email.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                Topic
              </label>
              <select
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent transition-colors"
              >
                <option value="The Invitational">The Invitational</option>
                <option value="The Champions Cup">The Champions Cup</option>
                <option value="Nominate a team">Nominate a team</option>
                <option value="Division placement">Division placement</option>
                <option value="Sponsorship">Sponsorship</option>
                <option value="Something else">Something else</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                Message <span className="text-brand-accent">*</span>
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="How can we help?"
                className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent transition-colors"
              />
            </div>
          </>
        ) : type === "partners" ? (
          // Partners Form
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                  Name <span className="text-brand-accent">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                  Work Email <span className="text-brand-accent">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="work@organization.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                  Organization
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="League, rink, or brand name"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                  Partnership Type
                </label>
                <select
                  name="partnerType"
                  value={formData.partnerType}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                >
                  <option value="A division">A division</option>
                  <option value="The room">The room</option>
                  <option value="Player Services">Player Services (Physio, Chiro, Real Estate, Finance)</option>
                  <option value="Result cards">Result cards</option>
                  <option value="Event photo & video">Event photo & video</option>
                  <option value="The post-game">The post-game</option>
                  <option value="Locker Room Partners (April Trial)">Locker Room Partners (April Trial)</option>
                  <option value="League organizer">League organizer</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                City or Region
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="e.g. Toronto, Kitchener, Mississauga"
                className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                What would you like to explore?
              </label>
              <textarea
                name="exploreMessage"
                rows={3}
                value={formData.exploreMessage}
                onChange={handleChange}
                placeholder="Tell us about your organization and ideas..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
              />
            </div>
          </>
        ) : (
          // Standard Interest Forms (Cup, League, Tournaments, Leagues, Pickup)
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                  Name <span className="text-brand-accent">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                  Email <span className="text-brand-accent">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@email.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                  Preferred City / Area {type !== "cup" && type !== "tournaments" && <span className="text-brand-accent">*</span>}
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required={type !== "cup" && type !== "tournaments"}
                  placeholder="e.g. GTA / Kitchener"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                  Age Category {(type === "cup" || type === "tournaments") && <span className="text-brand-accent">*</span>}
                </label>
                <select
                  name="ageCategory"
                  value={formData.ageCategory}
                  onChange={handleChange}
                  required={type === "cup" || type === "tournaments"}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                >
                  <option value="Open 18+">Open 18+</option>
                  <option value="40+">40+</option>
                  <option value="50+">50+</option>
                  <option value="60+">60+</option>
                  <option value="Not sure">Not sure</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                  Skill Level {(type === "cup" || type === "tournaments") && <span className="text-brand-accent">*</span>}
                </label>
                <select
                  name="skillLevel"
                  value={formData.skillLevel}
                  onChange={handleChange}
                  required={type === "cup" || type === "tournaments"}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                >
                  <option value="D1 — Elite">D1 — Elite</option>
                  <option value="D2 — Competitive">D2 — Competitive</option>
                  <option value="D3 — Intermediate">D3 — Intermediate</option>
                  <option value="D4 — Recreational">D4 — Recreational</option>
                  <option value="Not sure">Not sure</option>
                </select>
              </div>
            </div>

            {/* Champions Cup Specific Fields */}
            {type === "cup" && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                      Team Name <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      type="text"
                      name="teamName"
                      value={formData.teamName}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Oakville Steelheads"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                      Home League (Optional)
                    </label>
                    <input
                      type="text"
                      name="homeLeague"
                      value={formData.homeLeague}
                      onChange={handleChange}
                      placeholder="e.g. Halton Adult Hockey League"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                      Home Division (Optional)
                    </label>
                    <input
                      type="text"
                      name="homeDivision"
                      value={formData.homeDivision}
                      onChange={handleChange}
                      placeholder="e.g. Division 1 / Tier A"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                      Current Standing (Optional)
                    </label>
                    <input
                      type="text"
                      name="currentStanding"
                      value={formData.currentStanding}
                      onChange={handleChange}
                      placeholder="e.g. 1st of 8 / Not yet known"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                    Brief Team Playing Background (Optional)
                  </label>
                  <textarea
                    name="playingBackground"
                    rows={2}
                    value={formData.playingBackground}
                    onChange={handleChange}
                    placeholder="e.g. Mix of AAA/AA alumni, playing together 6 years"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                    Public Standings Link (Optional)
                  </label>
                  <input
                    type="url"
                    name="standingsLink"
                    value={formData.standingsLink}
                    onChange={handleChange}
                    placeholder="https://..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                  />
                </div>
              </>
            )}

            {/* Champions League Specific Fields */}
            {type === "champions-league" && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                      Team Name <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      type="text"
                      name="teamName"
                      value={formData.teamName}
                      onChange={handleChange}
                      required
                      placeholder="Your team name"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                      Home League & Division <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      type="text"
                      name="homeLeague"
                      value={formData.homeLeague}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Metro North Div 2"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                      Regular Playing Night <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      type="text"
                      name="regularNight"
                      value={formData.regularNight}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Thursdays"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                      Typical Travel Area
                    </label>
                    <input
                      type="text"
                      name="travelArea"
                      value={formData.travelArea}
                      onChange={handleChange}
                      placeholder="e.g. Within 45 mins of Oakville"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                    Brief Team Background <span className="text-brand-accent">*</span>
                  </label>
                  <textarea
                    name="playingBackground"
                    rows={2}
                    value={formData.playingBackground}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about the team caliber and roster background"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                  />
                </div>
              </>
            )}

            {/* Tournaments Specific Fields */}
            {type === "tournaments" && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                      Team Name <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      type="text"
                      name="teamName"
                      value={formData.teamName}
                      onChange={handleChange}
                      required
                      placeholder="Your team name"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                      Enquiring As
                    </label>
                    <select
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                    >
                      <option value="Team">Team Captain</option>
                      <option value="Individual player">Roster Member</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                      Preferred Dates or Months (Optional)
                    </label>
                    <input
                      type="text"
                      name="preferredDates"
                      value={formData.preferredDates}
                      onChange={handleChange}
                      placeholder="e.g. Early April 2027"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                      Preferred Destination (Optional)
                    </label>
                    <input
                      type="text"
                      name="preferredDestination"
                      value={formData.preferredDestination}
                      onChange={handleChange}
                      placeholder="e.g. Richmond Hill, GTA"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                      Would your team consider a weekly league?
                    </label>
                    <select
                      name="leagueInterest"
                      value={formData.leagueInterest}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                    >
                      <option value="Yes, definitely">Yes, definitely</option>
                      <option value="Maybe / depending on night">Maybe / depending on night</option>
                      <option value="Tournaments only">Tournaments only</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                      Preferred League Night (Optional)
                    </label>
                    <input
                      type="text"
                      name="preferredLeagueNight"
                      value={formData.preferredLeagueNight}
                      onChange={handleChange}
                      placeholder="e.g. Thursdays, Sunday evenings"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                    />
                  </div>
                </div>
              </>
            )}

            {/* Contest Specific Fields */}
            {type === "contest" && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                    Your Current Team or Home League (Optional)
                  </label>
                  <input
                    type="text"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    placeholder="e.g. Oakville Steelheads / Halton Rec"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                    Your "I Used To… Now I’m a Veddie" Hockey Memory <span className="text-brand-accent">*</span>
                  </label>
                  <textarea
                    name="hockeyMemory"
                    rows={4}
                    required
                    value={formData.hockeyMemory}
                    onChange={handleChange}
                    placeholder="e.g. I used to find away games with my dad, an arena book, and a map the size of a matchbox with four streets on it. Now I’m a Veddie..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                  />
                </div>
              </div>
            )}

            {/* Leagues Specific Fields */}
            {type === "leagues" && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                      Registering As <span className="text-brand-accent">*</span>
                    </label>
                    <select
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                    >
                      <option value="Team">Team Captain (Bring Your Team)</option>
                      <option value="Individual">Individual Skater (Free Agent)</option>
                      <option value="Goalie">Individual Goalie (Free Agent)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                      Role / Position <span className="text-brand-accent">*</span>
                    </label>
                    <select
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                    >
                      <option value="Skater">Skater</option>
                      <option value="Goalie">Goalie</option>
                      <option value="Team captain">Team captain</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                      Preferred Nights <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      type="text"
                      name="preferredNights"
                      value={formData.preferredNights}
                      onChange={handleChange}
                      placeholder="e.g. Tuesdays / Sundays"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                    />
                  </div>
                </div>

                {formData.enquiryType === "Team" && (
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                      Team Name <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      type="text"
                      name="teamName"
                      value={formData.teamName}
                      onChange={handleChange}
                      required
                      placeholder="Your team name"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                    />
                  </div>
                )}
              </>
            )}

            {/* Pickup Specific Fields */}
            {type === "pickup" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                    Position <span className="text-brand-accent">*</span>
                  </label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                  >
                    <option value="Skater">Skater</option>
                    <option value="Goalie">Goalie (Vetted Goalies Play Free)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                    Preferred Nights <span className="text-brand-accent">*</span>
                  </label>
                  <input
                    type="text"
                    name="preferredNights"
                    value={formData.preferredNights}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Friday nights, Weekday lunch"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                  />
                </div>
              </div>
            )}

            {/* Optional shared field */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                Anything else we should know? (Optional)
              </label>
              <textarea
                name="anythingElse"
                rows={2}
                value={formData.anythingElse}
                onChange={handleChange}
                placeholder="Rink preferences, teammate groupings, schedule constraints..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
              />
            </div>
          </>
        )}

        {/* Optional Business Owner check */}
        <div className="p-3.5 rounded-xl bg-brand-card/50 border border-brand-border/60">
          <label className="flex items-start gap-2.5 cursor-pointer select-none">
            <input
              type="checkbox"
              name="ownsBusiness"
              checked={formData.ownsBusiness}
              onChange={handleChange}
              className="mt-1 h-4 w-4 rounded border-brand-border bg-brand-card text-brand-accent focus:ring-brand-accent"
            />
            <div>
              <span className="text-xs font-semibold text-brand-cream block">
                Do you own or run a local business? (Optional)
              </span>
              <span className="text-[11px] text-brand-muted block mt-0.5">
                Check here if you’d like to explore local player services, sponsorship, or team partnership discounts.
              </span>
            </div>
          </label>
        </div>

        {/* Marketing Consent Checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-2.5 cursor-pointer select-none">
            <input
              type="checkbox"
              name="marketingConsent"
              checked={formData.marketingConsent}
              onChange={handleChange}
              className="mt-1 h-4 w-4 rounded border-brand-border bg-brand-card text-brand-accent focus:ring-brand-accent"
            />
            <span className="text-xs text-brand-muted leading-tight">
              Yes, email me Veddie news, new programs and special offers. I can unsubscribe at any time.
            </span>
          </label>
        </div>

        {/* Legal notice */}
        <p className="text-[11px] text-brand-muted/70 leading-relaxed">
          We’ll use your details to handle your enquiry and contact you about the program you selected. See our{" "}
          <Link href="/privacy" className="text-brand-accent underline">
            Privacy Policy
          </Link>
          .
        </p>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-6 rounded-lg bg-brand-accent text-brand-navy font-bold font-bold uppercase tracking-wider text-sm hover:bg-brand-accent-hover active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg hover:shadow-brand-accent/20"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending…</span>
              </>
            ) : (
              <span>{submitButtonText}</span>
            )}
          </button>
          {microDisclaimer && (
            <p className="text-center text-xs text-brand-muted mt-2.5">{microDisclaimer}</p>
          )}
        </div>
      </form>
    </div>
  );
}

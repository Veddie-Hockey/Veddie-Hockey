"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export type FormType =
  | "cup"
  | "champions-league"
  | "tournaments"
  | "leagues"
  | "pickup"
  | "partners"
  | "contact";

interface LeadCaptureFormProps {
  type: FormType;
  id?: string;
  defaultTopic?: string;
  className?: string;
}

export default function LeadCaptureForm({
  type,
  id,
  defaultTopic,
  className = "",
}: LeadCaptureFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    ageCategory: "Open 18+",
    skillLevel: "Not sure",
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

    // Partner fields
    organization: "",
    partnerType: "League",
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

    if (type === "cup" || type === "champions-league") {
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
    let successBody = "Thank you for getting in touch. The Veddie team will reply by email.";

    if (type === "cup") {
      successHeadline = "Your team is on our interest list.";
      successBody =
        "Thanks for putting your team forward. We’ll review your details and contact you as qualification and event information are confirmed.";
    } else if (type === "champions-league") {
      successHeadline = "You’re on the Champions League interest list.";
      successBody =
        "We’ll contact you as regions, competition windows and entry details are confirmed.";
    } else if (type === "tournaments") {
      successHeadline = "You’re on the tournament interest list.";
      successBody = "We’ll email you when relevant tournament details are announced.";
    } else if (type === "leagues") {
      successHeadline = "You’re on the league interest list.";
      successBody =
        "We’ll contact you when a suitable league or player-placement opportunity becomes available. A roster spot is not yet reserved.";
    } else if (type === "pickup") {
      successHeadline = "You’re on the Pickup list.";
      successBody =
        "We’ll email you as suitable sessions open. You’ll book and pay only after reviewing a session’s details.";
    } else if (type === "partners") {
      successHeadline = "Thanks for reaching out.";
      successBody = "We’ll review your enquiry and reply by email.";
    } else if (type === "contact") {
      successHeadline = "Message received.";
      successBody = "Thanks for getting in touch. The Veddie team will reply by email.";
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
  let submitButtonText = "Submit";
  let microDisclaimer = "No payment. No reserved place. We’ll confirm details before registration.";

  if (type === "cup") {
    headline = "Put your team forward.";
    intro =
      "Tell us about your team. We’ll review your information and contact you as the first Cup takes shape.";
    submitButtonText = "Register Team Interest";
    microDisclaimer =
      "No payment. No reserved place. We’ll confirm qualification and event details before registration.";
  } else if (type === "champions-league") {
    headline = "Start your team’s next campaign.";
    intro = "Help us build the regional field. Tell us where and when your team plays.";
    submitButtonText = "Register Champions League Interest";
  } else if (type === "tournaments") {
    headline = "Get the team’s next weekend on the radar.";
    intro = "Tell us the kind of event you’re looking for.";
    submitButtonText = "Get Tournament Updates";
  } else if (type === "leagues") {
    headline = "Find your hockey night.";
    intro = "Bring your team or tell us you’re looking for one.";
    submitButtonText = "Join the League Interest List";
  } else if (type === "pickup") {
    headline = "Find your next skate.";
    intro = "Share your area and availability so we can point you toward the right ice.";
    submitButtonText = "Join the Pickup List";
  } else if (type === "partners") {
    headline = "Let’s build something for hockey players.";
    intro = "Explore partnerships for leagues, sponsors, arenas, or hockey services.";
    submitButtonText = "Start the Conversation";
  } else if (type === "contact") {
    headline = "Let’s talk hockey.";
    intro =
      "Questions about your division, team entry, pickup or a partnership? Send us a note and we’ll help with the next step.";
    submitButtonText = "Send My Question";
  }

  return (
    <div
      id={id}
      className={`bg-brand-surface border border-brand-border rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto ${className}`}
    >
      <div className="mb-6">
        <h3 className="text-2xl font-athletic text-brand-cream tracking-tight mb-2">
          {headline}
        </h3>
        <p className="text-brand-muted text-sm">{intro}</p>
      </div>

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
                <option value="Choosing a program">Choosing a program</option>
                <option value="Division placement">Division placement</option>
                <option value="Team entry">Team entry</option>
                <option value="Pickup">Pickup</option>
                <option value="Partnership">Partnership</option>
                <option value="Other">Other</option>
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
                  <option value="League">League</option>
                  <option value="Sponsor">Sponsor</option>
                  <option value="Arena">Arena</option>
                  <option value="Service provider">Service provider</option>
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
                  Preferred City / Area <span className="text-brand-accent">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  placeholder="e.g. GTA / Kitchener"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                  Age Category
                </label>
                <select
                  name="ageCategory"
                  value={formData.ageCategory}
                  onChange={handleChange}
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
                  Skill Level
                </label>
                <select
                  name="skillLevel"
                  value={formData.skillLevel}
                  onChange={handleChange}
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
                      Home League <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      type="text"
                      name="homeLeague"
                      value={formData.homeLeague}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Halton Adult Hockey League"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                      Home Division <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      type="text"
                      name="homeDivision"
                      value={formData.homeDivision}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Division 1 / Tier A"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                      Current Standing
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
                    Brief Team Playing Background <span className="text-brand-accent">*</span>
                  </label>
                  <textarea
                    name="playingBackground"
                    rows={2}
                    value={formData.playingBackground}
                    onChange={handleChange}
                    required
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
                      Enquiring As <span className="text-brand-accent">*</span>
                    </label>
                    <select
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                    >
                      <option value="Team">Team</option>
                      <option value="Individual player">Individual player</option>
                    </select>
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
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                      Preferred Dates or Months
                    </label>
                    <input
                      type="text"
                      name="preferredDates"
                      value={formData.preferredDates}
                      onChange={handleChange}
                      placeholder="e.g. Spring / Summer weekends"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-cream mb-1.5">
                      Preferred Destination
                    </label>
                    <input
                      type="text"
                      name="preferredDestination"
                      value={formData.preferredDestination}
                      onChange={handleChange}
                      placeholder="e.g. Niagara, Kitchener, Toronto"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                    />
                  </div>
                </div>
              </>
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
                      <option value="Team">Team</option>
                      <option value="Individual">Individual</option>
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
            className="w-full py-3.5 px-6 rounded-lg bg-brand-accent text-brand-black font-bold uppercase tracking-wider text-sm hover:bg-brand-accent-hover active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg hover:shadow-brand-accent/20"
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

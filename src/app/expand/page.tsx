"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  MapPin,
  Trophy,
  Building,
  Star,
  CheckCircle2,
  Loader2,
  Check,
} from "lucide-react";

type ExpandTrack = "request-city" | "start-league" | "venue" | "ambassador";

function ExpandContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab") as ExpandTrack;

  const [activeTab, setActiveTab] = useState<ExpandTrack>("request-city");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    province: "Ontario",
    country: "Canada",
    venueName: "",
    rinkPads: "2 Pads",
    iceAvailability: "",
    leagueSize: "6 to 8 teams",
    localDemand: "",
    teamAffiliation: "",
    details: "",
  });

  useEffect(() => {
    if (tabParam && ["request-city", "start-league", "venue", "ambassador"].includes(tabParam)) {
      setActiveTab(tabParam);
    } else if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.replace("#", "") as ExpandTrack;
      if (["request-city", "start-league", "venue", "ambassador"].includes(hash)) {
        setActiveTab(hash);
      }
    }
  }, [tabParam]);

  const handleTabChange = (tab: ExpandTrack) => {
    setActiveTab(tab);
    setSubmitted(false);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${tab}`);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: `expand-${activeTab}`,
          ...formData,
        }),
      });
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-card border border-brand-border text-brand-accent text-xs font-bold tracking-widest uppercase mb-6 shadow-lg">
          <Trophy className="w-4 h-4" />
          EXPAND VEDDIE HOCKEY
        </div>

        <h1 className="text-4xl sm:text-6xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
          Bring Veddie to Your City.
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto font-sans">
          Whether you want a Veddie division in your area, want to launch a local league, host events at your arena, or become a captain ambassador, let’s build together.
        </p>
      </div>

      {/* 4 Interactive Selector Tabs with matching deep link IDs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
        <button
          id="request-city"
          type="button"
          onClick={() => handleTabChange("request-city")}
          className={`p-4 rounded-2xl border-2 text-left transition-all ${
            activeTab === "request-city"
              ? "bg-brand-accent text-brand-navy border-brand-accent shadow-lg shadow-brand-accent/20"
              : "bg-brand-surface border-brand-border text-brand-cream hover:border-brand-cream"
          }`}
        >
          <MapPin className="w-5 h-5 mb-2" />
          <h3 className="font-athletic text-sm font-bold block">Request A City</h3>
          <p className="text-[11px] opacity-80 mt-0.5">Bring Veddie to your rink</p>
        </button>

        <button
          id="start-league"
          type="button"
          onClick={() => handleTabChange("start-league")}
          className={`p-4 rounded-2xl border-2 text-left transition-all ${
            activeTab === "start-league"
              ? "bg-brand-accent text-brand-navy border-brand-accent shadow-lg shadow-brand-accent/20"
              : "bg-brand-surface border-brand-border text-brand-cream hover:border-brand-cream"
          }`}
        >
          <Trophy className="w-5 h-5 mb-2" />
          <h3 className="font-athletic text-sm font-bold block">Start A League</h3>
          <p className="text-[11px] opacity-80 mt-0.5">Launch a verified circuit</p>
        </button>

        <button
          id="venue"
          type="button"
          onClick={() => handleTabChange("venue")}
          className={`p-4 rounded-2xl border-2 text-left transition-all ${
            activeTab === "venue"
              ? "bg-brand-accent text-brand-navy border-brand-accent shadow-lg shadow-brand-accent/20"
              : "bg-brand-surface border-brand-border text-brand-cream hover:border-brand-cream"
          }`}
        >
          <Building className="w-5 h-5 mb-2" />
          <h3 className="font-athletic text-sm font-bold block">Venue Partnership</h3>
          <p className="text-[11px] opacity-80 mt-0.5">Host at your facility</p>
        </button>

        <button
          id="ambassador"
          type="button"
          onClick={() => handleTabChange("ambassador")}
          className={`p-4 rounded-2xl border-2 text-left transition-all ${
            activeTab === "ambassador"
              ? "bg-brand-accent text-brand-navy border-brand-accent shadow-lg shadow-brand-accent/20"
              : "bg-brand-surface border-brand-border text-brand-cream hover:border-brand-cream"
          }`}
        >
          <Star className="w-5 h-5 mb-2" />
          <h3 className="font-athletic text-sm font-bold block">Become An Ambassador</h3>
          <p className="text-[11px] opacity-80 mt-0.5">Lead your hockey network</p>
        </button>
      </div>

      {/* Form Card */}
      <div className="bg-brand-surface border border-brand-border rounded-2xl p-8 sm:p-12 shadow-2xl">
        {submitted ? (
          <div className="text-center py-10 max-w-md mx-auto">
            <div className="w-16 h-16 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-accent">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-athletic text-brand-cream mb-2">
              Expansion Inquiry Received!
            </h3>
            <p className="text-sm text-brand-muted leading-relaxed mb-6 font-sans">
              Thank you for helping us grow Veddie. Our operations team will review your local market details and reply within 2 business days.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs font-bold uppercase tracking-wider text-brand-accent hover:underline"
            >
              Submit Another Request &rarr;
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-1">
                {activeTab === "request-city" && "City Expansion Request"}
                {activeTab === "start-league" && "League Operator Proposal"}
                {activeTab === "venue" && "Venue Partnership"}
                {activeTab === "ambassador" && "Captain Ambassador Application"}
              </span>
              <h3 className="text-2xl font-athletic text-brand-cream">
                {activeTab === "request-city" && "Where should Veddie launch next?"}
                {activeTab === "start-league" && "Launch a verified Veddie league circuit."}
                {activeTab === "venue" && "Host tournaments & league play at your arena."}
                {activeTab === "ambassador" && "Represent Veddie in your hockey community."}
              </h3>

              {activeTab === "ambassador" && (
                <div className="mt-4 p-4 rounded-xl bg-brand-card border border-brand-border">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-cream block mb-2">
                    Captain Ambassador Responsibilities:
                  </span>
                  <ul className="space-y-1.5 text-xs text-brand-muted">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                      <span>Share tournament dates and qualification criteria with your local league captains.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                      <span>Assist with division placement feedback to ensure fair competition.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                      <span>Serve as local point of contact during on-site gamedays.</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1.5">
                  Your Name <span className="text-brand-accent">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Full Name"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1.5">
                  Email Address <span className="text-brand-accent">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@email.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1.5">
                  Target City / Town <span className="text-brand-accent">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="e.g. Barrie, Guelph, Oakville"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1.5">
                  Province / State <span className="text-brand-accent">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.province}
                  onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                  placeholder="Ontario"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1.5">
                  Country <span className="text-brand-accent">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  placeholder="Canada"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                />
              </div>
            </div>

            {/* Request a City Specific Field: Local Demand */}
            {activeTab === "request-city" && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1.5">
                  Local Demand / Estimated Teams
                </label>
                <input
                  type="text"
                  value={formData.localDemand}
                  onChange={(e) => setFormData({ ...formData, localDemand: e.target.value })}
                  placeholder="e.g. 4-6 local teams looking for tournament or league play"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                />
              </div>
            )}

            {/* Start a League Specific Field: League Size */}
            {activeTab === "start-league" && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1.5">
                  Estimated League Size
                </label>
                <select
                  value={formData.leagueSize}
                  onChange={(e) => setFormData({ ...formData, leagueSize: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                >
                  <option value="4 to 6 teams">4 to 6 teams</option>
                  <option value="6 to 8 teams">6 to 8 teams</option>
                  <option value="8 to 12 teams">8 to 12 teams</option>
                  <option value="12+ teams">12+ teams across multiple divisions</option>
                </select>
              </div>
            )}

            {/* Venue Partnership Specific Fields */}
            {activeTab === "venue" && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1.5">
                    Facility / Arena Name
                  </label>
                  <input
                    type="text"
                    value={formData.venueName}
                    onChange={(e) => setFormData({ ...formData, venueName: e.target.value })}
                    placeholder="e.g. Richmond Green Sports Centre"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1.5">
                    Number of Ice Pads
                  </label>
                  <select
                    value={formData.rinkPads}
                    onChange={(e) => setFormData({ ...formData, rinkPads: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                  >
                    <option value="1 Pad">Single Pad</option>
                    <option value="2 Pads">Twin Pad</option>
                    <option value="3 Pads">Triple Pad</option>
                    <option value="4+ Pads">Quad Pad / Complex</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1.5">
                    Ice Availability
                  </label>
                  <input
                    type="text"
                    value={formData.iceAvailability}
                    onChange={(e) => setFormData({ ...formData, iceAvailability: e.target.value })}
                    placeholder="e.g. Weekend tournament blocks / Weeknights"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                  />
                </div>
              </div>
            )}

            {/* Ambassador Specific Field */}
            {activeTab === "ambassador" && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1.5">
                  Current Team & League Affiliation
                </label>
                <input
                  type="text"
                  value={formData.teamAffiliation}
                  onChange={(e) => setFormData({ ...formData, teamAffiliation: e.target.value })}
                  placeholder="e.g. Captain of Oakville Blades, Halton Adult Hockey League"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1.5">
                Additional Details
              </label>
              <textarea
                rows={4}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                placeholder="Rink preferences, timing, or questions for our team..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 px-6 rounded-xl bg-brand-accent text-brand-navy font-bold uppercase tracking-wider text-sm hover:bg-brand-accent-hover transition-all flex items-center justify-center gap-2 shadow-xl active:scale-95"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting Inquiry…</span>
                </>
              ) : (
                <span>Submit Inquiry &rarr;</span>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function ExpandPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-brand-muted">Loading...</div>}>
      <ExpandContent />
    </Suspense>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Trophy,
  Building,
  Star,
  CheckCircle2,
  ArrowRight,
  Shield,
  Loader2,
} from "lucide-react";

type ExpandTrack = "request-city" | "start-league" | "venue" | "ambassador";

export default function ExpandPage() {
  const [activeTab, setActiveTab] = useState<ExpandTrack>("request-city");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    province: "Ontario",
    venueName: "",
    rinkPads: "2 Pads",
    hockeyRole: "Team Captain",
    details: "",
  });

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
        <div className="flex justify-center mb-4">
          <div className="h-1.5 w-12 bg-brand-red rounded-full" />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-card border border-brand-border text-brand-cream text-xs font-bold tracking-widest uppercase mb-6 shadow-lg">
          <Trophy className="w-4 h-4 text-brand-red" />
          EXPAND VEDDIE HOCKEY
        </div>

        <h1 className="text-4xl sm:text-6xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
          Bring the Pro Experience to Your City.
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto font-sans">
          Whether you want a Veddie division in your hometown, want to launch a league, host events at your arena, or become an ambassador, let’s build together.
        </p>
      </div>

      {/* 4 Interactive Selector Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
        <button
          onClick={() => {
            setActiveTab("request-city");
            setSubmitted(false);
          }}
          className={`p-4 rounded-2xl border-2 text-left transition-all ${
            activeTab === "request-city"
              ? "bg-brand-red text-brand-navy border-brand-red shadow-lg shadow-brand-red/25"
              : "bg-[#0b203a] border-[#1c3f6e] text-brand-cream hover:border-brand-cream"
          }`}
        >
          <MapPin className="w-5 h-5 mb-2" />
          <h3 className="font-athletic text-sm font-black block">Request A City</h3>
          <p className="text-[11px] opacity-80 mt-0.5">Bring Veddie to your rink</p>
        </button>

        <button
          onClick={() => {
            setActiveTab("start-league");
            setSubmitted(false);
          }}
          className={`p-4 rounded-2xl border-2 text-left transition-all ${
            activeTab === "start-league"
              ? "bg-brand-red text-brand-navy border-brand-red shadow-lg shadow-brand-red/25"
              : "bg-[#0b203a] border-[#1c3f6e] text-brand-cream hover:border-brand-cream"
          }`}
        >
          <Trophy className="w-5 h-5 mb-2" />
          <h3 className="font-athletic text-sm font-black block">Start A League</h3>
          <p className="text-[11px] opacity-80 mt-0.5">Launch a regional circuit</p>
        </button>

        <button
          onClick={() => {
            setActiveTab("venue");
            setSubmitted(false);
          }}
          className={`p-4 rounded-2xl border-2 text-left transition-all ${
            activeTab === "venue"
              ? "bg-brand-red text-brand-navy border-brand-red shadow-lg shadow-brand-red/25"
              : "bg-[#0b203a] border-[#1c3f6e] text-brand-cream hover:border-brand-cream"
          }`}
        >
          <Building className="w-5 h-5 mb-2" />
          <h3 className="font-athletic text-sm font-black block">Venue Partnership</h3>
          <p className="text-[11px] opacity-80 mt-0.5">Host Veddie at your facility</p>
        </button>

        <button
          onClick={() => {
            setActiveTab("ambassador");
            setSubmitted(false);
          }}
          className={`p-4 rounded-2xl border-2 text-left transition-all ${
            activeTab === "ambassador"
              ? "bg-brand-red text-brand-navy border-brand-red shadow-lg shadow-brand-red/25"
              : "bg-[#0b203a] border-[#1c3f6e] text-brand-cream hover:border-brand-cream"
          }`}
        >
          <Star className="w-5 h-5 mb-2" />
          <h3 className="font-athletic text-sm font-black block">Become An Ambassador</h3>
          <p className="text-[11px] opacity-80 mt-0.5">Lead your local community</p>
        </button>
      </div>

      {/* Form Card */}
      <div className="bg-[#0b203a] border-2 border-[#1c3f6e] rounded-2xl p-8 sm:p-12 shadow-2xl">
        {submitted ? (
          <div className="text-center py-10 max-w-md mx-auto">
            <div className="w-16 h-16 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-accent">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-athletic text-brand-cream mb-2">
              Expansion Proposal Received!
            </h3>
            <p className="text-sm text-brand-muted leading-relaxed mb-6 font-sans">
              Thank you for helping us grow Veddie. Our expansion director will review your local market details and contact you by email.
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
                {activeTab === "venue" && "Arena Facility Partnership"}
                {activeTab === "ambassador" && "Brand Ambassador Application"}
              </span>
              <h3 className="text-2xl font-athletic text-brand-cream">
                {activeTab === "request-city" && "Where should Veddie launch next?"}
                {activeTab === "start-league" && "Launch a verified Veddie league circuit."}
                {activeTab === "venue" && "Host tournaments & weekly leagues at your arena."}
                {activeTab === "ambassador" && "Represent Veddie in your hockey network."}
              </h3>
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
                  placeholder="e.g. London, Barrie, Guelph"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1.5">
                  Province / State
                </label>
                <input
                  type="text"
                  value={formData.province}
                  onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                  placeholder="Ontario"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1.5">
                  Your Role
                </label>
                <select
                  value={formData.hockeyRole}
                  onChange={(e) => setFormData({ ...formData, hockeyRole: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                >
                  <option value="Team Captain">Team Captain</option>
                  <option value="Player">Player</option>
                  <option value="Arena Facility Director">Arena Facility Director</option>
                  <option value="League Commissioner">League Commissioner</option>
                  <option value="Referee / Official">Referee / Official</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {activeTab === "venue" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1.5">
                    Facility / Arena Name
                  </label>
                  <input
                    type="text"
                    value={formData.venueName}
                    onChange={(e) => setFormData({ ...formData, venueName: e.target.value })}
                    placeholder="e.g. Activa Sportsplex"
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
                    <option value="4+ Pads">Quad Pad / Multi-Rink Complex</option>
                  </select>
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1.5">
                Tell Us More About Your Community or Proposal
              </label>
              <textarea
                rows={4}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                placeholder="Number of interested teams, preferred local rinks, timing, or ideas..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 px-6 rounded-xl bg-brand-red text-brand-navy font-black uppercase tracking-wider text-sm hover:bg-brand-red-hover transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-brand-red/30 active:scale-95"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting Proposal…</span>
                </>
              ) : (
                <span>Submit Expansion Request &rarr;</span>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

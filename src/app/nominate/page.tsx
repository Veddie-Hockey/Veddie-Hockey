"use client";

import { useState } from "react";
import Link from "next/link";
import { Trophy, CheckCircle2, AlertCircle, Share2, ArrowRight } from "lucide-react";

export default function NominatePage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({
    nominatorName: "",
    nominatorEmail: "",
    teamName: "",
    leagueName: "",
    divisionLevel: "D1 — Elite",
    captainName: "",
    reason: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "nomination",
          name: formData.nominatorName,
          email: formData.nominatorEmail,
          teamName: formData.teamName,
          homeLeague: formData.leagueName,
          skillLevel: formData.divisionLevel,
          anythingElse: `Nominated Captain: ${formData.captainName}. Reason: ${formData.reason}`,
        }),
      });
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-col py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-accent/40 text-brand-accent text-xs font-bold tracking-widest uppercase mb-6">
          <Trophy className="w-4 h-4" />
          COMMUNITY NOMINATIONS
        </div>

        <h1 className="text-4xl sm:text-6xl font-athletic text-brand-cream tracking-tight mb-4 font-black">
          Know a team that belongs here?
        </h1>

        <p className="text-base sm:text-lg text-brand-muted max-w-xl mx-auto mb-8">
          Nominate a team you think should be on the Champions Cup radar. Send us their league, division and captain, or share this page directly with them.
        </p>

        <button
          onClick={handleShare}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-surface border border-brand-border text-brand-cream text-xs font-bold uppercase tracking-wider hover:border-brand-accent transition-all"
        >
          <Share2 className="w-4 h-4 text-brand-accent" />
          {copied ? "Link Copied to Clipboard!" : "Share Nomination Link"}
        </button>
      </div>

      {submitted ? (
        <div className="p-10 rounded-2xl bg-brand-surface border border-brand-accent/40 text-center max-w-xl mx-auto">
          <div className="w-16 h-16 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-accent">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-athletic text-brand-cream mb-2">
            Team Nomination Recorded!
          </h3>
          <p className="text-sm text-brand-muted leading-relaxed mb-6">
            Thanks for nominating <strong>{formData.teamName}</strong>. Our scouting team will track their home league standings as the season progresses.
          </p>
          <Link
            href="/champions-cup"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-accent hover:underline"
          >
            Explore the Champions Cup &rarr;
          </Link>
        </div>
      ) : (
        <div className="p-8 sm:p-10 rounded-2xl bg-brand-surface border border-brand-border">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1.5">
                  Nominated Team Name <span className="text-brand-accent">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.teamName}
                  onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                  placeholder="e.g. Oakville Steelheads"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1.5">
                  Home League & Arena <span className="text-brand-accent">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.leagueName}
                  onChange={(e) => setFormData({ ...formData, leagueName: e.target.value })}
                  placeholder="e.g. Halton Adult League"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1.5">
                  Estimated Division Level
                </label>
                <select
                  value={formData.divisionLevel}
                  onChange={(e) => setFormData({ ...formData, divisionLevel: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                >
                  <option value="D1 — Elite">D1 — Elite (Former Junior/Pro)</option>
                  <option value="D2 — Competitive">D2 — Competitive (AAA/AA Alumni)</option>
                  <option value="D3 — Intermediate">D3 — Intermediate (High Rec)</option>
                  <option value="D4 — Recreational">D4 — Recreational (True Rec)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1.5">
                  Captain or Primary Contact Name
                </label>
                <input
                  type="text"
                  value={formData.captainName}
                  onChange={(e) => setFormData({ ...formData, captainName: e.target.value })}
                  placeholder="Captain's name"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1.5">
                Why should they be invited?
              </label>
              <textarea
                rows={3}
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                placeholder="Rivalry background, current winning streak, tournament history..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-brand-border">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.nominatorName}
                  onChange={(e) => setFormData({ ...formData, nominatorName: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.nominatorEmail}
                  onChange={(e) => setFormData({ ...formData, nominatorEmail: e.target.value })}
                  placeholder="Your email"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-6 rounded-lg bg-brand-accent text-brand-black font-bold uppercase tracking-wider text-sm hover:bg-brand-accent-hover transition-all"
              >
                {loading ? "Recording Nomination..." : "Nominate Team"}
              </button>
              <p className="text-center text-xs text-brand-muted mt-2">
                A nomination does not qualify a team or reserve an entry. Standings verification applies.
              </p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

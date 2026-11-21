"use client";

import { useState } from "react";
import Link from "next/link";
import { Trophy, CheckCircle2, ArrowRight } from "lucide-react";
import ShareToCaptainButton from "@/components/ShareToCaptainButton";

export default function NominatePage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    nominatorName: "",
    nominatorEmail: "",
    teamName: "",
    leagueName: "",
    standingsLink: "",
    divisionLevel: "D2 Competitive",
    captainName: "",
    isLeagueOrganizer: false,
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
          type: "nominate",
          name: formData.nominatorName,
          email: formData.nominatorEmail,
          teamName: formData.teamName,
          homeLeague: formData.leagueName,
          standingsLink: formData.standingsLink,
          divisionPreference: formData.divisionLevel,
          anythingElse: `Captain: ${formData.captainName} | Is Organizer: ${formData.isLeagueOrganizer ? "Yes" : "No"} | Notes: ${formData.reason}`,
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
    <div className="flex flex-col py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-accent/40 text-brand-accent text-xs font-bold tracking-widest uppercase mb-6">
          <Trophy className="w-4 h-4" />
          COMMUNITY & LEAGUE NOMINATIONS
        </div>

        <h1 className="text-4xl sm:text-6xl font-athletic text-brand-cream tracking-tight mb-3 font-black uppercase">
          Nominate a Team
        </h1>

        <p className="text-xl sm:text-2xl font-athletic text-brand-accent uppercase tracking-wider mb-4">
          Your best teams represent your league on a bigger stage.
        </p>

        <p className="text-sm sm:text-base text-brand-muted max-w-xl mx-auto mb-8 font-sans">
          Know a team that belongs in the Champions Cup? Send us their league, division, and standings link.
        </p>

        <ShareToCaptainButton />
      </div>

      {submitted ? (
        <div className="p-10 rounded-3xl bg-brand-surface border border-brand-accent/40 text-center max-w-xl mx-auto shadow-2xl">
          <div className="w-16 h-16 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-5 text-brand-accent">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-athletic text-brand-cream font-black mb-3">
            Nomination Received
          </h3>
          <p className="text-sm text-brand-muted leading-relaxed mb-6 font-sans">
            Thanks! The Veddie competition committee will verify their home league standings and follow up with the team captain within 2 business days.
          </p>

          <div className="pt-6 border-t border-brand-border space-y-4">
            <p className="text-xs text-brand-muted">
              Want the team’s captain to know they’ve been put forward?
            </p>
            <ShareToCaptainButton text={`Your team was nominated for the Veddie Champions Cup! Check out eligibility here:`} />
          </div>
        </div>
      ) : (
        <div className="p-8 sm:p-12 rounded-3xl bg-brand-surface border border-brand-border shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
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
                  className="w-full px-4 py-3 rounded-xl bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
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
                  placeholder="e.g. Halton Adult Hockey League"
                  className="w-full px-4 py-3 rounded-xl bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1.5">
                  Public Standings Link
                </label>
                <input
                  type="url"
                  value={formData.standingsLink}
                  onChange={(e) => setFormData({ ...formData, standingsLink: e.target.value })}
                  placeholder="https://yourleague.com/standings"
                  className="w-full px-4 py-3 rounded-xl bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1.5">
                  Division Level
                </label>
                <select
                  value={formData.divisionLevel}
                  onChange={(e) => setFormData({ ...formData, divisionLevel: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                >
                  <option value="D1 Elite">D1 Elite — Played junior, university or pro</option>
                  <option value="D2 Competitive">D2 Competitive — Played AAA or AA</option>
                  <option value="D3 Intermediate">D3 Intermediate — Strong rec or high school</option>
                  <option value="D4 Recreational">D4 Recreational — House league or adult-learned</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1.5">
                Captain or Contact Name
              </label>
              <input
                type="text"
                value={formData.captainName}
                onChange={(e) => setFormData({ ...formData, captainName: e.target.value })}
                placeholder="Team captain or primary contact"
                className="w-full px-4 py-3 rounded-xl bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1.5">
                Why should they be invited?
              </label>
              <textarea
                rows={3}
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                placeholder="Current standing, playoff record, team reputation..."
                className="w-full px-4 py-3 rounded-xl bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
              />
            </div>

            {/* League Organizer Checkbox (Nov 21 spec) */}
            <div className="p-4 rounded-xl bg-brand-card border border-brand-border flex items-center gap-3">
              <input
                type="checkbox"
                id="isOrganizer"
                checked={formData.isLeagueOrganizer}
                onChange={(e) => setFormData({ ...formData, isLeagueOrganizer: e.target.checked })}
                className="w-4 h-4 accent-brand-accent rounded"
              />
              <label htmlFor="isOrganizer" className="text-xs text-brand-cream font-medium cursor-pointer">
                I’m a league organizer / commissioner submitting our official qualifying team.
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-brand-border">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1.5">
                  Your Name <span className="text-brand-accent">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.nominatorName}
                  onChange={(e) => setFormData({ ...formData, nominatorName: e.target.value })}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-xl bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1.5">
                  Your Email <span className="text-brand-accent">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.nominatorEmail}
                  onChange={(e) => setFormData({ ...formData, nominatorEmail: e.target.value })}
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-xl bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                />
              </div>
            </div>

            <div className="pt-3">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-6 rounded-xl bg-brand-red text-brand-navy font-black uppercase tracking-wider text-xs hover:bg-brand-red-hover transition-all shadow-lg active:scale-95"
              >
                {loading ? "Recording Nomination..." : "Nominate Team"}
              </button>
              <p className="text-center text-xs text-brand-muted mt-3">
                A nomination does not qualify a team or reserve an entry. Standings verification applies. View our{" "}
                <Link href="/privacy" className="text-brand-accent hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

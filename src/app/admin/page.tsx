"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { TEAMS_DATA, calculateElo, TeamProfile } from "@/data/rankings";
import {
  Shield,
  Users,
  Trophy,
  Calculator,
  Download,
  CheckCircle2,
  AlertCircle,
  Plus,
  RefreshCw,
  Search,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<"leads" | "elo" | "proforma">("leads");

  // Leads State
  const [leads, setLeads] = useState<any[]>([]);
  const [leadFilter, setLeadFilter] = useState<string>("All");
  const [loadingLeads, setLoadingLeads] = useState(false);

  // Elo Match Entry State
  const [teams, setTeams] = useState<TeamProfile[]>(TEAMS_DATA);
  const [selectedTeamA, setSelectedTeamA] = useState<string>(teams[0]?.slug || "");
  const [selectedTeamB, setSelectedTeamB] = useState<string>(teams[1]?.slug || "");
  const [teamAScore, setTeamAScore] = useState<number>(4);
  const [teamBScore, setTeamBScore] = useState<number>(2);
  const [competition, setCompetition] = useState<"Champions Cup" | "Champions League">("Champions Cup");
  const [roundName, setRoundName] = useState<string>("Group Stage Match");
  const [scoreSuccess, setScoreSuccess] = useState<string | null>(null);

  // Pro Forma Calculator State (from Excel)
  const [pfTeams, setPfTeams] = useState<number>(8);
  const [pfEntryFee, setPfEntryFee] = useState<number>(1500);
  const [pfGuaranteedGames, setPfGuaranteedGames] = useState<number>(3);
  const [pfPlayoffGames, setPfPlayoffGames] = useState<number>(3);
  const [pfIceRate, setPfIceRate] = useState<number>(300);
  const [pfRefRate, setPfRefRate] = useState<number>(45); // 2 refs * 45 = 90/game
  const [pfScorekeeperRate, setPfScorekeeperRate] = useState<number>(25);
  const [pfStaffCost, setPfStaffCost] = useState<number>(400);
  const [pfMedical, setPfMedical] = useState<number>(500);
  const [pfInsurance, setPfInsurance] = useState<number>(400);
  const [pfAwards, setPfAwards] = useState<number>(400);
  const [pfMarketing, setPfMarketing] = useState<number>(300);
  const [pfOtherCosts, setPfOtherCosts] = useState<number>(250);
  const [pfMerchRevenue, setPfMerchRevenue] = useState<number>(1400);
  const [pfMerchCost, setPfMerchCost] = useState<number>(800);

  // Fetch leads
  const fetchLeads = async () => {
    setLoadingLeads(true);
    try {
      const res = await fetch("/api/leads");
      const data = await res.json();
      if (data.success) {
        setLeads(data.leads);
      }
    } catch (e) {
      console.error("Failed to load leads", e);
    } finally {
      setLoadingLeads(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  // Filter leads
  const filteredLeads =
    leadFilter === "All"
      ? leads
      : leads.filter((l) => l.type?.toLowerCase() === leadFilter.toLowerCase());

  // Export to CSV
  const exportToCSV = () => {
    if (leads.length === 0) return;
    const headers = ["ID", "Date", "Type", "Name", "Email", "City", "Age Category", "Skill Level", "Team Name", "Home League", "Position"];
    const rows = leads.map((l) => [
      l.id,
      l.createdAt,
      l.type,
      `"${l.name || ""}"`,
      `"${l.email || ""}"`,
      `"${l.city || ""}"`,
      `"${l.ageCategory || ""}"`,
      `"${l.skillLevel || ""}"`,
      `"${l.teamName || ""}"`,
      `"${l.homeLeague || ""}"`,
      `"${l.position || ""}"`,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `veddie_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Elo match submission
  const teamA = teams.find((t) => t.slug === selectedTeamA);
  const teamB = teams.find((t) => t.slug === selectedTeamB);

  let matchOutcomeA: "W" | "L" | "T" = "T";
  if (teamAScore > teamBScore) matchOutcomeA = "W";
  else if (teamAScore < teamBScore) matchOutcomeA = "L";

  const eloPreview =
    teamA && teamB
      ? calculateElo(teamA.rating, teamB.rating, matchOutcomeA)
      : null;

  const handleRecordMatch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!teamA || !teamB || !eloPreview) return;

    const outcomeB = matchOutcomeA === "W" ? "L" : matchOutcomeA === "L" ? "W" : "T";

    // Update Team A
    const updatedTeamA: TeamProfile = {
      ...teamA,
      rating: eloPreview.newRatingA,
      gamesPlayed: teamA.gamesPlayed + 1,
      record: {
        wins: teamA.record.wins + (matchOutcomeA === "W" ? 1 : 0),
        losses: teamA.record.losses + (matchOutcomeA === "L" ? 1 : 0),
        ties: teamA.record.ties + (matchOutcomeA === "T" ? 1 : 0),
      },
      lastPlayed: new Date().toISOString().slice(0, 10),
      matches: [
        {
          id: `m-${Date.now()}-a`,
          date: new Date().toISOString().slice(0, 10),
          competition,
          round: roundName,
          opponentName: teamB.name,
          opponentSlug: teamB.slug,
          score: `${teamAScore}–${teamBScore}`,
          outcome: matchOutcomeA,
          ratingChange: eloPreview.deltaA,
          verified: true,
        },
        ...teamA.matches,
      ],
    };

    // Update Team B
    const updatedTeamB: TeamProfile = {
      ...teamB,
      rating: eloPreview.newRatingB,
      gamesPlayed: teamB.gamesPlayed + 1,
      record: {
        wins: teamB.record.wins + (outcomeB === "W" ? 1 : 0),
        losses: teamB.record.losses + (outcomeB === "L" ? 1 : 0),
        ties: teamB.record.ties + (outcomeB === "T" ? 1 : 0),
      },
      lastPlayed: new Date().toISOString().slice(0, 10),
      matches: [
        {
          id: `m-${Date.now()}-b`,
          date: new Date().toISOString().slice(0, 10),
          competition,
          round: roundName,
          opponentName: teamA.name,
          opponentSlug: teamA.slug,
          score: `${teamBScore}–${teamAScore}`,
          outcome: outcomeB,
          ratingChange: eloPreview.deltaB,
          verified: true,
        },
        ...teamB.matches,
      ],
    };

    setTeams(
      teams.map((t) => {
        if (t.slug === updatedTeamA.slug) return updatedTeamA;
        if (t.slug === updatedTeamB.slug) return updatedTeamB;
        return t;
      })
    );

    setScoreSuccess(
      `Match verified and logged! ${teamA.name} is now ${eloPreview.newRatingA} (${eloPreview.deltaA >= 0 ? `+${eloPreview.deltaA}` : eloPreview.deltaA}), ${teamB.name} is now ${eloPreview.newRatingB} (${eloPreview.deltaB >= 0 ? `+${eloPreview.deltaB}` : eloPreview.deltaB}).`
    );
  };

  // Pro Forma Calculations (matching Excel sheet logic)
  const pfPoolGames = (pfTeams * pfGuaranteedGames) / 2;
  const pfTotalGames = pfPoolGames + pfPlayoffGames;
  const pfRequiredIceHours = pfTotalGames * 1.0; // 1 hr per game
  const pfIceCost = pfRequiredIceHours * pfIceRate;
  const pfRefCost = pfTotalGames * 2 * pfRefRate;
  const pfScorekeeperCost = pfTotalGames * pfScorekeeperRate;
  const pfDirectCostsPreProcessing =
    pfIceCost +
    pfRefCost +
    pfScorekeeperCost +
    pfStaffCost +
    pfMedical +
    pfInsurance +
    pfAwards +
    pfMarketing +
    pfOtherCosts +
    pfMerchCost;

  const pfEntryRevenue = pfTeams * pfEntryFee;
  const pfTotalRevenue = pfEntryRevenue + pfMerchRevenue;
  const pfPaymentProcessing = pfTotalRevenue * 0.025; // 2.5%
  const pfContingency = (pfDirectCostsPreProcessing) * 0.10; // 10%
  const pfTotalDirectCosts = pfDirectCostsPreProcessing + pfContingency + pfPaymentProcessing;
  const pfProfit = pfTotalRevenue - pfTotalDirectCosts;
  const pfMargin = pfTotalRevenue > 0 ? (pfProfit / pfTotalRevenue) * 100 : 0;

  // Break-even fee per team
  const pfCostsExclProcessing = pfDirectCostsPreProcessing + pfContingency;
  const pfNetRetainedRate = 1 - 0.025; // 97.5%
  const pfBreakEvenFee =
    (pfCostsExclProcessing - pfMerchRevenue) / (pfTeams * pfNetRetainedRate);

  return (
    <div className="flex flex-col py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-brand-border mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent text-xs font-bold tracking-widest uppercase mb-3">
            <Shield className="w-3.5 h-3.5" />
            ORGANIZER WORKSPACE
          </div>
          <h1 className="text-3xl sm:text-4xl font-athletic text-brand-cream tracking-tight font-black">
            Veddie Operations & Tournament Desk
          </h1>
          <p className="text-sm text-brand-muted mt-1">
            Manage inquiries, record verified match results, and simulate tournament pro-forma finances.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 bg-brand-surface p-1.5 rounded-xl border border-brand-border self-start">
          <button
            onClick={() => setActiveTab("leads")}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
              activeTab === "leads"
                ? "bg-brand-accent text-brand-navy font-bold shadow-md"
                : "text-brand-muted hover:text-brand-cream"
            }`}
          >
            <Users className="w-4 h-4" />
            Leads & Inquiries ({leads.length})
          </button>
          <button
            onClick={() => setActiveTab("elo")}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
              activeTab === "elo"
                ? "bg-brand-accent text-brand-navy font-bold shadow-md"
                : "text-brand-muted hover:text-brand-cream"
            }`}
          >
            <Trophy className="w-4 h-4" />
            Verified Scores & Elo
          </button>
          <button
            onClick={() => setActiveTab("proforma")}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
              activeTab === "proforma"
                ? "bg-brand-accent text-brand-navy font-bold shadow-md"
                : "text-brand-muted hover:text-brand-cream"
            }`}
          >
            <Calculator className="w-4 h-4" />
            Pro Forma Simulator
          </button>
        </div>
      </div>

      {/* TAB 1: LEADS & INQUIRIES */}
      {activeTab === "leads" && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {["All", "cup", "champions-league", "tournaments", "leagues", "pickup", "partners", "contact"].map((t) => (
                <button
                  key={t}
                  onClick={() => setLeadFilter(t)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                    leadFilter === t
                      ? "bg-brand-accent text-brand-navy font-bold"
                      : "bg-brand-surface text-brand-muted hover:text-brand-cream border border-brand-border"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={fetchLeads}
                className="p-2.5 rounded-lg bg-brand-surface border border-brand-border text-brand-muted hover:text-brand-cream transition-colors"
                title="Refresh leads"
              >
                <RefreshCw className={`w-4 h-4 ${loadingLeads ? "animate-spin" : ""}`} />
              </button>
              <button
                onClick={exportToCSV}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-card border border-brand-border hover:border-brand-accent text-brand-cream text-xs font-bold uppercase tracking-wider transition-all"
              >
                <Download className="w-4 h-4 text-brand-accent" />
                Export CSV
              </button>
            </div>
          </div>

          <div className="bg-brand-surface border border-brand-border rounded-2xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-brand-border text-[11px] font-bold uppercase tracking-wider text-brand-muted bg-brand-card/70">
                    <th className="py-3.5 px-6">Timestamp</th>
                    <th className="py-3.5 px-4">Program</th>
                    <th className="py-3.5 px-6">Name & Email</th>
                    <th className="py-3.5 px-4">City / Area</th>
                    <th className="py-3.5 px-6">Team / Role</th>
                    <th className="py-3.5 px-4">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-border/40">
                  {filteredLeads.length > 0 ? (
                    filteredLeads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-brand-card/50 transition-colors">
                        <td className="py-4 px-6 text-xs text-brand-muted font-mono whitespace-nowrap">
                          {lead.createdAt ? new Date(lead.createdAt).toLocaleString() : "Recent"}
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-card border border-brand-border text-brand-accent">
                            {lead.type}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="font-bold text-brand-cream">{lead.name}</div>
                          <div className="text-xs text-brand-muted">{lead.email}</div>
                        </td>
                        <td className="py-4 px-4 text-xs text-brand-cream">
                          {lead.city || "—"}
                        </td>
                        <td className="py-4 px-6 text-xs text-brand-muted">
                          {lead.teamName && (
                            <div className="font-semibold text-brand-cream">{lead.teamName}</div>
                          )}
                          <div>{lead.homeLeague || lead.position || lead.partnerType || "—"}</div>
                        </td>
                        <td className="py-4 px-4 text-xs text-brand-muted max-w-xs truncate">
                          {lead.playingBackground || lead.message || lead.exploreMessage || lead.anythingElse || "—"}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="py-12 text-center text-brand-muted text-sm">
                        No submissions recorded for this filter yet. Submit a test form on the public site to see it populate live.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: VERIFIED MATCH SCORE ENTRY & ELO ENGINE */}
      {activeTab === "elo" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-brand-surface border border-brand-border rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-athletic text-brand-cream tracking-tight mb-2">
              Verified Score Entry & Elo Recalculation
            </h2>
            <p className="text-xs text-brand-muted mb-6">
              Official scores entered here trigger deterministic rating updates using the verified $K=32$ Elo formula.
            </p>

            {scoreSuccess && (
              <div className="mb-6 p-4 rounded-xl bg-brand-green/10 border border-brand-green/30 flex items-start gap-3 text-brand-green text-xs">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>{scoreSuccess}</span>
              </div>
            )}

            <form onSubmit={handleRecordMatch} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1.5">
                    Competition
                  </label>
                  <select
                    value={competition}
                    onChange={(e: any) => setCompetition(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                  >
                    <option value="Champions Cup">Champions Cup</option>
                    <option value="Champions League">Champions League</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-cream mb-1.5">
                    Round / Match Description
                  </label>
                  <input
                    type="text"
                    value={roundName}
                    onChange={(e) => setRoundName(e.target.value)}
                    required
                    placeholder="e.g. Group A Game 1"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-brand-card border border-brand-border text-brand-cream text-sm focus:outline-none focus:border-brand-accent"
                  />
                </div>
              </div>

              {/* Matchups */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-xl bg-brand-card border border-brand-border">
                {/* Team A */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-accent mb-2">
                    Team A
                  </label>
                  <select
                    value={selectedTeamA}
                    onChange={(e) => setSelectedTeamA(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-brand-surface border border-brand-border text-brand-cream text-sm mb-3"
                  >
                    {teams.map((t) => (
                      <option key={t.slug} value={t.slug}>
                        {t.name} ({t.rating} Elo • {t.division})
                      </option>
                    ))}
                  </select>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-brand-muted">Final Goals:</span>
                    <input
                      type="number"
                      min="0"
                      max="30"
                      value={teamAScore}
                      onChange={(e) => setTeamAScore(Number(e.target.value))}
                      className="w-20 px-3 py-1.5 rounded-lg bg-brand-surface border border-brand-border text-brand-cream font-mono font-bold text-center"
                    />
                  </div>
                </div>

                {/* Team B */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-muted mb-2">
                    Team B
                  </label>
                  <select
                    value={selectedTeamB}
                    onChange={(e) => setSelectedTeamB(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-brand-surface border border-brand-border text-brand-cream text-sm mb-3"
                  >
                    {teams.map((t) => (
                      <option key={t.slug} value={t.slug} disabled={t.slug === selectedTeamA}>
                        {t.name} ({t.rating} Elo • {t.division})
                      </option>
                    ))}
                  </select>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-brand-muted">Final Goals:</span>
                    <input
                      type="number"
                      min="0"
                      max="30"
                      value={teamBScore}
                      onChange={(e) => setTeamBScore(Number(e.target.value))}
                      className="w-20 px-3 py-1.5 rounded-lg bg-brand-surface border border-brand-border text-brand-cream font-mono font-bold text-center"
                    />
                  </div>
                </div>
              </div>

              {/* Live Preview */}
              {eloPreview && teamA && teamB && (
                <div className="p-4 rounded-xl bg-brand-navy border border-brand-border flex items-center justify-between text-xs">
                  <div>
                    <span className="text-brand-muted block">Projected Rating Impact:</span>
                    <span className="text-brand-cream font-bold">
                      {teamA.name}: {teamA.rating} &rarr;{" "}
                      <strong className="text-brand-accent">{eloPreview.newRatingA}</strong> (
                      {eloPreview.deltaA >= 0 ? `+${eloPreview.deltaA}` : eloPreview.deltaA})
                    </span>
                  </div>
                  <div>
                    <span className="text-brand-cream font-bold">
                      {teamB.name}: {teamB.rating} &rarr;{" "}
                      <strong className="text-brand-accent">{eloPreview.newRatingB}</strong> (
                      {eloPreview.deltaB >= 0 ? `+${eloPreview.deltaB}` : eloPreview.deltaB})
                    </span>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-lg bg-brand-accent text-brand-navy font-bold font-bold uppercase tracking-wider text-sm hover:bg-brand-accent-hover transition-all shadow-lg"
              >
                Log Official Result & Update Elo Ratings
              </button>
            </form>
          </div>

          {/* Quick Standings Summary */}
          <div className="bg-brand-surface border border-brand-border rounded-2xl p-6">
            <h3 className="text-base font-athletic text-brand-cream tracking-tight mb-4 flex items-center justify-between">
              <span>Active Division Field</span>
              <span className="text-xs font-mono text-brand-accent">{teams.length} Teams</span>
            </h3>

            <div className="space-y-3">
              {[...teams]
                .sort((a, b) => b.rating - a.rating)
                .map((t, idx) => (
                  <div
                    key={t.slug}
                    className="p-3 rounded-lg bg-brand-card border border-brand-border flex items-center justify-between text-xs"
                  >
                    <div>
                      <div className="font-bold text-brand-cream">
                        #{idx + 1} {t.name}
                      </div>
                      <div className="text-[11px] text-brand-muted">
                        {t.division} • {t.record.wins}-{t.record.losses}-{t.record.ties}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-athletic font-bold text-brand-accent text-base">
                        {t.rating}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: PRO FORMA FINANCIAL SIMULATOR */}
      {activeTab === "proforma" && (
        <div className="space-y-8">
          <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-athletic text-brand-cream tracking-tight">
                  Tournament Pro Forma & Break-Even Modeling
                </h2>
                <p className="text-xs text-brand-muted mt-1">
                  Accurate financial modeling directly implementing formulas from the organizer pro forma spreadsheet.
                </p>
              </div>

              {/* Quick Presets */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setPfTeams(8);
                    setPfPlayoffGames(3);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider ${
                    pfTeams === 8
                      ? "bg-brand-accent text-brand-navy font-bold"
                      : "bg-brand-card border border-brand-border text-brand-muted"
                  }`}
                >
                  8-Team Preset
                </button>
                <button
                  onClick={() => {
                    setPfTeams(40);
                    setPfPlayoffGames(15);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider ${
                    pfTeams === 40
                      ? "bg-brand-accent text-brand-navy font-bold"
                      : "bg-brand-card border border-brand-border text-brand-muted"
                  }`}
                >
                  40-Team Preset (Kitchener)
                </button>
              </div>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-brand-card border border-brand-border">
                <label className="text-[11px] font-bold uppercase tracking-wider text-brand-muted block mb-1">
                  Team Count
                </label>
                <input
                  type="number"
                  min="4"
                  max="64"
                  value={pfTeams}
                  onChange={(e) => setPfTeams(Number(e.target.value))}
                  className="w-full px-3 py-1.5 rounded bg-brand-surface border border-brand-border text-brand-cream font-mono font-bold"
                />
              </div>

              <div className="p-4 rounded-xl bg-brand-card border border-brand-border">
                <label className="text-[11px] font-bold uppercase tracking-wider text-brand-muted block mb-1">
                  Team Entry Fee ($)
                </label>
                <input
                  type="number"
                  min="0"
                  max="3000"
                  step="50"
                  value={pfEntryFee}
                  onChange={(e) => setPfEntryFee(Number(e.target.value))}
                  className="w-full px-3 py-1.5 rounded bg-brand-surface border border-brand-border text-brand-cream font-mono font-bold"
                />
              </div>

              <div className="p-4 rounded-xl bg-brand-card border border-brand-border">
                <label className="text-[11px] font-bold uppercase tracking-wider text-brand-muted block mb-1">
                  Ice Rental Rate ($/hr)
                </label>
                <input
                  type="number"
                  min="150"
                  max="600"
                  step="25"
                  value={pfIceRate}
                  onChange={(e) => setPfIceRate(Number(e.target.value))}
                  className="w-full px-3 py-1.5 rounded bg-brand-surface border border-brand-border text-brand-cream font-mono font-bold"
                />
              </div>

              <div className="p-4 rounded-xl bg-brand-card border border-brand-border">
                <label className="text-[11px] font-bold uppercase tracking-wider text-brand-muted block mb-1">
                  Referee Pay ($/ref/game)
                </label>
                <input
                  type="number"
                  min="30"
                  max="80"
                  value={pfRefRate}
                  onChange={(e) => setPfRefRate(Number(e.target.value))}
                  className="w-full px-3 py-1.5 rounded bg-brand-surface border border-brand-border text-brand-cream font-mono font-bold"
                />
              </div>
            </div>

            {/* Results KPI Dashboard */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="p-5 rounded-xl bg-brand-card border border-brand-border text-center">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-muted block mb-1">
                  Total Games & Ice Hours
                </span>
                <span className="text-3xl font-athletic text-brand-cream font-bold block">
                  {pfTotalGames} games
                </span>
                <span className="text-xs text-brand-muted">
                  {pfRequiredIceHours} ice hours needed
                </span>
              </div>

              <div className="p-5 rounded-xl bg-brand-card border border-brand-border text-center">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-muted block mb-1">
                  Gross Event Revenue
                </span>
                <span className="text-3xl font-athletic text-brand-cream font-bold block">
                  ${pfTotalRevenue.toLocaleString()}
                </span>
                <span className="text-xs text-brand-muted">
                  ${(pfTotalRevenue / (pfTeams || 1)).toFixed(0)} / team
                </span>
              </div>

              <div className="p-5 rounded-xl bg-brand-card border border-brand-border text-center">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-muted block mb-1">
                  Organizer Profit
                </span>
                <span
                  className={`text-3xl font-athletic font-bold block ${
                    pfProfit >= 0 ? "text-brand-green" : "text-brand-red"
                  }`}
                >
                  ${pfProfit.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </span>
                <span className="text-xs text-brand-muted">
                  Margin: {pfMargin.toFixed(1)}%
                </span>
              </div>

              <div className="p-5 rounded-xl bg-brand-card border border-brand-accent/40 text-center bg-brand-accent/5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-accent block mb-1">
                  Break-Even Fee / Team
                </span>
                <span className="text-3xl font-athletic text-brand-accent font-bold block">
                  ${pfBreakEvenFee.toFixed(0)}
                </span>
                <span className="text-xs text-brand-muted">
                  Covers ice, refs, 10% contingency
                </span>
              </div>
            </div>

            {/* Cost Breakdown Table */}
            <div className="bg-brand-navy p-5 rounded-xl border border-brand-border">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-muted mb-3">
                Cost Structure Summary
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="text-brand-muted block">Ice Rental:</span>
                  <strong className="text-brand-cream">${pfIceCost.toLocaleString()}</strong>
                </div>
                <div>
                  <span className="text-brand-muted block">Referees (2/game):</span>
                  <strong className="text-brand-cream">${pfRefCost.toLocaleString()}</strong>
                </div>
                <div>
                  <span className="text-brand-muted block">Scorekeepers:</span>
                  <strong className="text-brand-cream">${pfScorekeeperCost.toLocaleString()}</strong>
                </div>
                <div>
                  <span className="text-brand-muted block">Contingency (10%):</span>
                  <strong className="text-brand-cream">${pfContingency.toFixed(0)}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

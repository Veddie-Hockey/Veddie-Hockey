/**
 * Plaionn Sports Group Data Integration Service
 * Connects Veddie Hockey to Plaionn league databases and Supabase instances
 */

export interface PlaionnStandingItem {
  rank: number;
  teamId: string;
  teamName: string;
  teamSlug: string;
  gamesPlayed: number;
  wins: number;
  losses: number;
  ties: number;
  overtimeLosses?: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  qualificationStatus: "Inside the line" | "Verified qualifier" | "Accepted invitation" | null;
}

export interface PlaionnDivision {
  seasonId: string;
  seasonName: string;
  divisionId: string;
  divisionName: string;
  totalTeams: number;
  qualifierQuota: number;
  standings: PlaionnStandingItem[];
}

export interface PlaionnLeague {
  leagueId: string;
  leagueName: string;
  source: string;
  divisions: PlaionnDivision[];
}

export interface PlaionnCrossRanking {
  rank: number;
  teamId: string;
  teamName: string;
  teamSlug: string;
  leagueId: string;
  leagueName: string;
  skillTier: string;
  ratingScore: number;
  gamesPlayed: number;
  goalDifferential: number;
}

export interface PlaionnSyncPayload {
  success: boolean;
  provider: string;
  syncedAt: string;
  leagues: PlaionnLeague[];
  crossLeagueRankings: PlaionnCrossRanking[];
}

/**
 * Fetch verified league standings and power rankings from Plaionn
 */
export async function fetchPlaionnData(): Promise<PlaionnSyncPayload | null> {
  const apiUrl = process.env.PLAIONN_API_URL;
  const apiKey = process.env.PLAIONN_API_KEY;
  const supabaseUrl = process.env.PLAIONN_SUPABASE_URL;
  const supabaseKey = process.env.PLAIONN_SUPABASE_ANON_KEY;

  // 1. Try Plaionn API route if configured
  if (apiUrl) {
    try {
      const endpoint = `${apiUrl.replace(/\/$/, "")}/api/v1/veddie`;
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };
      if (apiKey) {
        headers["Authorization"] = `Bearer ${apiKey}`;
        headers["x-veddie-api-key"] = apiKey;
      }

      const res = await fetch(endpoint, {
        method: "GET",
        headers,
        next: { revalidate: 3600 }, // Cache for 1 hour in Next.js
      });

      if (res.ok) {
        const data: PlaionnSyncPayload = await res.json();
        return data;
      } else {
        console.warn(`[Plaionn Service] API returned status ${res.status}`);
      }
    } catch (err) {
      console.error("[Plaionn Service] Failed to fetch from Plaionn API:", err);
    }
  }

  // 2. Direct Supabase REST RPC fallback if Supabase credentials provided
  if (supabaseUrl && supabaseKey) {
    try {
      const base = supabaseUrl.replace(/\/$/, "");
      const rpcEndpoint = `${base}/rest/v1/rpc/get_network_cross_league_rankings`;

      const res = await fetch(rpcEndpoint, {
        method: "POST",
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });

      if (res.ok) {
        const rawRankings = await res.json();
        return {
          success: true,
          provider: "Plaionn Supabase Direct",
          syncedAt: new Date().toISOString(),
          leagues: [],
          crossLeagueRankings: Array.isArray(rawRankings)
            ? rawRankings.map((r: any) => ({
                rank: Number(r.network_rank || 1),
                teamId: r.team_id,
                teamName: r.team_name,
                teamSlug: r.team_name
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/^-|-$/g, ""),
                leagueId: r.league_id,
                leagueName: r.league_name,
                skillTier: r.skill_tier || "A",
                ratingScore: Number(r.rating_score || 1000),
                gamesPlayed: Number(r.games_played || 0),
                goalDifferential: Number(r.goal_differential || 0),
              }))
            : [],
        };
      }
    } catch (err) {
      console.error("[Plaionn Service] Failed to query Plaionn Supabase:", err);
    }
  }

  return null;
}

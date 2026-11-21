import { NextRequest, NextResponse } from "next/server";
import { fetchPlaionnData } from "@/lib/plaionn";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const data = await fetchPlaionnData();

    if (!data) {
      return NextResponse.json(
        {
          configured: Boolean(process.env.PLAIONN_API_URL || process.env.PLAIONN_SUPABASE_URL),
          status: "disconnected",
          message:
            "Plaionn API URL or Supabase credentials are not configured or unreachable. Add PLAIONN_API_URL to .env.",
        },
        { status: 200 }
      );
    }

    return NextResponse.json({
      configured: true,
      status: "connected",
      data,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to query Plaionn integration", details: error?.message },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await fetchPlaionnData();

    if (!data) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Could not connect to Plaionn. Ensure PLAIONN_API_URL is set and Plaionn is deployed.",
        },
        { status: 400 }
      );
    }

    // Count totals
    let totalTeams = 0;
    let totalQualifiers = 0;

    for (const l of data.leagues) {
      for (const d of l.divisions) {
        totalTeams += d.totalTeams;
        totalQualifiers += d.standings.filter(
          (s) => s.qualificationStatus === "Inside the line" || s.qualificationStatus === "Verified qualifier"
        ).length;
      }
    }

    return NextResponse.json({
      success: true,
      message: `Successfully synced from Plaionn: ${data.leagues.length} leagues, ${totalTeams} teams, ${totalQualifiers} qualifiers.`,
      syncedAt: data.syncedAt,
      stats: {
        leaguesCount: data.leagues.length,
        teamsCount: totalTeams,
        qualifiersCount: totalQualifiers,
        crossRankingsCount: data.crossLeagueRankings.length,
      },
      data,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: "Sync failed", details: error?.message },
      { status: 500 }
    );
  }
}

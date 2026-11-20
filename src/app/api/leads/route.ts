import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { sendLeadToGHL } from "@/lib/ghl";

const leadsFilePath = path.join(process.cwd(), "src", "data", "leads.json");
const tmpLeadsFilePath = path.join("/tmp", "leads.json");

// In-memory fallback for serverless environments
let memoryLeads: any[] = [];

function getStoredLeads(): any[] {
  try {
    if (fs.existsSync(leadsFilePath)) {
      const data = fs.readFileSync(leadsFilePath, "utf-8");
      return JSON.parse(data);
    }
  } catch (err) {
    // Ignore and fallback
  }

  try {
    if (fs.existsSync(tmpLeadsFilePath)) {
      const data = fs.readFileSync(tmpLeadsFilePath, "utf-8");
      return JSON.parse(data);
    }
  } catch (err) {
    // Ignore and fallback
  }

  return memoryLeads;
}

function saveLeads(leads: any[]) {
  memoryLeads = leads;

  // Try local repo write (works in local dev)
  try {
    fs.writeFileSync(leadsFilePath, JSON.stringify(leads, null, 2), "utf-8");
  } catch (err) {
    // Try /tmp write (works in Vercel serverless)
    try {
      fs.writeFileSync(tmpLeadsFilePath, JSON.stringify(leads, null, 2), "utf-8");
    } catch (e2) {
      // Memory fallback is already set
    }
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");

  const leads = getStoredLeads();

  if (type) {
    const filtered = leads.filter((lead: any) => lead.type === type);
    return NextResponse.json({ success: true, count: filtered.length, leads: filtered });
  }

  return NextResponse.json({ success: true, count: leads.length, leads });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.email && !body.name) {
      return NextResponse.json(
        { success: false, error: "Name or email is required." },
        { status: 400 }
      );
    }

    const newLead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      createdAt: new Date().toISOString(),
      status: "New",
      ...body,
    };

    const currentLeads = getStoredLeads();
    currentLeads.unshift(newLead);
    saveLeads(currentLeads);

    // Sync lead to GoHighLevel (GHL) - awaited so serverless Lambdas (Vercel) don't cut off requests
    try {
      await sendLeadToGHL(newLead);
    } catch (err) {
      console.error("[GHL] Sync error:", err);
    }

    return NextResponse.json({
      success: true,
      message: "Lead recorded successfully",
      leadId: newLead.id,
    });
  } catch (error) {
    console.error("Error processing lead submission:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

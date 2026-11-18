import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const leadsFilePath = path.join(process.cwd(), "src", "data", "leads.json");

function getStoredLeads() {
  try {
    if (!fs.existsSync(leadsFilePath)) {
      fs.writeFileSync(leadsFilePath, JSON.stringify([]), "utf-8");
      return [];
    }
    const data = fs.readFileSync(leadsFilePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading leads file:", err);
    return [];
  }
}

function saveLeads(leads: any[]) {
  try {
    fs.writeFileSync(leadsFilePath, JSON.stringify(leads, null, 2), "utf-8");
  } catch (err) {
    console.error("Error saving leads file:", err);
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

    if (!body.email || !body.name) {
      return NextResponse.json(
        { success: false, error: "Name and email are required." },
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

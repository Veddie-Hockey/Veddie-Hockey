/**
 * GoHighLevel (GHL) API v2 Integration Helper
 * 
 * Synchronizes incoming web leads to GoHighLevel Contacts.
 */

interface LeadPayload {
  id?: string;
  type?: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  teamName?: string;
  homeLeague?: string;
  divisionPreference?: string;
  preferredDivision?: string;
  preferredNight?: string;
  ageCategory?: string;
  topic?: string;
  message?: string;
  source?: string;
  [key: string]: any;
}

export async function sendLeadToGHL(lead: LeadPayload) {
  const accessToken = process.env.GHL_ACCESS_TOKEN;
  const locationId = process.env.GHL_LOCATION_ID;

  if (!accessToken || !locationId) {
    console.log(
      "[GHL] Skipped sync: GHL_ACCESS_TOKEN or GHL_LOCATION_ID not set in .env."
    );
    return { success: false, reason: "Missing credentials" };
  }

  // Parse name into first and last name if needed
  let firstName = lead.firstName || "";
  let lastName = lead.lastName || "";

  if (!firstName && lead.name) {
    const parts = lead.name.trim().split(/\s+/);
    firstName = parts[0] || "";
    lastName = parts.slice(1).join(" ") || "";
  }

  // Generate tags based on lead type and program
  const tags: string[] = ["veddie-hockey", "website-lead"];
  if (lead.type) {
    tags.push(`program-${lead.type}`);
  }
  if (lead.divisionPreference) {
    tags.push(`div-${lead.divisionPreference.toLowerCase().replace(/\s+/g, "-")}`);
  }
  if (lead.ageCategory) {
    tags.push(`age-${lead.ageCategory.toLowerCase().replace(/\s+/g, "-")}`);
  }

  // Build notes summary from extra form fields
  const detailLines: string[] = [];
  if (lead.topic) detailLines.push(`Topic: ${lead.topic}`);
  if (lead.type) detailLines.push(`Program / Form Type: ${lead.type}`);
  if (lead.city) detailLines.push(`City / Region: ${lead.city}`);
  if (lead.teamName) detailLines.push(`Team Name: ${lead.teamName}`);
  if (lead.homeLeague) detailLines.push(`Home League: ${lead.homeLeague}`);
  if (lead.homeDivision) detailLines.push(`Home Division: ${lead.homeDivision}`);
  if (lead.divisionPreference || lead.preferredDivision || lead.skillLevel) {
    detailLines.push(`Division / Level: ${lead.divisionPreference || lead.preferredDivision || lead.skillLevel}`);
  }
  if (lead.ageCategory) detailLines.push(`Age Category: ${lead.ageCategory}`);
  if (lead.currentStanding) detailLines.push(`Current Standing: ${lead.currentStanding}`);
  if (lead.standingsLink) detailLines.push(`Standings Link: ${lead.standingsLink}`);
  if (lead.seasonEndDate) detailLines.push(`Season End: ${lead.seasonEndDate}`);
  if (lead.enquiryType) detailLines.push(`Enquiry Type: ${lead.enquiryType}`);
  if (lead.position) detailLines.push(`Position: ${lead.position}`);
  if (lead.preferredNights || lead.preferredNight) {
    detailLines.push(`Preferred Night(s): ${lead.preferredNights || lead.preferredNight}`);
  }
  if (lead.preferredTimeRange) detailLines.push(`Preferred Time: ${lead.preferredTimeRange}`);
  if (lead.playingBackground) detailLines.push(`Playing Background: ${lead.playingBackground}`);
  if (lead.organization) detailLines.push(`Organization: ${lead.organization}`);
  if (lead.partnerType) detailLines.push(`Partner Type: ${lead.partnerType}`);
  if (lead.exploreMessage) detailLines.push(`Partner Notes: ${lead.exploreMessage}`);
  if (lead.message) detailLines.push(`Message:\n${lead.message}`);
  if (lead.anythingElse) detailLines.push(`Additional Notes:\n${lead.anythingElse}`);

  const contactData = {
    locationId,
    email: lead.email,
    phone: lead.phone || undefined,
    firstName: firstName || undefined,
    lastName: lastName || undefined,
    name: lead.name || (firstName ? `${firstName} ${lastName}`.trim() : undefined),
    tags,
    source: "Veddie Hockey Website",
  };

  try {
    // 1. Upsert Contact in GHL (HighLevel API v2)
    const res = await fetch("https://services.leadconnectorhq.com/contacts/upsert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
        Version: "2021-07-28",
      },
      body: JSON.stringify(contactData),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("[GHL] Upsert contact failed:", res.status, errText);
      return { success: false, error: errText };
    }

    const resJson = await res.json();
    const contactId = resJson.contact?.id;

    // 2. Attach detailed notes to contact if contact was created/found
    if (contactId && detailLines.length > 0) {
      try {
        await fetch(`https://services.leadconnectorhq.com/contacts/${contactId}/notes`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
            Version: "2021-07-28",
          },
          body: JSON.stringify({
            body: detailLines.join("\n"),
          }),
        });
      } catch (noteErr) {
        console.error("[GHL] Error attaching note to contact:", noteErr);
      }
    }

    return { success: true, contactId };
  } catch (err: any) {
    console.error("[GHL] Network/Request exception:", err?.message || err);
    return { success: false, error: err?.message };
  }
}

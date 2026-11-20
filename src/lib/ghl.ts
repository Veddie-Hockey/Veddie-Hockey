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
  if (lead.type) detailLines.push(`Program / Form Type: ${lead.type}`);
  if (lead.teamName) detailLines.push(`Team Name: ${lead.teamName}`);
  if (lead.homeLeague) detailLines.push(`Home League: ${lead.homeLeague}`);
  if (lead.divisionPreference || lead.preferredDivision) {
    detailLines.push(`Division: ${lead.divisionPreference || lead.preferredDivision}`);
  }
  if (lead.preferredNight) detailLines.push(`Preferred Night: ${lead.preferredNight}`);
  if (lead.ageCategory) detailLines.push(`Age Category: ${lead.ageCategory}`);
  if (lead.topic) detailLines.push(`Topic: ${lead.topic}`);
  if (lead.message) detailLines.push(`Message:\n${lead.message}`);

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

export interface MatchResult {
  id: string;
  date: string;
  competition: "Champions Cup" | "Champions League";
  round: string;
  opponentName: string;
  opponentSlug: string;
  score: string;
  outcome: "W" | "L" | "T";
  ratingChange: number;
  verified: boolean;
}

export interface TeamProfile {
  slug: string;
  aliases?: string[];
  name: string;
  homeLeague: string;
  division: "D1" | "D2" | "D3" | "D4";
  ageCategory: "Open 18+" | "40+" | "50+" | "60+";
  region: string;
  rating?: number;
  gamesPlayed: number;
  record?: { wins: number; losses: number; ties: number };
  movement?: number | "NEW";
  lastPlayed?: string;
  provisional?: boolean;
  honours: string[];
  bio: string;
  matches: MatchResult[];
}

export const TEAMS_DATA: TeamProfile[] = [
  {
    slug: "toronto-brass-anchors",
    name: "Toronto Brass Anchors",
    homeLeague: "Metro North Senior Hockey",
    division: "D1",
    ageCategory: "Open 18+",
    region: "GTA",
    gamesPlayed: 0,
    honours: ["Metro North A-Division Champions (Source: League Playoff Audit)"],
    bio: "Seasoned chemistry with fast-transition play and disciplined puck possession.",
    matches: [],
  },
  {
    slug: "oakville-steelheads",
    name: "Oakville Steelheads",
    homeLeague: "Halton Adult Hockey League",
    division: "D1",
    ageCategory: "Open 18+",
    region: "GTA",
    gamesPlayed: 0,
    honours: ["Halton Cup Runner-Up (Source: Home League Records)"],
    bio: "Puck-possession squad with strong defensive zone organization and mobile blueline play.",
    matches: [],
  },
  {
    slug: "kitchener-dutchmen-masters",
    aliases: ["kitchener-dutchmen-rec"],
    name: "Kitchener Dutchmen Masters",
    homeLeague: "Grand River Men's League",
    division: "D2",
    ageCategory: "40+",
    region: "Kitchener-Waterloo",
    gamesPlayed: 0,
    honours: ["Grand River Masters Champions (Source: Grand River Standings)"],
    bio: "Experienced core with exceptional passing, positional discipline, and structured penalty kill.",
    matches: [],
  },
  {
    slug: "mississauga-blades",
    name: "Mississauga Blades",
    homeLeague: "Peel Regional Men's League",
    division: "D1",
    ageCategory: "Open 18+",
    region: "GTA",
    gamesPlayed: 0,
    honours: ["Peel Division 1 Playoff Champion (Source: Peel Regional Records)"],
    bio: "Speed-driven counterattack team with heavy forecheck pressure.",
    matches: [],
  },
  {
    slug: "burlington-silver-bucks",
    name: "Burlington Silver Bucks",
    homeLeague: "Lakeshore Senior Circuit",
    division: "D2",
    ageCategory: "40+",
    region: "GTA",
    gamesPlayed: 0,
    honours: ["Lakeshore 40+ Finalist (Source: Lakeshore League Office)"],
    bio: "Positional veterans with dependable defensive structure and veteran instincts.",
    matches: [],
  },
  {
    slug: "hamilton-steel-town-vets",
    name: "Hamilton Steel Town Vets",
    homeLeague: "Golden Horseshoe Hockey Circuit",
    division: "D3",
    ageCategory: "50+",
    region: "Hamilton / Niagara",
    gamesPlayed: 0,
    honours: ["Golden Horseshoe 50+ Cup Winner (Source: GHHC Records)"],
    bio: "Longstanding hockey community club with great locker room presence.",
    matches: [],
  },
  {
    slug: "guelph-gryphons-rec",
    aliases: ["guelph-gryphon-alumni-rec"],
    name: "Guelph Gryphons Rec",
    homeLeague: "Royal City Adult League",
    division: "D2",
    ageCategory: "Open 18+",
    region: "Kitchener-Waterloo",
    gamesPlayed: 0,
    honours: ["Royal City Winter Cup Participant (Source: Royal City Records)"],
    bio: "College alumni recreational squad preparing for April tournament play.",
    matches: [],
  },
  {
    slug: "forest-city-rusty-blades",
    aliases: ["london-knights-recreational"],
    name: "Forest City Rusty Blades",
    homeLeague: "Western Ontario Hockey Alliance",
    division: "D3",
    ageCategory: "40+",
    region: "London / Southwest",
    gamesPlayed: 0,
    honours: ["Western Ontario Division 3 Finalist (Source: WOHA Audit)"],
    bio: "Competitive recreational group that leaves everything on the ice every Friday night.",
    matches: [],
  },
  {
    slug: "markham-vintage-pucks",
    name: "Markham Vintage Pucks",
    homeLeague: "York Region Senior League",
    division: "D4",
    ageCategory: "60+",
    region: "GTA",
    gamesPlayed: 0,
    honours: ["York Senior Sportsmanship Recognition (Source: YRSL Audit)"],
    bio: "60+ veterans still playing passionate hockey 3 days a week.",
    matches: [],
  },
  {
    slug: "durham-rusty-sticks",
    aliases: ["durham-crushers-d4"],
    name: "Durham Rusty Sticks",
    homeLeague: "Lakeridge Adult Circuit",
    division: "D4",
    ageCategory: "Open 18+",
    region: "GTA",
    gamesPlayed: 0,
    honours: ["Lakeridge Division 4 Participant (Source: Lakeridge Standings)"],
    bio: "Adult recreational players having fun competing the right way.",
    matches: [],
  },
];

export function findTeamBySlug(slug: string): TeamProfile | undefined {
  return TEAMS_DATA.find((t) => t.slug === slug || t.aliases?.includes(slug));
}

export function calculateElo(teamA: number, teamB: number, outcomeA: "W" | "L" | "T", kFactor = 32) {
  const expectedA = 1 / (1 + Math.pow(10, (teamB - teamA) / 400));
  const expectedB = 1 - expectedA;

  let actualA = 0;
  if (outcomeA === "W") actualA = 1.0;
  else if (outcomeA === "T") actualA = 0.5;

  const deltaA = Math.round(kFactor * (actualA - expectedA));
  const deltaB = -deltaA;

  return {
    newRatingA: teamA + deltaA,
    newRatingB: teamB + deltaB,
    deltaA,
    deltaB,
    expectedA,
    expectedB,
  };
}

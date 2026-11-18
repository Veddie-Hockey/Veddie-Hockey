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
  name: string;
  homeLeague: string;
  division: "D1" | "D2" | "D3" | "D4";
  ageCategory: "Open 18+" | "40+" | "50+" | "60+";
  region: string;
  rating: number;
  gamesPlayed: number;
  record: { wins: number; losses: number; ties: number };
  movement: number | "NEW";
  lastPlayed: string;
  provisional: boolean;
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
    rating: 1148,
    gamesPlayed: 8,
    record: { wins: 7, losses: 1, ties: 0 },
    movement: 2,
    lastPlayed: "2026-11-08",
    provisional: false,
    honours: ["Metro North A-Division Champions 2026", "Inaugural Cup Seed #1"],
    bio: "Featuring former OHL and CIS talent with seasoned chemistry. Fast-transition style with disciplined puck control.",
    matches: [
      {
        id: "m-101",
        date: "2026-11-08",
        competition: "Champions Cup",
        round: "Group Stage Game 3",
        opponentName: "Oakville Steelheads",
        opponentSlug: "oakville-steelheads",
        score: "5–2",
        outcome: "W",
        ratingChange: 14,
        verified: true,
      },
      {
        id: "m-102",
        date: "2026-10-24",
        competition: "Champions Cup",
        round: "Group Stage Game 2",
        opponentName: "Kitchener Dutchmen Rec",
        opponentSlug: "kitchener-dutchmen-rec",
        score: "4–1",
        outcome: "W",
        ratingChange: 13,
        verified: true,
      },
      {
        id: "m-103",
        date: "2026-10-10",
        competition: "Champions Cup",
        round: "Group Stage Game 1",
        opponentName: "Mississauga Blades",
        opponentSlug: "mississauga-blades",
        score: "3–4",
        outcome: "L",
        ratingChange: -18,
        verified: true,
      },
      {
        id: "m-104",
        date: "2026-09-28",
        competition: "Champions League",
        round: "Regional Round of 16",
        opponentName: "Etobicoke Old Bulls",
        opponentSlug: "etobicoke-old-bulls",
        score: "6–3",
        outcome: "W",
        ratingChange: 15,
        verified: true,
      },
      {
        id: "m-105",
        date: "2026-09-14",
        competition: "Champions League",
        round: "Regional Qualifier",
        opponentName: "Vaughan Vipers",
        opponentSlug: "vaughan-vipers",
        score: "4–2",
        outcome: "W",
        ratingChange: 16,
        verified: true,
      },
    ],
  },
  {
    slug: "oakville-steelheads",
    name: "Oakville Steelheads",
    homeLeague: "Halton Adult Hockey League",
    division: "D1",
    ageCategory: "Open 18+",
    region: "GTA",
    rating: 1102,
    gamesPlayed: 7,
    record: { wins: 5, losses: 2, ties: 0 },
    movement: -1,
    lastPlayed: "2026-11-08",
    provisional: false,
    honours: ["Halton Cup Runner-Up 2026"],
    bio: "Hard-nosed, puck-possession team with strong goaltending and deep blueline mobility.",
    matches: [
      {
        id: "m-106",
        date: "2026-11-08",
        competition: "Champions Cup",
        round: "Group Stage Game 3",
        opponentName: "Toronto Brass Anchors",
        opponentSlug: "toronto-brass-anchors",
        score: "2–5",
        outcome: "L",
        ratingChange: -14,
        verified: true,
      },
      {
        id: "m-107",
        date: "2026-10-25",
        competition: "Champions Cup",
        round: "Group Stage Game 2",
        opponentName: "Mississauga Blades",
        opponentSlug: "mississauga-blades",
        score: "3–1",
        outcome: "W",
        ratingChange: 16,
        verified: true,
      },
    ],
  },
  {
    slug: "kitchener-dutchmen-rec",
    name: "Kitchener Dutchmen Masters",
    homeLeague: "Grand River Mens League",
    division: "D2",
    ageCategory: "40+",
    region: "Kitchener-Waterloo",
    rating: 1084,
    gamesPlayed: 6,
    record: { wins: 4, losses: 1, ties: 1 },
    movement: 1,
    lastPlayed: "2026-11-02",
    provisional: false,
    honours: ["Grand River Masters Champions"],
    bio: "Experienced core playing together for 14 seasons. Exceptional passing, positional discipline, and penalty kill.",
    matches: [],
  },
  {
    slug: "mississauga-blades",
    name: "Mississauga Blades",
    homeLeague: "Peel Regional Men's League",
    division: "D1",
    ageCategory: "Open 18+",
    region: "GTA",
    rating: 1065,
    gamesPlayed: 6,
    record: { wins: 4, losses: 2, ties: 0 },
    movement: 0,
    lastPlayed: "2026-10-25",
    provisional: false,
    honours: ["Peel Division 1 Playoff Champion"],
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
    rating: 1042,
    gamesPlayed: 5,
    record: { wins: 3, losses: 2, ties: 0 },
    movement: -1,
    lastPlayed: "2026-10-18",
    provisional: false,
    honours: ["Lakeshore 40+ Finalist"],
    bio: "Smart positional vets with dependable defensive zone structure.",
    matches: [],
  },
  {
    slug: "hamilton-steel-town-vets",
    name: "Hamilton Steel Town Vets",
    homeLeague: "Golden Horseshoe Hockey Circuit",
    division: "D3",
    ageCategory: "50+",
    region: "Hamilton / Niagara",
    rating: 1032,
    gamesPlayed: 5,
    record: { wins: 3, losses: 1, ties: 1 },
    movement: 2,
    lastPlayed: "2026-11-12",
    provisional: false,
    honours: ["Golden Horseshoe 50+ Cup Winner"],
    bio: "Longstanding hockey community club with great locker room presence.",
    matches: [],
  },
  {
    slug: "guelph-gryphon-alumni-rec",
    name: "Guelph Gryphons Rec",
    homeLeague: "Royal City Adult League",
    division: "D2",
    ageCategory: "Open 18+",
    region: "Kitchener-Waterloo",
    rating: 1018,
    gamesPlayed: 4,
    record: { wins: 2, losses: 1, ties: 1 },
    movement: "NEW",
    lastPlayed: "2026-11-14",
    provisional: true,
    honours: [],
    bio: "College alumni recreational squad entering Veddie competition field.",
    matches: [],
  },
  {
    slug: "london-knights-recreational",
    name: "Forest City Rusty Blades",
    homeLeague: "Western Ontario Hockey Alliance",
    division: "D3",
    ageCategory: "40+",
    region: "London / Southwest",
    rating: 994,
    gamesPlayed: 6,
    record: { wins: 2, losses: 3, ties: 1 },
    movement: -2,
    lastPlayed: "2026-10-30",
    provisional: false,
    honours: [],
    bio: "A true competitive rec group that leaves everything on the ice every Friday night.",
    matches: [],
  },
  {
    slug: "markham-vintage-pucks",
    name: "Markham Vintage Pucks",
    homeLeague: "York Region Senior League",
    division: "D4",
    ageCategory: "60+",
    region: "GTA",
    rating: 988,
    gamesPlayed: 5,
    record: { wins: 2, losses: 2, ties: 1 },
    movement: 1,
    lastPlayed: "2026-11-05",
    provisional: false,
    honours: ["York Senior Sportsmanship Award 2026"],
    bio: "Legendary 60+ veterans still playing passionate hockey 3 days a week.",
    matches: [],
  },
  {
    slug: "durham-crushers-d4",
    name: "Durham Rusty Sticks",
    homeLeague: "Lakeridge Adult Circuit",
    division: "D4",
    ageCategory: "Open 18+",
    region: "GTA",
    rating: 975,
    gamesPlayed: 3,
    record: { wins: 1, losses: 2, ties: 0 },
    movement: "NEW",
    lastPlayed: "2026-11-01",
    provisional: true,
    honours: [],
    bio: "Adult recreational learners and house league players having fun playing the right way.",
    matches: [],
  },
];

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

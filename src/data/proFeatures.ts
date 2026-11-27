export type FeatureCategory = "The room" | "The game" | "The coverage";
export type FeatureAvailability = "At every event" | "Champions Cup only" | "Coming soon";

export interface ProFeature {
  id: string;
  category: FeatureCategory;
  title: string;
  description: string;
  iconName: string;
  availability: FeatureAvailability;
}

export const PRO_FEATURES: ProFeature[] = [
  // ----------------- THE ROOM ("Ready before you are.") -----------------
  {
    id: "r-4",
    category: "The room",
    title: "A fresh towel for every player",
    description: "Crisp, clean towel folded on your stall—laundry completely taken care of by us.",
    iconName: "Shirt",
    availability: "At every event",
  },
  {
    id: "r-5",
    category: "The room",
    title: "Water and sports drinks in the room",
    description: "Cold water, electrolyte hydration, and clean bottles prepped for the bench and room.",
    iconName: "Droplets",
    availability: "At every event",
  },
  {
    id: "r-6",
    category: "The room",
    title: "Pregame music ready",
    description: "Locker room sound system cued to your team's chosen playlist before puck drop.",
    iconName: "Music",
    availability: "At every event",
  },
  {
    id: "r-8",
    category: "The room",
    title: "Post-game refreshments",
    description: "Cold post-game beverages ready in the dressing room after the final buzzer.",
    iconName: "Coffee",
    availability: "Champions Cup only",
  },

  // ----------------- THE GAME ("Hockey that counts.") -----------------
  {
    id: "g-1",
    category: "The game",
    title: "Certified refs & timekeeper",
    description: "Two experienced, certified on-ice officials and a dedicated scorekeeper every game.",
    iconName: "Users",
    availability: "At every event",
  },
  {
    id: "g-2",
    category: "The game",
    title: "Warm-up pucks ready",
    description: "Buckets of conditioned game pucks on the ice with a visible arena countdown timer.",
    iconName: "Disc",
    availability: "At every event",
  },
  {
    id: "g-3",
    category: "The game",
    title: "Live stats & standings",
    description: "Goals, assists, penalty minutes, and box scores published immediately after the game.",
    iconName: "TrendingUp",
    availability: "At every event",
  },
  {
    id: "g-4",
    category: "The game",
    title: "Three Stars honours",
    description: "Post-game Three Stars selections announced and documented in the official match record.",
    iconName: "Star",
    availability: "At every event",
  },
  {
    id: "g-7",
    category: "The game",
    title: "All-Star showcase",
    description: "Selected division top performers invited to showcase events and skills competitions.",
    iconName: "Trophy",
    availability: "Coming soon",
  },

  // ----------------- THE COVERAGE ("A final score worth keeping.") -----------------
  {
    id: "c-2",
    category: "The coverage",
    title: "Highlight clips",
    description: "Selected game-defining goals, saves, and plays clipped for player sharing.",
    iconName: "Film",
    availability: "At every event",
  },
  {
    id: "c-4",
    category: "The coverage",
    title: "Livestream of the finals",
    description: "Championship final broadcasts streamed live with score overlay for family and teammates.",
    iconName: "Tv",
    availability: "Champions Cup only",
  },
  {
    id: "c-6",
    category: "The coverage",
    title: "Filming every game",
    description: "Full-ice game capture allowing players to review complete match replay footage.",
    iconName: "Video",
    availability: "Coming soon",
  },
  {
    id: "c-7",
    category: "The coverage",
    title: "Power rankings",
    description: "Ongoing division rankings recognizing sustained performance across verified competitions.",
    iconName: "BarChart3",
    availability: "Coming soon",
  },
  {
    id: "c-8",
    category: "The coverage",
    title: "Milestone honours & player profiles",
    description: "Recognition for career games, championship titles, and historical tournament performances.",
    iconName: "Award",
    availability: "Coming soon",
  },
];

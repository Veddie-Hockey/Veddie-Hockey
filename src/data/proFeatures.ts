export interface ProFeature {
  id: string;
  category: "Dressing Room & Prep" | "Game Day Atmosphere" | "Staff & Equipment Care" | "Media & Recognition";
  title: string;
  description: string;
  iconName: string;
}

export const PRO_FEATURES: ProFeature[] = [
  // Dressing Room & Prep
  {
    id: "f-1",
    category: "Dressing Room & Prep",
    title: "Dressing Room Ready on Arrival",
    description: "Team name on the door, spotless room, and starting lineup board ready to go.",
    iconName: "DoorClosed",
  },
  {
    id: "f-2",
    category: "Dressing Room & Prep",
    title: "Player Stall Nameplates",
    description: "Personalized player name, squad number, and team crest above every locker stall.",
    iconName: "Tag",
  },
  {
    id: "f-3",
    category: "Dressing Room & Prep",
    title: "Tape & Essentials Station",
    description: "Stick tape, sock tape, scissors, spare laces, and anti-fog spray always on deck.",
    iconName: "Scissors",
  },
  {
    id: "f-4",
    category: "Dressing Room & Prep",
    title: "Fresh Towel Service",
    description: "Crisp, clean commercial towel for every player—laundry handled by us.",
    iconName: "Shirt",
  },
  {
    id: "f-5",
    category: "Dressing Room & Prep",
    title: "Stocked Hydration Station",
    description: "Cold water, electrolyte drinks, and clean bottles prepped on the bench.",
    iconName: "Droplets",
  },
  {
    id: "f-6",
    category: "Dressing Room & Prep",
    title: "Pregame & Intermission Sound",
    description: "Team-selected playlists and dedicated locker room sound system.",
    iconName: "Music",
  },
  {
    id: "f-7",
    category: "Dressing Room & Prep",
    title: "Premium Matching Uniforms",
    description: "Personalized home and away jerseys, matching knit socks, and captain letters.",
    iconName: "ShieldCheck",
  },

  // Game Day Atmosphere
  {
    id: "f-8",
    category: "Game Day Atmosphere",
    title: "Warm-Up Pucks Ready",
    description: "Buckets of conditioned game pucks on the ice with a visible arena countdown timer.",
    iconName: "Disc",
  },
  {
    id: "f-9",
    category: "Game Day Atmosphere",
    title: "Starting Lineup Introductions",
    description: "Arena PA announcer introduces your starting lineup with team walkout music.",
    iconName: "Megaphone",
  },
  {
    id: "f-10",
    category: "Game Day Atmosphere",
    title: "In-Game Arena Production",
    description: "Whistle music, authentic goal horn blasts, and team-specific goal celebration tracks.",
    iconName: "Volume2",
  },
  {
    id: "f-11",
    category: "Game Day Atmosphere",
    title: "Professional PA Announcements",
    description: "Goals, primary & secondary assists, penalties, and milestone achievements announced live.",
    iconName: "Radio",
  },
  {
    id: "f-12",
    category: "Game Day Atmosphere",
    title: "Certified Officiating & Timekeeper",
    description: "Strictly vetted referees, dedicated official scorekeeper, and clear competitive standards.",
    iconName: "Whistle",
  },
  {
    id: "f-13",
    category: "Game Day Atmosphere",
    title: "Live Scores & Comprehensive Stats",
    description: "Live goals, assists, goalie save percentages, division standings, and scoring leaders.",
    iconName: "BarChart3",
  },

  // Staff & Equipment Care
  {
    id: "f-14",
    category: "Staff & Equipment Care",
    title: "Certified Athletic Therapist",
    description: "Pregame athletic taping, acute injury assessment, and pitch-side coverage during play.",
    iconName: "HeartPulse",
  },
  {
    id: "f-15",
    category: "Staff & Equipment Care",
    title: "Dedicated Equipment Attendant",
    description: "Emergency bench repairs, helmet screws, rivets, and quick-fix gear remedies.",
    iconName: "Wrench",
  },
  {
    id: "f-16",
    category: "Staff & Equipment Care",
    title: "On-Site Skate Sharpening",
    description: "Pro-grade sharpening available directly at the arena or drop-off valet service.",
    iconName: "Sparkles",
  },
  {
    id: "f-17",
    category: "Staff & Equipment Care",
    title: "Emergency Loaner Gear",
    description: "Backup sticks, gloves, pants, and emergency goalie gear for last-minute equipment crises.",
    iconName: "Package",
  },

  // Media & Recognition
  {
    id: "f-18",
    category: "Media & Recognition",
    title: "HD Game Filming",
    description: "Every shift captured on video. Full game replays accessible to all players within 24 hours.",
    iconName: "Video",
  },
  {
    id: "f-19",
    category: "Media & Recognition",
    title: "Curated Highlight Clips",
    description: "Snipes, highway-robbery saves, and big plays clipped and ready for player social sharing.",
    iconName: "Film",
  },
  {
    id: "f-20",
    category: "Media & Recognition",
    title: "Action Photography",
    description: "Professional high-speed hockey photography, action stills, and team portraits.",
    iconName: "Camera",
  },
  {
    id: "f-21",
    category: "Media & Recognition",
    title: "Marquee Broadcasts & Commentary",
    description: "Play-by-play commentary and livestreams for championship finals and showcase rivalries.",
    iconName: "Tv",
  },
  {
    id: "f-22",
    category: "Media & Recognition",
    title: "Three Stars of the Game",
    description: "Announced post-match over the arena PA, followed by award photo and recognition prize.",
    iconName: "Star",
  },
  {
    id: "f-23",
    category: "Media & Recognition",
    title: "Post-Game Media Interviews",
    description: "On-camera player and coach reactions against the official Veddie branded step-and-repeat backdrop.",
    iconName: "Mic",
  },
  {
    id: "f-24",
    category: "Media & Recognition",
    title: "Post-Game Refreshments",
    description: "Cold post-game fruit, protein recovery snacks, or sponsored team hospitality.",
    iconName: "Coffee",
  },
  {
    id: "f-25",
    category: "Media & Recognition",
    title: "Weekly Media Coverage & Power Rankings",
    description: "In-depth editorial power rankings, match previews, and player spotlights across our platforms.",
    iconName: "Newspaper",
  },
  {
    id: "f-26",
    category: "Media & Recognition",
    title: "Player Milestone Honors",
    description: "Commemorating 100th games played, franchise scoring milestones, hat tricks, and birthdays.",
    iconName: "Award",
  },
  {
    id: "f-27",
    category: "Media & Recognition",
    title: "Player Profiles & Headshots",
    description: "Online player pages with high-res headshot, bio, career scoring stats, and trophy history.",
    iconName: "UserCheck",
  },
  {
    id: "f-28",
    category: "Media & Recognition",
    title: "All-Star Showcase Experience",
    description: "Mid-season showcase, fastest skater, hardest shot skills challenge, and captain drafts.",
    iconName: "Flame",
  },
];

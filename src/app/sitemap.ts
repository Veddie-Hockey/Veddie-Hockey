import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://veddiehockey.com";
  const routes = [
    "",
    "/champions-cup",
    "/tournaments",
    "/champions-league",
    "/leagues",
    "/experience",
    "/divisions",
    "/rankings",
    "/road-to-the-cup",
    "/nominate",
    "/play",
    "/company",
    "/our-story",
    "/partners",
    "/expand",
    "/contest",
    "/contact",
    "/faqs",
    "/privacy",
    "/refund-policy",
    "/terms",
    "/player-code",
  ];

  const teamSlugs = [
    "toronto-brass-anchors",
    "oakville-steelheads",
    "burlington-silver-bucks",
    "hamilton-steel-town-vets",
    "kitchener-dutchmen-masters",
    "markham-vintage-pucks",
    "mississauga-blades",
    "guelph-gryphons-rec",
    "forest-city-rusty-blades",
    "durham-rusty-sticks",
  ];

  const now = new Date();

  const staticEntries = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1.0 : route.startsWith("/champions") || route === "/tournaments" ? 0.9 : 0.7,
  }));

  const teamEntries = teamSlugs.map((slug) => ({
    url: `${baseUrl}/teams/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...teamEntries];
}

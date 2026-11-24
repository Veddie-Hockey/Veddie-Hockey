import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find Your Division",
  description:
    "Pick your age group, then find the level that sounds like your team. Open, 40+, 50+ and 60+ across D1 to D4.",
};

export default function DivisionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

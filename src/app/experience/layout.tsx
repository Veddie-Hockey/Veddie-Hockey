import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Veddie Experience",
  description:
    "You don't have to be a pro to feel like one. Your name on the stall, real refs, real standings, and a final score worth keeping.",
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

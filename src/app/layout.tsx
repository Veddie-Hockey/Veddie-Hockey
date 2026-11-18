import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Veddie Hockey | Still Got It.",
  description:
    "Discover premium adult hockey with Veddie. Explore Champions Cup, Champions League, tournaments, leagues and pickup. Find your next game.",
  icons: {
    icon: "/veddie-logo.png",
  },
  openGraph: {
    title: "Veddie Hockey | Still Got It.",
    description:
      "The pro hockey experience for the rest of your career. Prepared rooms, reviewed divisions, certified officiating, and moments worth keeping.",
    siteName: "Veddie Hockey",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen flex flex-col bg-brand-black text-brand-cream antialiased selection:bg-brand-accent selection:text-brand-black">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

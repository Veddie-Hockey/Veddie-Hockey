import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Veddie Hockey | Still Got It.",
  description:
    "Discover premium adult hockey with Veddie. Explore Champions Cup, Champions League, tournaments, and leagues. Find your next game.",
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
    <html lang="en" className={`dark scroll-smooth ${inter.variable}`}>
      <body className={`${inter.className} min-h-screen flex flex-col bg-brand-navy text-brand-cream antialiased selection:bg-brand-red selection:text-brand-cream`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

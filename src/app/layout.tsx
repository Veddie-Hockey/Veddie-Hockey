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
  metadataBase: new URL("https://veddiehockey.com"),
  title: {
    default: "Veddie Hockey | You don't have to be a pro to feel like one.",
    template: "%s | Veddie Hockey",
  },
  description:
    "Men's hockey in the GTA. The Veddie Invitational and Champions Cup, April 2027. Your name on the stall, real refs, real standings.",
  icons: {
    icon: "/veddie-logo.png",
  },
  openGraph: {
    title: "Veddie Hockey | You don't have to be a pro to feel like one.",
    description:
      "Men's hockey in the GTA. The Veddie Invitational and Champions Cup, April 2027. Your name on the stall, real refs, real standings.",
    url: "https://veddiehockey.com",
    siteName: "Veddie Hockey",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veddie Hockey | You don't have to be a pro to feel like one.",
    description:
      "Men's hockey in the GTA. The Veddie Invitational and Champions Cup, April 2027. Your name on the stall, real refs, real standings.",
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

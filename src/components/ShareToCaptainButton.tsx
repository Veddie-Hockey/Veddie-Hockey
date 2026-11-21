"use client";

import { useState } from "react";
import { Share2, Check, Send } from "lucide-react";

interface ShareToCaptainButtonProps {
  title?: string;
  text?: string;
  url?: string;
  className?: string;
  variant?: "primary" | "secondary" | "minimal";
}

export default function ShareToCaptainButton({
  title = "Veddie Hockey - Men's Hockey in the GTA",
  text = "Check out Veddie Hockey: real refs, stall nameplates, verified divisions, and a final score worth keeping.",
  url,
  className = "",
  variant = "secondary",
}: ShareToCaptainButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "https://veddiehockey.com");

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url: shareUrl,
        });
        return;
      } catch (err) {
        // Fallback to clipboard if user dismissed or share failed
      }
    }

    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  if (variant === "minimal") {
    return (
      <button
        onClick={handleShare}
        className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-cream hover:text-brand-accent transition-colors ${className}`}
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 text-brand-green" />
            <span className="text-brand-green">Link copied! Send to your captain</span>
          </>
        ) : (
          <>
            <Send className="w-3.5 h-3.5 text-brand-accent" />
            <span>Send this to your captain</span>
          </>
        )}
      </button>
    );
  }

  return (
    <button
      onClick={handleShare}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-brand-border bg-brand-surface hover:bg-brand-card text-brand-cream hover:text-brand-accent text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 ${className}`}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-brand-green" />
          <span className="text-brand-green">Link Copied! Send to Captain</span>
        </>
      ) : (
        <>
          <Share2 className="w-4 h-4 text-brand-accent" />
          <span>Send this to your captain</span>
        </>
      )}
    </button>
  );
}

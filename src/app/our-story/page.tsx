import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "The name comes from hockey 'vet'. Nobody ever set the room up for us, so we did. Learn why Veddie was created.",
};

export default function OurStoryPage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="relative min-h-[55vh] flex items-center justify-center bg-gradient-to-b from-brand-navy via-brand-surface to-brand-navy border-b border-brand-border px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-border text-brand-accent text-xs font-bold tracking-widest uppercase mb-6">
            <Heart className="w-4 h-4" />
            OUR STORY
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-athletic text-brand-cream tracking-tight mb-6 font-black">
            Nobody ever set the room up for us. So we did.
          </h1>

          <p className="text-base sm:text-xl text-brand-muted max-w-2xl mx-auto mb-6 leading-relaxed">
            The name comes from hockey “vet.” It celebrates the experienced player who still wants the room, the rivalry, the big save, the goal and the team.
          </p>
        </div>
      </section>

      {/* ESSAY / MANIFESTO */}
      <section className="py-20 bg-brand-navy border-b border-brand-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-brand-cream/90 text-base sm:text-lg leading-relaxed">
          <p>
            Somewhere between minor hockey banquets, junior tryouts, college teams, or adult clinics, every hockey player realizes the same thing: <strong className="text-brand-cream">you don’t play in the NHL, but you still care just as much.</strong>
          </p>

          <p>
            You still tape your stick with care. You still show up early to catch up with the guys. You still play hard until the final buzzer, because hockey on a cold Tuesday night in Ontario is still the best hour of the week.
          </p>

          {/* Rink Photography */}
          <div className="my-8 rounded-2xl overflow-hidden border border-brand-border shadow-2xl">
            <div className="relative h-72 sm:h-96 w-full">
              <Image
                src="https://images.unsplash.com/photo-1515703407324-5f753eed2311?auto=format&fit=crop&w=1200&q=80"
                alt="Community hockey rink in Ontario"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-brand-cream/80 font-mono">
                Early morning ice · Richmond Hill, Ontario
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-brand-surface border border-brand-accent/30 my-8">
            <h3 className="text-2xl font-athletic text-brand-cream mb-3 font-bold">
              A standard built for players who care.
            </h3>
            <p className="text-sm text-brand-muted leading-relaxed">
              We started Veddie because the guys who play every week deserve the pro treatment: your name above the stall, cold towels waiting, certified officials, digital scorekeeping and photos worth sharing.
            </p>
          </div>

          <p>
            Whether you’re playing Open D1 or 60+ D4, when you step through the arena doors for a Veddie event:
          </p>

          <p className="text-2xl sm:text-3xl font-athletic text-brand-accent font-black tracking-tight">
            “You don't have to be a pro to feel like one.”
          </p>

          <div className="pt-8 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-brand-muted font-bold">
                Veddie Hockey
              </p>
              <p className="text-xl font-athletic text-brand-cream font-bold">
                Your game. The pro treatment.
              </p>
            </div>

            <Link
              href="/experience"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-brand-accent text-brand-navy font-bold uppercase tracking-wider text-xs hover:bg-brand-accent-hover transition-all text-center"
            >
              See The Veddie Experience &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import { About } from "@/components/About";
import { ArtworkGallery } from "@/components/ArtworkGallery";
import { FadeIn } from "@/components/FadeIn";
import { Hero } from "@/components/Hero";
import { getFeaturedArtworks } from "@/data/artworks";

export default function Home() {
  const featured = getFeaturedArtworks();
  const heroPiece = featured[0];

  return (
    <>
      <Hero featured={heroPiece} />

      <section id="selected-work" className="px-6 py-28 md:px-10">
        <FadeIn className="mx-auto max-w-6xl">
          <h2 className="text-[11px] uppercase tracking-[0.28em] text-forest/50">
            Selected Work
          </h2>
          <p className="mt-4 max-w-2xl font-serif text-3xl leading-snug md:text-4xl">
            A collection of recent works across different mediums.
          </p>
          <div className="mt-16">
            <ArtworkGallery artworks={featured} />
          </div>
          <Link
            href="/work"
            className="mt-16 inline-block text-[11px] uppercase tracking-[0.22em] text-forest/70 underline decoration-gold/60 underline-offset-8"
          >
            View all work
          </Link>
        </FadeIn>
      </section>

      <FadeIn>
        <About />
      </FadeIn>
    </>
  );
}

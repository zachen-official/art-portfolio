import Link from "next/link";
import { About } from "@/components/About";
import { ArtworkGallery } from "@/components/ArtworkGallery";
import { FadeIn } from "@/components/FadeIn";
import { Hero } from "@/components/Hero";
import { getFeaturedArtworks } from "@/data/artworks";

export function WorldHome() {
  const featured = getFeaturedArtworks();
  const heroPiece =
    featured.find((artwork) => artwork.category === "game") ??
    featured.find((artwork) => artwork.category === "digital") ??
    featured[0];

  return (
    <>
      <Hero
        featured={heroPiece}
        tagline="Independent artist / digital & traditional"
        title="An exploration of form, light, and imagination."
        lede="Oil landscapes, motion studies, and cinematic game design — a single studio for canvas and play."
      />

      <section id="selected-work" className="bg-cream px-6 py-28 md:px-10">
        <FadeIn className="mx-auto max-w-6xl">
          <h2 className="text-[11px] uppercase tracking-[0.28em] text-forest/50">
            Selected Work
          </h2>
          <p className="mt-4 max-w-2xl font-serif text-3xl leading-snug md:text-4xl">
            Recent paintings, animation, and game art from the studio.
          </p>
          <div className="mt-16">
            <ArtworkGallery artworks={featured} />
          </div>
          <Link
            href="/work?category=digital"
            className="mt-16 inline-block text-[11px] uppercase tracking-[0.22em] text-iris underline decoration-gold underline-offset-8"
          >
            View all work
          </Link>
        </FadeIn>
      </section>

      <FadeIn>
        <About body="The studio moves between two temperatures: quiet oil landscapes and storybook illustration, and a darker game-design practice of characters, witches, and cinematic form." />
      </FadeIn>
    </>
  );
}

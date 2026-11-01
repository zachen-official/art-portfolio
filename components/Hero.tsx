import Link from "next/link";
import type { Artwork } from "@/data/artworks";
import { assetPath } from "@/lib/paths";

export function Hero({
  featured,
  tagline,
  title,
  lede,
}: {
  featured: Artwork;
  tagline: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="sky-wash px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <p className="hero-enter text-[11px] uppercase tracking-[0.28em] text-iris">
          {tagline}
        </p>
        <h1 className="hero-enter-delay mt-6 max-w-4xl font-serif text-4xl leading-[1.15] tracking-tight text-forest md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="hero-enter-delay mt-8 max-w-xl text-base leading-8 text-forest/70 md:text-lg">
          {lede}
        </p>

        <div className="hero-enter-media mt-14 overflow-hidden">
          <Link href={`/work/${featured.slug}`} className="group block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetPath(featured.image)}
              alt={featured.title}
              className="h-auto w-full transition-transform duration-[1200ms] ease-out motion-safe:group-hover:scale-[1.015]"
            />
            <p className="mt-4 text-[12px] uppercase tracking-[0.18em] text-forest/50">
              Featured — {featured.title}
            </p>
          </Link>
        </div>

        <p className="mt-16 text-center text-[10px] uppercase tracking-[0.32em] text-forest/45">
          <a href="#selected-work">Scroll to explore</a>
        </p>
      </div>
    </section>
  );
}

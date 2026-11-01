import Link from "next/link";
import type { Artwork } from "@/data/artworks";
import { ArtworkPreview } from "@/components/ArtworkPreview";
import { artworkSpanClass, statusLabel } from "@/lib/gallery";

export function ArtworkCard({
  artwork,
  index,
  showMeta = false,
}: {
  artwork: Artwork;
  index: number;
  showMeta?: boolean;
}) {
  const soldOrArchive = artwork.status !== "available";

  return (
    <article className={artworkSpanClass(artwork, index)}>
      <Link href={`/work/${artwork.slug}`} className="group block">
        <figure>
          <div className="overflow-hidden bg-mist">
            <div className="transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.02]">
              <ArtworkPreview artwork={artwork} />
            </div>
          </div>
          <figcaption className="mt-4 flex items-baseline justify-between gap-4">
            <div>
              <p className="font-serif text-xl text-forest">{artwork.title}</p>
              <p className="mt-1 text-[12px] uppercase tracking-[0.16em] text-forest/55">
                {showMeta
                  ? `${artwork.year} · ${artwork.medium}`
                  : artwork.medium}
              </p>
              {showMeta && artwork.dimensions ? (
                <p className="mt-1 text-[12px] text-forest/45">{artwork.dimensions}</p>
              ) : null}
              {showMeta && artwork.status === "available" && artwork.price ? (
                <p className="mt-1 text-[12px] text-forest/45">{artwork.price}</p>
              ) : null}
            </div>
            {soldOrArchive ? (
              <span className="shrink-0 text-[11px] uppercase tracking-[0.16em] text-clay">
                {statusLabel(artwork.status)}
              </span>
            ) : null}
          </figcaption>
        </figure>
      </Link>
    </article>
  );
}

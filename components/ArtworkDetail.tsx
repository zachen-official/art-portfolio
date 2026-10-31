import Link from "next/link";
import type { Artwork } from "@/data/artworks";
import { inquiryMailto } from "@/data/site";
import { statusLabel } from "@/lib/gallery";
import { ArtworkMedia } from "@/components/ArtworkMedia";

export function ArtworkDetail({ artwork }: { artwork: Artwork }) {
  const available = artwork.status === "available";

  return (
    <article className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-32 md:grid-cols-12 md:px-10 md:pt-40">
      <div className="md:col-span-8">
        <ArtworkMedia artwork={artwork} expandable />
        <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-forest/45">
          {artwork.category === "digital"
            ? "Looping preview — click to view larger"
            : "Original proportions preserved — click to view larger"}
        </p>
      </div>

      <aside className="md:col-span-4 md:pt-4">
        <p className="text-[11px] uppercase tracking-[0.22em] text-forest/50">
          {artwork.year} · {artwork.category === "oil" ? "Oil & Canvas" : "Digital"}
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight">{artwork.title}</h1>
        <dl className="mt-8 space-y-3 text-sm leading-7 text-forest/75">
          <div>
            <dt className="text-[11px] uppercase tracking-[0.16em] text-forest/45">Medium</dt>
            <dd>{artwork.medium}</dd>
          </div>
          <div>
            <dt className="text-[11px] uppercase tracking-[0.16em] text-forest/45">Technique</dt>
            <dd>{artwork.technique}</dd>
          </div>
          {artwork.dimensions ? (
            <div>
              <dt className="text-[11px] uppercase tracking-[0.16em] text-forest/45">Dimensions</dt>
              <dd>{artwork.dimensions}</dd>
            </div>
          ) : null}
          <div>
            <dt className="text-[11px] uppercase tracking-[0.16em] text-forest/45">Status</dt>
            <dd className={available ? "" : "text-clay"}>{statusLabel(artwork.status)}</dd>
          </div>
          {available && artwork.price ? (
            <div>
              <dt className="text-[11px] uppercase tracking-[0.16em] text-forest/45">Price</dt>
              <dd>{artwork.price}</dd>
            </div>
          ) : null}
          {artwork.collection ? (
            <div>
              <dt className="text-[11px] uppercase tracking-[0.16em] text-forest/45">Collection</dt>
              <dd>{artwork.collection}</dd>
            </div>
          ) : null}
        </dl>

        <p className="mt-8 text-base leading-8 text-forest/75">{artwork.description}</p>

        {available ? (
          <a
            href={inquiryMailto(artwork.title)}
            className="mt-10 inline-block border-b border-gold pb-1 text-[11px] uppercase tracking-[0.2em] text-forest transition-opacity hover:opacity-70"
          >
            Inquire about this work
          </a>
        ) : (
          <p className="mt-10 text-[11px] uppercase tracking-[0.2em] text-clay">
            {artwork.status === "sold" ? "This work has been sold." : "This work is in the archive."}
          </p>
        )}

        <Link
          href="/work"
          className="mt-10 block text-[11px] uppercase tracking-[0.2em] text-forest/50 hover:text-forest"
        >
          Back to all work
        </Link>
      </aside>
    </article>
  );
}

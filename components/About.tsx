import Link from "next/link";

export function About() {
  return (
    <section id="about" className="moss-wash px-6 py-28 md:px-10">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-12">
        <div className="md:col-span-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/artworks/studio-portrait.svg"
            alt="Studio portrait placeholder"
            className="w-full max-w-xs"
          />
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            A little about the artist.
          </h2>
          <p className="mt-8 max-w-xl text-base leading-8 text-forest/75">
            Exploring the relationship between physical and digital mediums, this
            collection brings together traditional painting, digital sculpture,
            and experimental visual forms. Each work represents a different
            exploration of atmosphere, material, movement, and imagination.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-block text-[11px] uppercase tracking-[0.22em] text-forest/70 underline decoration-gold/60 underline-offset-8 transition-colors hover:text-forest"
          >
            Read more
          </Link>
        </div>
      </div>
    </section>
  );
}

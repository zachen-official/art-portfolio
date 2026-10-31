import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-6 pb-24 pt-40 md:px-10">
      <div className="mx-auto max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.28em] text-forest/50">404</p>
        <h1 className="mt-4 font-serif text-5xl">This work is not here.</h1>
        <p className="mt-6 max-w-md text-base leading-8 text-forest/70">
          The page may have moved, or the piece lives elsewhere in the archive.
        </p>
        <Link
          href="/work"
          className="mt-10 inline-block text-[11px] uppercase tracking-[0.22em] underline decoration-gold/60 underline-offset-8"
        >
          View all work
        </Link>
      </div>
    </section>
  );
}

import Link from "next/link";
import { assetPath } from "@/lib/paths";

export function About({ body }: { body: string }) {
  return (
    <section id="about" className="moss-wash px-6 py-28 md:px-10">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-12">
        <div className="md:col-span-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assetPath("/artworks/studio-portrait.svg")}
            alt="Studio portrait placeholder"
            className="w-full max-w-xs"
          />
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            A little about the artist.
          </h2>
          <p className="mt-8 max-w-xl text-base leading-8 text-forest/75">{body}</p>
          <Link
            href="/about"
            className="mt-8 inline-block text-[11px] uppercase tracking-[0.22em] text-iris underline decoration-gold underline-offset-8 transition-colors hover:text-gold"
          >
            Read more
          </Link>
        </div>
      </div>
    </section>
  );
}

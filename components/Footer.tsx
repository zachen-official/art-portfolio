import Link from "next/link";
import { SITE } from "@/data/site";

export function Footer() {
  return (
    <footer
      id="contact"
      className="mt-24 border-t border-gold/30 px-6 py-20 md:px-10"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-serif text-2xl tracking-[0.12em]">{SITE.name}</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-forest/70">
            Inquiries for available works, commissions, and studio visits.
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <a
            href={`mailto:${SITE.email}`}
            className="block text-forest/80 transition-colors hover:text-forest"
          >
            {SITE.email}
          </a>
          <a
            href={SITE.instagramUrl}
            className="block text-forest/80 transition-colors hover:text-forest"
            target="_blank"
            rel="noreferrer"
          >
            {SITE.instagramHandle}
          </a>
        </div>

        <nav className="flex flex-col gap-3 text-[11px] uppercase tracking-[0.2em] text-forest/70">
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </div>

      <p className="mx-auto mt-16 max-w-6xl text-[11px] uppercase tracking-[0.18em] text-forest/45">
        © 2026 {SITE.name}. All rights reserved.
      </p>
    </footer>
  );
}

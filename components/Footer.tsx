import Link from "next/link";
import { SITE } from "@/data/site";

export function Footer() {
  return (
    <footer
      id="contact"
      className="mt-24 border-t border-gold/20 bg-deep px-6 py-20 text-[#efe8d8] md:px-10"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-serif text-2xl tracking-[0.12em]">{SITE.name}</p>
          <p className="mt-4 max-w-sm text-sm leading-7 opacity-70">
            Inquiries for available works, commissions, and studio visits.
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <a
            href={`mailto:${SITE.email}`}
            className="block opacity-85 transition-colors hover:text-gold"
          >
            {SITE.email}
          </a>
          <a
            href={SITE.instagramUrl}
            className="block opacity-85 transition-colors hover:text-gold"
            target="_blank"
            rel="noreferrer"
          >
            {SITE.instagramHandle}
          </a>
          <Link
            href="/store"
            className="block text-gold transition-colors hover:text-iris"
          >
            Store
          </Link>
        </div>

        <nav className="flex flex-col gap-3 text-[11px] uppercase tracking-[0.2em] opacity-70">
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="#contact">Contact</Link>
          <Link href="/store">Store</Link>
        </nav>
      </div>

      <p className="mx-auto mt-16 max-w-6xl text-[11px] uppercase tracking-[0.18em] opacity-45">
        © 2026 {SITE.name}. All rights reserved.
      </p>
    </footer>
  );
}

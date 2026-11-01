import type { Metadata } from "next";
import { SITE } from "@/data/site";
import { assetPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <section className="sky-wash px-6 pb-24 pt-32 md:px-10 md:pt-40">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assetPath("/artworks/studio-portrait.svg")}
            alt="Studio portrait placeholder"
            className="w-full"
          />
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <p className="text-[11px] uppercase tracking-[0.28em] text-forest/50">
            {SITE.name}
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-tight">The studio</h1>
          <div className="mt-8 space-y-6 text-base leading-8 text-forest/75">
            <p>
              This practice sits between two temperatures. One is bubbly and
              handmade — Ghibli-like weather, moss interiors, and oil landscapes
              finished slowly.
            </p>
            <p>
              The other is built for games: spell-witches, creatures, and
              cinematic character work. Digital sculpture, animation, and
              material studies live there — darker, jeweled, meant to be inhabited.
            </p>
            <p>
              Inquiries for available pieces and commissions are welcome.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

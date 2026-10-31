import type { Metadata } from "next";
import { SITE } from "@/data/site";

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
            src="/artworks/studio-portrait.svg"
            alt="Studio portrait placeholder"
            className="w-full"
          />
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <p className="text-[11px] uppercase tracking-[0.28em] text-forest/50">
            {SITE.name}
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-tight">About the studio</h1>
          <div className="mt-8 space-y-6 text-base leading-8 text-forest/75">
            <p>
              Exploring the relationship between physical and digital mediums, this
              collection brings together traditional painting, digital sculpture,
              and experimental visual forms. Each work represents a different
              exploration of atmosphere, material, movement, and imagination.
            </p>
            <p>
              Oil paintings begin outdoors or from remembered weather—valleys,
              last light, moss interiors—and are finished slowly in the studio.
              Digital works grow from the same questions of form and air, using
              sculpture, animation, and light as another kind of pigment.
            </p>
            <p>
              The gallery is intentionally quiet. Works are shown at their own
              scale, whether a looping study or a landscape on canvas. Inquiries
              for available pieces and commissions are welcome.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

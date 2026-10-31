import { Suspense } from "react";
import { WorkGallery } from "@/components/WorkGallery";
import { artworks } from "@/data/artworks";

export const metadata = {
  title: "Work",
};

export default function WorkPage() {
  return (
    <section className="sky-wash px-6 pb-24 pt-32 md:px-10 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] uppercase tracking-[0.28em] text-forest/50">Gallery</p>
        <h1 className="mt-4 font-serif text-5xl md:text-6xl">All work</h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-forest/70">
          Digital studies, looping forms, and oil paintings shown together. Filter
          by medium if you wish—nothing is hidden until you choose.
        </p>
        <div className="mt-14">
          <Suspense fallback={<p className="text-sm text-forest/50">Loading work…</p>}>
            <WorkGallery artworks={artworks} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

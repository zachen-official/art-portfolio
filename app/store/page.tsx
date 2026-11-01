import { ArtworkGallery } from "@/components/ArtworkGallery";
import { artworks } from "@/data/artworks";

export const metadata = {
  title: "Store",
};

export default function StorePage() {
  const available = artworks.filter((item) => item.status === "available");

  return (
    <section className="sky-wash px-6 pb-24 pt-32 md:px-10 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] uppercase tracking-[0.28em] text-forest/50">Available</p>
        <h1 className="mt-4 font-serif text-5xl md:text-6xl">Store</h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-forest/70">
          Works currently available for purchase. Open a piece for details and PayPal checkout.
        </p>
        <div className="mt-14">
          <ArtworkGallery artworks={available} showMeta />
          {available.length === 0 ? (
            <p className="text-sm text-forest/60">No works are available right now.</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

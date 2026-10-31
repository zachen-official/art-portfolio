import type { Artwork } from "@/data/artworks";
import { ArtworkCard } from "@/components/ArtworkCard";

export function ArtworkGallery({
  artworks,
  showMeta = false,
}: {
  artworks: Artwork[];
  showMeta?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 items-end gap-x-8 gap-y-16 md:grid-cols-12">
      {artworks.map((artwork, index) => (
        <ArtworkCard
          key={artwork.slug}
          artwork={artwork}
          index={index}
          showMeta={showMeta}
        />
      ))}
    </div>
  );
}

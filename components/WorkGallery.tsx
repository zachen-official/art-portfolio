"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Artwork } from "@/data/artworks";
import { ArtworkGallery } from "@/components/ArtworkGallery";
import { FilterBar, type WorkFilter } from "@/components/FilterBar";

function parseFilter(value: string | null): WorkFilter {
  if (value === "digital" || value === "oil" || value === "collections") {
    return value;
  }
  return "all";
}

function applyFilter(artworks: Artwork[], filter: WorkFilter) {
  if (filter === "digital") return artworks.filter((item) => item.category === "digital");
  if (filter === "oil") return artworks.filter((item) => item.category === "oil");
  if (filter === "collections") return artworks.filter((item) => Boolean(item.collection));
  return artworks;
}

export function WorkGallery({ artworks }: { artworks: Artwork[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [filter, setFilter] = useState<WorkFilter>(() => parseFilter(searchParams.get("category")));

  const visible = useMemo(() => applyFilter(artworks, filter), [artworks, filter]);

  function updateFilter(next: WorkFilter) {
    setFilter(next);
    const params = new URLSearchParams(searchParams.toString());
    if (next === "all") {
      params.delete("category");
    } else {
      params.set("category", next);
    }
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  return (
    <div>
      <FilterBar value={filter} onChange={updateFilter} />
      <div
        key={filter}
        className="motion-cloud mt-14 transition-opacity duration-500"
      >
        <ArtworkGallery artworks={visible} showMeta />
        {visible.length === 0 ? (
          <p className="text-sm text-forest/60">No works in this view yet.</p>
        ) : null}
      </div>
    </div>
  );
}

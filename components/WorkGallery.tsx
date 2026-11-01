"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Artwork } from "@/data/artworks";
import { ArtworkGallery } from "@/components/ArtworkGallery";
import { FilterBar, type WorkFilter } from "@/components/FilterBar";

function parseFilter(value: string | null): WorkFilter {
  if (value === "digital" || value === "oil" || value === "game") {
    return value;
  }
  return "digital";
}

function applyFilter(artworks: Artwork[], filter: WorkFilter) {
  return artworks.filter((item) => item.category === filter);
}

export function WorkGallery({ artworks }: { artworks: Artwork[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [filter, setFilter] = useState<WorkFilter>(() =>
    parseFilter(searchParams.get("category")),
  );

  useEffect(() => {
    if (searchParams.get("category") === "store") {
      router.replace("/store");
      return;
    }
    setFilter(parseFilter(searchParams.get("category")));
  }, [searchParams, router]);

  const visible = useMemo(() => applyFilter(artworks, filter), [artworks, filter]);

  function updateFilter(next: WorkFilter) {
    setFilter(next);
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", next);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div>
      <FilterBar value={filter} onChange={updateFilter} />
      <div key={filter} className="motion-cloud mt-14 transition-opacity duration-500">
        <ArtworkGallery artworks={visible} showMeta />
        {visible.length === 0 ? (
          <p className="text-sm text-forest/60">No works in this view yet.</p>
        ) : null}
      </div>
    </div>
  );
}

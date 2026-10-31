"use client";

import { useEffect, useState } from "react";
import type { Artwork } from "@/data/artworks";
import { ArtworkPreview } from "@/components/ArtworkPreview";

export function ArtworkMedia({
  artwork,
  expandable = false,
}: {
  artwork: Artwork;
  expandable?: boolean;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={`block w-full text-left ${expandable ? "cursor-zoom-in" : "cursor-default"}`}
        onClick={() => {
          if (expandable) setOpen(true);
        }}
        aria-label={expandable ? `View ${artwork.title} larger` : artwork.title}
      >
        <ArtworkPreview artwork={artwork} />
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-forest/80 p-6"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={artwork.title}
        >
          <div
            className="max-h-[92vh] max-w-6xl overflow-auto"
            onClick={(event) => event.stopPropagation()}
          >
            <ArtworkPreview artwork={artwork} className="max-h-[92vh]" />
          </div>
        </div>
      ) : null}
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import type { Artwork } from "@/data/artworks";

export function ArtworkPreview({
  artwork,
  className = "",
}: {
  artwork: Artwork;
  className?: string;
}) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const aspect =
    artwork.orientation === "portrait"
      ? "3 / 4"
      : artwork.orientation === "square"
        ? "1 / 1"
        : "8 / 5";

  if (artwork.video) {
    return (
      <video
        src={artwork.video}
        poster={artwork.image}
        muted
        loop
        playsInline
        autoPlay={!reduceMotion}
        controls={false}
        className={`h-auto w-full bg-forest/10 ${className}`}
      />
    );
  }

  if (artwork.category === "digital") {
    return (
      <div
        className={`relative w-full overflow-hidden ${className}`}
        style={{ aspectRatio: aspect }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={artwork.image}
          alt={artwork.title}
          className={`h-full w-full object-cover ${reduceMotion ? "" : "digital-loop"}`}
        />
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={artwork.image}
      alt={artwork.title}
      className={`h-auto w-full ${className}`}
    />
  );
}

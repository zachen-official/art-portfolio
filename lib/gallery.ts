import type { Artwork } from "@/data/artworks";

export function artworkSpanClass(artwork: Artwork, index: number) {
  const pattern = index % 6;

  if (artwork.orientation === "landscape") {
    if (pattern === 0) return "md:col-span-12";
    if (pattern === 3) return "md:col-span-8";
    return "md:col-span-7";
  }

  if (artwork.orientation === "portrait") {
    return pattern === 2 ? "md:col-span-5" : "md:col-span-4";
  }

  return pattern === 1 ? "md:col-span-6" : "md:col-span-5";
}

export function statusLabel(status: Artwork["status"]) {
  if (status === "sold") return "Sold";
  if (status === "archived") return "Archive";
  return "Available";
}

export type ArtworkCategory = "digital" | "oil" | "game";
export type ArtworkStatus = "available" | "sold" | "archived";
export type ArtworkOrientation = "portrait" | "landscape" | "square";

export type Artwork = {
  slug: string;
  title: string;
  year: number;
  medium: string;
  technique: string;
  category: ArtworkCategory;
  collection?: string;
  orientation: ArtworkOrientation;
  status: ArtworkStatus;
  dimensions?: string;
  price?: string;
  description: string;
  image: string;
  video?: string;
  featured?: boolean;
};

export const artworks: Artwork[] = [
  {
    slug: "quiet-horizons",
    title: "Quiet Horizons",
    year: 2024,
    medium: "Oil on Canvas",
    technique: "Layered glazes over a warm ground, with atmospheric edges",
    category: "oil",
    collection: "Landscapes",
    orientation: "landscape",
    status: "available",
    dimensions: "36 × 24 in",
    price: "$2,400",
    description:
      "A late afternoon valley held in haze. The work is concerned with the moment land meets sky, when distance becomes a kind of silence.",
    image: "/artworks/quiet-horizons.svg",
    featured: true,
  },
  {
    slug: "organic-forms",
    title: "Organic Forms",
    year: 2025,
    medium: "Digital / 3D Animation",
    technique: "Procedural sculpture with looping light study",
    category: "game",
    collection: "Motion Studies",
    orientation: "square",
    status: "available",
    description:
      "A slow rotation of soft volumes. The animation treats digital mass as something almost botanical—growing, folding, and returning.",
    image: "/artworks/organic-forms.svg",
    featured: true,
  },
  {
    slug: "the-last-light",
    title: "The Last Light",
    year: 2023,
    medium: "Oil on Canvas",
    technique: "Impasto highlights over thin, cool underpainting",
    category: "oil",
    collection: "Landscapes",
    orientation: "portrait",
    status: "available",
    dimensions: "18 × 24 in",
    price: "$1,800",
    description:
      "A vertical field of dusk. Gold gathers at the horizon and then recedes, leaving the trees as silhouettes of memory.",
    image: "/artworks/the-last-light.svg",
    featured: true,
  },
  {
    slug: "refractions",
    title: "Refractions",
    year: 2025,
    medium: "Digital Artwork",
    technique: "Abstract light modeling and layered transparency",
    category: "game",
    orientation: "landscape",
    status: "available",
    description:
      "Planes of color shift like water catching sun. The piece is an experiment in how digital light can feel as physical as glaze.",
    image: "/artworks/refractions.svg",
    featured: true,
  },
  {
    slug: "distant-places",
    title: "Distant Places",
    year: 2024,
    medium: "Oil on Canvas",
    technique: "Soft atmospheric perspective with restrained palette",
    category: "oil",
    collection: "Landscapes",
    orientation: "landscape",
    status: "available",
    dimensions: "40 × 20 in",
    price: "$2,800",
    description:
      "Far hills dissolve into weather. The composition invites the eye to travel without arriving, lingering in the space between.",
    image: "/artworks/distant-places.svg",
    featured: true,
  },
  {
    slug: "abstract-motion",
    title: "Abstract Motion",
    year: 2025,
    medium: "Digital Animation",
    technique: "Looping particle and form study",
    category: "digital",
    collection: "Motion Studies",
    orientation: "portrait",
    status: "available",
    description:
      "A vertical current of color. Movement is kept slow and tidal so the work can live as both image and duration.",
    image: "/artworks/abstract-motion.svg",
    featured: true,
  },
  {
    slug: "valley-haze",
    title: "Valley Haze",
    year: 2022,
    medium: "Oil on Canvas",
    technique: "Cool mists over warm earth tones",
    category: "oil",
    collection: "Landscapes",
    orientation: "landscape",
    status: "available",
    dimensions: "30 × 20 in",
    price: "$1,950",
    description:
      "Morning settling into a low valley. Edges are allowed to blur so the landscape feels breathed rather than drawn.",
    image: "/artworks/valley-haze.svg",
  },
  {
    slug: "wind-garden",
    title: "Wind Garden",
    year: 2025,
    medium: "Digital / 3D Animation",
    technique: "Gentle procedural sway and moss-toned lighting",
    category: "digital",
    collection: "Motion Studies",
    orientation: "square",
    status: "available",
    description:
      "Imagined foliage turning in a quiet wind. The loop is meant to feel like watching a garden from a still window.",
    image: "/artworks/wind-garden.svg",
  },
  {
    slug: "evening-field",
    title: "Evening Field",
    year: 2021,
    medium: "Oil on Canvas",
    technique: "Warm scumbles and low-contrast dusk",
    category: "oil",
    collection: "Landscapes",
    orientation: "landscape",
    status: "sold",
    dimensions: "28 × 18 in",
    description:
      "A field at the edge of night. This work has found a home; it remains in the archive as part of the landscape sequence.",
    image: "/artworks/evening-field.svg",
  },
  {
    slug: "drift",
    title: "Drift",
    year: 2023,
    medium: "Digital Artwork",
    technique: "Cloud-like mesh and slow opacity shifts",
    category: "digital",
    orientation: "portrait",
    status: "archived",
    description:
      "An early study of weightless form. Kept in the archive as a note toward later motion pieces.",
    image: "/artworks/drift.svg",
  },
  {
    slug: "moss-light",
    title: "Moss Light",
    year: 2024,
    medium: "Oil on Canvas",
    technique: "Filtered greens with small gold interruptions",
    category: "oil",
    collection: "Landscapes",
    orientation: "portrait",
    status: "available",
    dimensions: "16 × 20 in",
    price: "$1,450",
    description:
      "Light falling through a forest interior. The painting is less a place than a temperature—damp, green, and briefly gilded.",
    image: "/artworks/moss-light.svg",
  },
  {
    slug: "still-current",
    title: "Still Current",
    year: 2025,
    medium: "Digital Animation",
    technique: "Looping water-plane refraction",
    category: "digital",
    collection: "Motion Studies",
    orientation: "landscape",
    status: "available",
    description:
      "A surface that never quite settles. The animation holds a single, patient rhythm—current without destination.",
    image: "/artworks/still-current.svg",
  },
];

export function getArtwork(slug: string) {
  return artworks.find((artwork) => artwork.slug === slug);
}

export function getFeaturedArtworks() {
  return artworks.filter((artwork) => artwork.featured);
}

export function getArtworkSlugs() {
  return artworks.map((artwork) => artwork.slug);
}

export function categoryLabel(category: ArtworkCategory) {
  if (category === "oil") return "Oil & Canvas";
  if (category === "game") return "Game Design";
  return "Digital & Animation";
}

export const SITE = {
  name: "YOUR STUDIO",
  tagline: "INDEPENDENT ARTIST / DIGITAL & TRADITIONAL",
  email: "studio@example.com",
  instagramUrl: "https://instagram.com/",
  instagramHandle: "@yourstudio",
} as const;

export function inquiryMailto(artworkTitle: string) {
  const subject = encodeURIComponent(`Inquiry: ${artworkTitle}`);
  const body = encodeURIComponent(
    `Hello,\n\nI would like to inquire about “${artworkTitle}”.\n\nThank you.`,
  );
  return `mailto:${SITE.email}?subject=${subject}&body=${body}`;
}

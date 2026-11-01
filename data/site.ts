export const SITE = {
  name: "Studio",
  tagline: "INDEPENDENT ARTIST / DIGITAL & TRADITIONAL",
  email: "studio@example.com",
  instagramUrl: "https://instagram.com/",
  instagramHandle: "@yourstudio",
  paypalMe: "https://www.paypal.me/YOURHANDLE",
} as const;

export function inquiryMailto(artworkTitle: string) {
  const subject = encodeURIComponent(`Inquiry: ${artworkTitle}`);
  const body = encodeURIComponent(
    `Hello,\n\nI would like to inquire about “${artworkTitle}”.\n\nThank you.`,
  );
  return `mailto:${SITE.email}?subject=${subject}&body=${body}`;
}

export function paypalMeUrl(price?: string) {
  const base = SITE.paypalMe.replace(/\/$/, "");
  if (!price) return base;
  const amount = price.replace(/[^0-9]/g, "");
  if (!amount) return base;
  return `${base}/${amount}`;
}

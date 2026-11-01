import { redirect } from "next/navigation";
import { getArtworkSlugs } from "@/data/artworks";

export function generateStaticParams() {
  return getArtworkSlugs().map((slug) => ({ slug }));
}

export default async function GameArtworkRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/work/${slug}`);
}

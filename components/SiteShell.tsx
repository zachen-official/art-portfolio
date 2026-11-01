"use client";

import type { ReactNode } from "react";
import { useLayoutEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { getArtwork } from "@/data/artworks";
import { applySiteTheme, themeFromCategory } from "@/lib/theme";

function themeFromLocation(pathname: string, category: string | null) {
  const match = pathname.match(/^\/work\/([^/]+)/);
  if (match) {
    const artwork = getArtwork(match[1]);
    return themeFromCategory(artwork?.category);
  }
  if (pathname === "/work" || pathname.startsWith("/work/")) {
    return themeFromCategory(category);
  }
  return "game" as const;
}

export function SiteChrome({
  children,
  themeClass = "world-game",
}: {
  children: ReactNode;
  themeClass?: string;
}) {
  return (
    <div className={`flex min-h-dvh flex-col bg-paper text-forest ${themeClass}`}>
      <div className="grain" aria-hidden="true" />
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const theme = themeFromLocation(pathname, searchParams.get("category"));
  const themeClass = theme === "game" ? "world-game" : "world-studio";

  useLayoutEffect(() => {
    applySiteTheme(theme);
  }, [theme]);

  return <SiteChrome themeClass={themeClass}>{children}</SiteChrome>;
}

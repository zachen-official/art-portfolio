import type { Metadata } from "next";
import { Suspense } from "react";
import { Figtree, Fraunces } from "next/font/google";
import { SiteChrome, SiteShell } from "@/components/SiteShell";
import { SITE } from "@/data/site";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — Independent Artist`,
    template: `%s · ${SITE.name}`,
  },
  description:
    "Paintings, motion studies, and cinematic game design from a single studio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="world-game min-h-full">
        <Suspense fallback={<SiteChrome>{children}</SiteChrome>}>
          <SiteShell>{children}</SiteShell>
        </Suspense>
      </body>
    </html>
  );
}

export type SiteTheme = "studio" | "game";

export function themeFromCategory(category: string | null | undefined): SiteTheme {
  return category === "oil" ? "studio" : "game";
}

export function applySiteTheme(theme: SiteTheme) {
  if (typeof document === "undefined") return;
  const body = document.body;
  body.classList.remove("world-studio", "world-game");
  body.classList.add(theme === "studio" ? "world-studio" : "world-game");
}

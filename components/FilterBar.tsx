"use client";

export type WorkFilter = "digital" | "oil" | "game";

const FILTERS: { id: WorkFilter; label: string }[] = [
  { id: "digital", label: "Digital & Animation" },
  { id: "oil", label: "Oil & Canvas" },
  { id: "game", label: "Game Design" },
];

export function FilterBar({
  value,
  onChange,
}: {
  value: WorkFilter;
  onChange: (filter: WorkFilter) => void;
}) {
  return (
    <div className="flex flex-wrap gap-x-8 gap-y-3" role="tablist" aria-label="Artwork filters">
      {FILTERS.map((filter) => {
        const active = value === filter.id;
        return (
          <button
            key={filter.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(filter.id)}
            className={`text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${
              active
                ? "text-forest underline decoration-gold underline-offset-8"
                : "text-lilac hover:text-iris"
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}

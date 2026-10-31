"use client";

export type WorkFilter = "all" | "digital" | "oil" | "collections";

const FILTERS: { id: WorkFilter; label: string }[] = [
  { id: "all", label: "All Work" },
  { id: "digital", label: "Digital & Animation" },
  { id: "oil", label: "Oil & Canvas" },
  { id: "collections", label: "Collections" },
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
                ? "text-forest underline decoration-gold/70 underline-offset-8"
                : "text-forest/45 hover:text-forest/75"
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}

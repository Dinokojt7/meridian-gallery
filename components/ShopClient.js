"use client";

import { useMemo, useState } from "react";
import { artworks, CATEGORIES } from "@/lib/data";
import ArtworkCard from "@/components/ArtworkCard";

export default function ShopClient() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(
    () => (filter === "All" ? artworks : artworks.filter((a) => a.category === filter)),
    [filter]
  );

  return (
    <div className="mx-auto max-w-shell px-10 pb-24 pt-16">
      <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-muted">
        The collection
      </p>

      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <h1 className="font-serif text-[56px] font-medium leading-none text-ink">
          Available works
        </h1>
        <p className="mb-2 text-[13px] text-muted">
          {filtered.length} works · sorted by recently added
        </p>
      </div>

      <div className="mb-12 flex flex-wrap gap-2.5 border-b border-line pb-9">
        {CATEGORIES.map((c) => {
          const active = c === filter;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              className={
                active
                  ? "bg-ink px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.12em] text-surface"
                  : "border border-line px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.12em] text-ink-soft transition-colors hover:border-ink hover:text-ink"
              }
            >
              {c}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-x-10 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((a) => (
          <ArtworkCard key={a.id} artwork={a} />
        ))}
      </div>
    </div>
  );
}

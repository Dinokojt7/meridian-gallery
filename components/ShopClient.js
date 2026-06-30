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
    <div className="mx-auto max-w-shell px-5 pb-16 pt-12 sm:px-10 sm:pb-24 sm:pt-16">
      <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.24em] text-muted sm:mb-4">
        The collection
      </p>

      <div className="mb-8 flex flex-wrap items-end justify-between gap-4 sm:mb-10">
        <h1 className="font-serif text-[36px] font-medium leading-none text-ink sm:text-[48px] lg:text-[56px]">
          Available works
        </h1>
        <p className="mb-1 text-[13px] text-muted sm:mb-2">
          {filtered.length} works
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2 border-b border-line pb-7 sm:mb-12 sm:gap-2.5 sm:pb-9">
        {CATEGORIES.map((c) => {
          const active = c === filter;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              className={
                active
                  ? "bg-ink px-4 py-2 text-[11px] font-medium uppercase tracking-[0.12em] text-surface sm:px-5 sm:py-2.5"
                  : "border border-line px-4 py-2 text-[11px] font-medium uppercase tracking-[0.12em] text-ink-soft transition-colors hover:border-ink hover:text-ink sm:px-5 sm:py-2.5"
              }
            >
              {c}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-11 lg:grid-cols-3">
        {filtered.map((a) => (
          <ArtworkCard key={a.id} artwork={a} />
        ))}
      </div>
    </div>
  );
}

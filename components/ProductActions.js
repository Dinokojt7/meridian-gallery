"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function ProductActions({ artwork }) {
  const { addItem } = useCart();
  const available = !artwork.sold;

  return (
    <div className="mb-[18px] flex flex-wrap gap-3.5">
      {available && (
        <button
          type="button"
          onClick={() => addItem(artwork)}
          className="min-w-[200px] flex-1 bg-accent px-7 py-[18px] text-xs font-medium uppercase tracking-[0.14em] text-surface transition-colors hover:bg-accent-deep"
        >
          Add to cart
        </button>
      )}
      <Link
        href="/contact"
        className="min-w-[160px] flex-1 border border-ink px-7 py-[18px] text-center text-xs font-medium uppercase tracking-[0.14em] text-ink transition-colors hover:bg-ink hover:text-surface"
      >
        Enquire
      </Link>
    </div>
  );
}

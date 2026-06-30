"use client";

import { useCart } from "@/context/CartContext";

export default function Toast() {
  const { toast } = useCart();
  if (!toast) return null;

  return (
    <div
      style={{ animation: "mrd-toast 2.2s ease forwards" }}
      className="fixed bottom-8 left-1/2 z-[9999] -translate-x-1/2 whitespace-nowrap bg-ink px-6 py-3.5 text-xs font-medium uppercase tracking-[0.16em] text-surface shadow-xl"
    >
      Added to cart — {toast.title}
    </div>
  );
}

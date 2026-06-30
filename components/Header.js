"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";

const NAV = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  const isActive = (href) =>
    href === "/shop" ? pathname.startsWith("/shop") : pathname === href;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper">
      <div className="mx-auto flex h-[64px] max-w-shell items-center justify-between gap-6 px-5 sm:h-[74px] sm:px-10">
        <Link href="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-serif text-[22px] font-semibold tracking-[0.04em] text-ink sm:text-[26px]">
            MERIDIAN
          </span>
          <span className="mt-1 text-[8px] font-medium uppercase tracking-[0.28em] text-muted sm:mt-1.5 sm:text-[9px] sm:tracking-[0.34em]">
            Modern &amp; Contemporary
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="relative py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-ink-soft transition-colors hover:text-accent"
            >
              {n.label}
              {isActive(n.href) && (
                <span className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-accent" />
              )}
            </Link>
          ))}
          <Link
            href="/shop"
            className="relative flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:text-accent"
          >
            Cart
            {count > 0 && (
              <span className="inline-flex h-[19px] min-w-[19px] items-center justify-center rounded-full bg-accent px-1.5 text-[10px] font-semibold text-surface">
                {count}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile: cart + hamburger */}
        <div className="flex items-center gap-5 md:hidden">
          <Link href="/shop" className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.16em] text-ink">
            Cart
            {count > 0 && (
              <span className="inline-flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-accent px-1 text-[10px] font-semibold text-surface">
                {count}
              </span>
            )}
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex flex-col gap-[5px] py-1"
          >
            <span className={`block h-[1.5px] w-[22px] bg-ink transition-all duration-200 ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
            <span className={`block h-[1.5px] w-[22px] bg-ink transition-all duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-[1.5px] w-[22px] bg-ink transition-all duration-200 ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-line bg-paper px-5 pb-6 pt-4 md:hidden">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="flex items-center border-b border-line py-4 text-xs font-medium uppercase tracking-[0.16em] text-ink-soft"
            >
              {n.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

"use client";

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

  const isActive = (href) =>
    href === "/shop" ? pathname.startsWith("/shop") : pathname === href;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper">
      <div className="mx-auto flex h-[74px] max-w-shell items-center justify-between gap-6 px-10">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-serif text-[26px] font-semibold tracking-[0.04em] text-ink">
            MERIDIAN
          </span>
          <span className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.34em] text-muted">
            Modern &amp; Contemporary
          </span>
        </Link>

        <nav className="flex items-center gap-9">
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
      </div>
    </header>
  );
}

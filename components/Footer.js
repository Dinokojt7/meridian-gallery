import Link from "next/link";
import { gallery } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink text-footer-text">
      <div className="mx-auto max-w-shell px-5 pb-8 pt-12 sm:px-10 sm:pb-10 sm:pt-16">
        <div className="grid grid-cols-2 gap-8 border-b border-footer-divider pb-10 sm:gap-10 sm:pb-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <p className="mb-1.5 font-serif text-[24px] font-semibold tracking-[0.04em] text-surface sm:text-[26px]">
              MERIDIAN
            </p>
            <p className="mb-4 text-[9px] font-medium uppercase tracking-[0.34em] text-muted sm:mb-5">
              Modern &amp; Contemporary
            </p>
            <p className="max-w-[260px] text-sm leading-relaxed text-caption">
              Original paintings, sold directly from the gallery with worldwide shipping.
            </p>
          </div>

          <FooterCol title="Explore">
            <FooterLink href="/shop">The collection</FooterLink>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterCol>

          <FooterCol title="Visit">
            <p className="text-sm leading-[1.7] text-footer-text">
              {gallery.address[0]}<br />
              {gallery.address[1]}<br />
              Tue–Sat
            </p>
          </FooterCol>

          <FooterCol title="Follow">
            <FooterLink href="#">Instagram</FooterLink>
            <FooterLink href="#">Newsletter</FooterLink>
          </FooterCol>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-5 sm:gap-4 sm:pt-6">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Meridian Fine Art. All works © the respective artists.
          </p>
          <p className="text-xs text-muted">Privacy · Terms · Shipping</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }) {
  return (
    <div>
      <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-muted sm:mb-[18px]">{title}</p>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <Link href={href} className="text-sm text-footer-text transition-colors hover:text-surface">
      {children}
    </Link>
  );
}

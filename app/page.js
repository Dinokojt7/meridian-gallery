import Link from "next/link";
import Image from "next/image";
import ArtworkCard from "@/components/ArtworkCard";
import { featured, heroArtwork } from "@/lib/data";

export default function HomePage() {
  const hero = heroArtwork;
  const heroPriceShown = !hero.sold;

  return (
    <div>
      {/* Hero */}
      <section className="mx-auto grid max-w-shell grid-cols-1 items-center gap-[72px] px-10 pb-[70px] pt-[78px] lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <p className="mb-[26px] text-[11px] font-medium uppercase tracking-[0.24em] text-muted">
            Spring Catalogue · 2026
          </p>
          <h1 className="mb-[26px] font-serif text-[74px] font-medium leading-[1.02] tracking-[-0.01em] text-ink">
            Art worth
            <br />
            living with.
          </h1>
          <p className="mb-[38px] max-w-[430px] text-base leading-[1.65] text-ink-soft">
            Meridian represents a considered selection of modern and contemporary painters. Each
            work is an original, sold directly from the gallery with worldwide shipping and a
            certificate of authenticity.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2.5 bg-accent px-[30px] py-4 text-xs font-medium uppercase tracking-[0.14em] text-surface transition-colors hover:bg-accent-deep"
            >
              View the collection <span className="text-[15px]">&rarr;</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center border border-ink px-[30px] py-4 text-xs font-medium uppercase tracking-[0.14em] text-ink transition-colors hover:bg-ink hover:text-surface"
            >
              Book a viewing
            </Link>
          </div>
        </div>

        <Link href={`/shop/${hero.id}`} className="block cursor-pointer">
          <div className="relative aspect-[4/5] w-full overflow-hidden shadow-[0_30px_60px_-28px_rgba(28,26,23,0.4)]">
            <Image
              src={hero.image}
              alt={hero.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="mt-[18px] flex items-baseline justify-between gap-4">
            <div>
              <p className="mb-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
                Featured work
              </p>
              <p className="font-serif text-[22px] font-medium italic text-ink">{hero.title}</p>
              <p className="mt-1.5 text-[13px] text-muted">
                {hero.artist}, {hero.year}
              </p>
            </div>
            {heroPriceShown && (
              <p className="whitespace-nowrap text-[17px] font-medium text-ink">
                {hero.priceLabel}
              </p>
            )}
          </div>
        </Link>
      </section>

      {/* Selected works */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-shell px-10 pb-[84px] pt-[72px]">
          <div className="mb-[46px] flex items-end justify-between gap-6">
            <div>
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-muted">
                Currently available
              </p>
              <h2 className="font-serif text-[44px] font-medium leading-none text-ink">
                Selected works
              </h2>
            </div>
            <Link
              href="/shop"
              className="whitespace-nowrap border-b border-accent pb-1.5 text-xs font-medium uppercase tracking-[0.14em] text-accent"
            >
              View all works
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((a) => (
              <ArtworkCard key={a.id} artwork={a} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-ink text-surface">
        <div className="mx-auto max-w-[1040px] px-10 py-[104px] text-center">
          <p className="mb-[30px] text-[11px] font-medium uppercase tracking-[0.26em] text-caption">
            Our philosophy
          </p>
          <p className="font-serif text-[38px] font-normal italic leading-[1.35] text-surface">
            &ldquo;We collect the way we hope you will&nbsp;&mdash; slowly, and with the eye, never
            the trend. A single honest painting will outlast a wall of fashionable ones.&rdquo;
          </p>
          <p className="mt-[34px] text-[11px] font-medium uppercase tracking-[0.2em] text-caption">
            Eleanor Whitfield, Founder
          </p>
        </div>
      </section>

      {/* Visit */}
      <section className="mx-auto grid max-w-shell grid-cols-1 items-stretch border border-line md:grid-cols-2">
        <div className="border-b border-line px-14 py-[54px] md:border-b-0 md:border-r">
          <p className="mb-[18px] text-[11px] font-medium uppercase tracking-[0.24em] text-muted">
            Visit the gallery
          </p>
          <h3 className="mb-[22px] font-serif text-[34px] font-medium leading-tight text-ink">
            See the work in person
          </h3>
          <p className="mb-7 max-w-[380px] text-[15px] leading-[1.65] text-ink-soft">
            Our viewing rooms are open six days a week. Appointments are welcome but never
            required &mdash; come spend an hour with the paintings.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 border-b border-accent pb-1.5 text-xs font-medium uppercase tracking-[0.14em] text-accent"
          >
            Plan your visit <span>&rarr;</span>
          </Link>
        </div>
        <div className="flex flex-col justify-center gap-6 px-14 py-[54px]">
          <VisitRow label="Address" value="14 Loop Street, City Centre" />
          <VisitRow label="Hours" value="Tue – Fri, 10 – 6 · Sat, 10 – 2" />
          <VisitRow label="Enquiries" value="hello@meridian.art · +27 21 555 0148" />
        </div>
      </section>

      <div className="h-20" />
    </div>
  );
}

function VisitRow({ label, value }) {
  return (
    <div>
      <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-muted">{label}</p>
      <p className="text-[15px] leading-snug text-ink">{value}</p>
    </div>
  );
}

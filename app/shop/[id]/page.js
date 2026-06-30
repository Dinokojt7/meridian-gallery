import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ArtworkCard from "@/components/ArtworkCard";
import ProductActions from "@/components/ProductActions";
import { artworks, getArtwork, relatedTo } from "@/lib/data";

export function generateStaticParams() {
  return artworks.map((a) => ({ id: String(a.id) }));
}

export function generateMetadata({ params }) {
  const a = getArtwork(params.id);
  if (!a) return { title: "Work not found — Meridian" };
  return { title: `${a.title} — ${a.artist} — Meridian` };
}

export default function ProductPage({ params }) {
  const a = getArtwork(params.id);
  if (!a) notFound();

  const related = relatedTo(a.id, 3);
  const priceShown = !a.sold;
  const specs = [
    { k: "Artist", v: a.artist },
    { k: "Year", v: String(a.year) },
    { k: "Medium", v: a.medium },
    { k: "Dimensions", v: a.size },
    { k: "Signature", v: a.signed },
  ];

  return (
    <div className="mx-auto max-w-shell px-5 pb-16 pt-8 sm:px-10 sm:pb-24 sm:pt-10">
      {/* Breadcrumb */}
      <div className="mb-8 flex items-center gap-2.5 text-xs text-muted sm:mb-[42px]">
        <Link href="/shop" className="uppercase tracking-[0.12em] transition-colors hover:text-ink">
          The collection
        </Link>
        <span>/</span>
        <span className="text-ink truncate">{a.title}</span>
      </div>

      <div className="grid grid-cols-1 items-start gap-10 sm:gap-[72px] lg:grid-cols-[1.05fr_0.95fr]">
        {/* Image */}
        <div className="lg:sticky lg:top-[106px]">
          <div className="relative aspect-[4/5] w-full overflow-hidden shadow-[0_36px_70px_-34px_rgba(28,26,23,0.45)]">
            <Image
              src={a.image}
              alt={a.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            {a.sold && (
              <span className="absolute left-[14px] top-[14px] bg-ink px-2.5 py-1.5 text-[9px] font-medium uppercase tracking-[0.2em] text-surface sm:left-[18px] sm:top-[18px] sm:px-3 sm:py-2 sm:text-[10px]">
                Sold
              </span>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="pt-0 sm:pt-1.5">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-muted sm:mb-[18px]">
            {a.artist} · {a.year}
          </p>
          <h1 className="mb-6 font-serif text-[34px] font-medium italic leading-[1.08] text-ink sm:mb-8 sm:text-[42px] lg:text-[48px] lg:leading-[1.05]">
            {a.title}
          </h1>

          <dl className="border-t border-line">
            {specs.map((s) => (
              <div key={s.k} className="flex justify-between gap-6 border-b border-line py-3.5 sm:py-[15px]">
                <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">{s.k}</dt>
                <dd className="text-right text-sm text-ink">{s.v}</dd>
              </div>
            ))}
          </dl>

          {priceShown ? (
            <p className="my-6 font-serif text-[30px] font-medium text-ink sm:my-[26px] sm:mt-[30px] sm:text-[38px]">
              {a.priceLabel}
            </p>
          ) : (
            <p className="my-6 text-[15px] leading-relaxed text-ink-soft sm:my-[26px] sm:mt-[30px]">
              Price on request &mdash; please enquire for availability and viewing.
            </p>
          )}

          <ProductActions artwork={a} />

          <p className="mb-8 text-xs leading-relaxed text-muted sm:mb-[38px]">
            Free insured shipping worldwide · 14-day returns · Certificate of authenticity included.
          </p>

          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted sm:mb-3.5">
            About the work
          </p>
          <p className="text-[15px] leading-[1.7] text-ink-soft sm:text-[15.5px]">{a.description}</p>
        </div>
      </div>

      {/* You may also like */}
      <div className="mt-16 border-t border-line pt-10 sm:mt-24 sm:pt-12">
        <h2 className="mb-8 font-serif text-[26px] font-medium leading-none text-ink sm:mb-10 sm:text-[32px]">
          You may also like
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
          {related.map((r) => (
            <ArtworkCard key={r.id} artwork={r} />
          ))}
        </div>
      </div>
    </div>
  );
}

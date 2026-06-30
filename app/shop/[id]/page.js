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
    <div className="mx-auto max-w-shell px-10 pb-24 pt-10">
      {/* Breadcrumb */}
      <div className="mb-[42px] flex items-center gap-2.5 text-xs text-muted">
        <Link href="/shop" className="uppercase tracking-[0.12em] transition-colors hover:text-ink">
          The collection
        </Link>
        <span>/</span>
        <span className="text-ink">{a.title}</span>
      </div>

      <div className="grid grid-cols-1 items-start gap-[72px] lg:grid-cols-[1.05fr_0.95fr]">
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
              <span className="absolute left-[18px] top-[18px] bg-ink px-3 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-surface">
                Sold
              </span>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="pt-1.5">
          <p className="mb-[18px] text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
            {a.artist} · {a.year}
          </p>
          <h1 className="mb-8 font-serif text-[48px] font-medium italic leading-[1.05] text-ink">
            {a.title}
          </h1>

          <dl className="border-t border-line">
            {specs.map((s) => (
              <div key={s.k} className="flex justify-between gap-6 border-b border-line py-[15px]">
                <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">{s.k}</dt>
                <dd className="text-right text-sm text-ink">{s.v}</dd>
              </div>
            ))}
          </dl>

          {priceShown ? (
            <p className="my-[26px] mt-[30px] font-serif text-[38px] font-medium text-ink">
              {a.priceLabel}
            </p>
          ) : (
            <p className="my-[26px] mt-[30px] text-[15px] leading-relaxed text-ink-soft">
              Price on request &mdash; please enquire for availability and viewing.
            </p>
          )}

          <ProductActions artwork={a} />

          <p className="mb-[38px] text-xs leading-relaxed text-muted">
            Free insured shipping worldwide · 14-day returns · Certificate of authenticity included.
          </p>

          <p className="mb-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            About the work
          </p>
          <p className="text-[15.5px] leading-[1.7] text-ink-soft">{a.description}</p>
        </div>
      </div>

      {/* You may also like */}
      <div className="mt-24 border-t border-line pt-12">
        <h2 className="mb-10 font-serif text-[32px] font-medium leading-none text-ink">
          You may also like
        </h2>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((r) => (
            <ArtworkCard key={r.id} artwork={r} />
          ))}
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";

export default function ArtworkCard({ artwork, quiet = false }) {
  const a = artwork;
  const priceShown = !quiet && !a.sold;

  return (
    <Link href={`/shop/${a.id}`} className="group flex cursor-pointer flex-col gap-4">
      <div className="relative overflow-hidden bg-paper-2 transition-shadow duration-300 group-hover:shadow-[0_22px_44px_-26px_rgba(28,26,23,0.45)]">
        <div className="aspect-[4/5] w-full relative">
          <Image
            src={a.image}
            alt={a.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        {a.sold && (
          <span className="absolute left-3.5 top-3.5 bg-ink px-2.5 py-1.5 text-[9px] font-medium uppercase tracking-[0.18em] text-surface">
            Sold
          </span>
        )}
      </div>

      <div>
        <p className="mb-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
          {a.artist}
        </p>
        <p className="mb-2 font-serif text-[21px] italic leading-tight text-ink">{a.title}</p>
        <div className="flex items-baseline justify-between gap-3">
          <p className="text-[12.5px] text-muted">
            {a.medium} · {a.size}
          </p>
          {priceShown && (
            <p className="whitespace-nowrap text-sm font-medium text-ink">{a.priceLabel}</p>
          )}
          {a.sold && (
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">Sold</p>
          )}
        </div>
      </div>
    </Link>
  );
}

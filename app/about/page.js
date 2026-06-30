import Image from "next/image";
import { team } from "@/lib/data";

export const metadata = {
  title: "About — Meridian",
  description: "A small gallery with a long memory. Meet the people behind Meridian.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section className="mx-auto max-w-shell px-10 pb-16 pt-[78px]">
        <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.24em] text-muted">
          About the gallery
        </p>
        <h1 className="mb-11 max-w-[760px] font-serif text-[60px] font-medium leading-[1.04] text-ink">
          A small gallery with a long memory.
        </h1>
        <div className="grid max-w-[900px] grid-cols-1 gap-14 md:grid-cols-2">
          <p className="text-base leading-[1.7] text-ink-soft">
            Meridian was founded in 2009 around a simple conviction: that living with original art
            changes how you see everything else. We work with a tight circle of modern and
            contemporary painters, many of whom we have represented for over a decade.
          </p>
          <p className="text-base leading-[1.7] text-ink-soft">
            Every work we sell is an original, documented and delivered with a certificate of
            authenticity. We price openly, ship worldwide, and would rather you take a painting home
            for the right reasons than the fashionable ones.
          </p>
        </div>
      </section>

      {/* Gallery interior image */}
      <section className="mx-auto max-w-shell px-10 pb-[30px]">
        <div className="relative aspect-[24/9] w-full overflow-hidden">
          <Image
            src="/gallery-interior.png"
            alt="Meridian gallery interior"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-shell px-10 pb-24 pt-16">
        <p className="mb-3.5 text-[11px] font-medium uppercase tracking-[0.24em] text-muted">
          The team
        </p>
        <h2 className="mb-12 font-serif text-[40px] font-medium leading-none text-ink">
          Who you will meet
        </h2>
        <div className="grid grid-cols-2 gap-9 md:grid-cols-4">
          {team.map((t) => (
            <div key={t.name} className="flex flex-col gap-4">
              <div className="relative aspect-square w-full overflow-hidden bg-paper-2">
                {t.image ? (
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                    {t.name.split(" ")[0]}
                  </div>
                )}
              </div>
              <div>
                <p className="mb-1.5 font-serif text-[22px] font-semibold leading-tight text-ink">
                  {t.name}
                </p>
                <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
                  {t.role}
                </p>
                <p className="text-[13.5px] leading-relaxed text-muted">{t.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

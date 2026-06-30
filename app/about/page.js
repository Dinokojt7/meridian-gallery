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
      <section className="mx-auto max-w-shell px-5 pb-12 pt-12 sm:px-10 sm:pb-16 sm:pt-[78px]">
        <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.24em] text-muted sm:mb-6">
          About the gallery
        </p>
        <h1 className="mb-8 max-w-[760px] font-serif text-[36px] font-medium leading-[1.06] text-ink sm:mb-11 sm:text-[48px] lg:text-[60px] lg:leading-[1.04]">
          A small gallery with a long memory.
        </h1>
        <div className="grid max-w-[900px] grid-cols-1 gap-8 md:grid-cols-2 md:gap-14">
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
      <section className="mx-auto max-w-shell px-5 pb-6 sm:px-10 sm:pb-[30px]">
        <div className="relative w-full overflow-hidden" style={{ height: "clamp(320px, 45vw, 600px)" }}>
          <Image
            src="/gallery-interior.png"
            alt="Meridian gallery interior"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-shell px-5 pb-16 pt-12 sm:px-10 sm:pb-24 sm:pt-16">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.24em] text-muted sm:mb-3.5">
          The team
        </p>
        <h2 className="mb-10 font-serif text-[30px] font-medium leading-none text-ink sm:mb-12 sm:text-[40px]">
          Who you will meet
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:gap-9 md:grid-cols-4">
          {team.map((t) => (
            <div key={t.name} className="flex flex-col gap-3 sm:gap-4">
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
                <p className="mb-1 font-serif text-[18px] font-semibold leading-tight text-ink sm:mb-1.5 sm:text-[22px]">
                  {t.name}
                </p>
                <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.14em] text-accent sm:mb-3 sm:text-[11px]">
                  {t.role}
                </p>
                <p className="text-[12.5px] leading-relaxed text-muted sm:text-[13.5px]">{t.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

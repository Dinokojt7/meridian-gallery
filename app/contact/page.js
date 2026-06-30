import ContactForm from "@/components/ContactForm";
import { gallery } from "@/lib/data";

export const metadata = {
  title: "Contact — Meridian",
  description: "Say hello, or arrange a viewing at Meridian.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-shell px-10 pb-24 pt-[78px]">
      <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.24em] text-muted">Contact</p>
      <h1 className="mb-14 max-w-[680px] font-serif text-[60px] font-medium leading-[1.02] text-ink">
        Say hello, or arrange a viewing.
      </h1>

      <div className="grid grid-cols-1 items-start gap-[72px] lg:grid-cols-[0.85fr_1.15fr]">
        <div className="flex flex-col gap-[34px]">
          <ContactRow label="Visit">
            {gallery.address[0]}<br />{gallery.address[1]}
          </ContactRow>
          <ContactRow label="Hours">
            {gallery.hours[0]}<br />{gallery.hours[1]}
          </ContactRow>
          <ContactRow label="Get in touch">
            {gallery.email}<br />{gallery.phone}
          </ContactRow>

          {/* Simple map embed placeholder styled as a box */}
          <div className="mt-1.5 aspect-[3/2] w-full border border-line bg-paper-2 flex items-center justify-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
              14 Loop Street · City Centre
            </p>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}

function ContactRow({ label, children }) {
  return (
    <div>
      <p className="mb-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-muted">{label}</p>
      <p className="text-base leading-[1.55] text-ink">{children}</p>
    </div>
  );
}

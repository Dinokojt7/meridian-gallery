"use client";

import { useState } from "react";

const fieldClass =
  "mt-2.5 w-full border border-line bg-paper px-3.5 py-3 text-[15px] text-ink outline-none transition-colors focus:border-accent";
const labelClass = "text-[10px] font-medium uppercase tracking-[0.16em] text-muted";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-line bg-surface px-[46px] py-[44px]">
        <div className="py-8 text-center">
          <p className="mb-4 font-serif text-[34px] font-medium italic text-ink">Thank you.</p>
          <p className="mx-auto max-w-[340px] text-[15px] leading-relaxed text-ink-soft">
            Your message is on its way to the gallery. We reply to every enquiry within one
            business day.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-line bg-surface px-[46px] py-[44px]">
      <div className="mb-[22px] grid grid-cols-1 gap-[22px] sm:grid-cols-2">
        <label className="block">
          <span className={labelClass}>Name</span>
          <input type="text" required placeholder="Your name" className={fieldClass} />
        </label>
        <label className="block">
          <span className={labelClass}>Email</span>
          <input type="email" required placeholder="you@email.com" className={fieldClass} />
        </label>
      </div>

      <label className="mb-[22px] block">
        <span className={labelClass}>Subject</span>
        <input
          type="text"
          placeholder="e.g. Viewing request, work enquiry"
          className={fieldClass}
        />
      </label>

      <label className="mb-7 block">
        <span className={labelClass}>Message</span>
        <textarea
          rows={5}
          required
          placeholder="Tell us what you're looking for…"
          className={`${fieldClass} resize-y leading-relaxed`}
        />
      </label>

      <button
        type="submit"
        className="inline-flex items-center gap-2.5 bg-accent px-8 py-[17px] text-xs font-medium uppercase tracking-[0.14em] text-surface transition-colors hover:bg-accent-deep"
      >
        Send message <span className="text-[15px]">&rarr;</span>
      </button>
    </form>
  );
}

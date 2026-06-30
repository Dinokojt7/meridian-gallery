"use client";

import { useState } from "react";

const fieldClass =
  "mt-2 w-full border border-line bg-paper px-3.5 py-3 text-[15px] text-ink outline-none transition-colors focus:border-accent sm:mt-2.5";
const labelClass = "text-[10px] font-medium uppercase tracking-[0.16em] text-muted";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-line bg-surface px-6 py-10 sm:px-[46px] sm:py-[44px]">
        <div className="py-6 text-center sm:py-8">
          <p className="mb-4 font-serif text-[30px] font-medium italic text-ink sm:text-[34px]">Thank you.</p>
          <p className="mx-auto max-w-[340px] text-[15px] leading-relaxed text-ink-soft">
            Your message is on its way to the gallery. We reply to every enquiry within one
            business day.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-line bg-surface px-6 py-8 sm:px-[46px] sm:py-[44px]">
      <div className="mb-5 grid grid-cols-1 gap-5 sm:mb-[22px] sm:grid-cols-2 sm:gap-[22px]">
        <label className="block">
          <span className={labelClass}>Name</span>
          <input type="text" required placeholder="Your name" className={fieldClass} />
        </label>
        <label className="block">
          <span className={labelClass}>Email</span>
          <input type="email" required placeholder="you@email.com" className={fieldClass} />
        </label>
      </div>

      <label className="mb-5 block sm:mb-[22px]">
        <span className={labelClass}>Subject</span>
        <input
          type="text"
          placeholder="e.g. Viewing request, work enquiry"
          className={fieldClass}
        />
      </label>

      <label className="mb-6 block sm:mb-7">
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
        className="inline-flex w-full items-center justify-center gap-2.5 bg-accent px-8 py-4 text-xs font-medium uppercase tracking-[0.14em] text-surface transition-colors hover:bg-accent-deep sm:w-auto sm:py-[17px]"
      >
        Send message <span className="text-[15px]">&rarr;</span>
      </button>
    </form>
  );
}

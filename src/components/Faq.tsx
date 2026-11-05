"use client";

import { useState, type ReactNode } from "react";

export type FaqItem = { question: string; answer: string };

export function Faq({
  items,
  title = "Questions, answered plainly",
  intro,
}: {
  items: FaqItem[];
  title?: string;
  intro?: ReactNode;
}) {
  const [open, setOpen] = useState(0);

  return (
    <section className="section section-band">
      <div className="container">
        <h2 className="h2 mb-3">{title}</h2>
        {intro && <p className="lead mb-10 mt-0">{intro}</p>}
        <div className="divide-y divide-[var(--line2)] border-y border-[var(--line2)]">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  className="faq-q flex min-h-16 w-full items-center justify-between gap-4 bg-transparent py-4 text-left font-display text-[20px] font-bold text-ink sm:text-[22px]"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{item.question}</span>
                  <span aria-hidden className="text-2xl text-accent-ink">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="pb-6 text-[17px] leading-relaxed text-body" role="region">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

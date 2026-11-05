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
        <div className="overflow-hidden rounded-[22px] border border-line bg-card shadow-[var(--shadow-card)]">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.question}
                className={i > 0 ? "border-t border-line" : undefined}
              >
                <button
                  type="button"
                  className="faq-q flex min-h-16 w-full items-center justify-between gap-4 bg-transparent px-5 py-4 text-left font-display text-[20px] font-bold text-ink transition hover:bg-tint2 sm:px-6 sm:text-[22px]"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{item.question}</span>
                  <span
                    aria-hidden
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-tint text-lg text-accent-ink"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div
                    className="px-5 pb-6 text-[17px] leading-relaxed text-body sm:px-6"
                    role="region"
                  >
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

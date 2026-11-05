import type { ReactNode } from "react";

export function ClosingCta({
  title,
  body,
  actions,
}: {
  title: string;
  body: string;
  actions: ReactNode;
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="rounded-[24px] bg-charcoal px-6 py-12 text-center sm:px-12 sm:py-16">
          <h2 className="h2 mx-auto mb-4 max-w-[16em] text-cream">{title}</h2>
          <p className="mx-auto mb-8 max-w-[36em] text-[17px] leading-relaxed text-[#c9ccc2]">
            {body}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">{actions}</div>
        </div>
      </div>
    </section>
  );
}

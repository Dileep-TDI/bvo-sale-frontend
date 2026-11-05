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
        <div className="rounded-[28px] border border-line bg-gradient-to-br from-[#fbf6f6] via-card to-[#f0e4e4] px-6 py-12 text-center shadow-[var(--shadow-soft)] sm:px-12 sm:py-16">
          <h2 className="h2 mx-auto mb-4 max-w-[16em]">{title}</h2>
          <p className="mx-auto mb-8 max-w-[36em] text-[17px] leading-relaxed text-body">
            {body}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">{actions}</div>
        </div>
      </div>
    </section>
  );
}

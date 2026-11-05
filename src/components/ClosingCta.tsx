import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

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
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-line bg-white px-6 py-14 text-center shadow-[var(--shadow-soft)] sm:px-14 sm:py-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-burgundy to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(140,58,66,0.12),transparent_70%)]"
            />
            <h2 className="h2 relative mx-auto mb-4 max-w-[16em]">{title}</h2>
            <p className="relative mx-auto mb-9 max-w-[34em] text-[17px] leading-relaxed text-body">
              {body}
            </p>
            <div className="relative flex flex-wrap items-center justify-center gap-3">
              {actions}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

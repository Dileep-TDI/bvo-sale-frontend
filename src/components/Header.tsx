"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/sell", label: "Sell" },
  { href: "/exit-ready", label: "Exit Ready" },
  { href: "/buy", label: "Buy" },
  { href: "/accountants-advisers", label: "For accountants" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isCurrent = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`site-nav sticky top-0 z-50 border-b text-ink transition-[background,box-shadow,border-color] duration-300 ${
        scrolled
          ? "border-line bg-white/90 shadow-[0_8px_30px_rgba(21,22,18,0.06)] backdrop-blur-xl"
          : "border-transparent bg-[color-mix(in_srgb,var(--paper)_80%,white)]/80 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between gap-5 px-4 sm:px-6">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-3 !text-ink no-underline hover:!text-ink"
          onClick={() => setOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/brand/bvosales-mark.svg"
            alt="BVO"
            width={40}
            height={42}
            style={{ height: 42, width: "auto", display: "block", maxWidth: 40 }}
            className="transition-transform duration-300 group-hover:scale-[1.03]"
          />
          <span className="hidden border-l border-line2 pl-3 text-[22px] leading-none tracking-tight text-ink min-[480px]:inline">
            sales
          </span>
        </Link>

        <nav className="hidden items-center gap-7 min-[1100px]:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isCurrent(link.href) ? "page" : undefined}
              className={`relative whitespace-nowrap py-2 text-[14px] font-medium tracking-[0.01em] no-underline transition-colors ${
                isCurrent(link.href) ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {link.label}
              <span
                aria-hidden
                className={`absolute inset-x-0 -bottom-0.5 h-[2px] origin-left rounded-full bg-burgundy transition-transform duration-300 ${
                  isCurrent(link.href) ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href="tel:1300282583"
            className="hidden text-[14px] font-medium text-muted no-underline transition-colors hover:text-ink min-[1320px]:inline"
          >
            1300 282 583
          </a>
          <Link
            href="/start"
            className="inline-flex min-h-11 items-center rounded-full bg-burgundy px-5 text-[14px] font-semibold !text-white no-underline shadow-[0_8px_20px_rgba(140,58,66,0.22)] transition duration-200 hover:-translate-y-px hover:bg-burgundy-dark hover:!text-white hover:shadow-[0_12px_28px_rgba(140,58,66,0.28)]"
          >
            <span className="hidden min-[480px]:inline">Start the questionnaire</span>
            <span className="min-[480px]:hidden">Get started</span>
          </Link>
          <button
            type="button"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-card px-4 text-[14px] font-semibold text-ink min-[1100px]:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="animate-[fadeSlide_0.35s_var(--ease-out)] border-t border-line bg-card px-6 pb-5 pt-2 min-[1100px]:hidden"
        >
          <div className="mx-auto flex max-w-[1200px] flex-col">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isCurrent(link.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`flex min-h-[52px] items-center rounded-[10px] px-3 text-[17px] no-underline ${
                  isCurrent(link.href)
                    ? "bg-tint font-bold text-ink"
                    : "font-medium text-muted hover:bg-band hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:1300282583"
              className="flex min-h-[52px] items-center rounded-[10px] px-3 text-[17px] font-semibold text-burgundy no-underline"
            >
              Call 1300 282 583
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

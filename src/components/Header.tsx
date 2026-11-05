"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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

  const isCurrent = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="site-nav sticky top-0 z-50 border-b border-line bg-[color-mix(in_srgb,var(--paper)_88%,white)]/90 text-ink backdrop-blur-md">
      <div className="mx-auto flex min-h-[88px] max-w-[1280px] items-center justify-between gap-5 px-4 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 !text-ink no-underline hover:!text-ink"
          onClick={() => setOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/brand/bvosales-mark.svg"
            alt="BVO"
            width={44}
            height={46}
            style={{ height: 46, width: "auto", display: "block", maxWidth: 44 }}
          />
          <span className="hidden border-l border-line2 pl-3 text-[25px] leading-none tracking-tight text-ink min-[480px]:inline">
            sales
          </span>
        </Link>

        <nav className="hidden items-center gap-[22px] min-[1100px]:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isCurrent(link.href) ? "page" : undefined}
              className={`whitespace-nowrap border-b-2 py-2.5 text-[15px] font-medium no-underline transition ${
                isCurrent(link.href)
                  ? "border-burgundy text-ink"
                  : "border-transparent text-muted hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3.5">
          <a
            href="tel:1300282583"
            className="hidden text-[15px] font-medium text-muted no-underline hover:text-ink min-[1320px]:inline"
          >
            1300 282 583
          </a>
          <Link
            href="/start"
            className="inline-flex min-h-11 items-center rounded-full bg-burgundy px-5 text-[15px] font-semibold !text-white no-underline hover:bg-burgundy-dark hover:!text-white"
          >
            <span className="hidden min-[480px]:inline">Start the questionnaire</span>
            <span className="min-[480px]:hidden">Get started</span>
          </Link>
          <button
            type="button"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line2 bg-card px-4 text-[15px] font-semibold text-ink min-[1100px]:hidden"
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
          className="border-t border-line bg-card px-6 pb-5 pt-2 min-[1100px]:hidden"
        >
          <div className="mx-auto flex max-w-[1280px] flex-col">
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

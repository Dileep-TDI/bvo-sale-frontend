import Link from "next/link";

const explore = [
  { href: "/sell", label: "Sell your business" },
  { href: "/exit-ready", label: "Exit Ready" },
  { href: "/buy", label: "Buy a business" },
  { href: "/accountants-advisers", label: "For accountants and advisers" },
  { href: "/about", label: "About and our team" },
  { href: "/insights", label: "Insights" },
];

const group = [
  { href: "https://www.businessvaluations.online/", label: "Business Valuations Online", color: "#76bc43" },
  { href: "https://www.bvopro.online/", label: "BVOPro", color: "#a9c0d3" },
  { href: "https://www.bvo.ai/", label: "BVOai", color: "#2e86f5" },
];

export function Footer() {
  return (
    <footer className="ft bg-[#1a1b19] text-[#c9ccc2]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-14 px-4 pb-10 pt-20 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex min-w-0 flex-col gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 !text-[#f3f4ec] no-underline hover:!text-[#f3f4ec] hover:no-underline"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/brand/bvosales-mark.svg"
                alt="BVOSales"
                width={49}
                height={52}
                style={{ height: 52, width: "auto", display: "block", maxWidth: 49 }}
              />
              <span
                aria-hidden
                className="border-l border-[#6b6e66] py-1 pl-3 text-[28px] font-normal leading-none tracking-tight"
              >
                sales
              </span>
            </Link>
            <p className="m-0 max-w-[22em] text-[15px] leading-[1.6]">
              Business sales backed by valuation expertise. Prepare. Market. Sell.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-[15px]">
            <h2 className="m-0 mb-1 text-[15px] font-bold text-[#f3f4ec]">Explore</h2>
            {explore.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3 text-[15px]">
            <h2 className="m-0 mb-1 text-[15px] font-bold text-[#f3f4ec]">Contact</h2>
            <a href="tel:1300282583">1300 282 583</a>
            <span>Level 8/200 Crown St, Wollongong NSW 2500</span>
            <Link href="/start">Start the questionnaire</Link>
          </div>

          <div className="flex flex-col gap-3 text-[15px]">
            <h2 className="m-0 mb-1 text-[15px] font-bold text-[#f3f4ec]">The BVO Group</h2>
            {group.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex items-center gap-2.5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  className="inline-block shrink-0 rounded-full"
                  style={{ width: 10, height: 10, background: item.color }}
                  aria-hidden
                />
                {item.label}
              </a>
            ))}
            <span className="inline-flex items-center gap-2.5 text-[#f3f4ec]">
              <span
                className="inline-block shrink-0 rounded-full"
                style={{ width: 10, height: 10, background: "#d2b9ba" }}
                aria-hidden
              />
              BVOSales
            </span>
          </div>
        </div>

        <p className="m-0 max-w-[62em] text-[13px] leading-[1.6] text-[#9a9d94]">
          Information on this site is general in nature and does not take your personal circumstances into
          account. Speak to your accountant or tax adviser before acting on anything relating to tax or
          structure. Business sales are conducted by licensed brokers of Morgan Business Sales. [Licence details
          to confirm.]
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#2c2f2a] pt-6 text-[13px] text-[#9a9d94]">
          <span>© 2026 BVO. All rights reserved. ABN 43 635 775 914</span>
          <span className="flex gap-5">
            <Link href="/privacy">Privacy policy</Link>
            <Link href="/terms">Terms and conditions</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

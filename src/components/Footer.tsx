import Image from "next/image";
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
  { href: "/", label: "BVOSales", color: "#8b4a4c" },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-[#c9ccc2]">
      <div className="container grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="mb-4 inline-flex items-center gap-3 text-cream no-underline">
            <Image src="/assets/brand/bvosales-mark.svg" alt="BVO" width={40} height={40} />
            <span className="border-l border-[#6b6e66] pl-3 text-[22px] leading-none">sales</span>
          </Link>
          <p className="mt-4 max-w-[22em] text-[15px] leading-relaxed text-[#a7aaa1]">
            Business sales backed by valuation expertise. Prepare. Market. Sell.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-[15px] font-semibold text-cream">Explore</h2>
          <ul className="m-0 list-none space-y-2.5 p-0">
            {explore.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[15px] text-[#c9ccc2] no-underline hover:text-white hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-[15px] font-semibold text-cream">Contact</h2>
          <ul className="m-0 list-none space-y-2.5 p-0 text-[15px]">
            <li>
              <a href="tel:1300282583" className="text-[#c9ccc2] no-underline hover:text-white">
                1300 282 583
              </a>
            </li>
            <li className="text-[#a7aaa1]">Level 8/200 Crown St, Wollongong NSW 2500</li>
            <li>
              <Link href="/start" className="text-[#c9ccc2] no-underline hover:text-white hover:underline">
                Start the questionnaire
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-[15px] font-semibold text-cream">The BVO Group</h2>
          <ul className="m-0 list-none space-y-2.5 p-0">
            {group.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="inline-flex items-center gap-2.5 text-[15px] text-[#c9ccc2] no-underline hover:text-white"
                  {...(item.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <span
                    className="inline-block h-2.5 w-2.5 rounded-full"
                    style={{ background: item.color }}
                    aria-hidden
                  />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container border-t border-[#2c2f2a] py-6 text-[13px] leading-relaxed text-[#9a9d94]">
        <p className="m-0 max-w-[70em]">
          Information on this site is general in nature and does not take your personal circumstances into account.
          Speak to your accountant or tax adviser before acting on anything relating to tax or structure. Business
          sales are conducted by licensed brokers of Morgan Business Sales. Licence details to confirm.
        </p>
        <p className="mt-4 mb-0 flex flex-wrap gap-x-3 gap-y-1">
          <span>© 2026 BVO. All rights reserved.</span>
          <span>ABN 43 635 775 914</span>
          <Link href="/privacy" className="text-[#9a9d94] hover:text-white">
            Privacy policy
          </Link>
          <Link href="/terms" className="text-[#9a9d94] hover:text-white">
            Terms and conditions
          </Link>
        </p>
      </div>
    </footer>
  );
}

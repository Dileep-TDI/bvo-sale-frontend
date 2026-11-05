import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start the questionnaire",
  description:
    "Tell us which best describes you so we can ask the right questions. Confidential and takes about a minute.",
};

const options = [
  {
    href: "/sell/questionnaire",
    main: "I own a business and I’m thinking of selling",
    sub: "For business owners",
  },
  {
    href: "/exit-ready",
    main: "I’m not ready to sell yet, but want to get there",
    sub: "See your value, risks and what to fix first",
  },
  {
    href: "/buy/questionnaire",
    main: "I’m looking to buy a business",
    sub: "For buyers and investors",
  },
  {
    href: "/accountants-advisers/questionnaire",
    main: "I’m an accountant or adviser helping a client",
    sub: "For accountants, advisers and brokers",
  },
];

export default function StartPage() {
  return (
    <div className="start-stage flex flex-col items-center gap-6 bg-stage px-3 pb-[72px] pt-16">
      <div className="relative aspect-square w-[min(680px,calc(100vw-24px))] [container-type:inline-size]">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="#2f332d"
            strokeWidth="1.2"
          />
        </svg>
        <div className="absolute inset-[15%] flex items-center justify-center">
          <div className="flex w-full flex-col items-center gap-[clamp(10px,2.6cqw,18px)] text-center animate-[sIn_0.6s_cubic-bezier(.2,.8,.2,1)_both]">
            <p className="m-0 text-[clamp(11px,1.9cqw,13px)] font-semibold text-rose">
              Before we start
            </p>
            <h1 className="m-0 font-display text-[clamp(20px,4.6cqw,32px)] font-bold leading-[1.12] tracking-tight text-cream">
              Which best describes you?
            </h1>
            <p className="m-0 text-[clamp(12px,2.1cqw,14px)] leading-relaxed text-[#a7aaa1]">
              So we can ask you the right questions. It takes about a minute, and it’s confidential.
            </p>
            <div className="flex w-full max-w-[400px] flex-col gap-[clamp(6px,1.4cqw,10px)]">
              {options.map((opt) => (
                <Link
                  key={opt.href}
                  href={opt.href}
                  className="flex flex-col items-start gap-0.5 rounded-[18px] border border-[#4a4d46] px-[clamp(14px,3cqw,20px)] py-[clamp(9px,1.8cqw,14px)] text-left text-cream no-underline transition hover:border-rose hover:bg-rose hover:text-charcoal"
                >
                  <span className="text-[clamp(14px,2.5cqw,16px)] font-semibold">{opt.main}</span>
                  <span className="text-[clamp(12px,2cqw,13px)] text-[#a7aaa1] group-hover:text-[#4a2b2c]">
                    {opt.sub}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="m-0 text-center text-[14px] text-[#9a9d94]">
        Prefer to talk? Call{" "}
        <a href="tel:1300282583" className="text-rose no-underline hover:underline">
          1300 282 583
        </a>
        .
      </p>
    </div>
  );
}

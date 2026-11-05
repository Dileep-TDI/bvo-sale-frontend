import Link from "next/link";
import type { ReactNode } from "react";

type Variant =
  | "burgundy"
  | "rose"
  | "charcoal"
  | "cream"
  | "line"
  | "blue"
  | "green"
  | "outline-rose";

const styles: Record<Variant, string> = {
  burgundy:
    "bg-burgundy !text-white shadow-[0_10px_24px_rgba(140,58,66,0.22)] hover:bg-burgundy-dark hover:!text-white hover:shadow-[0_14px_30px_rgba(140,58,66,0.28)]",
  rose: "bg-rose !text-charcoal hover:brightness-105 hover:!text-charcoal",
  charcoal:
    "bg-charcoal !text-cream hover:bg-[#2a2d28] hover:!text-cream",
  cream: "bg-cream !text-charcoal hover:bg-white hover:!text-charcoal",
  line: "border border-white/25 !text-cream hover:bg-white/8 hover:!text-cream",
  blue: "bg-bvoai !text-white hover:bg-[#1f6fd6] hover:!text-white",
  green: "bg-bvo-green-safe !text-white hover:bg-[#5f9c33] hover:!text-white",
  "outline-rose":
    "border border-rose !text-rose hover:bg-rose hover:!text-charcoal",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "burgundy",
  className = "",
  external,
}: Props) {
  const cls = `inline-flex items-center justify-center min-h-[50px] px-7 rounded-full font-semibold text-[15px] no-underline transition duration-250 ease-[cubic-bezier(0.22,0.8,0.24,1)] hover:-translate-y-0.5 active:translate-y-0 ${styles[variant]} ${className}`;

  if (external || href.startsWith("http") || href.startsWith("tel:")) {
    return (
      <a
        href={href}
        className={cls}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

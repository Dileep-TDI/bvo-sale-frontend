import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BVOSales | Business sales backed by valuation expertise",
    template: "%s | BVOSales",
  },
  description:
    "Sell your business with a valuer, broker and marketer on one team. Backed by Business Valuations Online and 2,000+ valuations.",
  metadataBase: new URL("https://bvosales.com.au"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AU" className={hanken.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

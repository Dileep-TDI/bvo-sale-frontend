import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { InsightsFilter } from "@/components/InsightsFilter";
import { getAllArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Business Sale Insights | Selling, Buying & Exit Planning",
  description:
    "Plain-English articles from Brett Goodyer and the BVOSales team on selling, buying and getting the most from an exit.",
};

export default function InsightsPage() {
  const articles = getAllArticles().map(({ content: _content, ...rest }) => rest);
  const featured =
    articles.find((a) => a.slug === "selling-a-business-in-2026") || articles[0];

  return (
    <>
      <header className="hero-shell pb-10">
        <div className="container hero-anim">
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Insights" }]} />
          <h1 className="display h1-page mt-2 mb-4 max-w-[14em]">
            Insights for owners, buyers and advisers
          </h1>
          <p className="lead mb-0">
            Plain-English articles on selling, buying and getting the most from an exit, from the BVOSales team.
          </p>
        </div>
      </header>

      <section className="section pt-0">
        <div className="container reveal">
          <InsightsFilter articles={articles} featured={featured} />
        </div>
      </section>

      <section className="section section-band">
        <div className="container max-w-[640px] text-center">
          <h2 className="h2 mb-3">Stay in the loop</h2>
          <p className="mb-8 text-[16px] text-body">
            What’s moving prices, what buyers are paying for and the occasional war story. No spam.
          </p>
          <form className="flex flex-col gap-3 sm:flex-row" action="#" method="post">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              required
              placeholder="Email address"
              className="min-h-12 flex-1 rounded-full border border-line2 bg-card px-5 text-[16px] text-ink outline-none focus:border-burgundy"
            />
            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-burgundy px-8 text-[15px] font-semibold text-white hover:bg-burgundy-dark"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

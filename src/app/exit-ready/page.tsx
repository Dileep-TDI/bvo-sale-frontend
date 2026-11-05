import Link from "next/link";
import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { ClosingCta } from "@/components/ClosingCta";
import { Faq } from "@/components/Faq";
import { MethodCards } from "@/components/MethodCards";
import { ReadinessCheck } from "@/components/ReadinessCheck";
import { StatsBand } from "@/components/StatsBand";
import { getArticlesByAudience } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Exit Readiness: Get Your Business Ready to Sell",
  description:
    "Not ready to sell yet? See what your business is worth today, the risks buyers would discount you for and what to fix first, with BVOai or a formal BVO valuation.",
};

const faqs = [
  {
    question: "What is the difference between BVOai and a formal valuation?",
    answer:
      "BVOai is a subscription platform that tracks your value live from your accounting software, using the same methodology as our formal valuations. A formal valuation from Business Valuations Online is prepared and signed off by a qualified valuer to APES 225 standards, and can be relied on for a sale, tax, family law or disputes.",
  },
  {
    question: "How long does it take to get a business ready to sell?",
    answer:
      "It depends on what needs fixing. Cleaning up the books can take a few months. Reducing owner reliance or spreading customer risk can take a year or more. The earlier you start, the more value you can add.",
  },
  {
    question: "Will you push me to sell?",
    answer:
      "No. Exit Ready is about building value at your pace. When you are ready, BVOSales can take the business to market, but there is no obligation.",
  },
  {
    question: "Can my accountant be involved?",
    answer:
      "Yes. Your accountant can join BVOai at no cost and see the same live numbers, and they are welcome to work with us on a formal valuation.",
  },
  {
    question: "What does it cost?",
    answer:
      "BVOai starts from $59 a month, with your first week for $1 and no lock-in contract. Formal valuation fees depend on the business and the purpose of the valuation. A formal BVO valuation also gets you a discount on your information memorandum when you sell with BVOSales.",
  },
  {
    question: "What risks will I find out about?",
    answer:
      "Common ones include owner reliance, customer concentration, the quality of your financial records, lease and contract terms, key staff and your earnings trend. Each is ranked by what it is likely costing you on price.",
  },
];

export default function ExitReadyPage() {
  const articles = getArticlesByAudience("exit-ready");

  return (
    <>
      <header className="hero-shell pb-16">
        <div className="container hero-anim grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <Breadcrumbs
              items={[
                { href: "/", label: "Home" },
                { href: "/sell", label: "Sell" },
                { label: "Exit Ready" },
              ]}
            />
            <p className="eyebrow">Exit Ready</p>
            <h1 className="display h1-page mt-3 mb-6 max-w-[14em]">
              Not ready to sell yet? Let’s get you there.
            </h1>
            <p className="lead mb-8">
              Most businesses aren’t sale-ready the day the owner decides to sell. We’ll show you what the
              business is worth today, the risks a buyer would discount you for, and what to fix first. So when
              you do sell, you get paid for what you’ve built.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/exit-ready#check" variant="burgundy">
                Check your readiness
              </Button>
              <Button href="/exit-ready#routes" variant="charcoal">
                See your options
              </Button>
            </div>
          </div>

          <aside className="rounded-[22px] border border-line bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <p className="m-0 text-[14px] font-semibold text-accent-ink">Risk snapshot</p>
              <span className="rounded-full bg-tint px-3 py-1 text-[12px] font-semibold text-tint-ink">
                Example only
              </span>
            </div>
            {[
              ["Owner reliance", "High", 90],
              ["Customer concentration", "Medium", 55],
              ["Quality of financial records", "Medium", 50],
              ["Lease and contracts", "Low", 25],
            ].map(([label, level, width]) => (
              <div key={String(label)} className="mb-4">
                <div className="mb-1.5 flex justify-between text-[14px]">
                  <span className="text-body">{label}</span>
                  <strong className="text-ink">{level}</strong>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-band">
                  <div
                    className="h-full rounded-full bg-burgundy"
                    style={{ width: `${width}%` }}
                  />
                </div>
              </div>
            ))}
            <p className="mb-0 mt-5 text-[14px] leading-relaxed text-muted">
              Every risk is ranked by what it’s likely costing you, so you know what to fix first.
            </p>
          </aside>
        </div>
      </header>

      <StatsBand
        lead="Built on the same work behind every BVO valuation"
        stats={[
          { value: "2,000+", label: "businesses valued" },
          { value: "30+", label: "years combined valuation experience" },
          { value: "$1", label: "to try BVOai for your first week" },
        ]}
      />

      <section className="section">
        <div className="container reveal grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="h2 mb-5">Most owners find out what’s wrong when a buyer tells them.</h2>
            <p className="lead mt-0 mb-4">
              By then it’s too late to fix. The issues come out in due diligence, and each one comes off the
              price or kills the deal.
            </p>
            <p className="mb-0 text-[17px] leading-relaxed text-body">
              Exit Ready flips that around. You see the business the way a buyer will, while there’s still time
              to do something about it. Fix the right things in the right order, and the business is worth more
              when you’re ready to go.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              ["Baseline", "What the business is worth today, and why."],
              ["Risks", "What a buyer would discount you for, ranked by cost."],
              ["Plan", "What to fix first, and what fixing it could be worth."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-[18px] border border-line bg-card p-5">
                <h3 className="m-0 font-display text-[22px] font-bold text-ink">{title}</h3>
                <p className="mt-2 mb-0 text-[15px] text-body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MethodCards
        eyebrow="How Exit Ready works"
        title="Measure. Fix. Exit."
        cards={[
          {
            label: "Step 1",
            title: "Measure",
            body: "Get your value and risk profile, either live from your books with BVOai or through a formal valuation from Business Valuations Online.",
          },
          {
            label: "Step 2",
            title: "Fix",
            body: "Work through the issues in order of what they’re costing you. Track how your value moves over the next 12, 24 or 36 months.",
          },
          {
            label: "Step 3",
            title: "Exit",
            body: "When you’re ready, BVOSales takes the business to market with the numbers already done. A formal BVO valuation also gets you a discount on your information memorandum.",
          },
        ]}
      />

      <section id="routes" className="section">
        <div className="container reveal">
          <p className="eyebrow">Two ways to start</p>
          <h2 className="h2 mt-3 mb-10">Track it yourself, or get it done properly</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-[22px] border border-line bg-card p-7">
              <p className="m-0 text-[14px] font-semibold text-bvoai">BVOai</p>
              <h3 className="mt-3 mb-3 font-display text-[26px] font-bold text-ink">
                Track and improve your value, live
              </h3>
              <p className="mb-5 text-[16px] leading-relaxed text-body">
                Connect Xero, QuickBooks or MYOB and see what the business is worth, what’s driving it and what
                to fix next. Best if you have a year or more before you sell.
              </p>
              <ul className="mb-6 space-y-2 pl-5 text-[15px] text-body">
                <li>Value refreshed as your books reconcile</li>
                <li>Risk assessment: what a buyer would discount you for</li>
                <li>Benchmarks against similar businesses</li>
                <li>A growth plan with projected value at 12, 24 and 36 months</li>
                <li>Free access for your accountant</li>
              </ul>
              <p className="mb-6 text-[15px] text-muted">
                From $59 a month. First week for $1. No lock-in contract.
              </p>
              <Button href="https://www.bvo.ai/" variant="blue">
                Start your $1 BVOai trial
              </Button>
            </article>

            <article className="rounded-[22px] border border-line bg-card p-7">
              <p className="m-0 text-[14px] font-semibold text-bvo-green-safe">
                Business Valuations Online
              </p>
              <h3 className="mt-3 mb-3 font-display text-[26px] font-bold text-ink">
                A formal valuation and risk review
              </h3>
              <p className="mb-5 text-[16px] leading-relaxed text-body">
                An independent valuation prepared and signed off by a qualified valuer. Best if you want a clear,
                defensible number and a detailed look at your risks.
              </p>
              <ul className="mb-6 space-y-2 pl-5 text-[15px] text-body">
                <li>Prepared to APES 225 professional standards</li>
                <li>A detailed review of the risks holding the price back</li>
                <li>Suitable for a sale, tax, restructures, family law or disputes</li>
                <li>A discount on your information memorandum when you sell with BVOSales</li>
              </ul>
              <p className="mb-6 text-[15px] text-muted">Valuation fee or “from” price to confirm</p>
              <Button href="https://www.businessvaluations.online/" variant="green">
                Request a formal valuation
              </Button>
            </article>
          </div>
          <p className="mt-8 mb-0 max-w-[48em] text-[16px] text-muted">
            Not sure which? Many owners start with a formal valuation for a clear baseline, then track their
            progress in BVOai until they’re ready to sell. Call{" "}
            <a href="tel:1300282583">1300 282 583</a> and we’ll help you choose.
          </p>
        </div>
      </section>

      <section className="section section-band">
        <div className="container reveal">
          <p className="eyebrow">Business risks</p>
          <h2 className="h2 mt-3 mb-10">The risks buyers price in, and what to do about them</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Owner reliance", "If the business can’t run without you, a buyer sees a job, not a business. Document how things run and build up a second-in-charge."],
              ["Customer concentration", "A few big clients carrying the revenue is a risk to any buyer. Broaden the base, or put key clients on agreements."],
              ["Messy financials", "Personal costs in the books and add-backs you can’t prove make buyers nervous. Clean books mean a believable profit."],
              ["Short leases and loose contracts", "A lease with no option to renew, or handshake supply deals, add risk. Lock them in before you go to market."],
              ["Key staff", "If one or two people hold the know-how, buyers worry they’ll walk. Retention arrangements and shared knowledge help."],
              ["Earnings trend", "Buyers pay more for steady or growing earnings. A dip in the last year or two can cost more than anything else."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-[18px] bg-card border border-line p-5">
                <h3 className="m-0 font-display text-[20px] font-bold text-ink">{title}</h3>
                <p className="mt-2 mb-0 text-[15px] leading-relaxed text-body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReadinessCheck />

      <section className="section section-band">
        <div className="container reveal">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="h2 m-0">Reading for owners getting exit ready</h2>
            <Link href="/insights" className="font-semibold no-underline hover:underline">
              All insights
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <Faq title="Exit Ready questions" items={faqs} />

      <ClosingCta
        title="Find out what it’s worth before a buyer does."
        body="Start building value now, and sell when the business is ready."
        actions={
          <>
            <Button href="https://www.bvo.ai/" variant="blue">
              Try BVOai for $1
            </Button>
            <Button href="https://www.businessvaluations.online/" variant="green">
              Get a formal valuation
            </Button>
            <Button href="tel:1300282583" variant="rose">
              Call 1300 282 583
            </Button>
          </>
        }
      />
    </>
  );
}

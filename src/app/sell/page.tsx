import Link from "next/link";
import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { ClosingCta } from "@/components/ClosingCta";
import { Faq } from "@/components/Faq";
import { getArticlesByAudience } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Sell Your Business | Pre-Sale Valuation & Broker Team",
  description:
    "Get your business ready, priced and sold. Valuation and structure review before market, a targeted campaign and an experienced broker through to settlement.",
};

const steps = [
  ["Confidential questionnaire", "The basics about your business, your goals and your timing."],
  ["A real conversation", "We call you to understand what you want from the sale."],
  ["Valuation and structure review", "Value, risk and the right sale structure, with your accountant."],
  ["Sale preparation", "Fix what’s worth fixing. Prepare the information memorandum."],
  ["Confidential campaign", "Targeted marketing to buyers who fit, without naming the business."],
  ["Buyers and offers", "Buyers qualified and under confidentiality before they see detail."],
  ["Negotiation and due diligence", "Your price defended with the numbers behind it."],
  ["Settlement and handover", "Through to the day the business changes hands."],
];

const faqs = [
  {
    question: "How long does it take to sell a business?",
    answer:
      "Typical timeframe to confirm with Belinda. Preparation before market often has the biggest effect on both the time to sell and the final price, which is why we start early.",
  },
  {
    question: "Should I sell the assets or the shares?",
    answer:
      "It depends on the business, the entity that holds it and what a buyer needs. In an asset sale the buyer takes specific assets; in a share sale they buy the company itself. Brett reviews this with you and your accountant before the business is marketed.",
  },
  {
    question: "Will my staff, customers or competitors find out?",
    answer:
      "Not from us. Campaigns are run without naming the business, and buyers are qualified and sign a confidentiality agreement before they see anything identifying.",
  },
  {
    question: "Will I work with your team or another broker?",
    answer:
      "Whichever suits your business best. After our first conversation, we recommend the right broker, from our own team or our trusted partner network, and explain why. Either way, you start with a clear view of value.",
  },
  {
    question: "Does my accountant need to be involved?",
    answer:
      "It doesn’t have to be. If your accountant wants to be involved, great. They know your history, and we’ll work alongside them and keep them up to date. If not, that’s no problem at all. We can take care of everything from start to finish, with no hassle.",
  },
  {
    question: "What does it cost?",
    answer:
      "Our broker fees are fixed and agreed upfront, before anything goes to market. The questionnaire and first conversation are free. If you get a formal valuation from Business Valuations Online, you receive a discount on your information memorandum.",
  },
];

export default function SellPage() {
  const articles = getArticlesByAudience("owners");

  return (
    <>
      <header className="section pb-16 pt-12">
        <div className="container hero-anim">
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Sell your business" }]} />
          <h1 className="display h1-page mt-2 mb-6 max-w-[16em]">
            Sell your business properly, from the first number to settlement.
          </h1>
          <p className="lead mb-8">
            Selling is a big move, and you only get one go at it. We value the business, sort the structure,
            build the campaign and run the sale with one team that knows your numbers from day one.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/sell/questionnaire" variant="burgundy">
              Start the seller questionnaire
            </Button>
            <Button href="tel:1300282583" variant="charcoal">
              Prefer to talk first?
            </Button>
          </div>
        </div>
      </header>

      <section className="section pt-0">
        <div className="container reveal grid gap-6 md:grid-cols-2">
          <article className="rounded-[22px] border border-line bg-card p-7">
            <h2 className="m-0 font-display text-[26px] font-bold text-ink">Our sale team</h2>
            <p className="mt-3 mb-0 text-[16px] leading-relaxed text-body">
              Valuation and structure review with Brett, a campaign led by Amanda and the sale run by Belinda,
              through Morgan Business Sales.
            </p>
          </article>
          <article className="rounded-[22px] border border-line bg-card p-7">
            <h2 className="m-0 font-display text-[26px] font-bold text-ink">Our partner network</h2>
            <p className="mt-3 mb-0 text-[16px] leading-relaxed text-body">
              Where another broker knows your industry or region better, we introduce you to a trusted partner.
              You still start with the same valuation-first approach.
            </p>
          </article>
          <p className="md:col-span-2 m-0 text-[16px] text-muted">
            After our first conversation, we’ll recommend the broker best suited to your business and explain why.
          </p>
        </div>
      </section>

      <section className="section section-band">
        <div className="container reveal">
          <p className="eyebrow">Before your business goes to market</p>
          <h2 className="h2 mt-3 mb-4">The work most brokers skip</h2>
          <p className="lead mb-6">
            Brett Goodyer has valued thousands of businesses as a forensic accountant and valuer. Before anything
            is listed, he looks at your business the way a buyer’s adviser will, then helps you fix what can be fixed.
          </p>
          <blockquote className="mb-10 rounded-[18px] border-l-4 border-burgundy bg-card p-6">
            <p className="m-0 font-display text-[22px] font-bold leading-snug text-ink">
              “The most valuable business is the one that is ready to sell every day.”
            </p>
            <cite className="mt-3 block text-[14px] text-muted not-italic">
              Brett Goodyer, FCPA, from Exit Isn’t an Event. It’s a Strategy.
            </cite>
          </blockquote>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ["A valuation you can defend", "What the business is worth, what’s driving that number and what’s holding it back, built on the same methodology as our formal APES 225 valuations. A formal valuation from BVO also gets you a discount on your information memorandum."],
              ["The right sale structure", "Asset sale or share sale. What sits in the entity that shouldn’t go with the business, like property, surplus cash or director loans. Getting this right early can make a real difference to what you keep after tax."],
              ["Your accountant in the loop", "Brett works alongside your accountant on structure and tax questions, so decisions are made together and nothing surprises you at settlement."],
              ["A list of what to fix first", "Owner reliance, messy books, short leases, key customers without contracts. We rank the issues by what they cost you, so you know where effort pays."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-[18px] bg-card p-6 border border-line">
                <h3 className="m-0 font-display text-[22px] font-bold text-ink">{title}</h3>
                <p className="mt-3 mb-0 text-[15px] leading-relaxed text-body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container reveal">
          <p className="eyebrow">How a sale works with us</p>
          <h2 className="h2 mt-3 mb-10">Eight steps. One team. No handballing.</h2>
          <ol className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2">
            {steps.map(([title, body], i) => (
              <li key={title} className="flex gap-4 rounded-[18px] border border-line bg-card p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tint font-display font-bold text-tint-ink">
                  {i + 1}
                </span>
                <div>
                  <h3 className="m-0 font-display text-[20px] font-bold text-ink">{title}</h3>
                  <p className="mt-2 mb-0 text-[15px] leading-relaxed text-body">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container reveal">
          <h2 className="h2 mb-4 text-cream">What buyers will discount you for</h2>
          <p className="mb-8 max-w-[40em] text-[17px] leading-relaxed text-[#c9ccc2]">
            A business can be very profitable and still not be worth much. Value comes down to profit and risk
            together. These are the risks buyers price in first.
          </p>
          <Link href="/insights/what-is-your-business-worth" className="mb-10 inline-block text-rose no-underline hover:underline">
            Read: What is your business worth?
          </Link>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ["It relies on you", "If the business can’t run without the owner, a buyer sees a job, not a business."],
              ["The books need explaining", "Personal costs through the business and missing years of statements slow everything down."],
              ["A few customers carry it", "Lose one big client and the business changes. Buyers know that."],
              ["Nothing is locked in", "Short leases, handshake supply deals and no key staff agreements all add risk."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-[18px] bg-charcoal-2 p-6">
                <h3 className="m-0 font-display text-[22px] font-bold text-cream">{title}</h3>
                <p className="mt-3 mb-0 text-[15px] leading-relaxed text-[#c9ccc2]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container reveal rounded-[24px] bg-tint p-8 sm:p-12">
          <p className="eyebrow">Exit Ready</p>
          <h2 className="h2 mt-3 mb-4">Not quite ready to sell?</h2>
          <p className="lead mb-8">
            Find out what the business is worth today, the risks a buyer would discount you for and what to fix
            first, with BVOai or a formal valuation from Business Valuations Online.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/exit-ready" variant="burgundy">
              Get Exit Ready
            </Button>
            <Button href="/exit-ready#check" variant="charcoal">
              Take the 30-second check
            </Button>
          </div>
        </div>
      </section>

      <section className="section section-band">
        <div className="container reveal">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="h2 m-0">Reading for owners thinking about selling</h2>
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

      <Faq title="Selling questions" items={faqs} />

      <ClosingCta
        title="Thinking about selling, even a few years out?"
        body="The earlier we start, the more we can do about the price. The questionnaire takes a few minutes and stays confidential."
        actions={
          <>
            <Button href="/sell/questionnaire" variant="burgundy">
              Start the seller questionnaire
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

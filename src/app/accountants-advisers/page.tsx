import Link from "next/link";
import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { ClosingCta } from "@/components/ClosingCta";
import { Faq } from "@/components/Faq";
import { MethodCards } from "@/components/MethodCards";
import { getArticlesByAudience } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Business Sale Referrals for Accountants & Advisers",
  description:
    "Refer clients selling a business to a team that understands value, structure and tax. You stay in the loop, your relationship stays protected.",
};

const faqs = [
  {
    question: "Will you give my client tax advice?",
    answer:
      "No. You remain their tax adviser. Brett reviews the sale structure with you, and we make sure the tax questions are raised early so you can advise before decisions are locked in.",
  },
  {
    question: "What if my client is not ready to sell yet?",
    answer:
      "That is often the best time to talk. A valuation now shows what is holding the price back, giving you and your client time to fix it before going to market.",
  },
  {
    question: "Will my client always work with your team?",
    answer:
      "Not always. We recommend whichever broker suits the business best, from our own team or a trusted partner, and you are kept informed in the same way.",
  },
  {
    question: "Can I refer a client who wants to buy a business?",
    answer:
      "Yes. Register their brief and we will help them find suitable opportunities and understand the price and risks before they commit.",
  },
  {
    question: "I use BVOPro. Does that help?",
    answer:
      "Yes. If your client has been valued through BVOPro or Business Valuations Online, let us know in the questionnaire and we can skip questions we already have answers to.",
  },
];

export default function AdvisersPage() {
  const articles = getArticlesByAudience("advisers");

  return (
    <>
      <header className="hero-shell pb-16">
        <div className="container hero-anim">
          <Breadcrumbs
            items={[{ href: "/", label: "Home" }, { label: "For accountants and advisers" }]}
          />
          <h1 className="display h1-page mt-2 mb-6 max-w-[16em]">
            A smarter way to guide clients through a business sale.
          </h1>
          <div className="mb-8 flex flex-wrap gap-3">
            <Button href="/accountants-advisers/questionnaire" variant="burgundy">
              Refer a client
            </Button>
            <Button href="tel:1300282583" variant="charcoal">
              Talk to us first
            </Button>
          </div>
          <p className="lead mb-0">
            When a client decides to sell, you’re managing expectations, emotions, timing and outcomes, often
            outside your core role. The wrong broker or a rushed process can damage trust you’ve spent years
            building. BVOSales gives your client a valuation-led sale team, and keeps you firmly in your advisory
            lane.
          </p>
        </div>
      </header>

      <section className="section pt-0">
        <div className="container reveal">
          <h2 className="h2 mb-5">No more “know someone?”</h2>
          <p className="lead mb-8">
            Professionals are often expected to have a broker on speed dial when a client wants to sell. Not every
            broker suits every business. Industry, size, buyer pool, deal history and how ready the client is all
            matter.
          </p>
          <p className="mb-8 max-w-[42em] text-[17px] leading-relaxed text-body">
            Depending on the business, our own team runs the sale or we match your client with a trusted partner
            broker who fits. Either way, the decision is based on fit, not convenience.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {["You stay trusted.", "Your client feels supported.", "The sale starts on solid ground."].map(
              (line) => (
                <div key={line} className="rounded-[18px] bg-tint p-5 font-display text-[20px] font-bold text-tint-ink">
                  {line}
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <MethodCards
        eyebrow="Choose how involved you want to be"
        title="You decide the level. Change it at any point."
        cards={[
          {
            label: "Level 1",
            title: "Make the introduction",
            body: "Send your client our way and let us take it from there. We’ll confirm when we’ve made contact.",
          },
          {
            label: "Level 2",
            title: "Stay informed",
            body: "Updates at the key points: valuation, going to market, offers and settlement.",
          },
          {
            label: "Level 3",
            title: "Work alongside us",
            body: "Join the structure review with Brett and stay in the conversations where your advice matters most, especially tax.",
          },
        ]}
      />

      <section className="section">
        <div className="container reveal">
          <p className="eyebrow">Backed by Business Valuations Online</p>
          <h2 className="h2 mt-3 mb-4">We speak your language</h2>
          <p className="lead mb-8">
            BVOSales comes from the same team that has valued more than 2,000 businesses and built BVOPro for
            accountants. Brett Goodyer is an FCPA and forensic accountant. When we talk about normalised earnings,
            surplus assets or an asset versus share sale, we mean the same thing you do.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ["Protects your client relationship", "No broker selection risk, no awkward handovers."],
              ["Keeps you in your lane", "No pressure to become a deal manager. You stay the trusted adviser, including on tax."],
              ["Valuation behind every price", "Asking prices built on proper valuation work, so your client isn’t set up for a fall in due diligence."],
              ["Clear, calm and professional", "No jargon, no pressure, no sales theatre."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-[18px] border border-line bg-card p-6">
                <h3 className="m-0 font-display text-[22px] font-bold text-ink">{title}</h3>
                <p className="mt-3 mb-0 text-[15px] text-body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-band">
        <div className="container reveal">
          <h2 className="h2 mb-10">How a referral works</h2>
          <ol className="m-0 grid list-none gap-5 p-0 md:grid-cols-3">
            {[
              ["A simple starting point", "You or your client complete a short, confidential questionnaire about the business, goals and timing."],
              ["A real conversation", "We speak with you or your client to clarify context and expectations. This call often prevents rushed decisions later."],
              ["The right path", "We recommend the right broker, from our own team or our partner network, and you’re kept informed at the level you chose."],
            ].map(([title, body], i) => (
              <li key={title} className="rounded-[18px] bg-card border border-line p-6">
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-tint font-display font-bold text-tint-ink">
                  {i + 1}
                </span>
                <h3 className="m-0 font-display text-[22px] font-bold text-ink">{title}</h3>
                <p className="mt-3 mb-0 text-[15px] leading-relaxed text-body">{body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 mb-0 text-[14px] text-muted">
            Referral arrangement to confirm: if referrers receive a fee, state it here plainly so there is no
            question about independence.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container reveal">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="h2 m-0">Insights for accountants and advisers</h2>
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

      <Faq title="Questions from professionals" items={faqs} />

      <ClosingCta
        title="Have a client talking about selling?"
        body="Or buying? Start with a short, confidential questionnaire built for professionals and their clients."
        actions={
          <>
            <Button href="/accountants-advisers/questionnaire" variant="burgundy">
              Start the adviser questionnaire
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

import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { Button } from "@/components/Button";
import { ClosingCta } from "@/components/ClosingCta";
import { Faq } from "@/components/Faq";
import { MethodCards } from "@/components/MethodCards";
import { StatsBand } from "@/components/StatsBand";
import { getArticlesByAudience } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Sell or Buy a Business | Valuation-Led Business Sales | BVOSales",
  description:
    "Sell your business with a valuer, broker and marketer on one team. Backed by Business Valuations Online and 2,000+ valuations. Start confidentially.",
};

const faqs = [
  {
    question: "Is BVOSales a business broker?",
    answer:
      "Yes. Our team sells businesses through Morgan Business Sales, with Belinda Packer and Amanda Goodyer running the sale and Brett Goodyer leading valuation and structure. We also work with a network of trusted partner brokers, so every business is matched with the broker who suits it best.",
  },
  {
    question: "What makes BVOSales different from other brokers?",
    answer:
      "We start with valuation. BVOSales is backed by Business Valuations Online, so before your business goes to market we know what it is worth, what is holding the price back and how the sale should be structured.",
  },
  {
    question: "Do I need a valuation before I sell?",
    answer:
      "Not necessarily. We’ll offer you a formal valuation from Business Valuations Online, which can be used for the sale. If you go ahead with it, you receive a discount on your information memorandum, the document that presents your business to buyers. If you’d rather not, the information memorandum is charged at the full fee when you sign the agency agreement.",
  },
  {
    question: "Can you help with the tax side of a sale?",
    answer:
      "Brett reviews your structure before sale, such as whether an asset or share sale suits you and what should sit outside the sale, and works alongside your accountant. Your accountant stays your tax adviser; we make sure the right questions are asked early.",
  },
  {
    question: "Is my enquiry confidential?",
    answer:
      "Yes. You can share as much or as little as you like, and nothing about your business goes to buyers without your agreement. Buyers are qualified before they see sensitive information.",
  },
  {
    question: "Can buyers use BVOSales?",
    answer:
      "Yes. Tell us what you are looking for and we will help you find suitable businesses and understand what they are really worth before you make an offer.",
  },
  {
    question: "Is there a cost to get started?",
    answer:
      "No. The questionnaire and first conversation are free and confidential. If you go ahead, our broker fees are fixed and agreed upfront, so there are no surprises. Owners who get a formal valuation from Business Valuations Online receive a discount on their information memorandum.",
  },
];

const whoWeHelp = [
  {
    title: "Selling a business",
    body: "You’ve spent years building it. We make sure the sale reflects that, from the first valuation to the day the money lands.",
    href: "/sell",
    cta: "How selling works",
    bg: "linear-gradient(150deg, #9a5558, #8b4a4c, #6f3a3c)",
    text: "#ffffff",
    muted: "#f6ecec",
    btn: "cream" as const,
  },
  {
    title: "Buying a business",
    body: "Tell us what you’re looking for. We’ll help you find it and understand what it’s really worth before you make an offer.",
    href: "/buy",
    cta: "How buying works",
    bg: "linear-gradient(150deg, #dcc4c5, #d2b9ba, #c97f82)",
    text: "#4a2b2c",
    muted: "#3a2223",
    btn: "charcoal" as const,
  },
  {
    title: "Accountants and advisers",
    body: "Refer a client knowing the next step won’t undo the trust you’ve built. You stay informed at whatever level suits you.",
    href: "/accountants-advisers",
    cta: "For professionals",
    bg: "linear-gradient(150deg, #33362f, #232622, #1a1b19)",
    text: "#d2b9ba",
    muted: "#c9ccc2",
    btn: "outline-rose" as const,
  },
  {
    title: "Not ready to sell yet",
    body: "See what the business is worth today, the risks a buyer would discount you for, and what to fix first.",
    href: "/exit-ready",
    cta: "Get Exit Ready",
    bg: "linear-gradient(150deg, #fbf6f6, #f3e6e6, #ead9d9)",
    text: "#6f3a3c",
    muted: "#3a2223",
    btn: "burgundy" as const,
  },
];

export default function HomePage() {
  const articles = getArticlesByAudience("owners").slice(0, 3);

  return (
    <>
      <header className="section pb-20 pt-16">
        <div className="container hero-anim">
          <p className="eyebrow">Business sales, backed by valuation expertise</p>
          <h1 className="display h1-home mt-4 mb-6 max-w-[14em]">
            Sell your business with the numbers on your side.
          </h1>
          <p className="lead mb-8">
            BVOSales puts a business valuer, an experienced broker and a campaign marketer on the same
            sale. We get the business ready, take it to the right buyers and see it through to settlement.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/sell" variant="burgundy">
              Sell my business
            </Button>
            <Button href="/buy" variant="charcoal">
              Buy a business
            </Button>
            <Button href="/exit-ready" variant="rose">
              Not ready to sell yet?
            </Button>
          </div>
          <p className="mt-6 mb-0">
            <Link href="/accountants-advisers" className="text-[15px] font-medium underline-offset-4 hover:underline">
              I’m an accountant or adviser with a client selling
            </Link>
          </p>
        </div>
      </header>

      <section className="section pt-0">
        <div className="container reveal">
          <p className="eyebrow">Your sale team</p>
          <h2 className="h2 mt-3 mb-10">One team, start to finish</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                n: "1",
                title: "Prepare",
                body: "Brett Goodyer values the business and reviews how it’s structured before anyone sees it.",
                bg: "linear-gradient(135deg, #ead9d9, #d2b9ba)",
                color: "#1a1b19",
              },
              {
                n: "2",
                title: "Market",
                body: "Amanda Goodyer builds a confidential campaign aimed at buyers who’ll actually pay for what you’ve built.",
                bg: "linear-gradient(135deg, #d2b9ba, #c97f82)",
                color: "#1a1b19",
              },
              {
                n: "3",
                title: "Sell",
                body: "Belinda Packer of Morgan Business Sales runs negotiations and due diligence through to settlement.",
                bg: "linear-gradient(135deg, #c97f82, #8b4a4c)",
                color: "#ffffff",
              },
            ].map((step) => (
              <article key={step.title} className="rounded-[22px] border border-line bg-card p-7">
                <div
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-full font-display text-[22px] font-extrabold"
                  style={{ background: step.bg, color: step.color }}
                >
                  {step.n}
                </div>
                <h3 className="m-0 font-display text-[26px] font-bold text-ink">{step.title}</h3>
                <p className="mt-3 mb-0 text-[16px] leading-relaxed text-body">{step.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 mb-0 max-w-[48em] text-[16px] text-muted">
            Every business is matched with the broker best suited to it, from our own team or our trusted partner network.
          </p>
        </div>
      </section>

      <StatsBand
        lead="Backed by the team behind Business Valuations Online"
        stats={[
          { value: "2,000+", label: "businesses valued" },
          { value: "30+", label: "years combined valuation experience" },
          { value: "1 day", label: "to hear back from a real person" },
        ]}
      />

      <section className="section">
        <div className="container reveal grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="h2 mb-5">Most businesses go to market before they’re ready.</h2>
            <p className="lead mt-0 mb-5">
              Many owners set their asking price on what they need to retire, or what they heard a similar
              business sold for, rather than on what the business actually earns. Personal costs still run
              through the books, so a buyer can’t see the real profit. And the business is often held in a
              structure set up years ago for tax, not for a clean sale.
            </p>
            <p className="mb-0 text-[17px] leading-relaxed text-body">
              Buyers find these issues in due diligence, and every surprise comes off the price. After more
              than 2,000 valuations, we’ve seen how often that happens, and how avoidable it is. So we start
              where every sale should: with a clear look at value, risk and structure, before the business is
              put in front of a single buyer.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              ["Ready", "Records, structure and risks sorted before a buyer goes looking for them."],
              ["Priced", "An asking price built on proper valuation work, so you can defend it at the table."],
              ["Protected", "Confidential from the first conversation, with buyers qualified before they see anything sensitive."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-[18px] border border-line bg-card p-5">
                <h3 className="m-0 font-display text-[22px] font-bold text-ink">{title}</h3>
                <p className="mt-2 mb-0 text-[15px] leading-relaxed text-body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MethodCards
        eyebrow="The BVOSales method"
        title="Prepare. Market. Sell."
        cards={[
          {
            label: "Stage 1, led by Brett Goodyer",
            title: "Get it ready to sell",
            body: "A valuation that shows what the business is worth and why. A review of the structure: asset or share sale, what sits in the entity, what should come out before sale. Brett works with your accountant so the tax position is understood before you sign anything.",
          },
          {
            label: "Stage 2, led by Amanda Goodyer",
            title: "Take it to the right buyers",
            body: "An information memorandum that tells the business’s story with the numbers to back it. A targeted, confidential campaign to buyers who can see the value, not just anyone with a login.",
          },
          {
            label: "Stage 3, led by Belinda Packer",
            title: "Close the deal",
            body: "Buyer qualification, negotiation, heads of agreement and due diligence, managed through to settlement by an experienced broker from Morgan Business Sales.",
          },
        ]}
      />

      <section className="section">
        <div className="container reveal">
          <p className="eyebrow">Who we help</p>
          <h2 className="h2 mt-3 mb-10">Built for owners, buyers and the advisers they trust</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {whoWeHelp.map((card) => (
              <article
                key={card.title}
                className="flex flex-col rounded-[22px] p-7"
                style={{ background: card.bg, color: card.text }}
              >
                <h3 className="m-0 font-display text-[26px] font-bold" style={{ color: card.text }}>
                  {card.title}
                </h3>
                <p className="mt-3 mb-6 flex-1 text-[16px] leading-relaxed" style={{ color: card.muted }}>
                  {card.body}
                </p>
                <div>
                  <Button href={card.href} variant={card.btn}>
                    {card.cta}
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-band">
        <div className="container reveal">
          <p className="eyebrow">Why BVOSales</p>
          <h2 className="h2 mt-3 mb-4">Not just another broker. A valuation firm that sells.</h2>
          <p className="lead mb-8">
            Most brokers learn about your numbers once you’ve signed. We start with them. That changes the
            price you ask, the buyers you talk to and what you keep at the end.
          </p>
          <Button href="/about" variant="burgundy" className="mb-10">
            Meet the team
          </Button>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Valuation first", "The same methodology behind our formal APES 225 valuations sits under every asking price."],
              ["Structured before sale", "Entity, assets and sale type reviewed early, with your accountant, so the tax position isn’t a surprise at settlement."],
              ["Straight answers", "If the business isn’t ready, we’ll tell you, and tell you what to fix first."],
              ["The right broker, always", "We match every business with the broker who suits its industry, size and likely buyers, from our own team or a trusted partner."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-[18px] bg-card p-5 border border-line">
                <h3 className="m-0 font-display text-[20px] font-bold text-ink">{title}</h3>
                <p className="mt-2 mb-0 text-[15px] leading-relaxed text-body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container reveal">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 className="h2 m-0">The people on your sale</h2>
            <Link href="/about" className="font-semibold no-underline hover:underline">
              About BVOSales
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Brett Goodyer",
                role: "Valuation and structure. FCPA, B.Com, M.ForAccy",
                bio: "Award-winning business valuer and forensic accountant with 20+ years in the field and expert evidence given across Australian courts. Founder of Business Valuations Online, creator of BVOPro and BVOai, and author of Beyond the Bullshit.",
                image: "/assets/team/brett-goodyer.jpg",
              },
              {
                name: "Belinda Packer",
                role: "Business broker, Morgan Business Sales, QLD",
                bio: "National MVP Business Broker of the Year 2022, with 21+ years in business growth, exit planning and M&A. Leads the sale from buyer qualification and negotiation through to settlement.",
                image: "/assets/team/belinda-packer.jpg",
              },
              {
                name: "Amanda Goodyer",
                role: "Business broker and campaign lead, Morgan Business Sales, Sydney and NSW",
                bio: "A marketing background and years in business valuation. Makes sure every campaign reaches the right buyers with the right story.",
                image: "/assets/team/amanda-goodyer.jpg",
              },
            ].map((person) => (
              <article key={person.name}>
                <div className="relative mb-4 aspect-[4/5] overflow-hidden rounded-[18px] bg-black">
                  <Image src={person.image} alt={person.name} fill className="object-cover" sizes="33vw" />
                </div>
                <h3 className="m-0 font-display text-[24px] font-bold text-ink">{person.name}</h3>
                <p className="mt-2 mb-3 text-[14px] font-semibold text-burgundy">{person.role}</p>
                <p className="m-0 text-[15px] leading-relaxed text-body">{person.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-band">
        <div className="container reveal">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="h2 m-0">Worth reading before you sell</h2>
            <Link href="/insights" className="font-semibold no-underline hover:underline">
              All insights
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <Faq
        items={faqs}
        intro={
          <>
            Can’t find what you’re after? Call{" "}
            <a href="tel:1300282583" className="font-semibold">
              1300 282 583
            </a>
            .
          </>
        }
      />

      <ClosingCta
        title="Find out where your sale really starts."
        body="A short, confidential questionnaire tells us about your business and your plans. Then a real person calls you."
        actions={
          <>
            <Button href="/start" variant="burgundy">
              Start the questionnaire
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

import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { ClosingCta } from "@/components/ClosingCta";
import { Faq } from "@/components/Faq";

export const metadata: Metadata = {
  title: "Buy a Business | Businesses for Sale & Buyer Support",
  description:
    "Looking to buy an established business? Register what you're after and get valuation-backed guidance on price, risk and due diligence.",
};

const faqs = [
  {
    question: "Do you charge buyers?",
    answer: "Buyer fees to confirm before launch.",
  },
  {
    question: "Can you look at a business I found somewhere else?",
    answer:
      "Yes. Business Valuations Online can value a business you are considering, so you understand what it is worth and where the risks sit before you make an offer.",
  },
  {
    question: "What should I have ready before I start looking?",
    answer:
      "A clear idea of the industries and locations you want, your budget and how you plan to fund the purchase. Talk to your accountant and lender early so you can move when the right business comes up.",
  },
  {
    question: "Will I need to sign a confidentiality agreement?",
    answer:
      "Yes. Sellers trust us to protect their information, so buyers sign a confidentiality agreement before receiving identifying details or financials.",
  },
  {
    question: "I am buying for a client. Can I use BVOSales?",
    answer:
      "Yes. Accountants and advisers can register a brief on behalf of a client and stay involved at whatever level suits them.",
  },
];

export default function BuyPage() {
  return (
    <>
      <header className="section pb-16 pt-12">
        <div className="container hero-anim">
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Buy a business" }]} />
          <h1 className="display h1-page mt-2 mb-6 max-w-[14em]">
            Buy a business knowing what you’re paying for.
          </h1>
          <p className="lead mb-8">
            Tell us what you’re looking for. We’ll help you find the right opportunity, then use 30+ years of
            combined valuation experience to help you understand the price, the risks and the questions to ask
            before you commit.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/buy/questionnaire" variant="burgundy">
              Register as a buyer
            </Button>
            <Button href="/buy#opportunities" variant="charcoal">
              See current opportunities
            </Button>
          </div>
        </div>
      </header>

      <section className="section pt-0">
        <div className="container reveal">
          <h2 className="h2 mb-8">A buyer’s side that understands value, not just listings</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ["Your brief, on file", "Industry, location, size and budget. When something fits, you hear about it early."],
              ["Price guidance", "Understand whether the asking price stacks up before you put a number on the table."],
              ["Risks found early", "Owner reliance, customer concentration and add-backs that don’t hold up, flagged before due diligence."],
              ["Formal valuation on request", "Need one for finance or investors? Business Valuations Online can prepare an independent APES 225 valuation."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-[18px] border border-line bg-card p-6">
                <h3 className="m-0 font-display text-[22px] font-bold text-ink">{title}</h3>
                <p className="mt-3 mb-0 text-[15px] leading-relaxed text-body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="opportunities" className="section section-band">
        <div className="container reveal">
          <h2 className="h2 mb-3">Current opportunities</h2>
          <p className="mb-8 text-[15px] text-muted">Details shared after a confidentiality agreement.</p>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-[22px] bg-card border border-line p-7">
              <h3 className="m-0 font-display text-[24px] font-bold text-ink">
                Browse businesses for sale across Australia
              </h3>
              <p className="mt-3 mb-6 text-[16px] leading-relaxed text-body">
                Our current listings are held through Morgan Business Sales, one of Australia’s leading
                mid-market brokerages. Filter by industry, state and profit to find businesses that match what
                you’re after.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  href="https://morganbusinesssales.com/businesses-for-sale/"
                  variant="burgundy"
                >
                  View businesses for sale
                </Button>
                <Button
                  href="https://morganbusinesssales.com/new-listing-notifications/"
                  variant="charcoal"
                >
                  Get new listing alerts
                </Button>
              </div>
              <p className="mt-4 mb-0 text-[13px] text-muted">
                Opens the Morgan Business Sales website in a new tab.
              </p>
            </article>
            <article className="rounded-[22px] bg-card border border-line p-7">
              <h3 className="m-0 font-display text-[24px] font-bold text-ink">Found one you like?</h3>
              <p className="mt-3 mb-6 text-[16px] leading-relaxed text-body">
                Talk to us before you make an offer. We’ll help you read the numbers, test the asking price and
                work out the questions to ask before you commit.
              </p>
              <Button href="/buy/questionnaire" variant="burgundy">
                Talk to us about a listing
              </Button>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container reveal">
          <p className="eyebrow">Buyer’s checklist</p>
          <h2 className="h2 mt-3 mb-4">Six questions to answer before you make an offer</h2>
          <p className="lead mb-8">
            The listing tells you what the seller wants you to see. These are the questions a valuer asks first.
          </p>
          <ol className="m-0 space-y-4 p-0 list-none">
            {[
              ["Is the profit real?", "Which add-backs are genuine, and which are wishful thinking?"],
              ["What happens when the owner leaves?", "Who holds the customer and supplier relationships?"],
              ["How concentrated are the customers?", "How much revenue walks if one client goes?"],
              ["What’s locked in?", "Lease terms, supply agreements and key staff."],
              ["How much working capital comes with it?", "And how much will you need to put in after settlement?"],
              ["Are you buying assets or shares?", "A share purchase brings the entity’s history with it."],
            ].map(([title, body], i) => (
              <li key={title} className="flex gap-4 rounded-[18px] border border-line bg-card p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tint font-display font-bold text-tint-ink">
                  {i + 1}
                </span>
                <div>
                  <h3 className="m-0 font-display text-[20px] font-bold text-ink">{title}</h3>
                  <p className="mt-2 mb-0 text-[15px] text-body">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Faq title="Buying questions" items={faqs} />

      <ClosingCta
        title="Tell us what you’re looking for"
        body="Industry, location, size and budget. A short buyer questionnaire, then a call with our team."
        actions={
          <>
            <Button href="/buy/questionnaire" variant="burgundy">
              Start the buyer questionnaire
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

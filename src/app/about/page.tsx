import Image from "next/image";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { ClosingCta } from "@/components/ClosingCta";

export const metadata: Metadata = {
  title: "About BVOSales | Brett Goodyer, Belinda Packer & Amanda Goodyer",
  description:
    "Meet the valuer, broker and marketer behind BVOSales, backed by Business Valuations Online.",
};

const comparison = [
  ["Asking price", "Based on a rule of thumb or what the owner hopes for", "Built on a proper valuation of earnings and risk"],
  ["Structure and tax", "Often looked at once a buyer is found", "Reviewed before market, with your accountant"],
  ["Risks", "Found by the buyer in due diligence", "Found and ranked by us first, so you can fix or explain them"],
  ["Campaign", "A listing and a wait", "A targeted, confidential campaign led by a dedicated marketer"],
  ["If you’re not a fit", "Signed up anyway", "Introduced to a partner broker who suits your business"],
];

export default function AboutPage() {
  return (
    <>
      <header className="hero-shell pb-16">
        <div className="container hero-anim">
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "About" }]} />
          <h1 className="display h1-page mt-2 mb-6 max-w-[14em]">
            A valuer, a broker and a marketer on every sale.
          </h1>
          <p className="lead mb-0">
            Brokers know the market. Accountants know the numbers. Most sales only get one of them. BVOSales was
            built so yours gets both, plus a campaign designed to reach the right buyers.
          </p>
        </div>
      </header>

      <section className="section pt-0">
        <div className="container reveal max-w-[760px]">
          <h2 className="h2 mb-5">Why we started selling businesses</h2>
          <p className="mb-5 text-[17px] leading-relaxed text-body">
            Business Valuations Online has valued more than 2,000 businesses. Again and again, we watched owners
            take a business to market without knowing what it was really worth, what was dragging the price down
            or how the sale should be structured.
          </p>
          <p className="mb-5 text-[17px] leading-relaxed text-body">
            Some sold for less than they should have. Some didn’t sell at all. Many found out about problems in
            due diligence, when it was too late to fix them.
          </p>
          <p className="mb-5 text-[17px] leading-relaxed text-body">
            BVOSales closes that gap. The valuation work comes first, the campaign is built on it, and an
            experienced broker takes it through to settlement.
          </p>
          <p className="mb-0 text-[17px] leading-relaxed text-body">
            BVOSales is a partnership between Business Valuations Online and Morgan Business Sales brokers Belinda
            Packer and Amanda Goodyer. Brett brings the valuation and structure expertise, Amanda the campaign and
            Belinda the deal-making. They work as one team on every sale, so nothing gets lost between people.
          </p>
        </div>
      </section>

      <section className="section section-band">
        <div className="container reveal space-y-16">
          <h2 className="h2 mb-0">The team</h2>

          <article className="grid gap-8 lg:grid-cols-[320px_1fr]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-black">
              <Image src="/assets/team/brett-goodyer.jpg" alt="Brett Goodyer" fill className="object-cover" sizes="320px" />
            </div>
            <div>
              <p className="eyebrow">Prepare: valuation and structure</p>
              <h3 className="mt-3 mb-2 font-display text-[32px] font-bold text-ink">Brett Goodyer</h3>
              <p className="mb-4 text-[15px] font-semibold text-burgundy">
                FCPA, B.Com, M.ForAccy. Forensic accountant and business valuer
              </p>
              <p className="mb-4 text-[16px] leading-relaxed text-body">
                Brett is an award-winning business valuation and value improvement specialist who has given expert
                evidence in just about every court jurisdiction in Australia. With 20+ years in the field and
                thousands of businesses valued, he advises on buy-side and sell-side transactions, entity structuring
                and risk-based business assessments across a wide range of industries.
              </p>
              <p className="mb-4 text-[16px] leading-relaxed text-body">
                He founded Business Valuations Online and has since built BVOPro, valuation software used by
                accountants, advisers and brokers across Australia and New Zealand, and BVOai, which shows owners
                their business value live from their own books. He is also the author of Beyond the Bullshit.
              </p>
              <p className="mb-4 text-[16px] leading-relaxed text-body">
                On a BVOSales engagement, Brett makes sure the business is valued properly and set up the right way
                before it goes to market, working with your accountant on structure and tax so the sale is built on
                solid ground.
              </p>
              <p className="mb-0 rounded-[16px] bg-card border border-line p-4 text-[15px] leading-relaxed text-body">
                <strong className="text-ink">Our valuation team</strong>
                <br />
                Brett works alongside Bo Pang, Chief Operating Officer of Business Valuations Online, who brings
                more than 16 years of experience. Between them, the BVO valuation team has more than 30 years of
                combined experience behind every BVOSales engagement.
              </p>
            </div>
          </article>

          <article className="grid gap-8 lg:grid-cols-[320px_1fr]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-black">
              <Image src="/assets/team/belinda-packer.jpg" alt="Belinda Packer" fill className="object-cover" sizes="320px" />
            </div>
            <div>
              <p className="eyebrow">Sell: negotiation through to settlement</p>
              <h3 className="mt-3 mb-2 font-display text-[32px] font-bold text-ink">Belinda Packer</h3>
              <p className="mb-2 text-[15px] font-semibold text-burgundy">
                Business broker, Morgan Business Sales, Queensland
              </p>
              <p className="mb-4 text-[15px] font-medium text-accent-ink">
                National MVP Business Broker of the Year 2022
              </p>
              <p className="mb-4 text-[16px] leading-relaxed text-body">
                Belinda has more than 21 years of experience in strategic business growth and exit planning, and
                specialises in guiding owners through complex sales, mergers and acquisitions. On a BVOSales
                engagement she runs the sale itself: qualifying buyers, negotiating offers and steering due diligence
                through to settlement.
              </p>
              <p className="mb-4 text-[16px] leading-relaxed text-body">
                After a career with Qantas International, Belinda bought, grew and sold multiple businesses across
                different industries. Doing it herself taught her that a strong exit strategy is the foundation of
                value. That experience, combined with a background in finance and education, shapes a transparent,
                data-driven approach to every sale.
              </p>
              <ul className="mb-6 space-y-2 pl-5 text-[15px] text-body">
                <li>Exit planning and deal structuring across manufacturing, construction services, logistics and more</li>
                <li>Buyer-side work that makes sure acquisitions meet strategic and financial criteria</li>
                <li>Access to Morgan Business Sales’ national network of buyers and brokers</li>
              </ul>
              <Button href="tel:0432541017" variant="burgundy">
                Call Belinda on 0432 541 017
              </Button>
            </div>
          </article>

          <article className="grid gap-8 lg:grid-cols-[320px_1fr]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-black">
              <Image src="/assets/team/amanda-goodyer.jpg" alt="Amanda Goodyer" fill className="object-cover" sizes="320px" />
            </div>
            <div>
              <p className="eyebrow">Market: the campaign</p>
              <h3 className="mt-3 mb-2 font-display text-[32px] font-bold text-ink">Amanda Goodyer</h3>
              <p className="mb-4 text-[15px] font-semibold text-burgundy">
                Business broker, Morgan Business Sales, Sydney and NSW
              </p>
              <p className="mb-4 text-[16px] leading-relaxed text-body">
                Amanda brings a background in marketing and years of experience in business valuation to every sale.
                On a BVOSales engagement she makes sure the campaign is on point: the right story, the right
                information memorandum and the right buyers, reached confidentially.
              </p>
              <p className="mb-6 text-[16px] leading-relaxed text-body">
                Before joining Morgan Business Sales, Amanda worked closely with brokers and owners on growth, value
                and sale readiness, which gives her a clear view of what makes a deal work for both sides. Owners
                know her for a warm, organised approach and open communication through what is often a very personal
                process.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="tel:0466597017" variant="burgundy">
                  Call Amanda on 0466 597 017
                </Button>
                <Button
                  href="https://www.linkedin.com/in/amanda-%F0%9F%8C%BB-goodyer-840480217/"
                  variant="charcoal"
                >
                  Amanda on LinkedIn
                </Button>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container reveal">
          <p className="eyebrow">Why choose BVOSales</p>
          <h2 className="h2 mt-3 mb-8">What changes when a valuer is on the team</h2>
          <div className="overflow-x-auto rounded-[18px] border border-line">
            <table className="w-full min-w-[640px] border-collapse text-left text-[15px]">
              <thead className="bg-band">
                <tr>
                  <th className="p-4 font-semibold text-ink">Stage</th>
                  <th className="p-4 font-semibold text-ink">A typical sale</th>
                  <th className="bg-tint2 p-4 font-semibold text-ink">With BVOSales</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(([stage, typical, withUs]) => (
                  <tr key={stage} className="border-t border-line">
                    <td className="p-4 font-semibold text-ink">{stage}</td>
                    <td className="p-4 text-body">{typical}</td>
                    <td className="bg-tint2 p-4 text-body">{withUs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container reveal">
          <h2 className="h2 mb-4 text-cream">Part of the BVO Group</h2>
          <p className="mb-10 max-w-[32em] text-[17px] text-[#c9ccc2]">
            Four businesses, one team, one way of thinking about value.
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                href: "https://www.businessvaluations.online/",
                title: "Business Valuations Online",
                body: "Formal, independent APES 225 business valuations.",
                bg: "linear-gradient(150deg, #8fcb63, #76bc43, #5f9c33)",
                color: "#1a1b19",
              },
              {
                href: "https://www.bvopro.online/",
                title: "BVOPro",
                body: "Valuation software for accountants, advisers and brokers.",
                bg: "linear-gradient(150deg, #c3d4e2, #a9c0d3, #8eaac1)",
                color: "#1a1b19",
              },
              {
                href: "https://www.bvo.ai/",
                title: "BVOai",
                body: "Track, improve and grow your business value, live from your books.",
                bg: "linear-gradient(150deg, #2e86f5, #1f6fd6, #1a5fb8)",
                color: "#ffffff",
              },
              {
                href: "/about",
                title: "BVOSales",
                body: "Business sales backed by valuation expertise. You are here.",
                bg: "linear-gradient(150deg, #a34f57, #8c3a42, #702e34)",
                color: "#ffffff",
              },
            ].map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="rounded-[22px] p-6 no-underline transition hover:brightness-105"
                style={{ background: card.bg, color: card.color }}
                {...(card.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <h3 className="m-0 font-display text-[22px] font-bold" style={{ color: card.color }}>
                  {card.title}
                </h3>
                <p className="mt-3 mb-0 text-[15px] leading-relaxed opacity-90">{card.body}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta
        title="Talk to the team about your sale."
        body="A short questionnaire, then a call with a real person."
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

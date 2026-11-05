import { Reveal } from "./Reveal";

type Card = {
  label: string;
  title: string;
  body: string;
};

const backgrounds = [
  "linear-gradient(150deg, #f7ecec, #ead9d9)",
  "linear-gradient(150deg, #ead9d9, #d2b9ba)",
  "linear-gradient(150deg, #a34f57, #8c3a42, #702e34)",
];

const labelColors = ["#702e34", "#4a2b2c", "#f1e3e3"];
const headingColors = ["#1a1b19", "#1a1b19", "#ffffff"];
const bodyColors = ["#3a2223", "#2b1a1b", "#f6ecec"];

export function MethodCards({
  eyebrow,
  title,
  cards,
}: {
  eyebrow: string;
  title: string;
  cards: Card[];
}) {
  return (
    <section className="section section-soft">
      <div className="container">
        <Reveal>
          <p className="eyebrow mb-3">{eyebrow}</p>
          <h2 className="h2 mb-10 max-w-[12em]">{title}</h2>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 100}>
              <article
                className="h-full rounded-[22px] p-7 shadow-[var(--shadow-card)] transition duration-350 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
                style={{ background: backgrounds[i] }}
              >
                <p
                  className="m-0 text-[13px] font-semibold tracking-[0.04em] uppercase"
                  style={{ color: labelColors[i] }}
                >
                  {card.label}
                </p>
                <h3
                  className="mt-4 mb-3 font-display text-[25px] font-bold leading-snug tracking-tight"
                  style={{ color: headingColors[i] }}
                >
                  {card.title}
                </h3>
                <p
                  className="m-0 text-[15px] leading-relaxed"
                  style={{ color: bodyColors[i] }}
                >
                  {card.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

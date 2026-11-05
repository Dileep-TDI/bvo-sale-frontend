type Card = {
  label: string;
  title: string;
  body: string;
};

const backgrounds = [
  "linear-gradient(150deg, #ead9d9, #d2b9ba)",
  "linear-gradient(150deg, #d2b9ba, #c97f82)",
  "linear-gradient(150deg, #9a5558, #8b4a4c, #6f3a3c)",
];

const labelColors = ["#6f3a3c", "#4a2b2c", "#f1e3e3"];
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
    <section className="section section-dark">
      <div className="container reveal">
        <p className="eyebrow mb-3 text-rose">{eyebrow}</p>
        <h2 className="h2 mb-10 text-cream">{title}</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((card, i) => (
            <article
              key={card.title}
              className="rounded-[22px] p-7"
              style={{ background: backgrounds[i] }}
            >
              <p
                className="m-0 text-[14px] font-semibold"
                style={{ color: labelColors[i] }}
              >
                {card.label}
              </p>
              <h3
                className="mt-4 mb-3 font-display text-[26px] font-bold leading-snug"
                style={{ color: headingColors[i] }}
              >
                {card.title}
              </h3>
              <p className="m-0 text-[16px] leading-relaxed" style={{ color: bodyColors[i] }}>
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

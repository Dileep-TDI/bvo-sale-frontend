type Stat = { value: string; label: string };

export function StatsBand({
  lead,
  stats,
}: {
  lead: string;
  stats: Stat[];
}) {
  return (
    <section className="section-burgundy py-16">
      <div className="container reveal">
        <p className="mb-10 mt-0 max-w-[28em] text-[18px] text-[#f6ecec]">{lead}</p>
        <div className="grid gap-10 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="m-0 font-display text-[clamp(40px,5vw,56px)] font-extrabold leading-none text-cream">
                {stat.value}
              </p>
              <p className="mt-3 mb-0 text-[15px] text-[#f1e3e3]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

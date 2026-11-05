"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  value: string;
  label: string;
  numeric?: number;
  suffix?: string;
};

function AnimatedValue({
  value,
  numeric,
  suffix = "",
  active,
}: {
  value: string;
  numeric?: number;
  suffix?: string;
  active: boolean;
}) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!active || numeric == null) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(numeric);
      return;
    }
    const start = performance.now();
    const duration = 1600;
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(numeric * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, numeric]);

  if (numeric == null) {
    return <span>{value}</span>;
  }

  return (
    <>
      <span aria-hidden>
        {n.toLocaleString("en-AU")}
        {suffix}
      </span>
      <span className="sr-only">{value}</span>
    </>
  );
}

export function StatsBand({
  lead,
  stats,
}: {
  lead: string;
  stats: Stat[];
}) {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="section-burgundy relative overflow-hidden py-16 md:py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl"
      />
      <div className="container relative">
        <p
          className={`mb-10 mt-0 max-w-[28em] text-[18px] leading-relaxed text-[#f6ecec] transition duration-700 ${
            active ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          {lead}
        </p>
        <div className="grid gap-10 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`transition duration-700 ${
                active ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: active ? `${120 + i * 110}ms` : "0ms" }}
            >
              <p className="m-0 font-display text-[clamp(40px,5vw,56px)] font-extrabold leading-none tracking-tight text-cream">
                <AnimatedValue
                  value={stat.value}
                  numeric={stat.numeric}
                  suffix={stat.suffix}
                  active={active}
                />
              </p>
              <p className="mt-3 mb-0 text-[15px] text-[#f1e3e3]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

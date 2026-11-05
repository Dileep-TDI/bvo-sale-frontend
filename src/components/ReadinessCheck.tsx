"use client";

import { useMemo, useState } from "react";
import { Button } from "./Button";

const statements = [
  "The business could run for a month without me",
  "No single customer makes up more than 20% of revenue",
  "I have three years of clean financial statements",
  "Personal expenses don’t run through the business",
  "Our lease has at least three years left, or an option to renew",
  "Key suppliers and customers are on written agreements",
  "Profit has been steady or growing for the last three years",
  "I know roughly what the business is worth, and why",
];

export function ReadinessCheck() {
  const [checked, setChecked] = useState<boolean[]>(
    () => statements.map(() => false),
  );

  const score = useMemo(
    () => checked.filter(Boolean).length,
    [checked],
  );

  const result =
    score >= 7
      ? {
          heading: "You may be closer than you think",
          body: "You’re in good shape. A short seller questionnaire gets a real conversation started.",
          href: "/sell/questionnaire",
          label: "Start the seller questionnaire",
          variant: "burgundy" as const,
        }
      : score >= 4
        ? {
            heading: "A few things to fix first",
            body: "A formal valuation will show what’s costing you and what to fix before market.",
            href: "https://www.businessvaluations.online/",
            label: "Request a formal valuation (BVO)",
            variant: "green" as const,
          }
        : {
            heading: "Time to start building value",
            body: "There’s work to do before a sale, and that’s normal. BVOai shows you where value is leaking and tracks your progress as you fix it.",
            href: "https://www.bvo.ai/",
            label: "Start your $1 BVOai trial",
            variant: "blue" as const,
          };

  return (
    <section id="check" className="section">
      <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow">Quick readiness check</p>
          <h2 className="h2 mt-3 mb-4">How close are you to sale-ready?</h2>
          <p className="lead mt-0 mb-8">
            Tick everything that’s true for your business today. It takes 30 seconds and nothing is saved.
          </p>
          <ul className="m-0 list-none space-y-3 p-0">
            {statements.map((item, i) => (
              <li key={item}>
                <label className="chk flex cursor-pointer items-start gap-3 rounded-[14px] border border-line bg-card px-4 py-3.5 transition hover:border-burgundy">
                  <input
                    type="checkbox"
                    className="mt-1 h-5 w-5 accent-burgundy"
                    checked={checked[i]}
                    onChange={() =>
                      setChecked((prev) =>
                        prev.map((v, idx) => (idx === i ? !v : v)),
                      )
                    }
                  />
                  <span className="text-[16px] leading-snug text-body">{item}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        <aside className="rounded-[22px] bg-tint p-7 lg:sticky lg:top-28 lg:self-start">
          <p className="m-0 text-[15px] font-semibold text-tint-ink">
            {score} of 8
          </p>
          <h3 className="mt-3 mb-3 font-display text-[28px] font-bold text-ink">
            {result.heading}
          </h3>
          <p className="mb-6 mt-0 text-[16px] leading-relaxed text-body">
            {result.body}
          </p>
          <Button href={result.href} variant={result.variant}>
            {result.label}
          </Button>
        </aside>
      </div>
    </section>
  );
}

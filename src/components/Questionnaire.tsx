"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  adviserSteps,
  buyerSteps,
  firstName,
  resolveText,
  sellerSteps,
  type Step,
} from "@/data/questionnaires";
import { Button } from "./Button";

type Props = {
  type: "seller" | "buyer" | "adviser";
};

function validate(step: Step, answers: Record<string, string>) {
  for (const field of step.fields) {
    const value = (answers[field.id] || "").trim();
    if (!field.required) continue;
    if (field.type === "email") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return "Enter an email like name@email.com.au.";
      }
    } else if (field.type === "tel") {
      if (value.replace(/\D/g, "").length < 8) {
        return "Enter a number with at least 8 digits.";
      }
    } else if (field.type === "pills") {
      if (!value) return "Choose one to continue.";
    } else if (value.length < 2) {
      return field.id === "name" ? "Enter your name." : "Please enter a response.";
    }
  }
  return null;
}

const stepsByType: Record<Props["type"], Step[]> = {
  seller: sellerSteps,
  buyer: buyerSteps,
  adviser: adviserSteps,
};

export function Questionnaire({ type }: Props) {
  const steps = stepsByType[type];
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [index, setIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [key, setKey] = useState(0);

  const visible = useMemo(
    () => steps.filter((s) => !s.showWhen || s.showWhen(answers)),
    [steps, answers],
  );

  const step = visible[Math.min(index, visible.length - 1)];
  const progress = done ? 1 : (index + 1) / visible.length;
  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress);

  function setField(id: string, value: string) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    setError(null);
  }

  function goNext(nextAnswers = answers) {
    const err = validate(step, nextAnswers);
    if (err) {
      setError(err);
      return;
    }
    if (index >= visible.length - 1) {
      setDone(true);
      return;
    }
    setIndex((i) => i + 1);
    setKey((k) => k + 1);
    setError(null);
  }

  function pickPill(fieldId: string, value: string) {
    const next = { ...answers, [fieldId]: value };
    setAnswers(next);
    setError(null);
    if (step.fields.length === 1 && step.fields[0].type === "pills") {
      window.setTimeout(() => goNext(next), 300);
    }
  }

  if (done) {
    const first = firstName(answers.name);
    const isClient =
      answers.whose === "A client’s business" ||
      answers.buyingFor === "A client (I’m their adviser)" ||
      answers.purpose?.includes("client");

    return (
      <div className="q-stage flex flex-col items-center gap-6 bg-stage px-3 pb-[72px] pt-16 text-center">
        <div className="w-full max-w-[520px] rounded-[24px] border border-[#2f332d] bg-[#1a1d19] p-8 sm:p-10">
          <p className="m-0 text-[13px] font-semibold text-rose">You’re done</p>
          <h1 className="mt-3 mb-4 font-display text-[clamp(28px,4vw,40px)] font-bold leading-tight text-cream">
            Thanks, {first}. {isClient ? "We’ll take it from here." : "We’re on it."}
          </h1>
          <p className="mx-auto mb-6 max-w-[34em] text-[16px] leading-relaxed text-[#a7aaa1]">
            {type === "buyer"
              ? "We’ll match your brief against current opportunities and let you know when the right business comes up. When it does, we’ll help you understand the price and the risks before you make an offer."
              : isClient
                ? "We’ll find the best broker for your client’s business."
                : "We’ll find the best broker for your business: someone who knows your industry, your size and the buyers most likely to pay for what you’ve built."}
            {answers.listingName
              ? ` We’ll also pass your interest in “${answers.listingName}” to the broker handling it.`
              : ""}
          </p>
          <p className="mb-8 text-[16px] font-medium text-cream">
            We’ll call you within a day. Or if you’d rather talk now, call us and speak with one of our team.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="tel:1300282583" variant="burgundy">
              Call 1300 282 583
            </Button>
            {type === "buyer" ? (
              <Button
                href="https://morganbusinesssales.com/businesses-for-sale/"
                variant="rose"
              >
                Browse businesses for sale
              </Button>
            ) : (
              <Button href="/exit-ready" variant="rose">
                Not quite ready? Get Exit Ready
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  const title = resolveText(step.title, answers);
  const help = resolveText(step.help, answers);
  const onlyPills =
    step.fields.length === 1 && step.fields[0].type === "pills";

  return (
    <div className="q-stage flex flex-col items-center gap-6 bg-stage px-3 pb-[72px] pt-16">
      <div className="relative aspect-square w-[min(680px,calc(100vw-24px))] [container-type:inline-size]">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full -rotate-90">
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#2f332d"
            strokeWidth="1.2"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#c97f82"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-[stroke-dashoffset] duration-700"
          />
        </svg>

        {visible.map((s, i) => {
          const angle = (i / visible.length) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + Math.cos(angle) * radius;
          const y = 50 + Math.sin(angle) * radius;
          const doneStep = i < index;
          const current = i === index;
          return (
            <button
              key={s.id}
              type="button"
              disabled={i > index}
              onClick={() => {
                if (i < index) {
                  setIndex(i);
                  setKey((k) => k + 1);
                  setError(null);
                }
              }}
              className={`absolute hidden -translate-x-1/2 -translate-y-1/2 rounded-full border text-[11px] font-semibold min-[900px]:block ${
                doneStep
                  ? "h-7 w-7 border-burgundy bg-burgundy text-white"
                  : current
                    ? "h-7 w-7 animate-pulse border-rose bg-rose text-charcoal"
                    : "h-6 w-6 border-[#4a4d46] bg-transparent text-[#9a9d94]"
              }`}
              style={{ left: `${x}%`, top: `${y}%` }}
              aria-label={s.dot}
            >
              {doneStep ? "✓" : i + 1}
            </button>
          );
        })}

        <div className="absolute inset-[15%] flex items-center justify-center">
          <div
            key={key}
            className="flex w-full flex-col items-center gap-[clamp(10px,2.6cqw,20px)] text-center animate-[sIn_0.55s_cubic-bezier(.2,.8,.2,1)_both]"
          >
            <p className="m-0 text-[clamp(11px,1.9cqw,13px)] font-semibold tracking-wide text-rose">
              {step.dot}
            </p>
            <h1 className="m-0 font-display text-[clamp(19px,4.4cqw,31px)] font-bold leading-[1.12] tracking-tight text-cream">
              {title}
            </h1>
            {help && (
              <p className="m-0 max-w-[34em] text-[clamp(12px,2.1cqw,14px)] leading-relaxed text-[#a7aaa1]">
                {help}
              </p>
            )}

            <div className="flex w-full max-w-[380px] flex-col gap-3">
              {step.fields.map((field) =>
                field.type === "pills" ? (
                  <div key={field.id} className="flex flex-wrap justify-center gap-2">
                    {field.options?.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        aria-pressed={answers[field.id] === opt}
                        onClick={() => pickPill(field.id, opt)}
                        className={`min-h-11 rounded-full border px-4 text-[14px] font-semibold transition ${
                          answers[field.id] === opt
                            ? "border-rose bg-rose text-charcoal"
                            : "border-[#4a4d46] bg-transparent text-cream hover:border-rose"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                ) : (
                  <input
                    key={field.id}
                    type={field.type === "email" ? "email" : field.type === "tel" ? "tel" : "text"}
                    value={answers[field.id] || ""}
                    onChange={(e) => setField(field.id, e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") goNext();
                    }}
                    placeholder={field.placeholder}
                    aria-label={field.placeholder || field.label || field.id}
                    className="w-full border-0 border-b border-[#5b5e56] bg-transparent px-0.5 py-2 text-center text-[clamp(16px,3cqw,20px)] text-cream outline-none placeholder:text-[#6b6e66] focus:border-rose"
                  />
                ),
              )}
            </div>

            {error && (
              <p role="alert" className="m-0 text-[14px] text-[#ecc9ca]">
                {error}
              </p>
            )}

            <div className="flex items-center gap-3">
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    setIndex((i) => i - 1);
                    setKey((k) => k + 1);
                    setError(null);
                  }}
                  className="min-h-11 rounded-full border border-[#4a4d46] px-5 text-[14px] font-semibold text-[#c9ccc2]"
                >
                  Back
                </button>
              )}
              {!onlyPills && (
                <button
                  type="button"
                  onClick={() => goNext()}
                  className="min-h-11 rounded-full bg-[#f3f4ec] px-5 text-[14px] font-semibold text-charcoal hover:bg-white"
                >
                  {step.continueLabel || "Continue"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <p className="m-0 text-center text-[14px] text-[#9a9d94]">
        Confidential. No obligation. A real person calls you.{" "}
        <Link href="tel:1300282583" className="text-rose no-underline hover:underline">
          Prefer to talk? Call 1300 282 583
        </Link>
      </p>
    </div>
  );
}

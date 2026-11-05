"use client";

import { useMemo, useState } from "react";
import { ArticleCard } from "./ArticleCard";
import { audienceLabel, type Article, type Audience } from "@/lib/article-types";

const filters: Array<"all" | Audience> = ["all", "owners", "exit-ready", "advisers"];

function filterLabel(f: "all" | Audience) {
  if (f === "all") return "All";
  return audienceLabel(f);
}

type ArticleCardData = Omit<Article, "content">;

export function InsightsFilter({
  articles,
  featured,
}: {
  articles: ArticleCardData[];
  featured: ArticleCardData;
}) {
  const [filter, setFilter] = useState<"all" | Audience>("all");

  const filtered = useMemo(
    () =>
      filter === "all"
        ? articles
        : articles.filter((a) => a.audience === filter),
    [articles, filter],
  );

  return (
    <>
      <a
        href={`/insights/${featured.slug}`}
        className="mb-12 grid overflow-hidden rounded-[24px] border border-line bg-card text-inherit no-underline shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:border-line2 lg:grid-cols-[1.2fr_0.8fr]"
      >
        <div className="relative min-h-[240px] bg-tint2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={featured.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center p-7 sm:p-10">
          <p className="m-0 text-[13px] font-semibold text-accent-ink">
            Featured: {audienceLabel(featured.audience)}
          </p>
          <h2 className="mt-3 mb-3 font-display text-[clamp(24px,3vw,34px)] font-bold leading-snug text-ink">
            {featured.title}
          </h2>
          <p className="mb-4 text-[16px] leading-relaxed text-body">{featured.summary}</p>
          <p className="m-0 text-[14px] text-muted">{featured.author}</p>
        </div>
      </a>

      <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter insights">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={filter === f}
            onClick={() => setFilter(f)}
            className={`min-h-11 rounded-full px-5 text-[14px] font-semibold transition ${
              filter === f
                ? "bg-burgundy text-white shadow-[var(--shadow-card)]"
                : "border border-line bg-card text-body hover:bg-band"
            }`}
          >
            {filterLabel(f)}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </>
  );
}

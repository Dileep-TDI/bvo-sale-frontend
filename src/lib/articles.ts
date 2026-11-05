import "server-only";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Article, Audience } from "./article-types";

export type { Article, Audience } from "./article-types";
export { audienceLabel } from "./article-types";

const articlesDir = path.join(process.cwd(), "content", "articles");

const summaries: Record<string, string> = {
  "how-to-sell-a-business-in-australia":
    "The nine steps from first valuation to settlement, and where owners lose money along the way.",
  "what-is-your-business-worth":
    "Normalised EBITDA, multiples and risk: how buyers decide what they’ll pay, and how to lift your number.",
  "selling-a-business-in-2026":
    "Strong but selective buyers, higher rates and CGT changes from 1 July 2027.",
  "getting-your-business-ready-to-sell":
    "What to fix, and when, before buyers find it first.",
  "when-a-client-wants-to-sell":
    "How to guide a sale without becoming the deal manager, and what to ask any broker.",
  "exit-planning-for-accountants":
    "Why three years is the right runway, and how to raise it at the next review.",
  "pre-sale-structuring-checklist":
    "Business or entity, asset or share sale, concessions and the 1 July 2027 timing question.",
  "2026-business-sale-market-advisers":
    "Five conversations worth having with business-owner clients before 30 June.",
  "exit-planning-guide":
    "What it is, when to start and five steps to leave on your terms.",
  "business-risk-assessment":
    "Same profit, different price. Find the risks before a buyer does.",
  "increase-business-value":
    "Three levers that lift what a buyer will pay, and what not to do.",
  "business-valuation-vs-software":
    "What each is for, what it costs and which one suits you.",
};

function imageFromSlug(slug: string) {
  return `/assets/articles/${slug}.svg`;
}

export function getAllArticles(): Article[] {
  const files = fs
    .readdirSync(articlesDir)
    .filter((f) => f.endsWith(".md"))
    .sort();

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(articlesDir, file), "utf8");
    const { data, content } = matter(raw);
    const slug = String(data.slug);
    return {
      slug,
      title: String(data.title),
      seoTitle: String(data.seo_title || data.title),
      metaDescription: String(data.meta_description || ""),
      audience: data.audience as Audience,
      author: String(data.author || "BVOSales team"),
      image: imageFromSlug(slug),
      summary: summaries[slug] || String(data.meta_description || ""),
      content: content.replace(/^#\s.+\n+/, ""),
    };
  });
}

export function getArticle(slug: string): Article | undefined {
  return getAllArticles().find((a) => a.slug === slug);
}

export function getArticlesByAudience(audience: Audience) {
  return getAllArticles().filter((a) => a.audience === audience);
}

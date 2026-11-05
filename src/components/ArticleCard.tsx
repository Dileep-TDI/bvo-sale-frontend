import Image from "next/image";
import Link from "next/link";
import { audienceLabel, type Article } from "@/lib/article-types";

export function ArticleCard({
  article,
}: {
  article: Pick<Article, "slug" | "title" | "summary" | "audience" | "image">;
}) {
  return (
    <Link
      href={`/insights/${article.slug}`}
      className="group flex flex-col overflow-hidden rounded-[20px] border border-line bg-card text-inherit no-underline shadow-[var(--shadow-card)] transition duration-350 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--burgundy)_20%,var(--line))] hover:shadow-[var(--shadow-soft)]"
    >
      <div className="relative aspect-[1200/630] overflow-hidden bg-tint2">
        <Image
          src={article.image}
          alt=""
          fill
          className="object-cover transition duration-700 ease-[cubic-bezier(0.22,0.8,0.24,1)] group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col border-t-2 border-burgundy p-5">
        <p className="m-0 text-[12px] font-semibold uppercase tracking-[0.06em] text-accent-ink">
          {audienceLabel(article.audience)}
        </p>
        <h3 className="mt-2 mb-2 font-display text-[21px] font-bold leading-snug tracking-tight text-ink transition-colors group-hover:text-burgundy">
          {article.title}
        </h3>
        <p className="m-0 text-[15px] leading-relaxed text-muted">{article.summary}</p>
      </div>
    </Link>
  );
}

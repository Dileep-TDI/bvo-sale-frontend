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
      className="group flex flex-col overflow-hidden rounded-[22px] border border-line bg-card text-inherit no-underline shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:border-line2 hover:shadow-[var(--shadow-soft)]"
    >
      <div className="relative aspect-[1200/630] overflow-hidden bg-tint2">
        <Image
          src={article.image}
          alt=""
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col border-t-2 border-burgundy p-5">
        <p className="m-0 text-[13px] font-semibold text-accent-ink">
          {audienceLabel(article.audience)}
        </p>
        <h3 className="mt-2 mb-2 font-display text-[22px] font-bold leading-snug text-ink group-hover:underline group-hover:underline-offset-4">
          {article.title}
        </h3>
        <p className="m-0 text-[15px] leading-relaxed text-muted">{article.summary}</p>
      </div>
    </Link>
  );
}

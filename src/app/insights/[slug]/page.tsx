import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { ClosingCta } from "@/components/ClosingCta";
import {
  audienceLabel,
  getAllArticles,
  getArticle,
} from "@/lib/articles";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.seoTitle,
    description: article.metaDescription,
    openGraph: {
      title: article.seoTitle,
      description: article.metaDescription,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <header className="section pb-10 pt-12">
        <div className="container hero-anim max-w-[760px]">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/insights", label: "Insights" },
              { label: article.title },
            ]}
          />
          <p className="eyebrow">{audienceLabel(article.audience)}</p>
          <h1 className="display mt-3 mb-4 text-[clamp(36px,5vw,56px)]">
            {article.title}
          </h1>
          <p className="mb-8 text-[15px] text-muted">{article.author}</p>
          <div className="relative mb-2 aspect-[1200/630] overflow-hidden rounded-[18px] bg-tint2">
            <Image
              src={article.image}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 760px) 100vw, 760px"
              priority
            />
          </div>
        </div>
      </header>

      <article className="section pt-0">
        <div className="container prose-article">
          <ReactMarkdown
            components={{
              a: ({ href, children }) => {
                if (!href) return <>{children}</>;
                if (href.startsWith("/")) {
                  return (
                    <Link href={href} className="text-accent-ink underline underline-offset-3">
                      {children}
                    </Link>
                  );
                }
                return (
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {children}
                  </a>
                );
              },
            }}
          >
            {article.content}
          </ReactMarkdown>
        </div>
      </article>

      <ClosingCta
        title="Ready to talk about your sale?"
        body="A short, confidential questionnaire, then a call with a real person."
        actions={
          <>
            <Button href="/start" variant="burgundy">
              Start the questionnaire
            </Button>
            <Button href="/insights" variant="rose">
              More insights
            </Button>
          </>
        }
      />
    </>
  );
}

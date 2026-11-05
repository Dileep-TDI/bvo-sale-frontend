import Link from "next/link";

type Crumb = { href?: string; label: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-[14px] text-muted">
      <ol className="m-0 flex flex-wrap items-center gap-2 p-0 list-none">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            {item.href ? (
              <Link href={item.href} className="text-accent-ink no-underline hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="text-body">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

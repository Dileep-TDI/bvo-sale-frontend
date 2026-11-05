import Image from "next/image";

export function TeamCard({
  name,
  role,
  bio,
  image,
  compact,
}: {
  name: string;
  role: string;
  bio: string;
  image: string;
  compact?: boolean;
}) {
  return (
    <article className={compact ? "flex flex-col gap-4" : "grid gap-6 md:grid-cols-[280px_1fr] md:gap-10"}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] bg-black">
        <Image src={image} alt={name} fill className="object-cover" sizes="280px" />
      </div>
      <div>
        <h3 className="m-0 font-display text-[28px] font-bold text-ink">{name}</h3>
        <p className="mt-2 mb-4 text-[15px] font-semibold text-burgundy">{role}</p>
        <p className="m-0 text-[16px] leading-relaxed text-body">{bio}</p>
      </div>
    </article>
  );
}

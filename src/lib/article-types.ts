export type Audience = "owners" | "advisers" | "exit-ready";

export type Article = {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  audience: Audience;
  author: string;
  image: string;
  summary: string;
  content: string;
};

export function audienceLabel(audience: Audience) {
  if (audience === "owners") return "For owners";
  if (audience === "advisers") return "For advisers";
  return "Exit Ready";
}

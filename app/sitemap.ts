import type { MetadataRoute } from "next";
import { ARTICLES } from "@/lib/articles";
import { CROPS } from "@/lib/crops";
import { PROBLEMS } from "@/lib/problems";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

function abs(path: string): string {
  const root = SITE_URL.replace(/\/$/, "");
  if (path === "/") return `${root}/`;
  return `${root}${path.startsWith("/") ? path : `/${path}`}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "/",
    "/kalendar/",
    "/posev/",
    "/kultury/",
    "/kalkulyator/",
    "/sosedstvo/",
    "/problemy/",
    "/dnevnik/",
    "/checklist/",
    "/faq/",
    "/articles/",
    "/backup/",
  ];

  return [
    ...pages.map((path) => ({
      url: abs(path),
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.8,
    })),
    ...CROPS.map((c) => ({
      url: abs(`/kultury/${c.slug}/`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...PROBLEMS.map((p) => ({
      url: abs(`/problemy/${p.slug}/`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...ARTICLES.map((a) => ({
      url: abs(`/articles/${a.slug}/`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}

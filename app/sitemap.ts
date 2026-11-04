import type { MetadataRoute } from "next";
import { categories } from "@/lib/products";
import { nav, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = nav.map((n) => n.href);
  const cats = categories.flatMap((c) => [`/products/${c.slug}`, ...c.items.map((i) => `/products/${c.slug}/${i.slug}`)]);
  return [...pages, ...cats].map((p) => ({ url: `${site.url}${p === "/" ? "" : p}`, lastModified: new Date() }));
}

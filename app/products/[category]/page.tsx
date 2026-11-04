import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHead from "@/components/PageHead";
import ProductCard from "@/components/ProductCard";
import { categories, findCategory } from "@/lib/products";
import { quoteLink } from "@/lib/site";

type P = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const c = findCategory((await params).category);
  return c ? { title: c.name, description: `${c.blurb} ${c.uses}`, openGraph: { images: [c.img] } } : {};
}

export default async function CategoryPage({ params }: P) {
  const c = findCategory((await params).category);
  if (!c) notFound();
  return (
    <>
      <PageHead title={c.name} intro={`${c.blurb} ${c.uses}`} crumbs={[{ href: "/products", label: "Products" }]} image={c.img} />
      <section className="section">
        <div className="wrap">
          <div className="items">
            {c.items.map((i) => <ProductCard key={i.slug} item={i} category={c.slug} />)}
          </div>
          <div className="actions"><a className="btn" href={quoteLink(c.name)} target="_blank" rel="noopener noreferrer">Request a bulk quotation</a></div>
        </div>
      </section>
    </>
  );
}

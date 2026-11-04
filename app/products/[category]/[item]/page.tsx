import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import EnquiryForm from "@/components/EnquiryForm";
import PageHead from "@/components/PageHead";
import ProductCard from "@/components/ProductCard";
import { categories, findCategory } from "@/lib/products";
import { site } from "@/lib/site";

type P = { params: Promise<{ category: string; item: string }> };

export function generateStaticParams() {
  return categories.flatMap((c) => c.items.map((i) => ({ category: c.slug, item: i.slug })));
}

async function load(params: P["params"]) {
  const { category, item } = await params;
  const c = findCategory(category);
  const i = c?.items.find((x) => x.slug === item);
  return c && i ? { c, i } : null;
}

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const f = await load(params);
  return f ? { title: f.i.name, description: `${f.i.name} from Vreekshya. ${f.c.uses}`, openGraph: { images: [f.i.img] } } : {};
}

export default async function ItemPage({ params }: P) {
  const f = await load(params);
  if (!f) notFound();
  const { c, i } = f;
  const related = c.items.filter((x) => x.slug !== i.slug).slice(0, 4);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: i.name,
    category: c.name,
    description: `${c.blurb} ${c.uses}`,
    image: `${site.url}${i.img}`,
    brand: { "@type": "Brand", name: site.name },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHead title={i.name} intro={`Part of our ${c.name.toLowerCase()} range.`} image={c.img}
        crumbs={[{ href: "/products", label: "Products" }, { href: `/products/${c.slug}`, label: c.name }]} />
      <section className="section">
        <div className="wrap two">
          <div>
            <div className="photo square"><Image src={i.img} alt={i.alt} fill priority sizes="(max-width: 860px) 100vw, 560px" /></div>
            <p className="caption">Representative image.</p>
            <p style={{ marginTop: "1.2rem" }}>{c.blurb}</p>
            <p style={{ marginTop: ".6rem" }}><strong>Applications:</strong> {c.uses}</p>
            <p className="note">Specifications, cuts, grades and packaging sizes are shared on request and agreed with each customer.</p>
          </div>
          <div>
            <h2>Enquire about {i.name.toLowerCase()}</h2>
            <EnquiryForm defaultProduct={i.name} />
          </div>
        </div>
      </section>
      {related.length > 0 && (
        <section className="section alt">
          <div className="wrap">
            <h2>Related products</h2>
            <div className="items">{related.map((r) => <ProductCard key={r.slug} item={r} category={c.slug} />)}</div>
          </div>
        </section>
      )}
    </>
  );
}

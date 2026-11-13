import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import ProductCard from "@/components/ProductCard";
import { categories } from "@/lib/products";

export const metadata: Metadata = { title: "Our Products", description: "Dehydrated vegetables, fruits, herbs and leaves for food manufacturers, retail and institutional buyers." };

export default function Products() {
  return (
    <>
      <PageHead title="Explore our product range" intro="A growing range of dehydrated agricultural ingredients suitable for food processing, retail, institutional and commercial applications." image="/images/site/dried-market.jpg" />
      {categories.map((c, idx) => (
        <section key={c.slug} className={`section${idx % 2 ? " alt" : ""}`}>
          <div className="wrap">
            <div className="section-head left">
              <h2>{c.name}</h2>
              <p>{c.blurb}</p>
              <p style={{ marginTop: ".6rem" }}><strong>Applications:</strong> {c.uses}</p>
            </div>
            <div className="items">
              {c.items.map((i) => <ProductCard key={i.slug} item={i} category={c.slug} />)}
            </div>
            <div className="actions"><Link className="btn ghost" href={`/products/${c.slug}`}>View category</Link></div>
          </div>
        </section>
      ))}
    </>
  );
}

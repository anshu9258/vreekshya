"use client";
import Link from "next/link";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { categories } from "@/lib/products";

export default function ProductTabs() {
  const [active, setActive] = useState(0);
  const c = categories[active];
  return (
    <>
      <div className="tabs" role="tablist" aria-label="Product categories">
        {categories.map((cat, i) => (
          <button key={cat.slug} role="tab" id={`tab-${i}`} aria-selected={i === active} aria-controls="tab-panel" onClick={() => setActive(i)}>
            {cat.name}
          </button>
        ))}
      </div>
      <div id="tab-panel" role="tabpanel" aria-labelledby={`tab-${active}`}>
        <p className="tab-blurb">{c.blurb}</p>
        <div className="items">
          {c.items.slice(0, 4).map((i) => <ProductCard key={i.slug} item={i} category={c.slug} />)}
        </div>
        <div className="actions center"><Link className="btn ghost" href={`/products/${c.slug}`}>View all {c.name.toLowerCase()}</Link></div>
      </div>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import ProductTabs from "@/components/ProductTabs";
import { quoteLink, site } from "@/lib/site";

const why = [
  ["Carefully selected produce", "Focus on suitable agricultural raw materials and product quality."],
  ["Convenient ingredients", "Easy-to-store and versatile ingredients for multiple applications."],
  ["Quality-focused processing", "Emphasis on processing standards, hygiene and consistency."],
  ["Bulk & retail solutions", "Serving businesses as well as individual consumers."],
];

const industries = [
  ["Food processing", "Instant foods, ready-to-eat products, packaged meals and soups.", "/images/site/soup.jpg", "Bowl of soup"],
  ["Spices & seasonings", "Onion, garlic, herbs and powders for seasoning blends.", "/images/site/spices.jpg", "Bowls of ground spices"],
  ["Bakery & confectionery", "Fruit ingredients and powders for mixes, cakes and desserts.", "/images/site/bakery.jpg", "Pastries in a bakery display"],
  ["Hotels, restaurants & catering", "Convenient ingredients for commercial kitchens.", "/images/site/kitchen.jpg", "Cooks working in a restaurant kitchen"],
  ["Retail & consumer brands", "Ingredients for consumer-facing product development.", "/images/site/retail.jpg", "Fruit and vegetables on supermarket shelves"],
];

const steps = ["Raw material selection", "Cleaning & preparation", "Cutting & processing", "Dehydration", "Quality inspection", "Packaging & storage"];

export default function Home() {
  return (
    <>
      <section className="hero">
        <HeroSlider />
        <div className="wrap hero-copy">
          <p className="descriptor">{site.descriptor}</p>
          <h1>{site.tagline}</h1>
          <p>We transform fresh agricultural produce into convenient, versatile and value-added ingredients designed for modern kitchens, food manufacturers, retailers and businesses.</p>
          <div className="actions">
            <Link className="btn" href="/products">Explore our products</Link>
            <Link className="btn ghost" href="/bulk-wholesale">Wholesale &amp; bulk enquiry</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap two center-y">
          <div className="photo"><Image src="/images/site/dried-market.jpg" alt="Assorted dried ingredients on display" fill sizes="(max-width: 860px) 100vw, 560px" /></div>
          <div>
            <p className="eyebrow">Who we are</p>
            <h2>Bringing nature’s goodness to everyday life</h2>
            <p className="lead">Our focus is on dehydrated agricultural products that offer convenience, versatility and extended storage potential compared with their fresh counterparts.</p>
            <p>From food processing industries and commercial kitchens to retailers and everyday consumers, we aim to provide ingredients that make food preparation easier and more efficient. Our philosophy is simple: respect nature, add value to agricultural produce and deliver ingredients that businesses and consumers can depend on.</p>
            <div className="actions"><Link className="btn ghost" href="/about">About Vreekshya</Link></div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Our products</p>
            <h2>Explore our product range</h2>
          </div>
          <ProductTabs />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Our strengths</p>
            <h2>Why choose Vreekshya</h2>
          </div>
          <div className="pillars">
            {why.map(([t, d]) => <div key={t}><h3>{t}</h3><p>{d}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Applications</p>
            <h2>Ingredients that power multiple industries</h2>
          </div>
          <div className="tiles">
            {industries.map(([t, d, src, alt]) => (
              <Link key={t} href="/industries" className="tile">
                <Image src={src} alt={alt} fill sizes="(max-width: 800px) 100vw, 400px" />
                <span className="tile-text"><strong>{t}</strong>{d}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap two center-y">
          <div>
            <p className="eyebrow">Our processing approach</p>
            <h2>From fresh produce to value-added ingredients</h2>
            <ol className="mini-steps">{steps.map((s) => <li key={s}>{s}</li>)}</ol>
            <div className="actions"><Link className="btn ghost" href="/quality">Quality &amp; processing</Link></div>
          </div>
          <div className="photo"><Image src="/images/site/tray-drying.jpg" alt="Tray of dried red tomatoes" fill sizes="(max-width: 860px) 100vw, 560px" /></div>
        </div>
      </section>

      <section className="band">
        <Image src="/images/site/warehouse.jpg" alt="" fill sizes="100vw" className="cover" />
        <div className="wrap">
          <h2>Looking for a reliable dehydrated ingredient sourcing partner?</h2>
          <p className="lead">Food manufacturers, distributors, hotels, institutional buyers, export houses and private-label brands: tell us what you need.</p>
          <div className="actions">
            <a className="btn" href={quoteLink()} target="_blank" rel="noopener noreferrer">Request a bulk quotation</a>
            <Link className="btn ghost" href="/bulk-wholesale">Bulk &amp; wholesale details</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap two center-y">
          <div className="photo"><Image src="/images/site/cooking.jpg" alt="Hands adding spices to a pan while cooking" fill sizes="(max-width: 860px) 100vw, 560px" /></div>
          <div>
            <p className="eyebrow">For households</p>
            <h2>Natural ingredients. Everyday convenience.</h2>
            <p>Whether you are preparing soups, gravies, snacks, seasoning blends or experimenting with new recipes, dehydrated ingredients offer an alternative way to use agricultural produce.</p>
            <div className="actions">
              <Link className="btn" href="/products">Explore products</Link>
              <Link className="btn ghost" href="/contact">Retail enquiry</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

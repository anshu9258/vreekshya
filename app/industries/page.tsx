import type { Metadata } from "next";
import Image from "next/image";
import PageHead from "@/components/PageHead";

export const metadata: Metadata = { title: "Industries & Applications", description: "Dehydrated ingredients for food processing, seasonings, bakery, hotels and catering, and consumer food brands." };

const industries = [
  ["Food processing industry", "Ingredients for instant foods, ready-to-eat products, packaged meals, soups and food formulations.", "/images/site/soup.jpg", "Bowl of soup"],
  ["Spices & seasoning manufacturers", "Dehydrated onion, garlic, herbs and vegetable powders for seasoning blends and flavouring applications.", "/images/site/spices.jpg", "Bowls of ground spices"],
  ["Bakery & confectionery", "Fruit ingredients and powders for bakery mixes, cakes, biscuits, desserts and confectionery.", "/images/site/bakery.jpg", "Pastries in a bakery display"],
  ["Hotels, restaurants & catering", "Convenient ingredients for commercial kitchens, food preparation and institutional catering.", "/images/site/kitchen.jpg", "Cooks working in a restaurant kitchen"],
  ["Retail & consumer food brands", "Dehydrated fruits, vegetables and powders for consumer-facing product development.", "/images/site/retail.jpg", "Fruit and vegetables on supermarket shelves"],
];

export default function Industries() {
  return (
    <>
      <PageHead title="Ingredients that power multiple industries" intro="Our dehydrated ingredients have applications across several food and allied industries." image="/images/site/kitchen.jpg" />
      <section className="section">
        <div className="wrap feature-list">
          {industries.map(([t, d, src, alt]) => (
            <article key={t} className="feature">
              <div className="photo"><Image src={src} alt={alt} fill sizes="(max-width: 860px) 100vw, 560px" /></div>
              <div><h2>{t}</h2><p className="lead">{d}</p></div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

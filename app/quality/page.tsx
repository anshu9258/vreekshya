import type { Metadata } from "next";
import Image from "next/image";
import PageHead from "@/components/PageHead";

export const metadata: Metadata = { title: "Quality & Processing", description: "From raw material selection to packaging: Vreekshya's processing approach and quality commitment." };

const steps = [
  ["Sourcing directly from farmers", "We source fruits, vegetables and herbs directly from farmers, selecting suitable produce based on product requirements and quality parameters.", "/images/site/process-sourcing.jpeg", "Farmers supplying fresh produce directly from the field"],
  ["Cleaning & preparation", "Cleaning, sorting, grading and preparation of raw materials before processing.", "/images/site/process-cleaning.jpeg", "Fresh vegetables being cleaned in processing equipment"],
  ["Cutting & processing", "Cutting and preparation into suitable sizes and formats depending on the final product.", "/images/site/process-cutting.jpeg", "Fresh vegetables moving through automated cutting equipment"],
  ["Dehydration", "Controlled dehydration and pulverizing according to the requirements of individual products.", "/images/site/process-dehydration-pulverizing.jpeg", "Food dehydration and pulverizing process in a processing facility"],
  ["Quality inspection", "Inspection of processed materials for relevant parameters, including moisture, appearance, texture and other applicable specifications.", "/images/site/process-quality-inspection.jpeg", "Staff inspecting fresh produce in a quality control area"],
  ["Packaging & storage", "Appropriate packaging and storage designed to maintain product quality and suitability for distribution.", "/images/site/process-packaging-storage.jpeg", "Packaged products being stored in a warehouse"],
];

export default function Quality() {
  return (
    <>
      <PageHead title="Quality is at the heart of everything we do" intro="Quality is an essential part of building customer confidence and long-term business relationships." image="/images/site/drying.jpg" />
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Our processing approach</p>
            <h2>From fresh produce to value-added ingredients</h2>
            <p>The quality of the finished product begins with the quality of the raw material. Our processing approach focuses on these stages.</p>
          </div>
          <ol className="steps">
            {steps.map(([t, d, src, alt]) => (
              <li key={t}>
                <div className="photo"><Image src={src} alt={alt} fill sizes="(max-width: 860px) 100vw, 380px" /></div>
                <strong>{t}</strong>{d}
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap two center-y">
          <div>
            <h2>Our quality approach</h2>
            <p style={{ marginBottom: "1.2rem" }}>We aim to develop products that meet the requirements of different customers and food applications.</p>
            <ul className="list">
              <li>Responsible raw material sourcing.</li>
              <li>Appropriate cleaning and preparation.</li>
              <li>Product-specific processing requirements.</li>
              <li>Moisture and product-quality monitoring.</li>
              <li>Suitable food-grade packaging.</li>
              <li>Hygienic handling and storage.</li>
              <li>Customer-specific product specifications.</li>
            </ul>
          </div>
          <div className="photo"><Image src="/images/site/spice-bowls.jpg" alt="Small bowls of ground ingredients and whole spices" fill sizes="(max-width: 860px) 100vw, 560px" /></div>
        </div>
      </section>
    </>
  );
}

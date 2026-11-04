import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";
import PageHead from "@/components/PageHead";

export const metadata: Metadata = { title: "Bulk & Wholesale Supply", description: "Bulk dehydrated ingredients, custom specifications, packaging solutions and private label opportunities from Vreekshya." };

const solutions = [
  ["Bulk supply", "Dehydrated ingredients in bulk quantities according to customer requirements."],
  ["Custom specifications", "Product formats, cuts and grades based on feasibility and agreed specifications."],
  ["Packaging solutions", "Packaging options based on quantity, product and customer requirements."],
  ["Private label opportunities", "For businesses developing products under their own brand, subject to feasibility."],
  ["Long-term supply partnerships", "Sustainable relationships with distributors, manufacturers and institutional customers."],
];
const buyers = ["Food manufacturers", "Food processing companies", "Bulk ingredient distributors", "Wholesale traders", "Hotels and restaurant chains", "Institutional buyers", "Export houses", "Private-label food brands"];

export default function Bulk() {
  return (
    <>
      <PageHead title="Your trusted partner for dehydrated food ingredients" intro="Business customers need consistent specifications, reliable communication, suitable packaging and dependable supply arrangements." image="/images/site/warehouse.jpg" />
      <section className="section">
        <div className="wrap two">
          <div>
            <h2>We aim to work with</h2>
            <ul className="list">{buyers.map((b) => <li key={b}>{b}</li>)}</ul>
          </div>
          <div>
            <h2>Our B2B solutions</h2>
            <ul className="list">{solutions.map(([t, d]) => <li key={t}><strong>{t}.</strong> {d}</li>)}</ul>
          </div>
        </div>
      </section>
      <section className="section alt" id="quote">
        <div className="wrap two">
          <div>
            <h2>Looking for a reliable dehydrated ingredient sourcing partner?</h2>
            <p>Tell us the products, quantities and specifications you need. Your details open in WhatsApp, ready to send to us.</p>
          </div>
          <EnquiryForm quotation defaultType="Wholesale / Bulk Purchase" />
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import PageHead from "@/components/PageHead";

export const metadata: Metadata = { title: "About Us", description: "Vreekshya is an emerging food processing brand focused on dehydration and value addition of agricultural produce." };

export default function About() {
  return (
    <>
      <PageHead title="About Vreekshya" intro="An emerging food processing brand focused on the dehydration and value addition of agricultural produce." image="/images/site/farm-people.jpg" />
      <section className="section">
        <div className="wrap two center-y">
          <div>
            <h2>Our story</h2>
            <p>Our vision is to create a bridge between agricultural resources and the growing demand for convenient, versatile and quality-focused food ingredients.</p>
            <p style={{ marginTop: "1rem" }}>We see an opportunity to reduce dependence on seasonal availability, improve the usability of agricultural produce and create value through food processing.</p>
            <p style={{ marginTop: "1rem" }}>Through our focus on dehydrated fruits, vegetables, herbs and powders, we aim to serve a diverse customer base, from food processing companies and institutional buyers to retailers and households.</p>
            <p style={{ marginTop: "1rem" }}>We believe the future of food lies in combining the goodness of nature with thoughtful processing, innovation and responsible business practices.</p>
          </div>
          <div className="photo"><Image src="/images/site/hero-farm.jpg" alt="Rows of green crops in a field" fill sizes="(max-width: 860px) 100vw, 560px" /></div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap two">
          <div>
            <h2>Our vision</h2>
            <p>To become a trusted name in India’s dehydrated food and natural ingredients industry, creating value through agricultural processing, product innovation and customer-focused solutions.</p>
          </div>
          <div>
            <h2>Our mission</h2>
            <ul className="list">
              <li>Add value to agricultural produce through dehydration and food processing.</li>
              <li>Provide convenient and versatile food ingredients.</li>
              <li>Build long-term relationships with farmers, suppliers, distributors and customers.</li>
              <li>Maintain a strong focus on quality, hygiene and consistency.</li>
              <li>Develop innovative product solutions for domestic and international markets.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Our core values</h2>
          <div className="pillars five">
            <div><h3>Quality first</h3><p>Maintaining a strong focus on product quality.</p></div>
            <div><h3>Natural goodness</h3><p>Respecting the value of agricultural produce.</p></div>
            <div><h3>Innovation</h3><p>Exploring new applications and product possibilities.</p></div>
            <div><h3>Customer commitment</h3><p>Understanding and fulfilling customer requirements.</p></div>
            <div><h3>Sustainability</h3><p>Encouraging better utilization of agricultural resources.</p></div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap two">
          <div>
            <h2>Creating more value from every harvest</h2>
            <p>Agriculture is the foundation of our food system. We see dehydration as an opportunity to create value beyond the fresh produce market, and believe responsible food processing can contribute to a more efficient agricultural value chain.</p>
          </div>
          <ul className="list">
            <li>Encourage value addition to agricultural produce.</li>
            <li>Explore opportunities to work with farmers and local suppliers.</li>
            <li>Improve the usability of seasonal agricultural products.</li>
            <li>Support convenient storage and distribution of suitable ingredients.</li>
            <li>Explore opportunities to minimise avoidable processing losses.</li>
          </ul>
        </div>
      </section>
    </>
  );
}

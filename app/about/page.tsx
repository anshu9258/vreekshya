import type { Metadata } from "next";
import Image from "next/image";
import PageHead from "@/components/PageHead";

export const metadata: Metadata = { title: "About Us", description: "Rooted in Muirpur, Vreekshya was founded by Tanu Keshari to bring nature-inspired dehydrated fruits, vegetables, herbs and powders into everyday life." };

export default function About() {
  return (
    <>
      <PageHead title="About Vreekshya" intro="Rooted in Nature. Inspired by Life. Created with Purpose." image="/images/site/farm-people.jpg" />
      <section className="section">
        <div className="wrap two center-y">
          <div>
            <h2>Our story</h2>
            <h3>Rooted in Nature. Inspired by Life. Created with Purpose.</h3>
            <p>Every meaningful brand begins with a belief. Vreekshya began with a simple one: the goodness of nature deserves a place in our everyday lives.</p>
            <p style={{ marginTop: "1rem" }}>Rooted in Muirpur, a small village in the Sonbhadra district of Uttar Pradesh, India, Vreekshya carries the values of its founder, Tanu Keshari. Born and raised in Muirpur, Tanu developed a deep appreciation for nature, simple living, and the importance of family from an early age.</p>
            <p style={{ marginTop: "1rem" }}>Her journey took her from Sonbhadra to Varanasi for higher education and eventually to Mumbai, where she spent five years building her professional career. While Mumbai opened doors to new opportunities and experiences, time away from home gradually inspired a deeper realisation: sometimes, the most meaningful growth begins when we reconnect with our roots.</p>
            <p style={{ marginTop: "1rem" }}>A desire to return closer to family, build something of her own, and pursue her passion for natural living became the foundation of a new journey.</p>
            <p style={{ marginTop: "1rem" }}>That journey gave birth to <strong>Vreekshya</strong>.</p>
          </div>
          <div className="photo"><Image src="/images/site/tanu-keshari.png" alt="Tanu Keshari, founder of Vreekshya, in a green field" fill sizes="(max-width: 860px) 100vw, 560px" /></div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap two">
          <div>
            <h2>Inspired by Nature, Driven by Purpose</h2>
            <p>The inspiration behind Vreekshya comes from a personal connection with natural living. Tanu has always appreciated fresh green vegetables, wholesome foods, and the everyday goodness of herbs — whether incorporating them into meals or adding natural ingredients to her drinking water.</p>
            <p style={{ marginTop: "1rem" }}>Over time, this simple lifestyle choice grew into a bigger vision: making nature-inspired ingredients more accessible, convenient, and relevant to modern lifestyles.</p>
            <p style={{ marginTop: "1rem" }}>We saw an opportunity to bring together the traditional goodness of fruits, vegetables, and herbs with the convenience and versatility that today's consumers value.</p>
            <p style={{ marginTop: "1rem" }}>At Vreekshya, we believe that nature offers something valuable, and our aim is to make these ingredients a meaningful part of everyday life.</p>
          </div>
          <div>
            <h2>What We Do</h2>
            <p>Vreekshya specialises in dehydrated fruits, vegetables, and herbs, along with a range of herbal powders.</p>
            <p style={{ marginTop: "1rem" }}>Our focus is on celebrating naturally sourced ingredients and offering versatile, convenient products for modern consumers. Whether for everyday household use, culinary applications, or food businesses, we aim to make nature-inspired ingredients accessible in practical formats.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Everything we do is guided by three core principles:</h2>
          <div className="grid3">
            <div><h3>Nature at the Core</h3><p>We celebrate the richness and diversity of nature's ingredients, recognising the value of fruits, vegetables, and herbs.</p></div>
            <div><h3>Quality with Purpose</h3><p>We believe in consistency, care, and attention to detail throughout our product journey, from sourcing to the finished product.</p></div>
            <div><h3>Tradition Meets Modern Living</h3><p>We bring familiar natural ingredients into convenient formats that complement the needs and preferences of contemporary lifestyles.</p></div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap">
          <h2>Our Vision</h2>
          <p>We envision a future where natural ingredients become an integral part of everyday living — where the goodness of fruits, vegetables, and herbs can be enjoyed beyond seasons, geographical boundaries, and traditional uses.</p>
          <p style={{ marginTop: "1rem" }}>Starting from our roots in Sonbhadra, we aspire to build meaningful relationships with customers, communities, and business partners across India and beyond.</p>
          <p style={{ marginTop: "1rem" }}>For us, Vreekshya is more than a business. It is a story of returning to our roots, following a passion, and building something meaningful with purpose.</p>
          <h3 style={{ marginTop: "2rem" }}>Vreekshya — From Roots to Fruits.</h3>
          <p style={{ marginTop: "0.5rem" }}><em>Rooted in where we come from. Inspired by what nature offers. Committed to growing with purpose.</em></p>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";
import PageHead from "@/components/PageHead";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = { title: "Contact Us", description: "Contact Vreekshya for bulk ingredients, distribution partnerships, private label or retail enquiries." };

export default function Contact() {
  return (
    <>
      <PageHead title="Let’s build something valuable together" intro="Whether you are a food manufacturer looking for bulk ingredients, a distributor exploring business opportunities or a consumer interested in our products, we would be happy to hear from you." image="/images/site/hero-farm.jpg" />
      <section className="section">
        <div className="wrap two">
          <div>
            <h2>Contact details</h2>
            <ul className="list">
              <li><strong>Brand:</strong> {site.name}</li>
              <li><strong>Website:</strong> {site.url.replace("https://", "")}</li>
              <li><strong>Email:</strong> <a href={`mailto:${site.email}`}>{site.email}</a></li>
              {site.phones.map((p) => <li key={p.tel}><strong>Phone:</strong> <a href={`tel:${p.tel}`}>{p.display}</a></li>)}
              <li><strong>WhatsApp:</strong> <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">Message us</a></li>
              {site.address && <li><strong>Address:</strong> {site.address}</li>}
            </ul>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}

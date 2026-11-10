import Link from "next/link";
import Logo from "@/components/Logo";
import { categories } from "@/lib/products";
import { nav, site, whatsappLink } from "@/lib/site";

export default function Footer() {
  const social = site.social.filter((s) => s.href);
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="cols">
          <div>
            <span className="logo"><Logo /></span>
            <p>{site.tagline}</p>
            <p className="muted" style={{ marginTop: ".6rem" }}>{site.descriptor}</p>
          </div>
          <div>
            <h3>Explore</h3>
            {nav.map((n) => <Link key={n.href} href={n.href}>{n.label}</Link>)}
          </div>
          <div>
            <h3>Products</h3>
            {categories.map((c) => <Link key={c.slug} href={`/products/${c.slug}`}>{c.name}</Link>)}
          </div>
          <div>
            <h3>Get in touch</h3>
            {site.phones.map((p) => <a key={p.tel} href={`tel:${p.tel}`}>{p.display}</a>)}
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            {site.address && <p className="muted">{site.address}</p>}
            {social.map((s) => <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>)}
          </div>
        </div>
        <p className="legal">
          © {new Date().getFullYear()} {site.legalName}. All rights reserved. GSTIN: {site.gstin}
          {" · "}Powered by{" "}
          <a href="https://yourfirstpage.in/" target="_blank" rel="noopener noreferrer">Your First Page</a>
        </p>
      </div>
    </footer>
  );
}

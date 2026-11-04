import Image from "next/image";
import Link from "next/link";

export default function PageHead({ title, intro, crumbs, image }: { title: string; intro?: string; crumbs?: { href: string; label: string }[]; image: string }) {
  return (
    <section className="page-head">
      <Image src={image} alt="" fill priority sizes="100vw" className="cover" />
      <div className="wrap">
        {crumbs && <p className="crumbs">{crumbs.map((c) => <span key={c.href}><Link href={c.href}>{c.label}</Link> / </span>)}</p>}
        <h1>{title}</h1>
        {intro && <p className="lead">{intro}</p>}
      </div>
    </section>
  );
}

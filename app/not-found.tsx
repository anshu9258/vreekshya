import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap">
        <h1>Page not found</h1>
        <p className="lead" style={{ marginTop: "1rem" }}>That page does not exist. Try our product range or head back home.</p>
        <div className="actions"><Link className="btn" href="/products">View products</Link><Link className="btn ghost" href="/">Home</Link></div>
      </div>
    </section>
  );
}

"use client";
import { useState, type FormEvent } from "react";
import { whatsappLink } from "@/lib/site";

const types = ["Wholesale / Bulk Purchase", "Retail Purchase", "Distribution Partnership", "Private Label", "Product Information", "Other"];

const fields: [string, string][] = [
  ["name", "Name"], ["company", "Company"], ["email", "Email"], ["phone", "Mobile"], ["location", "City / Country"],
  ["type", "Enquiry type"], ["product", "Product"], ["quantity", "Quantity"], ["message", "Message"],
];

function buildMessage(data: Record<string, string>, quotation: boolean) {
  const lines = fields.filter(([k]) => data[k]?.trim()).map(([k, label]) => `${label}: ${data[k].trim()}`);
  const intro = quotation ? "Hello Vreekshya, I would like to request a quotation." : "Hello Vreekshya, I would like to make an enquiry.";
  return [intro, "", ...lines].join("\n");
}

export default function EnquiryForm({ defaultType = types[0], defaultProduct = "", quotation = false }: { defaultType?: string; defaultProduct?: string; quotation?: boolean }) {
  const [opened, setOpened] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    if (data.website) return; // honeypot
    // Open WhatsApp straight away: browsers block pop-ups opened after waiting on a request.
    const url = whatsappLink(buildMessage(data, quotation));
    if (!window.open(url, "_blank", "noopener")) window.location.href = url;
    // Also email a copy when email is configured. WhatsApp is the main route, so failures are ignored.
    fetch("/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, quotation }), keepalive: true }).catch(() => {});
    form.reset();
    setOpened(true);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <input className="hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="row">
        <label>Full name<input name="name" required autoComplete="name" /></label>
        <label>Company name<input name="company" autoComplete="organization" /></label>
      </div>
      <div className="row">
        <label>Email address<input name="email" type="email" required autoComplete="email" /></label>
        <label>Mobile number<input name="phone" type="tel" required autoComplete="tel" /></label>
      </div>
      <div className="row">
        <label>City / Country<input name="location" /></label>
        <label>Type of enquiry
          <select name="type" defaultValue={defaultType}>{types.map((t) => <option key={t}>{t}</option>)}</select>
        </label>
      </div>
      <div className="row">
        <label>Product interested in<input name="product" defaultValue={defaultProduct} /></label>
        <label>Required quantity<input name="quantity" placeholder="e.g. 500 kg / month" /></label>
      </div>
      <label>Message<textarea name="message" rows={5} /></label>
      <button className="btn" type="submit">
        {quotation ? "Request quotation on WhatsApp" : "Send enquiry on WhatsApp"}
      </button>
      {opened && <p className="status ok" role="status">WhatsApp has opened with your details. Press send there to reach us.</p>}
    </form>
  );
}

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const clean = (v: unknown, max = 2000) => String(v ?? "").slice(0, max).trim();
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c] as string));

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  if (clean(data.website)) return NextResponse.json({ ok: true }); // honeypot

  const f = {
    name: clean(data.name, 120), company: clean(data.company, 120), email: clean(data.email, 160),
    phone: clean(data.phone, 40), location: clean(data.location, 120), type: clean(data.type, 80),
    product: clean(data.product, 160), quantity: clean(data.quantity, 80), message: clean(data.message),
  };
  if (!f.name || !/^\S+@\S+\.\S+$/.test(f.email) || !f.phone) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const subject = `${data.quotation ? "Bulk quotation" : "Website enquiry"}: ${f.type || "General"} from ${f.name}`;
  const rows = Object.entries(f).map(([k, v]) => `<p><b>${k}:</b> ${esc(v)}</p>`).join("");

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, ENQUIRY_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    // Never tell a customer their enquiry was sent when it was not delivered anywhere.
    console.error("[enquiry not delivered: SMTP not configured]", subject);
    return NextResponse.json({ ok: false, error: "Email not configured" }, { status: 503 });
  }
  try {
    const transport = nodemailer.createTransport({ host: SMTP_HOST, port: Number(SMTP_PORT ?? 465), secure: Number(SMTP_PORT ?? 465) === 465, auth: { user: SMTP_USER, pass: SMTP_PASS } });
    await transport.sendMail({ from: SMTP_USER, to: ENQUIRY_TO ?? SMTP_USER, replyTo: f.email, subject, html: rows });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("enquiry mail failed", e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

// Central business details. Everything on the site reads from here.
export const site = {
  name: "Vreekshya",
  legalName: "Vreekshya Enterprises",
  gstin: "09HOTPK0437M1Z6",
  tagline: "From Roots to Fruits.",
  descriptor: "Premium Dehydrated Fruits, Vegetables, Herbs & Natural Ingredients",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.vreekshya.com",
  email: "keshrid992@gmail.com",
  phones: [
    { display: "+91 75720 33407", tel: "+917572033407" },
    { display: "+91 79054 18432", tel: "+917905418432" },
  ],
  // Country code + number, no "+". Must be a number registered on WhatsApp.
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "917572033407",
  // Leave empty to hide. Fill in to show it in the footer and on the contact page.
  address: "Arazi no 61KH, Ashanahar Ashram, Bachra Road, Babhandiha, Sonbhadra, Uttar Pradesh 231208",
  // Add real profile URLs to show the links in the footer.
  social: [
    { label: "Instagram", href: "" },
    { label: "Facebook", href: "" },
    { label: "LinkedIn", href: "" },
  ],
};

export const whatsappLink = (message = "Hello Vreekshya, I would like to enquire about your products.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const quoteLink = (product?: string) =>
  whatsappLink(`Hello Vreekshya, I would like to request a quotation${product ? ` for ${product}` : ""}. Please share the details.`);

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/industries", label: "Industries" },
  { href: "/quality", label: "Quality & Processing" },
  { href: "/bulk-wholesale", label: "Bulk & Wholesale" },
  { href: "/contact", label: "Contact" },
];

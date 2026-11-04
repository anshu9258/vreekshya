# Vreekshya website (Next.js 15 · React 19 · TypeScript strict)

## Run locally
```
npm install
cp .env.example .env.local   # fill in values
npm run dev
```

## Before launch
1. Edit `lib/site.ts`: email, phones, address, social links (an empty address or social link stays hidden).
2. Edit `lib/products.ts`: keep only products you actually make or supply.
3. Set `NEXT_PUBLIC_WHATSAPP` (country code + number, no +), SMTP and `NEXT_PUBLIC_GA_ID` in `.env`. All enquiry forms and quotation buttons open WhatsApp with the details filled in; SMTP is optional and only sends you an email copy of form submissions.
4. Replace the stock photos with your own: overwrite the files in `public/images` (sources are listed in `IMAGE-SOURCES.md`).
5. Do not add FSSAI / ISO / HACCP / organic logos until certificates are obtained.

## Deploy on Hostinger (Node.js Web App / Business or Cloud plan)
1. Zip the project (without `node_modules` and `.next`) or connect the GitHub repo.
2. Create a Node.js app, framework Next.js, Node 20+.
3. Build command `npm run build`, start command `npm start`.
4. Add the environment variables from `.env.example` in the Hostinger panel.
5. Point the domain and enable SSL.

Note: shared "Premium/Single" PHP hosting cannot run Next.js server features (the enquiry API).

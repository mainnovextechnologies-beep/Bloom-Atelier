# Bloom Atelier — Flower & Bouquet Website Template

Premium, responsive React + Vite florist website concept for a flower shop in Vijayawada, Andhra Pradesh.

> **Demo disclaimer:** This is a portfolio/demo concept, not an official website for the named local business. Business name, location, phone and imagery must be confirmed by the client before publishing. Contact buttons intentionally show a demo notice and do not place calls or send WhatsApp messages.

## Included
- Config-driven business details and theme colours in `src/config.js`
- 36 configurable bouquet and floral collection cards with category filters
- External Unsplash image URLs with bundled local SVG fallback
- Google Maps embed and external directions link
- Responsive mobile navigation
- Demo-only WhatsApp, call, product and service enquiry notice
- SEO title, description, keywords, Open Graph tags, favicon and JSON-LD added in `index.html`/React
- `public/robots.txt` and `public/sitemap.xml`
- Accessible labels, lazy-loaded collection imagery and reduced-motion-friendly interactions

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Configure for a client
Edit `src/config.js`:
- `name`, `tagline`, `city`, `state`, `address`
- `phoneDisplay`, `phoneDigits`, `whatsappDigits`, `email`
- `domain`, `mapQuery`, `mapUrl`, `hours`
- `brand` theme colours
- `seo` metadata and `hero` content
- `collections` (name, category, price, tag, image, description)
- `services`

Update `index.html` metadata, `public/robots.txt`, and `public/sitemap.xml` to the real production domain. Replace all sample/demo information and confirm rights to photos before publishing.

## SEO checklist before launch
1. Set the final canonical URL and social share image in `index.html`.
2. Replace `https://www.example.com` in `robots.txt` and `sitemap.xml`.
3. Ensure the deployed sitemap is reachable at `/sitemap.xml`.
4. Add the production site to Google Search Console and submit the sitemap.
5. Verify LocalBusiness details, phone, opening hours, map pin and address with the owner.
6. Do not publish fabricated reviews, ratings, delivery promises, or unverified prices.
7. For a single-page site, sitemap contains the homepage only. Add individual product/category URLs if those become separate crawlable pages.

## Images
Most collection photography uses external Unsplash image URLs and needs an internet connection. If any URL fails, a bundled illustrated fallback is displayed. Replace image URLs in `src/config.js` with client-owned or licensed images for production.

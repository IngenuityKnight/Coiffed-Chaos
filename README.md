# Coiffed Chaos

Modern, mobile-first marketing site for **Coiffed Chaos** — a Detroit-based hair salon, education, and self-care brand led by Ava Gardner.

Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. No paid dependencies. Free to host on Vercel.

---

## What's inside

```
app/
  layout.tsx          → fonts, metadata, schema, header/footer
  page.tsx            → home
  services/page.tsx
  education/page.tsx
  about/page.tsx
  gallery/page.tsx
  shop/page.tsx
  contact/page.tsx
  globals.css

components/
  Header.tsx          → sticky nav + mobile menu + persistent CTA
  Footer.tsx
  Button.tsx
  Section.tsx
  ServiceCard.tsx
  ArticleCard.tsx
  ProductCard.tsx
  GalleryCard.tsx
  Testimonial.tsx
  CTASection.tsx
  StickyMobileCTA.tsx → mobile-only floating "Book" button

data/
  services.ts
  articles.ts
  products.ts
  gallery.ts

public/
  images/             → drop real photos here (see "Images" below)
```

---

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

---

## Deploy to Vercel (free)

1. Push this repo to GitHub.
2. Go to <https://vercel.com>, click **Add New → Project**, import the repo.
3. Vercel auto-detects Next.js. Click **Deploy**. Done.
4. Add your custom domain (`coiffedchaos.com`) in Project → Settings → Domains. Point your DNS at Vercel as instructed.

---

## Connect the contact form

The contact and education waitlist forms point at a placeholder Formspree URL:

```
https://formspree.io/f/your-form-id
```

To connect:

1. Go to <https://formspree.io>, sign up free.
2. Create a new form. Copy your form endpoint (looks like `https://formspree.io/f/abcd1234`).
3. Search-and-replace `your-form-id` across:
   - `app/contact/page.tsx`
   - `app/education/page.tsx`
4. Redeploy.

**Alternative:** swap Formspree for [Tally](https://tally.so), [Getform](https://getform.io), or hook up [Calendly](https://calendly.com) for actual scheduling instead of a form.

---

## Images — what to replace

Drop real images into `/public/images/` using these filenames so the site picks them up:

| File | Where it shows | Recommended |
|---|---|---|
| `hero.jpg` | Homepage hero | Editorial portrait of Ava or a client. Vertical (4:5). |
| `ava.jpg` | Homepage about preview + About page | Warm portrait of Ava in the salon. Vertical (4:5). |
| `gallery-*.jpg` | Gallery page | Real client transformations. Square or vertical. |
| `products/*.jpg` | Shop page | Product photos. Square (1:1). |

When you add gallery and product images, also set the `image` field in `/data/gallery.ts` and `/data/products.ts`, e.g.:

```ts
{
  category: 'Press & Curl',
  caption: '...',
  aspect: 'tall',
  image: '/images/gallery-1.jpg',
}
```

Until then, the site shows clearly-labeled placeholders — never broken images.

---

## Edit content

Almost everything visible on the site lives in:

- `/data/*.ts` — services, articles, products, gallery captions
- `/app/*/page.tsx` — page-level copy (hero text, intros, About story)
- `/components/Footer.tsx` — footer text and links

You can change copy without touching layout code. Save the file, the dev server hot-reloads.

---

## Brand details baked in

- **Fonts:** Fraunces (display) + Source Sans 3 (body), loaded via `next/font/google` — no extra requests.
- **Color palette:** warm cocoa, cream, gold accent. Defined in `tailwind.config.ts` as utility classes (`bg-canvas`, `text-cocoa`, `border-line`, etc.).
- **SEO:** per-page `metadata` exports, Open Graph tags, LocalBusiness/HairSalon JSON-LD schema in `app/layout.tsx`. Edit the schema there to add a phone number, real street address, and proper geo coords once you're ready.
- **Mobile:** sticky-bottom "Book a Hair Discovery Call" button appears after scroll on all pages except `/contact`. Persistent header CTA on desktop.
- **Accessibility:** skip link, semantic headings, focus rings, aria-labels on icon buttons, reduced-motion respected.

---

## Things to do before launch

1. Replace placeholder images (see Images section above).
2. Wire up Formspree form ID.
3. Update LocalBusiness schema in `app/layout.tsx` with real address, phone, and `image` URL.
4. Add a real `favicon.ico` to `/app/`.
5. Write or replace 1–2 testimonials with named clients (with their permission).
6. Set up a Google Business Profile for "Coiffed Chaos" in Detroit (free) and link it from the footer.
7. Optional: connect Calendly for live booking — replace the Contact form with a Calendly inline embed.

---

## License

Site code: yours to use freely.
Brand "Coiffed Chaos®" and content: © Coiffed Chaos.
# Coffee-Chaos

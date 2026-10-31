# Fidinda Solutions — Main Website (fidindasolutions.com)

The parent-brand gateway site for **Fidinda Financial, Management, Health and Travel Solutions**.
Built with Next.js (App Router), TypeScript and Tailwind CSS.

---

## 1. Where to edit things

| What | File |
|---|---|
| **Division website URLs** (one place for the whole site + redirects) | `data/divisions.ts` → `DIVISION_URLS` |
| Division names, taglines, tags, full service lists, accent colours | `data/divisions.ts` |
| Phones, email, socials, map link, WhatsApp/Telegram button, SEO title/description | `data/site.ts` |
| **All photos** (hero, division cards, About, Contact, CTA…) | `data/images.ts` |
| Co-founder message (text, name, title) | `data/content.ts` → `founderMessage`; photo at `public/images/co-founder.jpg` |
| "Why Choose Us" cards (home) | `data/content.ts` → `whyChooseUs`; pictures in `public/images/why/` |
| All page text (hero, Four Fs, stats, testimonials, About, Mission/Vision, timeline, contact labels, 404) | `data/content.ts` |
| Old Hostinger URL redirects | `next.config.ts` |
| Brand colours / fonts | `tailwind.config.ts`, `app/layout.tsx` |

**Before launch, replace:**
- `DIVISION_URLS.financial` and `DIVISION_URLS.management` (currently placeholder Vercel addresses)
- `site.mapEmbedUrl` with your exact office map (Google Maps → Share → Embed a map → copy the `src`)

To add testimonials, add objects to the `testimonials` array — the slider shows arrows and dots automatically once there are 2 or more.

## 2. Logos, colours and theme

The official logo is already included (transparent background):

```
public/logo.png             navy logo (light theme, white boxes)
public/logo-light.png       white version (dark theme)
public/logo-mark.png        square "F" mark (+ logo-mark-light.png)
app/icon.png, apple-icon.png  favicon from the mark
```

Division logos go in `public/logos/` as `financial.png`, `management.png`, `health.png`, `travel.png`.
Until a file is there, a navy/red icon tile is shown — the site checks at build time, so there is never a broken image. Redeploy after adding them.

Colours: Deep Navy `#1C095A` (RGB 28,9,90 · C69 M90 Y0 K65) and Bright Red `#E1041C` (RGB 225,4,28 · C0 M98 Y88 K12), plus neutrals. Defined in `tailwind.config.ts`; light/dark surface colours are CSS variables at the top of `app/globals.css`.

Light / dark theme: follows the visitor's system setting on first visit; the sun/moon button in the header switches it and remembers the choice.
Optional: add a photo per division on `/divisions` by setting `image: "/images/financial.jpg"` in `data/divisions.ts`.

### Photos
All photos are listed in `data/images.ts`. They are free to use under the Unsplash License and load from Unsplash's image CDN (automatically resized and served as WebP/AVIF). The Unsplash page for each one is noted next to it.

To use your own photo (recommended later — real team/office photos build the most trust):
1. Put the file in `public/images/`, e.g. `public/images/our-team.jpg` (about 2000px wide).
2. In `data/images.ts`, change that photo's `src` to `"/images/our-team.jpg"` and update its `alt` text.

## 3. Run locally

Requires Node.js 18.18+ (Node 20 or 22 recommended).

```bash
npm install
cp .env.example .env.local      # Windows: copy .env.example .env.local
# fill in TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID
npm run dev
```

Open http://localhost:3000. For a production check: `npm run build && npm start`.

### Telegram setup (contact form)
1. In Telegram, message **@BotFather** → `/newbot` → copy the token → `TELEGRAM_BOT_TOKEN`.
2. Send any message to your new bot (or add it to your team group and send a message there).
3. Open `https://api.telegram.org/bot<TOKEN>/getUpdates` and copy `"chat":{"id": ...}` → `TELEGRAM_CHAT_ID`
   (group IDs start with `-100`).
4. Restart `npm run dev` and submit the form on `/contact`. Each message shows the selected division in bold at the top.

You can reuse the same bot/chat as the division sites, or a separate group just for the main site.

## 4. Deploy to Vercel

1. Push this folder to a new GitHub repo:
   ```bash
   git init && git add . && git commit -m "Fidinda Solutions main site"
   git branch -M main
   git remote add origin https://github.com/<you>/fidinda-solutions.git
   git push -u origin main
   ```
2. On vercel.com → **Add New → Project** → import the repo (framework: Next.js, defaults are fine).
3. **Settings → Environment Variables**: add `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` (Production + Preview).
4. Deploy. Test the `*.vercel.app` URL, including the contact form.

## 5. Connect fidindasolutions.com without breaking email

Your email (support@fidindasolutions.com) depends on the domain's **MX** records (plus SPF/DKIM/DMARC TXT records).
The safe method is to **keep DNS at Hostinger and only change the website records**. Do **not** switch nameservers to Vercel.

1. **Write down your current DNS first.** Hostinger → Domains → fidindasolutions.com → **DNS / Nameservers**. Screenshot every record, especially `MX`, `TXT` (SPF `v=spf1…`, DKIM, DMARC) and any mail-related `CNAME` (e.g. `autodiscover`, `mail`).
2. In Vercel → your project → **Settings → Domains** → add `fidindasolutions.com` and `www.fidindasolutions.com`.
   Choose to redirect one to the other (recommended: `www` → apex `fidindasolutions.com`). Vercel will show the exact records it wants.
3. Back in Hostinger DNS, change **only** these:
   - `A` record, name `@` → the IP Vercel shows (usually `76.76.21.21`; newer projects may show `216.198.79.1` — use what Vercel displays). Delete any other `A` or `AAAA` records on `@`.
   - `CNAME` record, name `www` → the value Vercel shows (usually `cname.vercel-dns.com`). Delete any old `www` A/CNAME first.
   - If Vercel asks for a `TXT` verification record (`_vercel`), add it.
4. **Leave all `MX`, `TXT` (SPF/DKIM/DMARC) and mail `CNAME` records exactly as they are.**
5. If the domain was linked to a Hostinger hosting plan, disable Hostinger's CDN / "website" connection for the domain so it doesn't re-add its own A records.
6. Wait for Vercel to show **Valid Configuration** (minutes to a few hours). HTTPS is issued automatically.
7. Test: open https://fidindasolutions.com, then send and receive a test email to support@fidindasolutions.com.

Old Hostinger page links (`/accounting`, `/about-us`, `/request-for-quotation`, etc.) redirect automatically — see `next.config.ts`.

### Moving divisions to subdomains later
Add e.g. `finance.fidindasolutions.com` as a domain on the Financial Vercel project, add the `CNAME finance → cname.vercel-dns.com` record at Hostinger, then change `DIVISION_URLS.financial` in `data/divisions.ts` and redeploy. Every link, card, redirect and the SEO schema update together.

## 6. What's included

- Pages: `/`, `/about`, `/divisions`, `/contact`, custom 404 with division cards
- Sticky header with divisions dropdown (keyboard accessible), top contact bar, mobile menu
- Division cards, "Not sure where to start?" selector, Four Fs, Who We Serve, credentials, testimonial slider, CTAs
- Contact form → Telegram (`app/api/contact/route.ts`) with validation, honeypot spam trap and basic rate limiting
- Floating WhatsApp / Telegram button
- SEO: per-page metadata, Open Graph (auto-generated share image), `sitemap.xml`, `robots.txt`, Organization JSON-LD with all four divisions
- Scroll-reveal animations that respect "reduce motion" settings

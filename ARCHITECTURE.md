# questerix-landing-pages — Architecture Reference

> Extracted from `questerix-core/docs/strategy/QUESTERIX_TRANSFORMATION_PLAN.md` (2026-02-22).
> Keep in sync manually when the core architecture evolves.

## Purpose

This site is the **public-facing marketing hub** for Questerix. It serves:

- `questerix.com` — Root brand hub (who we are, what we offer)
- `math.questerix.com` — Subject-specific landing pages
- `m7.questerix.com` — Grade-specific landing pages (dynamically generated)

It is a **static site** (Vite + React). No backend calls at runtime — all data is pre-rendered at build time from Supabase.

---

## Planned Page Structure

```
src/
├── pages/
│   ├── RootPage.tsx          # questerix.com
│   ├── SubjectHubPage.tsx    # math.questerix.com
│   └── GradeLandingPage.tsx  # m7.questerix.com
├── components/
│   ├── SubjectCard.tsx
│   ├── GradeButton.tsx
│   ├── TestimonialCard.tsx
│   └── SeeMoreSubjects.tsx
├── lib/
│   └── seo-utils.ts          # OG tags, JSON-LD, canonical URLs
├── styles/
│   ├── tokens.css            # Brand tokens (static copy from questerix-core)
│   └── icons.json            # Lucide icon mapping reference
├── sections/                 # Hero, Features, Pricing, CTA sections
└── articles/                 # Markdown articles / blog posts
```

---

## Cloudflare Routing (DNS)

```
Type   Name   Value                          Proxy
CNAME  @      questerix-landing-pages.pages.dev  ✓ Proxied
CNAME  *      questerix-landing-pages.pages.dev  ✓ Proxied (wildcard)
```

This allows `math.questerix.com`, `m7.questerix.com`, etc. to all point here.
**Do NOT connect the domain until explicitly instructed.**

---

## GitHub Actions CI/CD

The standalone repos use Cloudflare's own GitHub integration (auto-deploy on push to `main`).
No separate workflow file is needed unless you want custom build steps.

For reference, the core repo's old draft CI was:

```yaml
# .github/workflows/deploy.yml (in this repo)
name: Deploy
on:
  push:
    branches: [main]

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: questerix-landing-pages
          directory: dist
```

---

## Data Source: Supabase `app_landing_pages` Table

Each grade-level page's content (headline, SEO, syllabus, testimonials) is stored in:

```sql
app_landing_pages (
  landing_page_id UUID,
  app_id          UUID,  -- references apps.app_id
  meta_title      TEXT,
  meta_description TEXT,
  og_image_url    TEXT,
  hero_headline   TEXT,
  hero_subheadline TEXT,
  syllabus_json   JSONB,
  benefits_json   JSONB,
  testimonials_json JSONB,
  is_published    BOOLEAN
)
```

**At build time**, the Vite plugin fetches all published rows and pre-renders them as static HTML.
This means: **no Supabase calls happen in the user's browser.**

---

## SEO Standards

- Every page must have: `<title>`, `<meta description>`, `og:title`, `og:description`, `og:image`
- Use `JSON-LD` structured data (`EducationalOrganization`, `Course` schema types)
- Generate `sitemap.xml` at build time
- Canonical URLs must be set explicitly to avoid subdomain duplication issues

---

## Design Tokens

Brand tokens are in `src/styles/tokens.css` — a **static copy** from `questerix-core`.
Icon reference is in `src/styles/icons.json`.

**When brand changes in Core:** Manually update `tokens.css` and `icons.json` here.
Do NOT import from the core repo — this repo must be fully self-contained.

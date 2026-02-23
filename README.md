# questerix-landing-pages

Public marketing site for [Questerix](https://questerix.com) — the adaptive learning platform for schools.

## What This Is

- Static marketing site built with **React 18 + Vite 6**
- Deployed to **Cloudflare Pages** (`questerix-landing-pages`)
- Serves `questerix.com`, `math.questerix.com`, `m7.questerix.com`, etc.
- All pages are pre-rendered at build time — zero runtime backend calls

## Quick Start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # Output: dist/
npm run preview    # Preview the production build
```

## Structure

```
src/
├── pages/         # RootPage, SubjectHubPage, GradeLandingPage
├── components/    # Reusable UI components
├── sections/      # Hero, Features, Pricing, CTA
├── articles/      # Markdown blog/article content
├── lib/           # seo-utils.ts, helpers
└── styles/
    ├── tokens.css  # Brand design tokens (sync from questerix-core)
    └── icons.json  # Lucide icon reference
public/
├── _headers        # Cloudflare security headers
└── assets/
    ├── generated/  # AI-generated images (gitignored)
    └── screenshots/ # Manual app screenshots
```

## Deployment

Deployed automatically via Cloudflare Pages on push to `main`.

- **Cloudflare Project**: `questerix-landing-pages`
- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Domain**: `questerix.com` (connect when ready)

## Related Repos

| Repo                                                                 | Purpose                                    |
| -------------------------------------------------------------------- | ------------------------------------------ |
| [questerix-core](https://github.com/rmg007/Questerix)                | Admin Panel, Student App, Supabase Backend |
| [questerix-help-docs](https://github.com/rmg007/questerix-help-docs) | User help center                           |

## Agent Instructions

See `AGENTS.md` for the Marketing Creative persona instructions.
See `ARCHITECTURE.md` for the technical architecture reference.

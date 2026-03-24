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

## Blog

- Routes:
  - `/blog` — blog index
  - `/blog/:slug` — article page
- Articles live in `src/articles/*.md`.
- Images must be WebP and live in `public/assets/generated/` (referenced from Markdown as `/assets/generated/...`).

### Article Format

Each article is a single Markdown file with frontmatter:

```md
---
title: "Your title"
description: "Meta description"
date: "2026-02-23"
slug: "your-slug"
tags: ["Tag A", "Tag B"]
author: "Questerix Team"
coverImage: "/assets/generated/your-slug-hero.webp"
draft: false
---

# Your title
```

### Generate a New Post (Scaffold)

Run:

```bash
npm run blog:generate
```

This creates a new file in `src/articles/` with frontmatter and optional image placeholders.

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

# 🚀 Questerix Landing Pages Quickstart

This is the **Public Marketing Site** for Questerix to convert decision makers and principals.

## 📦 Stack
- **Framework:** React 18 & Vite 6
- **Styling:** Vanilla CSS against design tokens (`tokens.css`).
- **CDN:** Cloudflare Pages (Static export generation).

## 🛠️ Setup & Run

1. **Install Dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Start Dev Server:**
   ```bash
   npm run dev
   ```

3. **Verify Build Output:**
   ```bash
   npm run build && npm run preview
   ```

## 🎨 Design Rules
- **No inline color hacking:** All gradients, spacing, and animations must derive from CSS variables assigned in `tokens.css`.
- **Image Handling:** Always use `.webp` inside public folders.
- **Micro-animations:** Incorporate glassmorphism overlays and hover actions as dictated by the Core Branding specs.

## ⛔ No Backend Direct Calls!
This repo has NO integration with Supabase, auth layers, or the application backend. Do not attempt to import them here.

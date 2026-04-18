# OP Lands Group — Premium Land in the Poconos

Modern, high-performance landing page for OP Lands Group LLC. Built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- ✅ **Server-side rendering (SSR)** for optimal SEO
- ✅ **Responsive design** (mobile-first)
- ✅ **Dark theme** with cyan accent
- ✅ **Interactive features**:
  - Property filtering by county
  - Financing calculator
  - FAQ accordion
  - Smooth navigation
- ✅ **Performance optimized**:
  - Static export for Cloudflare Pages
  - Image lazy loading
  - Tailwind CSS purging
- ✅ **SEO-ready**:
  - Meta tags & Open Graph
  - Sitemap & robots.txt
  - Schema markup support
  - Semantic HTML

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5+
- **Styling**: Tailwind CSS 4
- **Deployment**: Cloudflare Pages
- **Hosting**: Cloudflare Registrar (oplands.com)

## Quick Start

### Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`

### Production Build (Static Export)

```bash
npm run build
```

This generates a static `out/` folder ready for Cloudflare Pages.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Landing page
│   └── globals.css      # Tailwind + custom styles
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Properties.tsx   # Filterable lot grid
│   ├── LotCard.tsx
│   ├── Calculator.tsx   # Financing calculator
│   ├── Testimonials.tsx
│   ├── FAQ.tsx          # Accordion
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   ├── types.ts         # TypeScript types
│   └── utils.ts         # Helper functions
public/
├── data/
│   └── lots.js          # Property data (window.OPLANDS_LOTS)
├── robots.txt
└── sitemap.xml
```

## Configuration Files

- `next.config.js` — Export static HTML
- `tailwind.config.ts` — Custom theme (dark mode, cyan accent)
- `tsconfig.json` — Strict TypeScript
- `postcss.config.js` — Tailwind + Autoprefixer

## Deployment to Cloudflare Pages

1. Push to Git (GitHub, GitLab, Gitea)
2. Connect repo to Cloudflare Pages
3. Build command: `npm run build`
4. Build output directory: `out`
5. Deploy!

DNS will be managed by Cloudflare Registrar automatically.

## Email Setup

For info@oplands.com and service@oplands.com:

1. **Cloudflare Email Routing** (free) — receives emails
2. **Zoho Mail** (free) — sends/manages emails

[See deployment guide for step-by-step setup]

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 15+
- Mobile browsers (iOS Safari 15+, Chrome Mobile)

## License

© 2026 OP Lands Group LLC. All rights reserved.

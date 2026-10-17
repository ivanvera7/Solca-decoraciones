# AGENTS.md — SOLCA Decoraciones

One-page marketing site (Spanish, Paraguay) for a decoration business: interiors, event
styling (balloon arches), handmade gifts and scale models. Deployed on Vercel at
https://solca-decoraciones.vercel.app. No backend, no database: the contact form opens a
`mailto:` link.

## Stack

- Next.js 14 (App Router) + React 18 + TypeScript (`strict`, `noUncheckedIndexedAccess`)
- Tailwind CSS 3 (config in `tailwind.config.ts`, custom tokens: `cream`, `ink`, `gold`, warm `stone`)
- framer-motion for all animation; lucide-react icons
- Fonts via `next/font/google`: Manrope (`font-sans`) + Cormorant Garamond (`font-display`)
- npm (keep `package-lock.json`), Node 24 (`.nvmrc`, `engines`)

## Commands

```bash
npm ci              # install
npm run dev         # dev server on :3000
npm run check       # lint + typecheck + tests — run before every commit
npm run build       # production build (CI runs it too)
```

`npm test` uses the built-in `node --test` runner on `tests/*.test.mjs`, importing
`lib/constants.ts` directly via Node type stripping (no test framework installed).

## Structure

```
app/            layout.tsx (metadata, JSON-LD, fonts, skip link), page.tsx (section order),
                not-found.tsx, robots.ts, sitemap.ts, icons
components/     one file per page section (hero, marquee, about, services, gallery,
                process, testimonials, cta, contact, navbar, footer)
components/ui/  shared building blocks (Button, ScrollReveal, RevealText, TiltCard,
                Magnetic, FloralSprig, Logo, CustomCursor, FloatingContact)
lib/constants.ts  ALL site content and contact data (SITE, SERVICES, GALLERY, ...)
public/images/  photos; gallery photos are work-N.jpg
tests/          data integrity tests for lib/constants.ts
```

## Conventions

- Content lives in `lib/constants.ts`, never hardcoded in components. Copy is Spanish.
- Import with the `@/` alias.
- Add `"use client"` only to components that use hooks or framer-motion interactivity.
- Section headings: `RevealText` inside `ScrollReveal`; use `accentWords` to set the last
  words in gold italic. Section label = small uppercase `tracking-widest2` text + `FloralSprig`.
- Use `next/image` for every photo, with a meaningful `alt` (empty only for decorative backgrounds).
- Use theme tokens (`ink`, `cream`, `gold`, `stone-*`), not raw hex values, in components.
- Respect `useReducedMotion()` for any new motion.

## Common tasks

- **Add a gallery photo:** put the file in `public/images/work-N.jpg` and add an entry to
  `GALLERY` in `lib/constants.ts`. `npm test` fails if the file is missing or duplicated.
- **Add a service:** add it to `SERVICES` and to `SERVICE_OPTIONS` (the contact form's select).
  A test keeps both lists in sync.
- **Add testimonials:** fill `TESTIMONIALS`; the section stays hidden while the list is empty.
- **Change domain:** update `SITE.url` only. Metadata, sitemap, robots and JSON-LD derive from it.

## Do not

- Do not upgrade Next/React major versions, ESLint 8 or Tailwind 3 without asking.
- Do not switch package manager or add a test framework for small checks.
- Do not add placeholder content (fake reviews, stock photos) presented as real.

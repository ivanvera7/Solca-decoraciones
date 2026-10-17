# AGENTS.md — SOLCA Decoraciones

One-page marketing site (Spanish, Paraguay) for a decoration business: interiors, event
styling (balloon arches), handmade gifts and scale models. Deployed on Vercel at
https://solca-decoraciones.vercel.app. No backend, no database: the contact form opens a
`mailto:` link.

## Stack

- Next.js 14 (App Router) + React 18 + TypeScript (`strict`, `noUncheckedIndexedAccess`)
- Tailwind CSS 3 (config in `tailwind.config.ts`). Dark-only theme, tokens: `night` (backgrounds), `bone` (text: `bone`, `bone-muted`, `bone-faint`), `rose` (the single accent), `line` (hairlines)
- framer-motion for all animation; lucide-react icons
- Fonts via `next/font/google`: Hanken Grotesk (`font-sans`) + Bricolage Grotesque (`font-display`)
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
components/ui/  shared building blocks (Button, ScrollReveal, RevealText, ScrollWords,
                Magnetic, Logo, FloatingContact)
lib/constants.ts  ALL site content and contact data (SITE, SERVICES, GALLERY, ...)
public/images/  photos; gallery photos are work-N.jpg
tests/          data integrity tests for lib/constants.ts
```

## Conventions

- Content lives in `lib/constants.ts`, never hardcoded in components. Copy is Spanish.
- Import with the `@/` alias.
- Add `"use client"` only to components that use hooks or framer-motion interactivity.
- Section headings: `font-display font-semibold` with tight negative tracking, text via
  `RevealText`; `accentWords` colors the last words `text-rose`. Small uppercase labels
  (`tracking-label`) are rationed: hero, Proyectos and Contacto only.
- Shapes: buttons and chips are pills (`rounded-full`), photos and cards `rounded-3xl`,
  inputs `rounded-2xl`. One contact CTA label everywhere: "Pedir presupuesto".
- Cursor: always the native pointer. No custom cursor (it was removed for lag). The gallery
  "Ver" bubble follows the pointer through motion values set directly, never a spring.
- Scroll-driven effects use framer-motion `useScroll`/`useMotionValueEvent`, never
  `window.addEventListener("scroll")`.
- Use `next/image` for every photo, with a meaningful `alt` (empty only for decorative backgrounds).
- Use theme tokens (`night`, `bone`, `rose`, `line`), not raw hex values, in components.
- Respect `useReducedMotion()` for any new motion.

## Common tasks

- **Add a gallery photo:** put the file in `public/images/work-N.jpg` and add an entry to
  `GALLERY` in `lib/constants.ts`. `npm test` fails if the file is missing or duplicated.
  The gallery pans horizontally on desktop, so any count works.
- **Add a service:** add it to `SERVICES` and to `SERVICE_OPTIONS` (the contact form's select).
  A test keeps both lists in sync. The services bento in `components/services.tsx` has one
  slot per service (`SLOTS`): add a slot when adding a fifth service. `image` is optional.
- **Add testimonials:** fill `TESTIMONIALS`; the section stays hidden while the list is empty.
- **Change domain:** update `SITE.url` only. Metadata, sitemap, robots and JSON-LD derive from it.

## Do not

- Do not upgrade Next/React major versions, ESLint 8 or Tailwind 3 without asking.
- Do not switch package manager or add a test framework for small checks.
- Do not add placeholder content (fake reviews, stock photos) presented as real.

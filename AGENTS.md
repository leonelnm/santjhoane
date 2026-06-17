# AGENTS.md — Sant Jhoan'e

## Stack

- **Astro 6** (`@astrojs/check`), **Preact** (islands via `client:load`), **Tailwind v4** (Vite plugin), **TypeScript 6** (strict)
- **pnpm** (lockfile is `pnpm-lock.yaml`)
- JSX configured for Preact in `tsconfig.json` — use `jsxImportSource: "preact"`

## Key commands

```sh
pnpm run dev        # astro dev — localhost:4321
pnpm run build      # astro check && astro build  <-- type-check gates build
pnpm run preview    # astro preview
pnpm run astro      # astro CLI passthrough
```

No lint/format/test scripts exist.

## Build quirk

`astro check` runs **before** `astro build` — type errors break CI-equivalent builds. Run `pnpm build` (not just `astro build`) to reproduce production gate.

## Architecture

- **Data layer**: `src/api/data.json` → `src/api/platos.ts` (typed access). Edit JSON to update menu items; no API calls.
- **Static content**: `src/api/info.ts` (business info), `src/api/faq.ts` (FAQ).
- **Routes**: `src/pages/index.astro` (homepage), `src/pages/carta.astro` (menu page).
- **Interactive islands**: Preact `.tsx` under `src/components/carta/`, loaded with `client:load`.
- **Layout**: `src/layouts/Layout.astro` — uses `astro:transitions` `ClientRouter` for SPA-like navigation; imports `src/styles/global.css` (Tailwind entry).
- **Styling**: Tailwind v4 (`@import 'tailwindcss'` at top of `global.css`); no `tailwind.config`. Fonts: Outfit (body), Syne (headings) from Google Fonts.

## Important conventions

- Site URL: `https://restaurantesantjhoane.com` (set in `astro.config.mjs` — sitemap, JSON-LD, robots.txt).
- Structured data (JSON-LD) generated in page frontmatter via `JsonLD.astro` component with `<slot name="head-jsonld">` in layout.
- All images in `public/` referenced as `/image-name.webp`.
- Dark theme: `bg-[#0a0a0a]`, color tokens in `global.css` (`--color-primary: #78350f`).

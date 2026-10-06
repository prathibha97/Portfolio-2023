# Portfolio

Personal site for Prathibha Ratnayake — software engineer. Go services and the
products on top of them.

Live: https://prathibha-portfolio.vercel.app

## Stack

- **Next.js 16** (App Router), **React 19**, **TypeScript 6**
- **Tailwind CSS v4** — CSS-first config, tokens declared in `@theme`
- **Motion** for the handful of places that animate
- **next-mdx-remote** for `/writing`
- **Resend** + **React Email** for the contact form
- **Archivo** via `next/font`, with **JetBrains Mono** loaded only for code blocks

`package.json` is the source of truth for versions; the list above is majors
only so it ages slowly.

## Design notes

Things that look like omissions but are decisions, so they don't get "fixed"
by a future me:

**One typeface.** Archivo carries display and body. The display size rides the
font's width axis at 88% (`.display` in `globals.css`), which gives headlines
their own voice without a second family. Fonts are self-hosted through
`next/font` — an earlier version pulled the display face from a CDN with a CSS
`@import`, which blocks render.

**Almost nothing animates on scroll.** There is one orchestrated entrance, in
the hero, and that is deliberate. Motion elsewhere responds to something the
reader did: the cursor-following chip on a project plate, a link underline, the
command palette opening. The exception is the Path rail, which fills with
reading position through a native CSS scroll timeline (`animation-timeline:
view()`) — no JavaScript, and it falls back to a plain filled rail where the
feature is missing.

**Two grounds, not one.** The site is paper except the Now section and the
footer, which invert to ink. That is where the page gets contrast from, rather
than from decoration.

**Colour is rationed.** One accent (`--color-mark`, oxblood) appears about four
times on the whole site. If it starts showing up everywhere, something has gone
wrong.

**Accessibility floor.** Contrast is verified on both grounds — everything sits
between 4.77:1 and 17.33:1. `prefers-reduced-motion` is honoured, including by
the scroll-driven rail, which ignores `animation-duration` and so needs its own
override. The project hover chip is gated behind `(hover: hover) and (pointer:
fine)` so touch devices don't get a label anchored to a cursor that isn't there.

## Writing

Posts are MDX files in `content/writing/`. Frontmatter:

```yaml
---
title: 'Post title'
description: 'One line, used on the index and in metadata.'
date: '2026-10-06'
tags: ['go', 'architecture']
draft: true # optional — omit to publish
---
```

`draft: true` hides a post from the index **and** makes its URL 404, so an
unfinished draft isn't readable by anyone who guesses the slug.

## Develop

```bash
npm install
npm run dev
```

Environment variables:

```bash
RESEND_API_KEY=...          # contact form; the form is the only thing that needs it
NEXT_PUBLIC_COMMIT_SHA=...  # optional, for the footer build line off Vercel
NEXT_PUBLIC_BUILD_TIME=...  # optional, same
```

On Vercel the footer build line reads `VERCEL_GIT_COMMIT_SHA` and
`VERCEL_GIT_COMMIT_AUTHOR_DATE` automatically. Note it is resolved at build
time, not request time — the deploy age and copyright year update when you
redeploy, not on their own.

Node 24+ (`.nvmrc`), per `engines` in `package.json`.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server on http://localhost:3000 |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run type-check` | `tsc --noEmit` |

There is also a `lint` script, but it does not currently run: ESLint 10 expects
a flat `eslint.config.js` and this repo has none.

## License

MIT.

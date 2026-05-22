# Portfolio · v2.0 (2026)

Dark, editorial portfolio site for Prathibha Ratnayake — **Senior Software Engineer · Lead Engineer** building enterprise-grade Go services and full-stack web products.

## Stack

- **Next.js 15** (App Router) · **React 19** · **TypeScript 5.7**
- **Tailwind CSS v4** (CSS-first config, `@theme` tokens)
- **Motion 11** (formerly Framer Motion) for animations
- **Lenis** for smooth scrolling
- **next-mdx-remote** for the writing system
- **Resend + React Email** for the contact form
- **General Sans** (Fontshare) for display + body, **JetBrains Mono NL** (ligatures off, tabular numerals) for technical moments

## Highlights

- Floating glass header with command palette (`⌘K`)
- Hero "statement + live spec panel" composition with a ticking local clock
- Opinionated Stack section — _Defaults · Avoided · Reached for_ — before the full chip inventory
- Editorial contents-list Projects layout (replacing the bento grid)
- Path timeline with a scroll-driven progress fill and a visually promoted "Current" entry
- Custom cursor + magnetic CTAs
- MDX-powered `/writing` with reading-progress bar and sticky table-of-contents at xl+
- Live build-info line in the footer (`v · deployed · commit · LK clock`) reading from Vercel env vars
- Edge-runtime dynamic Open Graph image
- Fully accessible, respects `prefers-reduced-motion`

## Develop

```bash
npm install
npm run dev
```

Environment variables:

```bash
RESEND_API_KEY=...                # for the contact form
NEXT_PUBLIC_COMMIT_SHA=...        # optional, non-Vercel deploy
NEXT_PUBLIC_BUILD_TIME=...        # optional, non-Vercel deploy
```

On Vercel, the build-info line picks up `VERCEL_GIT_COMMIT_SHA` and `VERCEL_GIT_COMMIT_AUTHOR_DATE` automatically.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Local dev server on http://localhost:3000 |
| `npm run build` | Production build |
| `npm run start` | Run the production build |
| `npm run type-check` | TypeScript noEmit check |

## License

MIT.

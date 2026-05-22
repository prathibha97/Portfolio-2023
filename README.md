# Portfolio · v2.0 (2026)

Dark, editorial portfolio site for Prathibha Ratnayake — full-stack engineer.

## Stack

- **Next.js 15** (App Router) · **React 19** · **TypeScript 5.7**
- **Tailwind CSS v4** (CSS-first config, `@theme` tokens)
- **Motion 11** (formerly Framer Motion) for animations
- **Lenis** for smooth scrolling
- **React Three Fiber + drei** for the hero scene
- **next-mdx-remote** for the writing system
- **Resend + React Email** for the contact form
- **Geist Sans + Geist Mono + Instrument Serif** for typography

## Highlights

- Floating glass header with command palette (`⌘K`)
- Custom cursor with hover-state morphing
- Magnetic CTAs and social icons
- Scroll-driven hero parallax and timeline progress fill
- Bento grid for projects
- Edge-runtime dynamic Open Graph image
- MDX-powered `/writing` section with reading time, frontmatter, syntax-aware prose
- Fully accessible, respects `prefers-reduced-motion`

## Develop

```bash
npm install
npm run dev
```

Environment variables:

```bash
RESEND_API_KEY=...
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Local dev server on http://localhost:3000 |
| `npm run build` | Production build |
| `npm run start` | Run the production build |
| `npm run type-check` | TypeScript noEmit check |

## License

MIT.

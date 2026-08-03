# Pixelmere

Marketing website for **Pixelmere**, a web development agency. Built with Next.js (App Router) and Tailwind CSS. Includes light and dark mode.

## Tech stack

- **Next.js 16** (App Router, static single-page output)
- **Tailwind CSS v4** (brand tokens defined in CSS)
- **TypeScript**

## Getting started

Requirements: Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command           | Description                                        |
| ----------------- | -------------------------------------------------- |
| `npm run dev`     | Start the development server (Turbopack, HMR)      |
| `npm run build`   | Create an optimized production build               |
| `npm run start`   | Serve the production build locally                 |
| `npm run lint`    | Run ESLint (flat config)                           |

## Project structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout, metadata, fonts
│   ├── page.tsx             # Composes all sections
│   └── globals.css          # Tailwind import + brand design tokens
└── components/
    ├── Navbar.tsx           # Sticky nav, scroll-spy, mobile menu (client)
    ├── Hero.tsx             # Hero with logo mark, tagline, CTAs
    ├── Services.tsx         # 4 service cards + internal-software banner
    ├── Work.tsx             # Live project grid (links to client sites)
    ├── Process.tsx          # 4-step how-we-work timeline
    ├── About.tsx            # Agency philosophy
    ├── Testimonials.tsx     # Client quotes
    ├── Contact.tsx          # Validated contact form + details (client)
    ├── Footer.tsx           # Navy footer with nav + contact info
    ├── Logo.tsx             # Inline SVG pixel-grid logo
    └── SectionHeading.tsx   # Shared eyebrow/title/subtitle block
public/
└── work/                    # Project preview SVGs (lazy-loaded)
```

## Branding

Design tokens live in `src/app/globals.css` under `@theme`. Change them there and
every `bg-*`, `text-*`, and `border-*` utility across the site updates automatically.

| Token      | Hex       | Usage                       |
| ---------- | --------- | --------------------------- |
| `navy`     | `#0C1B2A` | Headers, nav, footer        |
| `cream`    | `#F7F5F0` | Page background             |
| `teal`     | `#1D9E75` | CTAs, links, hover states   |
| `charcoal` | `#1F2320` | Body text                   |
| `muted`    | `#6B6E68` | Secondary text              |

The logo is a pure inline SVG component (`Logo.tsx`) that uses `currentColor`, so it
automatically renders navy-on-cream in the nav and cream-on-navy in the footer.

## Dark mode

Dark mode is toggled from the moon/sun button in the navbar. The choice is saved to
`localStorage` and respects the OS `prefers-color-scheme` setting on first visit. An
inline script in `src/app/layout.tsx` applies the theme before first paint to avoid a
flash of the wrong theme.

The palette is driven by semantic CSS variables defined in `globals.css` under `:root`
(light) and `.dark` (dark). Components use tokens like `bg-page`, `bg-surface`,
`bg-card`, `text-ink`, `text-heading`, and `border-line` — so switching themes never
requires per-component edits.

## Editing content

All copy is plain JSX in the component files under `src/components/`. To change the
featured projects, edit the `projects` array in `Work.tsx` (add a preview image in
`public/work/`). The contact form is client-side only — to wire it to a backend, add a
handler to the `handleSubmit` in `Contact.tsx` (or point it at a service like
Formspree).

## Deployment

The site is fully static after `next build`. Deploy anywhere Next.js is supported:

- **Vercel** — push to GitHub and import, or `npx vercel` from this folder.
- **Netlify** — build command `npm run build`, publish directory `.next`.
- **Self-host** — `npm run build && npm run start`.

The output route is a statically prerendered page (see `next build` output), so it's fast
to serve and cache on any CDN.

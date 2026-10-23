# Project Instructions — dirthaven.net

Standing rules for all projects: https://dirthaven.net/ai (source: `public/ai.md`). This file adds project-specific context.

Project size: **Ongoing** → AGENTS.md + SPEC.md + git.

## Working Rules
- **Clarify before building**: If a request is unclear, ask 1–3 targeted questions (with your recommended option) and wait. Do not fill gaps with guesses.
- **Run to completion once clear**: No progress check-ins or "should I proceed?" pauses. Make the edits, run `npm run build`, fix any errors, and report back only when done and verified.

## Stack & Commands
- **Stack**: Astro 5 (static output), TypeScript, Markdown content collections. Deployed on Vercel.
- **Node**: 18.20.8+ (Astro 5 minimum). Dev machine uses nvm-windows.
- `npm run dev` → `localhost:4321` · `npm run build` → `dist/` · `npm run preview`
- No test suite. `npm run build` is the check (schema validation + type errors).

## Code Map
| Path | Purpose |
| :--- | :--- |
| `public/ai.md` | Coding-agent instructions. **Single source** — served raw at `/ai.md` and as plain text at `/ai`. |
| `src/pages/ai.ts` | Endpoint that serves `public/ai.md` as plain text at `/ai`. |
| `src/pages/index.astro` | Home: lists published posts. |
| `src/pages/about.astro` | About page. |
| `src/pages/blog/[...slug].astro` | Individual post route. |
| `src/pages/tags/[tag].astro` | Posts filtered by tag. |
| `src/content.config.ts` | Blog frontmatter schema (Zod). |
| `src/content/blog/` | Blog posts (`.md`/`.mdx`). |
| `src/layouts/BaseLayout.astro` | Page shell: head, header, footer. |
| `src/layouts/BlogPostLayout.astro` | Post page layout. |
| `src/components/Header.astro` | Logo + nav. |
| `src/components/Footer.astro` | Pipe-separated footer links. |
| `src/components/PostCard.astro` | Post preview card for listings. |
| `src/styles/global.css` | All site styles and color tokens. |
| `src/assets/` | Logo (`dirthaven-logo.svg`, procedurally generated vein-web wordmark); `dirthaven-logo.png/.jpg`, `dirt-bg.jpg`, `skull-bg.webp` are unused legacy. |
| `vercel.json` | Headers, plain-text type for `/ai`, `ai.dirthaven.net` + legacy `/ai-persona*` redirects. |
| `SPEC.md` | Mission, design system, roadmap, decisions log. |

## Styling
Raw black metal demo-tape (full tokens in SPEC.md §2):
- Washed-out black content strip down the middle; muted red (`#5e1a22`) bleeding out both sides; SVG photocopy grain. No background images.
- Muted blood-red bracketed links (`[text]`, `#c4434f`), bone text (`#d9d2c5`).
- Typewriter font (Special Elite) for card headers, post titles, prose `h2`.
- Flat `.dh-card` panels with faded red borders; no glass/blur.
- Pipe-separated compact inline navigation and footers.

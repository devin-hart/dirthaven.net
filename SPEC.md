# Dirthaven.net — Open Site Specification & Living Roadmap

> **Status**: Active Living Document  
> **Repository / Root**: `d:\dirthaven.net`  
> **Live Site URL**: `https://dirthaven.net`  
> **Source Inspiration**: [oneclickkill.net](https://github.com/devin-hart/oneclickkill.net)

---

## 1. Mission & Vision

**Dirthaven.net** is a music and art blog, creative dumping ground, and private operational outpost:
- **Creative Space**: Music compositions, audio experiments, visual artwork, and assorted creative projects.
- **Radical Simplicity**: Fast static delivery, low cognitive overhead, zero bloat via Astro SSG.
- **Retro-Tactile Atmosphere**: Carrying forward the nostalgic late 90s / early 2000s cyber-gothic aesthetic established by `oneclickkill.net` with Darkthrone-inspired typography.
- **LLM Operational Spec Host**: Hosts the coding-agent operating instructions as plain text at `/ai` (also `ai.dirthaven.net`). Single source: `public/ai.md`. Old `/ai-persona*` and `/ai.txt` URLs redirect to `/ai`.
- **Longevity & Independence**: Markdown-driven content that remains readable and portable for decades.

---

## 2. Design System & Aesthetic Rules

All UI additions, layouts, and components must adhere to these design tenets:

### 2.1 Color Palette & Theme Tokens
Raw black metal demo-tape: a washed-out black content strip down the middle, muted red bleeding out on both sides, photocopy grain. Tokens live in `src/styles/global.css` `:root`.
| Token | Value | Purpose |
| :--- | :--- | :--- |
| `--bleed` | `#5e1a22` + black speckle + edge vignette | Muted red outside the strip |
| `--strip` | `#0e0c0c` + SVG grain | Washed-out black content strip (`--strip-width: 560px`) |
| `--panel` | `rgba(255,240,230,.025)` | Flat card fill (no glass/blur) |
| `--panel-border` | `rgba(196,67,79,.22)` | Faded red rules and borders |
| `--fg` / `--fg-strong` | `#d9d2c5` / `#ece6da` | Bone / photocopy-white text |
| `--muted` | `#8a7f78` | Dates, meta, chips |
| `--link` | `#c4434f` | Muted blood-red links and typewriter headings |
| `--link-hover` | `#ece6da` | Bone with underline |

### 2.2 Typography & Text Treatment
- **Font Family**: `Arial, sans-serif` for UI/body; **Special Elite** (Google Fonts, `--type`, typewriter) for card headers, post titles, and prose `h2`; `Consolas, Monaco, monospace` for code.
- **Drop Shadows**: `text-shadow: 1px 1px 2px #000` on all text.
- **Compact Scale**: Base 12px for body, links, metadata, tables; 13px prose.
- **Bracket Notation**: Navigation and action links use brackets, e.g., `[home]`, `[about]`, `[github]`, `[<- return home]`.

### 2.3 Layout & Structure
- **Max Width**: Centered narrow column at `520px` (`max-width: 520px; margin: 0 auto;`).
- **Strip**: Fixed-width black strip (`body::after`) behind the 520px column; red bleed (`body`, `body::before`) fills the rest.
- **Containers**: Flat `.dh-card` containers with `.dh-card-head` for section headers and `.dh-card-body` for content.
- **Footer**: Pipe-separated inline list (`[home] | [about] | [contact] | [github]`).

---

## 3. Architecture & Technical Rules

- **Framework**: Astro 5 (Static Site Generation mode).
- **Runtime**: Node.js 18.20.8+ (Astro 5 minimum).
- **Zero Client JS**: Pure static HTML & CSS output. JavaScript is only introduced if an interactive widget strictly requires it.
- **Content Collections**: All articles live in `src/content/blog/` as `.md` or `.mdx` files.
- **Deterministic Builds**: Static output builds to `dist/` in under 5 seconds.

---

## 4. Content Standards & Frontmatter Schema

Every blog post must satisfy the Zod schema defined in `src/content.config.ts`:

```yaml
---
title: "Article Title Here"
description: "A 1-2 sentence synopsis for index previews and meta descriptions."
pubDate: 2026-09-22
updatedDate: 2026-09-23 # Optional
tags: ["development", "retro", "notes"]
draft: false # Set true to exclude from production build
---
```

---

## 5. Living Roadmap & Goals Tracker

### Phase 1: Foundation & Porting (Completed)
- [x] Analyze and port visual tokens, CSS, and layouts from `oneclickkill.net`.
- [x] Configure Astro 5 SSG with Content Collections and Zod validation.
- [x] Build core pages: Home (`/`), Blog Post (`/blog/[slug]`), About (`/about`), Tags (`/tags/[tag]`).
- [x] Generate temporary death-metal dripping logo (`dirthaven-logo.jpg`) and cracked earth backdrop (`dirt-bg.jpg`).
- [x] Verify static production build compiles with zero errors.
- [x] Establish autonomous hands-off project rules (`GEMINI.md` and `AGENTS.md`).

### Phase 2: Visual Identity & Custom Assets
- [x] Custom logo: vein-web black metal wordmark with drippy wings (`src/assets/dirthaven-logo.svg`).
- [ ] Custom SVG/ICO favicon matching the Dirthaven brand.
- [ ] Custom OpenGraph banner (`public/images/og-image.jpg`) for rich link embeds on Discord / Twitter.

### Phase 3: Content Expansion & Taxonomy
- [ ] Full Blog Archive page (`/archive` or `/blog`) with yearly grouping.
- [ ] Tag index page (`/tags`) listing all active tags with counts.
- [ ] Search or instant fuzzy filter (compact static client search).

### Phase 4: Interactive Retro Features (Optional / Backlog)
- [ ] Minimalist text-only Guestbook or Dispatch board.
- [ ] Retro visitor / frag hit counter.
- [ ] Now page (`/now`) detailing current projects, reading, and listening.
- [ ] Webring / Friendly links widget.

### Phase 5: Production Deployment & CI/CD
- [x] Choose deployment target: Vercel.
- [ ] Set up automated Git-push deployment workflow.
- [ ] Hook up custom apex domain `dirthaven.net` with SSL.

---

## 6. Project Rulebook (User Directives)

*This section captures ongoing rules, conventions, and personal preferences specified by the site owner:*

1. **Clarify, Then Execute**: Ask when a request is unclear; once it's clear, run end-to-end without progress check-ins.
2. **Preserve the Vibe**: Washed black strip, muted red bleed and links, typewriter headings, compact 520px column.
3. **Keep Code Lightweight**: Prefer standard HTML/CSS over heavyweight UI component libraries.
4. **Draft Safety**: Never publish posts with `draft: true` into production listings or pages.

---

## 7. Decisions Log

*One line per decision: date — decision — why.*

- 2026-09-22 — Astro 5 static output, Markdown content collections — fast, zero client JS, portable content.
- 2026-09-22 — Port visual identity from oneclickkill.net — continuity with the previous site.
- 2026-09-23 — Deploy on Vercel — `vercel.json` handles headers and host-based redirects for `ai.dirthaven.net`.
- 2026-10-16 — Agent instructions live in one file (`public/ai.md`), served as plain text at `/ai` — eight hand-maintained copies had drifted; plain text is easiest to copy into agents.
- 2026-10-16 — Old `/ai-persona*` and `/ai.txt` URLs redirect to `/ai` — keep existing links working.
- 2026-10-16 — Agents ask when unclear, then run to completion — replaces "no babysitting," which agents read as "never ask questions."
- 2026-10-23 — Redesign to black metal demo-tape look: black strip, muted red bleed, red links, blackletter headings; dirt background dropped — purple/glass oneclickkill look no longer fits a music/art blog.
- 2026-10-23 — Placeholder posts and home/about copy removed; first real post is Necrodrone — site content was all scaffolding.
- 2026-10-23 — Headings switched from blackletter (UnifrakturMaguntia) to typewriter (Special Elite) — owner preference.
- 2026-10-23 — New logo: illegible vein-web wordmark with mirrored drippy wings, as SVG (~68KB, ~25KB gzipped) — old Gemini logo read as a tree, not a black metal logo.
- 2026-10-23 — RSS feed removed — no readers; one less thing to maintain.
- 2026-10-23 — Draft posts no longer get built pages in production — previously `draft: true` posts were still reachable by URL.

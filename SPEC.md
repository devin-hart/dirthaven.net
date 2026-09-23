# Dirthaven.net — Open Site Specification & Living Roadmap

> **Status**: Active Living Document  
> **Repository / Root**: `d:\dirthaven.net`  
> **Live Site URL**: `https://dirthaven.net`  
> **Source Inspiration**: [oneclickkill.net](https://github.com/devin-hart/oneclickkill.net)

---

## 1. Mission & Vision

**Dirthaven.net** is a personal digital outpost, blog, and creative workspace. It prioritizes:
- **Radical Simplicity**: Fast static delivery, low cognitive overhead, zero bloat.
- **Retro-Tactile Atmosphere**: Carrying forward the nostalgic late 90s / early 2000s cyber-gothic aesthetic established by `oneclickkill.net`.
- **Longevity & Independence**: Markdown-driven content that remains readable and portable for decades.

---

## 2. Design System & Aesthetic Rules

All UI additions, layouts, and components must adhere to these design tenets:

### 2.1 Color Palette & Theme Tokens
| Token | Value | Purpose |
| :--- | :--- | :--- |
| `Page Background` | `#000000` + textured overlay | Base void with subtle fixed ambient depth |
| `Card Background` | `rgba(0, 0, 0, 0.35)` | Translucent dark slate container |
| `Card Header` | `rgba(255, 255, 255, 0.05)` | Frosted glass with `backdrop-filter: blur(6px)` |
| `Borders` | `rgba(255, 255, 255, 0.06)` | Thin, crisp structural definition |
| `Primary Text` | `#f2f2f2` / `#e5e7eb` | Crisp high-contrast reading text |
| `Muted / Subtitle` | `#94a3b8` / `#cbd5e1` | Meta timestamps, descriptions, tags |
| `Links` | `rgb(105, 101, 187)` | Signature oneclickkill purple |
| `Links (Hover)` | `rgb(140, 135, 225)` | Light lavender with underline |

### 2.2 Typography & Text Treatment
- **Font Family**: `Arial, sans-serif` for UI; `Consolas, Monaco, monospace` for code blocks.
- **Drop Shadows**: Essential `text-shadow: 1px 1px 2px #000` applied to all text (`h1`, `h2`, `h3`, `p`, `a`, `time`, `span`).
- **Compact Scale**: Global base size is 12px for body, links, metadata, and tables; 18px for `h2`; 14px for `h3`.
- **Bracket Notation**: Interactive navigation and action links use brackets, e.g., `[home]`, `[about]`, `[rss]`, `[github]`, `[<- return home]`.

### 2.3 Layout & Structure
- **Max Width**: Centered narrow column at `520px` (`max-width: 520px; margin: 0 auto;`).
- **Containers**: Translucent `.dh-card` containers with `.dh-card-head` for section headers and `.dh-card-body` for content.
- **Footer**: Pipe-separated inline list (`[home] | [about] | [rss] | [contact] | [github]`).

---

## 3. Architecture & Technical Rules

- **Framework**: Astro 5 (Static Site Generation mode).
- **Runtime**: Node.js 20 LTS (`C:\Users\wizardbeard\.nvm\versions\node\v20.18.0`).
- **Zero Client JS**: Pure static HTML & CSS output. JavaScript is only introduced if an interactive widget strictly requires it.
- **Content Collections**: All articles live in `src/content/blog/` as `.md` or `.mdx` files.
- **Syndication**: RSS feed automatically generated at `src/pages/rss.xml.ts` &rarr; `/rss.xml`.
- **Deterministic Builds**: Static output builds to `dist/` in under 5 seconds.

---

## 4. Content Standards & Frontmatter Schema

Every blog post must satisfy the Zod schema defined in `src/content.config.ts`:

```yaml
---
title: "Article Title Here"
description: "A 1-2 sentence synopsis for index previews and RSS readers."
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
- [x] Build core pages: Home (`/`), Blog Post (`/blog/[slug]`), About (`/about`), Tags (`/tags/[tag]`), RSS (`/rss.xml`).
- [x] Generate temporary death-metal dripping logo (`dirthaven-logo.jpg`) and cracked earth backdrop (`dirt-bg.jpg`).
- [x] Verify static production build compiles with zero errors.
- [x] Establish autonomous hands-off project rules (`GEMINI.md` and `AGENTS.md`).

### Phase 2: Visual Identity & Custom Assets
- [ ] User custom banner graphic / logo (ready to swap into `src/assets/dirthaven-logo.jpg`).
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
- [ ] Choose deployment target (Vercel, Cloudflare Pages, or GitHub Pages).
- [ ] Set up automated Git-push deployment workflow.
- [ ] Hook up custom apex domain `dirthaven.net` with SSL.

---

## 6. Project Rulebook (User Directives)

*This section captures ongoing rules, conventions, and personal preferences specified by the site owner:*

1. **No Babysitting**: Execute all tasks end-to-end without pausing for approval steps or confirmations.
2. **Preserve the Vibe**: Maintain the dark aesthetic, purple bracketed links, and compact 520px column.
3. **Keep Code Lightweight**: Prefer standard HTML/CSS over heavyweight UI component libraries.
4. **Draft Safety**: Never publish posts with `draft: true` into RSS or production index listings.

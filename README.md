# dirthaven.net

A minimalist music and art blog powered by [Astro](https://astro.build), styled like a raw black metal demo tape.

## Features

- **Styling**: Washed-out black content strip, muted red bleed on both sides, photocopy grain, red bracket links, typewriter headings.
- **Specification**: Complete design rules, architecture, and goals roadmap tracked in [SPEC.md](./SPEC.md).
- **Content Engine**: Astro 5 Content Collections with Zod schema validation.
- **Static & Fast**: Zero client JavaScript by default, fast static HTML/CSS output.
- **Taxonomy**: Filter articles by tag (`/tags/[tag]`).

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build static production files to dist/
npm run build

# Preview production build locally
npm run preview
```

## Adding Blog Posts

Create a markdown file in `src/content/blog/your-post-title.md`:

```markdown
---
title: "Your Post Title"
description: "A short summary of your article."
pubDate: 2026-09-22
tags: ["tech", "notes"]
draft: false
---

Write your article in standard Markdown or MDX here...
```

## Customizing Assets

- **Header Logo**: `src/assets/dirthaven-logo.svg` (swap in any SVG with the same name).
- **Styles**: Tweak color tokens (`--bleed`, `--strip`, `--link`, …) in `src/styles/global.css`.

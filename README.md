# dirthaven.net

A minimalist, high-contrast personal blog powered by [Astro](https://astro.build), inheriting the dark cyber-gothic aesthetic of [oneclickkill.net](https://github.com/devin-hart/oneclickkill.net).

## Features

- **Styling**: `#000` base with subtle dark texture, 1px text-shadows, signature purple bracket links, and translucent glassmorphism cards.
- **Specification**: Complete design rules, architecture, and goals roadmap tracked in [SPEC.md](./SPEC.md).
- **Content Engine**: Astro 5 Content Collections with Zod schema validation.
- **Static & Fast**: Zero client JavaScript by default, fast static HTML/CSS output.
- **Syndication**: Automatic RSS 2.0 feed at `/rss.xml`.
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

- **Header Logo**: Place your custom graphic at `src/assets/dirthaven-logo.jpg` (or `.webp`).
- **Background Texture**: Swap or adjust `src/assets/dirt-bg.jpg` (the original skull texture is also preserved at `src/assets/skull-bg.webp`).
- **Styles**: Tweak color variables and card padding in `src/styles/global.css`.

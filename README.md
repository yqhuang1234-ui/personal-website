# Personal Website

Yanqi Huang's personal academic website built with [Hexo](https://hexo.io) and the [Fluid](https://hexo.fluid-dev.com/docs/en/) theme. Deployed to GitHub Pages at [yqhuang1234-ui.github.io](https://yqhuang1234-ui.github.io).

## Setup

```bash
npm install
```

## Local Development

```bash
npm run server
# Visit http://localhost:4000
```

## Deploy

```bash
npm run clean    # clear cache
npm run build    # generate static files into /public
npm run deploy   # push /public to gh-pages branch on GitHub
```

Or all at once:

```bash
npm run clean && npm run build && npm run deploy
```

After deploying, push source changes to `main` as well:

```bash
git add .
git commit -m "your message"
git push origin main
```

---

## Adding a Blog Post

1. Create a new file in `source/_posts/`:

```markdown
---
title: Your Post Title
date: YYYY-MM-DD HH:MM:SS
tags:
  - blog
  - your-tag
index_img: /img/posts/your-image.jpg   # optional cover image
excerpt: >
  One or two sentence summary shown on the home page.
---

Your content here...
```

2. Add a cover image to `source/img/posts/` if needed.
3. Register the image in the `POST_IMGS` lookup in `source/js/home-explore.js` if you want it shown in the Explore section:

```js
var POST_IMGS = {
  '/YYYY/MM/DD/your-post-slug/': '/img/posts/your-image.jpg',
  ...
};
```

4. Run `npm run clean && npm run build && npm run deploy` to publish.

---

## Adding a Project

Edit `source/projects-data.json` and add an entry:

```json
{
  "title": "Project Title",
  "date": "Mon YYYY",
  "desc": "Short description shown on the projects page and home explore section.",
  "img": "/img/projects/your-image.jpg",
  "tags": ["your-tag"],
  "links": [
    { "label": "View Code",   "href": "https://github.com/...", "style": "primary" },
    { "label": "View Report", "href": "https://github.com/...", "style": "outline" }
  ]
}
```

Add the project image to `source/img/projects/`.

---

## Site Structure

```
source/
  _posts/          # blog post markdown files
  projects-data.json  # projects list (JSON)
  img/
    posts/         # blog cover images
    projects/      # project cover images
  css/
    custom.css     # global custom styles
    home-explore.css  # Explore section styles
  js/
    home-explore.js   # Explore & tag filtering logic
  about/           # About page content
  cv/              # CV page
  deep-learning/   # Interactive deep learning notes (HTML)
```

Key config files:
- `_config.yml` — Hexo site config (title, URL, deploy target)
- `_config.fluid.yml` — Fluid theme config (nav, colors, layout)

# Kelvin Njoroge Macharia — Portfolio

Personal portfolio site for Kelvin Njoroge Macharia — full-stack developer, FinTech data/analysis background, and freelance academic/technical writer.

Static site, no build step: plain HTML/CSS/JS.

## Structure

```
portfolio/
├── index.html                 # homepage
├── README.md
├── assets/
│   ├── favicon.svg            # tab icon
│   ├── og-image.svg           # social share preview image
│   ├── writing.css            # shared stylesheet for /writing pages
│   ├── screenshots/           # project screenshots (pulled from each repo's README)
│   └── videos/                # demo recordings for the two extension projects
└── writing/
    ├── index.html             # writing hub — lists all samples
    ├── research-*.html        # 5 research/analytical samples
    └── technical-*.html       # 5 technical build-note samples
```

## Local preview

Open `index.html` directly in a browser, or serve the folder with any static file server, e.g.:

```bash
npx serve .
```

## Deployment

Deployed via Vercel as a static site (no build command, no output directory override needed).

## Notes

- `assets/og-image.svg` is an SVG. Some social platforms (notably LinkedIn) render `og:image` more reliably as a raster PNG/JPG. If a link preview looks wrong when shared, export `og-image.svg` to a 1200×630 PNG and update the `og:image` tag in `index.html`.
- `og:image`/`og:url` are set to `https://portfolio-steel-zeta-60.vercel.app/`. If a custom domain is added later, update both tags in `index.html` to match.

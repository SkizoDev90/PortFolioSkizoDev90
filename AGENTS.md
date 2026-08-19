# AGENTS.md

## Project type

Static HTML/CSS/JS personal portfolio site. No build system, no package manager, no bundler. Open any `.html` file directly in a browser or serve via any static file server.

## Structure

- `index.html` — Landing page with Vanta.NET animated background
- `menu.html` — Navigation hub (links to index, about, projects)
- `about.html` — Bio page with CV download
- `proyect.html` — Project showcase with image carousels
- `css/layout.css` — Shared styles across all pages (loaded everywhere)
- `css/proyects.css` — Project page styles (only loaded by `proyect.html`)
- `css/about.css` — About page styles (only loaded by `about.html`)
- `js/vanta.js` — Vanta.NET background init (loaded by all pages)
- `js/proyects.js` — Swiper carousels + PhotoSwipe lightbox (only loaded by `proyect.html`)
- `img/` — Screenshot assets organized by project subfolder
- `files/CV_Francisco-Carrillo_IT.pdf` — Downloadable CV

## Key libraries (all CDN, no npm)

- Bootstrap 5.3.8 (CSS only)
- Three.js r121 (required by Vanta)
- Vanta.NET (animated background)
- Swiper 11 (carousels on projects page)
- PhotoSwipe 5 (image lightbox on projects page)
- Lordicon (animated icons via CDN `<lordicon>` custom element)
- Google Fonts: "Sekuya" custom typeface

## Gotchas

- **No build step.** CSS/JS are loaded raw via `<link>` and `<script>` tags. Edits to `css/` or `js/` are visible on browser refresh only.
- **CDN-pinned by URL version, not lockfile.** Vanta uses `@latest` — behavior may change upstream. Other libs pin major versions.
- **Each page loads the full `<head>` block** — the CDN script/link list is duplicated across all 4 HTML files. If you add or update a dependency, update every HTML file.
- **`proyects.js` hardcodes image paths** in arrays (`carruselGuardiaAdmin`, etc.) and Swiper CSS-class selectors. Adding a new project requires updating both `proyect.html` (new carousel DOM) and `proyects.js` (new image array + `initCarrusel` + `initLightbox` + `new Swiper` calls).
- **`layout.css` sets `overflow: hidden` on `html, body`** and uses `#scroll-container` for scroll. This is intentional (Vanta background stays fixed). Do not remove this pattern.
- **Language is Spanish.** All user-facing text, project descriptions, and page labels are in Spanish. Maintain consistency.

## To preview locally

Any static server works, e.g.:
```bash
npx serve .
```
Or open `index.html` directly in a browser (CDN dependencies require internet).

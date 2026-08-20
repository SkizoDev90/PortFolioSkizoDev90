# AGENTS.md

## Project type

Static HTML/CSS/JS personal portfolio site. No build system, no package manager, no bundler. Open any `.html` file directly in a browser or serve via any static file server.

## Structure

- `index.html` — Landing page
- `menu.html` — Navigation hub (links to index, about, projects, contact)
- `about.html` — Bio page with CV download
- `proyect.html` — Project showcase with image carousels
- `contact.html` — Contact page with social links
- `css/layout.css` — Shared styles across all pages (loaded everywhere)
- `css/proyects.css` — Project page styles (only loaded by `proyect.html`)
- `css/about.css` — About & contact page styles (loaded by `about.html` and `contact.html`)
- `js/i18n.js` — i18n translation engine (ES/EN/CA, loaded by all pages)
- `js/proyects.js` — Swiper carousels + PhotoSwipe lightbox (only loaded by `proyect.html`)
- `json/translations.json` — All i18n translations (ES/EN/CA)
- `img/` — Screenshot assets organized by project subfolder
- `files/CV_Francisco-Carrillo_IT.pdf` — Downloadable CV

## Key libraries (all CDN, no npm)

- Bootstrap 5.3.8 (CSS + JS bundle)
- Swiper 11 (carousels on projects page)
- PhotoSwipe 5 (image lightbox on projects page)
- Lordicon (animated icons via CDN `<lordicon>` custom element)
- flag-icons 7.3.2 (language flag icons)
- Google Fonts: "Sekuya" custom typeface

## Gotchas

- **No build step.** CSS/JS are loaded raw via `<link>` and `<script>` tags. Edits to `css/` or `js/` are visible on browser refresh only.
- **Each page loads the full `<head>` block** — the CDN script/link list is duplicated across all 5 HTML files. If you add or update a dependency, update every HTML file.
- **Bootstrap JS bundle is required** — all pages load `bootstrap.bundle.min.js` for the navbar toggler. If you remove it, mobile navigation breaks.
- **`proyects.js` hardcodes image paths** in arrays (`carruselGuardiaAdmin`, etc.) and Swiper CSS-class selectors. Adding a new project requires updating both `proyect.html` (new carousel DOM) and `proyects.js` (new image array + `initCarrusel` + `initLightbox` + `new Swiper` calls).
- **Centering pattern:** `#scroll-container` is a flex column. `#scroll-container > main` has `flex: 1; display: flex; align-items: center; justify-content: center`. This centers content in the remaining viewport space after the header. **`proyects.css` overrides this** (`flex: none; display: block`) because projects need to scroll, not center.
- **`layout.css` sets `overflow: hidden` on `html, body`** and uses `#scroll-container` for scroll.
- **Language is Spanish.** `lang="es"` on all pages. All user-facing text, project descriptions, and page labels are in Spanish. Maintain consistency.
- **i18n:** All pages use `data-i18n` attributes for translatable text, `data-i18n-meta` for meta tags, `data-i18n-aria` for aria labels, `data-i18n-alt` for image alt text. Language is persisted in `localStorage`. Flag-based language switcher (ES/EN/CA) with Catalan Senyera SVG.
- **Navbar hamburger:** All pages include `navbar-toggler` + Bootstrap collapse for mobile. The toggler targets `#navbarNav`.
- **Responsive:** `@media (max-width: 768px)` in `layout.css` disables flex centering on main and stacks menu items vertically.

## To preview locally

Any static server works, e.g.:
```bash
npx serve .
```
Or open `index.html` directly in a browser (CDN dependencies require internet).

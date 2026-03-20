# Judit Otazu — Portfolio

A personal portfolio site built as an interactive notebook you flip through page by page.

## Concept

The UI mimics a physical notebook. Each "page turn" is animated with a 3D rotateY transition (Framer Motion). You navigate forward by clicking anywhere, using arrow keys, or the on-screen chevrons. Dots at the bottom let you jump to any page directly.

## Pages

| # | Content |
|---|---------|
| 0 | Cover — notebook cover with name and titles |
| 1 | Index — table of contents |
| 2 | About — bio and personal statement |
| 3 | Experience — work history and education |
| 4 | Skills — grouped skill tags |
| 5 | Projects — featured projects with tags |
| 6 | Contact — email and GitHub links |

## Navigation

| Action | Result |
|--------|--------|
| Click anywhere on the page | Go to next page |
| `→` / `↓` arrow keys | Go to next page |
| `←` / `↑` arrow keys | Go to previous page |
| `‹` / `›` side buttons | Prev / next page |
| Dot indicators (bottom) | Jump to any page |

## Tech Stack

| Tool | Role |
|------|------|
| React 19 | UI framework |
| Vite 7 | Build tool and dev server |
| Tailwind CSS v4 | Styling |
| Framer Motion | Page flip animations |
| Indie Flower (Google Fonts) | Handwritten font for the notebook feel |
| gh-pages | Deployment to GitHub Pages |

## Project Structure

```
src/
├── main.jsx                  # App entry point (React 19, createRoot)
├── App.jsx                   # Root component
├── index.css                 # Global styles + Tailwind + font import
├── App.css                   # Minimal base reset
├── assets/
│   ├── notebook_cover.jpeg   # Cover page background image
│   └── cover.jpeg            # Additional asset
└── components/
    ├── Notebook.jsx          # Core flipbook engine — navigation,
    │                         # animation, keyboard events, page indicator
    └── pages/
        ├── Cover.jsx         # Page 0
        ├── Index.jsx         # Page 1 — table of contents
        ├── About.jsx         # Page 2
        ├── Experience.jsx    # Page 3 — data-driven list
        ├── Skills.jsx        # Page 4 — grouped tag grid
        ├── Projects.jsx      # Page 5 — project cards
        ├── Contact.jsx       # Page 6 — links with stopPropagation
        └── Page.jsx          # Generic wrapper (available for reuse)
```

## Getting Started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # Production build → dist/
npm run preview   # Preview the production build locally
```

## Deployment

Deployed to GitHub Pages via `gh-pages`:

```bash
npm run build && npx gh-pages -d dist
```

> If deploying to a project page (not a user/org page), set `base` in `vite.config.js` to your repo name: `base: '/your-repo-name/'`

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `#0a1f44` | Deep navy | App background, accent color, tag pills |
| `font-handwritten` | Indie Flower | All page text — notebook handwriting feel |
| Page background | `#ffffff` | Clean white for each notebook page |

## Adding a New Page

1. Create `src/components/pages/YourPage.jsx`
2. Import and add it to the `pages` array in `Notebook.jsx`

The page indicator and navigation update automatically.

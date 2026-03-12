# Project Overview & Architecture

This landing page is built as a modern React application scaffolded with Vite and TypeScript. The aim is to provide a fast, mobile‑first static site that can be deployed easily via GitHub Pages.

## Languages & Frameworks

- **TypeScript** – statically typed superset of JavaScript used across all source files.
- **React** – UI library for building component-based interfaces.
- **Vite** – build tool and dev server providing fast hot module replacement.
- **Tailwind CSS** – utility-first CSS framework for styling.
- **PostCSS/Autoprefixer** – CSS processing and vendor prefixing.

## Dependencies

- `react`, `react-dom`, `react-router-dom` for core application.
- `framer-motion` for animations.
- `lucide-react` for icon components.

## Directory Structure

```
/src
  App.tsx              # root application component, sets up router and layout
  main.tsx             # entry point mounts React to DOM
  main.css             # global Tailwind imports
  types.d.ts           # global TypeScript declarations
  assets/              # static images, icons, etc.
  components/          # reusable UI pieces
    Button.tsx
    Container.tsx
    FeatureCard.tsx
    Footer.tsx
    Navbar.tsx
    StatCounter.tsx
  constants/           # static data (features list)
    features.ts
  layouts/             # layout components
    MainLayout.tsx     # page wrapper with header/footer
  pages/               # top-level pages
    Landing.tsx        # main landing page
  sections/            # sections used within the landing page
    AISection.tsx
    CTA.tsx
    Ecosystem.tsx
    Hero.tsx
    Impact.tsx
    Marketplace.tsx
    Why.tsx
```

### Styling
All styles are handled through Tailwind utility classes. Custom configuration lives in `tailwind.config.cjs`, and the PostCSS setup is in `postcss.config.cjs`.

### Build & Dev Scripts
Check `package.json`:

- `npm run dev` – start Vite development server
- `npm run build` – produce production output in `dist/`
- `npm run preview` – serve the built site locally for review

### Deployment
See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions on publishing the site via GitHub Pages.

### Notes
- The project uses the `module` type in `package.json` for ES modules.
- Type definitions are minimal; `types.d.ts` can be extended as needed.
- Routing is currently simple and only serves the single landing page.

This file is intended to help new contributors or future you quickly understand the structure and technologies used in the application.
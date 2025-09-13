# Gradvisors Web

Migrated from Create React App (CRA) to [Vite](https://vitejs.dev/) for faster development, simpler configuration, and Node 22 compatibility (original CRA build failed with OpenSSL errors under Node 22).

## Scripts

Development server (with HMR):

```
npm run dev
```

Production build (outputs to `dist/`):

```
npm run build
```

Preview local production build:

```
npm run preview
```

## Key Migration Changes

- Removed `react-scripts`; replaced with Vite + `@vitejs/plugin-react`.
- Added `vite-plugin-svgr` for flexible SVG importing.
- Replaced CRA `public/index.html` usage with Vite root `index.html` (old CRA template retained but unused).
- Introduced query-based SVG import strategy:
	- `import Icon from './icon.svg?react'` -> React component
	- `import iconUrl from './icon.svg?url'` -> URL string for `<img>` / CSS
- Added `DevErrorBoundary` to surface runtime errors instead of blank page.
- Pruned unused CRA test tooling (Jest / Testing Library) for leaner dependency graph.
- Upgraded `@types/node` to satisfy Vite peer dependency (>=18).

## Deployment (Vercel)

- Static export served from `dist/` after `npm run build`.
- `vercel.json` specifies `installCommand` and `buildCommand` to enforce npm.
- Legacy `yarn.lock` removed (renamed to `yarn.lock.ignore` and excluded via `.vercelignore`) so Vercel selects npm (uses `package-lock.json`).
- SPA fallback configured so non-root routes resolve to `index.html`.

## SVG Usage Reference

Type declarations in `custom.d.ts` enable importing the following variants:

| Pattern | Result |
|---------|--------|
| `file.svg` | URL (default Vite asset behavior) |
| `file.svg?url` | Explicit URL string |
| `file.svg?react` | React component via SVGR |

## Tech Stack

- React 17
- TypeScript 4
- Vite 5
- Material-UI v4
- Swiper 7
- AOS (scroll animations)
- SCSS modules / global styles

## Local Development

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev` (default: http://localhost:5173)
3. Build production: `npm run build`
4. Preview build: `npm run preview`

## Notes

- Keep `yarn.lock` absent to avoid accidental Yarn installs in CI/CD.
- When adding new SVGs decide early whether they should be components (`?react`) or plain assets (`?url`).
- If upgrading to React 18, switch to `createRoot` in `src/index.tsx`.

## License

Internal project – no public license specified.

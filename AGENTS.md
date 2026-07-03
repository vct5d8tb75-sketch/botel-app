# Codex Instructions

This repository is the source of truth for The Botel web application.

## Operating Mode

- Work in this GitHub repository: `vct5d8tb75-sketch/botel-app`.
- Keep this project fully separate from Imunelia or any other repository.
- Prefer GitHub-based edits and commits so work can continue from Codex on mobile even when the user's PC is off.
- The live site is deployed by GitHub Actions to GitHub Pages:
  `https://vct5d8tb75-sketch.github.io/botel-app/`
- After every meaningful change, commit to `main`, push to GitHub, and verify the Pages workflow in Actions.

## Image Policy

- Use only images provided by the user and committed into `public/`.
- Do not add stock photos, Unsplash images, remote placeholders, or unrelated brand assets.
- Current approved assets:
  - `public/botel-logo.jpg`
  - `public/botel-river-close.jpg`
  - `public/botel-river-wide.jpg`

## Technical Notes

- Stack: Next.js, React, TypeScript, App Router.
- GitHub Pages uses static export; keep code compatible with static hosting.
- Do not add real Previo, Dotykacka, Money S3, or Pohoda API credentials. Keep integration files as stubs until credentials and scope are explicitly provided.
- If adding public assets, reference them through `publicAsset()` from `src/lib/site-assets.ts` so GitHub Pages base path works.

# Codex Instructions

This repository is the source of truth for The Botel web application.

## Operating Mode

- Work in this GitHub repository: `vct5d8tb75-sketch/botel-app`.
- Keep this project fully separate from Imunelia or any other repository.
- Prefer GitHub-based edits and commits so work can continue from Codex on mobile even when the user's PC is off.
- The live site is deployed by GitHub Actions to GitHub Pages:
  `https://vct5d8tb75-sketch.github.io/botel-app/`
- This is Jan's isolated working branch: `jan-test`. Commit and push changes only to `jan-test`.
- Never modify `main`, overwrite collaborators' work, or deploy this branch using the shared GitHub Pages workflow (including manual workflow_dispatch).
- The separate Jan preview is hosted at `https://botel-jan-test.stejway-2335.chatgpt.site/`. It is a published snapshot; GitHub pushes do not automatically update it. Rebuild and republish the snapshot from `jan-test` when a preview update is requested.
- Future integration must use a pull request from `jan-test` to `main`. Refresh the comparison against current `main`, check conflicts and tests, preserve collaborators' changes, and obtain approval before merging.

## Image Policy

- Use only images provided by the user or taken from the user's existing website gallery and committed into `public/`.
- Do not add stock photos, Unsplash images, remote placeholders, or unrelated brand assets.
- Current approved assets:
  - `public/botel-logo.jpg`
  - `public/botel-logo-negative.png`
  - `public/marina-gallery/*.jpg`
  - `public/crew/*.jpg`

Use `botel-logo-negative.png` on blue/dark backgrounds. Keep `botel-logo.jpg` only for white or very light logo placements.

## Technical Notes

- Stack: Next.js, React, TypeScript, App Router.
- GitHub Pages uses static export; keep code compatible with static hosting.
- Do not add real Previo, Dotykacka, Money S3, or Pohoda API credentials. Keep integration files as stubs until credentials and scope are explicitly provided.
- If adding public assets, reference them through `publicAsset()` from `src/lib/site-assets.ts` so GitHub Pages base path works.

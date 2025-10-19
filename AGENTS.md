#+ Repository Guidelines

## Project Structure & Module Organization
- App entry: `src/main.ts` (Electron main), `src/preload.ts` (preload), `src/renderer.ts` + `src/App.tsx` (React UI).
- UI code lives in `src/components` and `src/styles`. Vite alias `@` maps to `src`.
- Build artifacts are written to `.vite/build/` by Electron Forge’s Vite plugin. App `main` points to `.vite/build/main.js`.

## Build, Test, and Development Commands
- Install: `bun install` — installs deps with Bun (see `packageManager`).
- Develop: `bun run start` — launches Electron via Electron Forge with Vite HMR for renderer.
- Package: `bun run package` — creates unpacked binaries.
- Make: `bun run make` — creates OS-specific installers (ZIP/Deb/RPM/Squirrel).
- Publish: `bun run publish` — runs Electron Forge publish pipeline.
- Lint: `bun run lint` — ESLint for TS/React and import rules.
- Format: `bun run format` — Prettier write across repo.

## Coding Style & Naming Conventions
- Language: TypeScript (TS/TSX). Use 2-space indent, semicolons, and `camelCase` for vars/functions, `PascalCase` for React components and types.
- Imports: prefer aliased paths `@/...` for local modules.
- Linting: ESLint flat config (`eslint.config.mjs`) with TypeScript and import plugins. Fix issues before committing.
- Formatting: Prettier. Run `bun run format` to normalize.

## Testing Guidelines
- No tests currently present. If adding tests:
  - Unit: prefer Vitest with Vite. Place alongside code as `*.test.ts`/`*.test.tsx`.
  - E2E: consider Playwright for renderer UI and Spectron-like tools for Electron flows.
  - Add `bun run test` script and keep tests hermetic (no network, no timers where possible).

## Commit & Pull Request Guidelines
- Use Conventional Commits: `feat:`, `fix:`, `docs:`, `chore:`, etc. Example: `feat(renderer): add dropdown menu with Radix`.
- PRs should include: purpose/summary, screenshots or gifs for UI changes, steps to verify, and linked issues.
- Keep changes scoped; separate refactors from features/bugfixes.

## Security & Configuration Tips
- Keep logic in `preload.ts` and use IPC safely; do not expose Node APIs to the renderer directly.
- Electron Fuses are enabled (see `forge.config.ts`) to harden builds; avoid disabling without review.

## Agent-Specific Notes
- Follow these guidelines for any changes in this repo. Prefer minimal, targeted patches and respect existing structure and scripts.

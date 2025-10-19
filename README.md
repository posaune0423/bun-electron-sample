# bun-electron-sample

A modern Electron application built with Bun, React, TypeScript, and Tailwind CSS. Features a beautiful UI with dark mode support using Radix UI components.

## Tech Stack

- **Runtime**: Bun v1.3.0
- **Framework**: Electron 38.3.0
- **UI Library**: React 19.2.0
- **Language**: TypeScript 4.5.5
- **Styling**: Tailwind CSS v4 + Radix UI
- **Build Tool**: Vite 5.4.20
- **Packaging**: Electron Forge 7.10.2

## Features

- ⚡️ Fast development with Vite HMR
- 🎨 Modern UI with Tailwind CSS v4 and Radix UI components
- 🌓 Dark mode support with theme toggle
- 📦 Production-ready build with Electron Forge
- 🔒 Secure IPC communication via preload script
- 🛡️ Hardened with Electron Fuses
- 🎯 TypeScript for type safety
- 💅 ESLint + Prettier for code quality

## Project Structure

```
src/
├── main.ts              # Electron main process
├── preload.ts           # Preload script for secure IPC
├── renderer.ts          # Renderer process entry
├── App.tsx              # Root React component
├── components/          # React components
│   ├── Home.tsx         # Home page component
│   ├── mode-toggle.tsx  # Dark mode toggle
│   ├── theme-provider.tsx # Theme context provider
│   └── ui/              # Reusable UI components
│       ├── button.tsx
│       └── dropdown-menu.tsx
├── styles/
│   └── globals.css      # Global styles
└── utils.ts             # Utility functions
```

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) v1.3.0 or later

### Installation

```bash
bun install
```

### Development

Start the application in development mode with hot reload:

```bash
bun run start
```

### Linting

Run ESLint to check code quality:

```bash
bun run lint
```

### Formatting

Format code with Prettier:

```bash
bun run format
```

## Building & Distribution

### Package

Create unpacked binaries for your platform:

```bash
bun run package
```

### Make

Create OS-specific installers (ZIP/Deb/RPM/Squirrel):

```bash
bun run make
```

### Publish

Run the Electron Forge publish pipeline:

```bash
bun run publish
```

## Development Guidelines

### Code Style

- Use TypeScript with strict type checking
- Follow 2-space indentation
- Use camelCase for variables/functions, PascalCase for components/types
- Prefer functional components and hooks over classes
- Use the `@/` alias for imports from `src/`

### Commit Convention

Follow Conventional Commits format:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `chore:` - Maintenance tasks
- `refactor:` - Code refactoring

Example: `feat(renderer): add dropdown menu with Radix`

### Security

- Keep IPC logic in `preload.ts`
- Never expose Node APIs directly to the renderer
- Electron Fuses are enabled for hardened builds

## License

MIT

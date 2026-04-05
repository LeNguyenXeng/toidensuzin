# Toi Den Suzin

Landing page built with React and Vite.

## Tech Stack

- React 18
- Vite 6
- Tailwind CSS 4

## Getting Started

### Requirements

- Node.js 18+ recommended
- npm

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

Vite will start the local app and print the dev URL in the terminal.

## Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
src/
  app/
    components/
    App.tsx
  styles/
  main.tsx
```

## Deployment

This repository is configured for GitHub Pages deployment with GitHub Actions.

- Repository: `LeNguyenXeng/toidensuzin`
- Base path: `/toidensuzin/`
- Workflow file: `.github/workflows/deploy.yml`

Published site:

```text
https://lenguyenxeng.github.io/toidensuzin/
```

To deploy:

1. Push changes to the `main` branch.
2. In GitHub repository settings, enable Pages and choose `GitHub Actions` as the source.
3. Wait for the Pages workflow to finish.

## Notes

- If you change the repository name, update `base` in `vite.config.ts`.
- Static assets and routes must work under the `/toidensuzin/` base path when deployed.

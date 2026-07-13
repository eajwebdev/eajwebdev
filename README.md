# EA Software Solutions

Modern business systems landing site built with React, TypeScript, Vite, and Tailwind CSS.

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=111827)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)

## Overview

EA Software Solutions is a polished company website for presenting custom software services, business automation solutions, project portfolios, and team profiles.

The app focuses on a clean marketing experience with responsive sections, animated UI details, inquiry flows, and reusable React hooks/components.

## Features

- Modern landing page with animated hero visuals
- Services section for custom systems and automation offers
- Responsive portfolio carousel and project preview cards
- Team showcase with tabbed groups and mobile carousel behavior
- Inquiry modal for collecting client project details
- Dedicated legal/support pages for privacy, terms, and cookies
- Reusable hooks, utility functions, and shared TypeScript types

## Tech Stack

| Area | Tools |
| --- | --- |
| Framework | React 18 |
| Language | TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Routing | React Router DOM |
| Icons | Lucide React |
| UI Utilities | clsx, tailwind-merge |

## Project Structure

```txt
src/
+-- components/        # Shared UI components
+-- hooks/             # Reusable React hooks
+-- lib/               # Utility helpers
+-- pages/             # Route-level pages
+-- types/             # Shared TypeScript types
+-- App.tsx            # App routes
+-- index.css          # Global styles and Tailwind setup
+-- main.tsx           # React entry point
```

## Pages

| Route | Page |
| --- | --- |
| `/` | Welcome / landing page |
| `/services` | Services overview |
| `/projects` | Portfolio page |
| `/about` | Company information |
| `/privacy-policy` | Privacy policy |
| `/terms-of-service` | Terms of service |
| `/cookie-policy` | Cookie policy |

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm run dev
```

The app will run locally through Vite. Open the localhost URL shown in the terminal.

### Production Build

```bash
pnpm run build
```

### Preview Production Build

```bash
pnpm run preview
```

### Lint

```bash
pnpm run lint
```

## Available Scripts

| Command | Description |
| --- | --- |
| `pnpm run dev` | Starts the Vite development server |
| `pnpm run build` | Runs TypeScript checks and builds for production |
| `pnpm run preview` | Serves the production build locally |
| `pnpm run lint` | Runs ESLint across TypeScript and TSX files |

## Development Notes

- Page-specific state for the landing page lives in `src/hooks/useWelcomePage.ts`.
- Welcome page types live in `src/types/welcometypes.tsx`.
- Shared component types are exported from `src/types/index.ts`.
- Static images and assets should be placed in `public/`.

## Deployment

This project builds into a static `dist/` directory and can be deployed to platforms such as Vercel, Netlify, Cloudflare Pages, or any static hosting provider.

```bash
pnpm run build
```

Deploy the generated `dist/` folder.

## Status

This is a private business website project for EA Software Solutions.

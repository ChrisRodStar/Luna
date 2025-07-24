# Tech Stack & Development Guide

## Core Technologies
- **Framework**: Next.js 15.4.3 (App Router)
- **Language**: TypeScript 5+ with strict mode enabled
- **Frontend**: React 19.1.0
- **Styling**: Tailwind CSS v4 with PostCSS
- **Package Manager**: npm (package-lock.json present)

## Development Environment
- **Target**: ES2017
- **Module System**: ESNext with bundler resolution
- **Path Aliases**: `@/*` maps to `./src/*`
- **JSX**: Preserve mode for Next.js optimization

## Code Style & Standards
- **Strict TypeScript**: All strict compiler options enabled
- **Modern React**: Using React 19 with latest patterns
- **Component Structure**: Functional components with hooks
- **File Extensions**: `.tsx` for React components, `.ts` for utilities
- **Import Style**: ES6 imports with path aliases preferred

## Architecture Patterns
- **App Router**: Using Next.js 13+ app directory structure
- **Server Components**: Leverage React Server Components by default
- **Type Safety**: Full TypeScript coverage with proper typing
- **CSS-in-JS**: Tailwind utility classes for styling

## Future Integrations
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Payments**: Stripe integration
- **Deployment**: Vercel platform
---
inclusion: always
---

# Development Rules & Restrictions

## Command Restrictions

**NEVER** run or suggest running the following commands:

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start

# General package management
npm update
npm audit
yarn install
pnpm install

# Linting and formatting
npm run lint
npm run format
eslint .
prettier --write .

# Database operations
npx prisma generate
npx prisma migrate
npx prisma studio
npx prisma db push

# Deployment commands
vercel deploy
vercel --prod
npm run deploy

# Environment setup
npx create-next-app
npx next telemetry
```

## Testing Restrictions

- **DO NOT** create test files or testing code (.test.ts, .spec.ts, **tests** folders)
- **DO NOT** run any testing commands (jest, vitest, cypress, playwright)
- **DO NOT** suggest testing frameworks or test setup
- **DO NOT** write unit tests, integration tests, e2e tests, or any form of automated testing
- **DO NOT** create mock files or test utilities
- **DO NOT** suggest test coverage tools or testing best practices

## Build & Deployment Restrictions

- **DO NOT** run build processes or suggest build optimizations
- **DO NOT** handle deployment configurations or deployment commands
- **DO NOT** modify package.json scripts section
- **DO NOT** suggest CI/CD pipeline setup or GitHub Actions
- **DO NOT** handle environment variable setup or .env file management

## Package Management Restrictions

- **ALLOWED**: `npm install` for shadcn/ui components and related UI dependencies
- **ALLOWED**: `npx shadcn@latest add [component]` for adding shadcn components
- **DO NOT** run general package updates or audits
- **DO NOT** handle version conflicts or dependency issues
- **DO NOT** install non-UI related packages without explicit request

## Development Workflow

- Focus on code implementation and feature development only
- Write clean, functional TypeScript/React code
- Create components, pages, and utilities as requested
- Handle file structure and organization
- Let the user handle all execution, building, testing, and deployment
- Concentrate on writing code that follows Next.js 15 and React 19 patterns

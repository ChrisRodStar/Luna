# Project Structure & Organization

## Root Directory

```
setluna/
├── .git/                 # Git version control
├── .kiro/               # Kiro AI assistant configuration
├── src/                 # Source code (main application)
├── node_modules/        # Dependencies
├── package.json         # Project dependencies and scripts
├── next.config.ts       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
├── postcss.config.mjs   # PostCSS/Tailwind configuration
└── README.md           # Project documentation
```

## Source Structure (App Router)

```
src/
└── app/                 # Next.js App Router directory
    ├── layout.tsx       # Root layout component
    ├── page.tsx         # Home page component
    ├── globals.css      # Global styles with Tailwind
    └── favicon.ico      # Site favicon
```

## Naming Conventions

- **Components**: PascalCase (e.g., `UserDashboard.tsx`)
- **Pages**: lowercase with hyphens for routes (e.g., `learn-html/page.tsx`)
- **Utilities**: camelCase (e.g., `formatXP.ts`)
- **Types**: PascalCase with descriptive names (e.g., `UserProgress.ts`)

## File Organization Patterns

- **Pages**: Use Next.js App Router file-based routing in `src/app/`
- **Components**: Create `src/components/` for reusable UI components
- **Utils**: Create `src/lib/` or `src/utils/` for helper functions
- **Types**: Create `src/types/` for TypeScript type definitions
- **Hooks**: Create `src/hooks/` for custom React hooks

## Future Structure Expansion

As the project grows, expect these additions:

```
src/
├── app/                 # App Router pages
├── components/          # Reusable UI components
├── lib/                 # Utility functions and configurations
├── hooks/               # Custom React hooks
├── types/               # TypeScript type definitions
├── styles/              # Additional CSS/styling files
└── data/                # Static data and content
```

## Import Path Guidelines

- Use `@/` alias for imports from `src/` directory
- Prefer relative imports for files in the same directory
- Group imports: external libraries first, then internal modules

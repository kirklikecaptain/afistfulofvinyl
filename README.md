# afov.next

A Next.js application built with React 19, Mantine UI, and Contentful GraphQL.
This project uses modern tooling including GraphQL Code Generator, ESLint, Stylelint, and Plop for scalable, maintainable development.

## Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** Mantine v8
- **Language:** TypeScript
- **Data:** Contentful GraphQL API
- **GraphQL Client:** `@urql/core` (server-side usage)
- **Styling:** PostCSS + SCSS, Stylelint
- **Code Quality:** ESLint, Prettier
- **Tooling:** GraphQL Codegen, Plop

## Scripts

### Development & Build

```bash
# Install deps
npm install

# Start dev server @ http://localhost:3000
npm run dev

# Build for prod & start server
npm run build
npm run start
```

### Linting & Formatting

```bash
npm run lint       # Run ESLint
npm run lint:fix   # Fix ESLint issues
npm run stylelint  # Fix CSS/SCSS issues
npm run format     # Format code with Prettier
npm run fixAll     # Run all fixes (ESLint + Prettier + Stylelint)
```

### GraphQL

```bash
npm run codegen         # Generate Contentful API and query types
npm run codegen:watch   # Run in watch mode
```

### Component Scaffolding

```bash
npm run plop
```

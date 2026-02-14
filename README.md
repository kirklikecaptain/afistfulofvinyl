# afistfulofvinyl

Website for A Fistful of Vinyl

[![Netlify Status](https://api.netlify.com/api/v1/badges/1ec93eb2-0ba2-4a3f-aafe-44118ce8cce2/deploy-status)](https://app.netlify.com/projects/afov/deploys)

## Stack

- (Typescript)<https://www.typescriptlang.org/docs/> / (React)<https://react.dev/reference/react> / (Next.js)<https://nextjs.org/docs/app>
- (Mantine UI)<https://mantine.dev/core/package/> / (CSS Modules)<https://github.com/css-modules/css-modules>
- (Contentful CMS via GraphQL)<https://www.contentful.com/developers/docs/references/graphql/> introduction/> / (GraphQL Codegen)<https://the-guild.dev/graphql/codegen/plugins/presets/preset-client> / (URQL)<https://nearform.com/open-source/urql/docs/>

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

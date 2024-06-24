# afistfulofvinyl.com

Website for [A Fistful of Vinyl](https://www.afistfulofvinyl.com/), a media organization and radio show on [KXLU 88.9 FM](https://kxlu.com/) in Los Angeles, California.

## Core Dependencies

| Name            | Description                                            | Links                                                                              |
| --------------- | ------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| Next.js         | React meta-framework for building server-rendered apps | [Docs](https://nextjs.org/docs/app/api-reference)                                  |
| Contentful      | Headless CMS and content delivery GraphQL API          | [Docs](https://www.contentful.com/developers/docs/references/graphql)              |
| Graphql Request | Lightweight GraphQL client                             | [Docs](https://github.com/jasonkuhrt/graphql-request)                              |
| GraphQL Codegen | Code generator for Contentful content types            | [Docs](https://the-guild.dev/graphql/codegen/docs/config-reference/codegen-config) |
| Radix UI        | Lightly themed component library                       | [Docs](https://www.radix-ui.com/themes/docs/overview/getting-started)              |
| Tabler Icons    | SVG icon set                                           | [Docs](https://tabler.io/icons)                                                    |
| usehooks-ts     | Utility hooks written in TypeScript                    | [Docs](https://usehooks-ts.com/react-hook/use-boolean)                             |

## Getting Started

Run a local development server:

1. Clone this repository
2. Request `.env.local` file from repository owner
3. `npm i` to install dependencies
4. `npm run dev` to run the development server on [localhost:3000](http://localhost:3000)

## Scripts

- `npm run dev`: Start a local development server at [localhost:3000](http://localhost:3000)
- `npm run build`: Generate a production build
- `npm run serve`: Start the production build at [localhost:3000](http://localhost:3000)
- `npm run lint`: Lint all files
- `npm run format`: Fix and format all files with eslint and prettier
- `npm run codegen`: Generate TypeScript types for Contentful models and GraphQL queries

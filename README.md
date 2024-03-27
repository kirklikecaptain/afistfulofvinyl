# A Fistful of Vinyl

Website for [A Fistful of Vinyl](https://www.afistfulofvinyl.com/), a media organization and radio show on [KXLU 88.9 FM](https://kxlu.com/) in Los Angeles, California.

## Dependencies

| Name | Description | Docs |
| ---- | ----------- | ---- |
| Next.js | Meta-framework for building server-rendered React applications | [API Reference](https://nextjs.org/docs/app/api-reference) |
| Mantine | UI component library and theme provider | [Overview](https://mantine.dev/overview) |
| Contentful | Headless CMS and content delivery API | [API Reference](https://www.contentful.com/developers/docs/references/) |


## Develop

1. Clone this repository
2. Request `.env.local` file from repository owner
3. `cd afistfulofvinyl`
4. `npm i` to install dependencies
5. `npm run dev` to run the development server on [localhost:3000](http://localhost:3000)

## Build

1. `npm run build` to generate a production build of the application
2. `npm run serve` to run the production server at [localhost:3000](http://localhost:3000)

## Code Quality

This project uses a minimal Eslint + Prettier configuration to lint and format code. Install the recommended VSCode extension to enable automatic formatting.

- `npm run lint` to lint all files
- `npm run format` to format and fix all files
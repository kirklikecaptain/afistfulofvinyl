import lessToJson from 'less-to-json';
import dotenv from 'dotenv';
import { resolve } from 'path';
import { getThemeVariables } from 'antd/dist/theme';

dotenv.config({
  path: `.env.${process.env.GATSBY_ACTIVE_ENV}`,
});

export default {
  siteMetadata: {
    siteUrl: process.env.GATSBY_WEBSITE_ROOT,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-force-trailing-slashes',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_DELIVERY_KEY,
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          src: 'src',
          components: 'src/components',
        },
        extensions: ['js', 'jsx'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true,
      },
    },
    {
      resolve: 'gatsby-plugin-less',
      options: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            ...getThemeVariables({ dark: true }),
            ...lessToJson('./src/styles/antd/overrides.less'),
          },
        },
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: resolve(`./src/layout/index.jsx`),
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GA_V4_ID, // Google Analytics / GA
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'A Fistful of Vinyl',
        short_name: 'A Fistful of Vinyl',
        start_url: '/',
        background_color: '#222222',
        theme_color: '#222222',
        display: 'minimal-ui',
        icon: 'src/images/brand/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: process.env.GATSBY_WEBSITE_ROOT,
        sitemap: `${process.env.GATSBY_WEBSITE_ROOT}/sitemap.xml`,
        development: {
          policy: [{ userAgent: '*', disallow: ['/'] }],
        },
        production: {
          policy: [{ userAgent: '*', allow: '/' }],
        },
      },
    },
  ],
};

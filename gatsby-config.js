const path = require('path');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';

console.log(`Using environment config: '${activeEnv}'`);

const siteUrl =
  activeEnv === 'production'
    ? 'https://www.afistfulofvinyl.com'
    : 'https://staging-www.afistfulofvinyl.com';

module.exports = {
  siteMetadata: {
    siteUrl
  },
  plugins: [
    'gatsby-plugin-react-helmet-async',
    'gatsby-plugin-netlify',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@assets': path.resolve(__dirname, 'src/assets'),
          '@components': path.resolve(__dirname, 'src/components'),
          '@context': path.resolve(__dirname, 'src/context'),
          '@layout': path.resolve(__dirname, 'src/layout'),
          '@style': path.resolve(__dirname, 'src/style'),
          '@views': path.resolve(__dirname, 'src/views')
        }
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-polished',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: path.resolve('./src/layout/Layout.js')
      }
    },
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     name: 'gatsby-starter-default',
    //     short_name: 'starter',
    //     start_url: '/',
    //     background_color: '#663399',
    //     theme_color: '#663399',
    //     display: 'minimal-ui'
    //     // icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
    //   }
    // },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: 'gatsby-plugin-segment-js',
      options: {
        prodKey: process.env.SEGMENT_KEY
      }
    },
    {
      resolve: 'gatsby-plugin-force-trailing-slashes',
      options: {
        excludedPaths: ['/404.html']
      }
    },
    {
      resolve: 'gatsby-plugin-less',
      options: {
        javascriptEnabled: true
      }
    },
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: 'afistfulofvinyl'
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ]
};

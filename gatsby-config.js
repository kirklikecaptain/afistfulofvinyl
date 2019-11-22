const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './src/style/antd-config/antd-custom-vars.less'), 'utf8')
);

// const segmentKey =
//   process.env.BUILD_ENV === "PROD"
//     ? "ILob1IGCOMUhqjjtgeNdPa6O5lXAHLO4"
//     : "RUjZBJk1OZqUAFwcjZIhZO70Niz0DB1B"

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
    'gatsby-plugin-polished',
    'gatsby-plugin-no-sourcemaps',
    'gatsby-plugin-emotion',
    // {
    //   resolve: 'gatsby-plugin-segment-js',
    //   options: {
    //     prodKey: '',
    //     devKey: ''
    //   }
    // },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'iy94k83j702j',
        accessToken: '18yotmsHa6F5MIJb7tLYMsj4ui9CctGLpdk0pdLnNgs'
      }
    },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true
      }
    },
    {
      resolve: 'gatsby-plugin-less',
      options: {
        javascriptEnabled: true,
        modifyVars: themeVariables
      }
    }
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `A Fistful of Vinyl`,
    //     short_name: `A Fistful of Vinyl`,
    //     start_url: `/`,
    //     background_color: `#000000`,
    //     theme_color: `#000000`,
    //     display: `minimal-ui`
    //     icon: `src/images/gatsby-icon.png` This path is relative to the root of the site.
    //   }
    // }
  ]
};

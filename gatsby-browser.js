const React = require('react');
const Layout = require('./src/layout/Layout').default;

export const onRouteUpdate = ({ location, prevLocation }) => {
  console.log('new pathname', location.pathname);
  console.log('old pathname', prevLocation ? prevLocation.pathname : null);
};

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

/**
 * Implement Gatsby's Browser APIs in this file.
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

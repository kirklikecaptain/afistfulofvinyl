/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
// This file is processed by node, so we need to use commonJS require instead of import

const React = require('react');
const GlobalContextProvider = require('./src/context/GlobalContextProvider')
  .default;

exports.wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>;
};

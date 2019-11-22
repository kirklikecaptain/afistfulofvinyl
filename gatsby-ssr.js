const React = require('react');
const Layout = require('./src/layout/Layout').default;

export const wrapPageElement = ({ element, props }) => {
  console.log('Props', props);
  return <Layout {...props}>{element}</Layout>;
};

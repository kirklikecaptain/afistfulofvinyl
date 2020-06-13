import React from 'react';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';
import Footer from './Footer';
import { Helmet } from 'react-helmet-async';
import '../style/index.less';

const preconnectOrigins = [
  'https://www.google.com',
  'https://www.youtube-nocookie.com',
  'https://googleads.g.doubleclick.net',
  'https://static.doubleclick.net'
];

const AppLayout = ({ children }) => {
  return (
    <div id='layout'>
      <Helmet>
        {preconnectOrigins.map(url => (
          <link key={url} href={url} rel='preconnect' crossOrigin />
        ))}
      </Helmet>
      <NavDesktop />
      <NavMobile />
      <main id='content'>{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;

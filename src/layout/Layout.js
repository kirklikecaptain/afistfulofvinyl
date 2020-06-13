import React from 'react';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';
import Footer from './Footer';
import '../style/index.less';

const AppLayout = ({ children }) => {
  return (
    <div id='layout'>
      <NavDesktop />
      <NavMobile />
      <main id='content'>{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;

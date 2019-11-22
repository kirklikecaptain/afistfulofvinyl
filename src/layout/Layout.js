import React from 'react';
import styled from '@emotion/styled';
import { Layout as AntLayout } from 'antd';
import Nav from './Nav';
import Footer from './Footer';
import ArtistRainbow from '../components/ArtistRainbow';

import '../style/_index.less';
import Search from './Search';

const Layout = props => {
  const {
    location,
    children,
    pageContext: { transparentNav }
  } = props;
  return (
    <StyledLayout>
      <Nav transparentNav={transparentNav} />
      <Search />
      <main className='main-content'>{children}</main>
      <ArtistRainbow />
      <Footer />
    </StyledLayout>
  );
};

export default Layout;

const StyledLayout = styled(AntLayout)``;

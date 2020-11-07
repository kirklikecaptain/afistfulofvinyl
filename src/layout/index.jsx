import React from 'react';
import { Layout as LayoutRoot } from 'antd';
import { graphql, useStaticQuery } from 'gatsby';

import FontFaces from '../styles/FontFaces';
import GlobalStyle from '../styles/GlobalStyle';
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';
import DefaultHead from '../components/general/DefaultHead';

export default function GlobalLayout(props) {
  const { children, location } = props;

  const { artists, videos } = useStaticQuery(
    graphql`
      {
        artists: allContentfulArtist(sort: { fields: artistName, order: ASC }) {
          nodes {
            ...Artist
          }
        }
        videos: allContentfulVideo(sort: { fields: title, order: ASC }) {
          nodes {
            ...VideoCard
          }
        }
      }
    `
  );

  return (
    <>
      <FontFaces />
      <GlobalStyle />
      <DefaultHead location={location} />
      <LayoutRoot>
        <Header artists={artists} videos={videos} />
        {children}
        <Footer artists={artists} />
      </LayoutRoot>
    </>
  );
}

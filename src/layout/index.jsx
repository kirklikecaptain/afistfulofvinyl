import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

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
      <GlobalStyle />
      <DefaultHead location={location} />
      <Header artists={artists} videos={videos} />
      {children}
      <Footer artists={artists} />
    </>
  );
}

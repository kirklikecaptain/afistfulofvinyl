import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import { darken } from 'polished';
import { Head } from '@components/Head';
import { Hero } from './layout/Hero';
import { Recent } from './layout/Recent';

const Home = props => {
  const { data, pageContext } = props;
  const newestPost = data.recent.edges[0];
  const recentPosts = data.recent.edges.slice(1, 13);
  return (
    <Fragment>
      <Head title='Home' description='Description' canonical='canonical' />
      <Hero newestPost={newestPost} />
      <Recent recentPosts={recentPosts} />
    </Fragment>
  );
};

export default Home;

export const query = graphql`
  query getHomeVideos {
    recent: allContentfulVideo(
      limit: 13
      sort: { fields: uploadDate, order: DESC }
    ) {
      edges {
        node {
          id
          title
          videoId
          videoType
          shortDescription
          fields {
            fullPath
          }
          thumbnail {
            big: fluid(maxWidth: 800, quality: 100) {
              ...GatsbyContentfulFluid_withWebp
            }
            small: fluid(maxWidth: 400, quality: 100) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          uploadDate(fromNow: true)
          artist {
            artistName
            color
            slug
            photo {
              fluid(maxWidth: 50, quality: 100) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;

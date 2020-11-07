import React from 'react';
import { graphql } from 'gatsby';

import Page from '../../components/general/Page';
import NewestVideo from './sections/NewestVideo';
import CardGrid from '../../components/sections/CardGrid';

export const query = graphql`
  query HomePageData {
    allContentfulVideo(sort: { fields: uploadDate, order: DESC }, limit: 13) {
      nodes {
        id
        title
        uploadDate(formatString: "MMMM d, YYYY")
        videoId
        videoType
        fields {
          pathname
        }
        thumbnail {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        artist {
          artistName
          fields {
            colors {
              dark
              darkest
              light
              main
            }
          }
          photo {
            fluid(maxWidth: 100, quality: 100) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

export default function HomePage({ data }) {
  const newestVideo = data.allContentfulVideo.nodes.slice(0, 1)[0];
  const recentVideos = data.allContentfulVideo.nodes.slice(1);
  return (
    <Page
      title='A Fistful of Vinyl'
      description='Sessions and interviews featuring independent and DIY artists.'
    >
      <NewestVideo video={newestVideo} />
      <CardGrid title='Recent Videos' videos={recentVideos} />
    </Page>
  );
}

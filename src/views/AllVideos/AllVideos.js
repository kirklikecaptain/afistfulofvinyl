import React from 'react';
import { graphql } from 'gatsby';

const AllVideos = props => {
  return <div>All Videos</div>;
};

export default AllVideos;

export const query = graphql`
  query allVideoQuery($skip: Int!, $limit: Int!) {
    allContentfulVideo(
      sort: { fields: uploadDate, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          title
          artist {
            artistName
          }
        }
      }
    }
  }
`;

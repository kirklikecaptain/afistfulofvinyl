import React from 'react';
import { graphql } from 'gatsby';

const AllInterviews = props => {
  return <div>All Interviews</div>;
};

export default AllInterviews;

export const query = graphql`
  query allInterviews($skip: Int!, $limit: Int!) {
    allContentfulVideo(
      sort: { fields: uploadDate, order: DESC }
      filter: { videoType: { eq: "Interview" } }
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

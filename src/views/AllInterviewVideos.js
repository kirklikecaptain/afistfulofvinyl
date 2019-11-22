import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Meta from '../components/Meta';
import VideoIndexGrid from '../components/VideoIndexGrid';

const AllInterviewVideos = props => {
  const {
    pageContext,
    data: {
      allContentfulVideo: { edges }
    }
  } = props;
  return (
    <Fragment>
      <Meta
        title='Interviews | A Fistful of Vinyl'
        description='Interviews'
        canonical='https://www.afistfulofviny.com/interviews/'
      />
      <VideoIndexGrid title='Interviews' videoArray={edges} pageContext={pageContext} />
    </Fragment>
  );
};

export default AllInterviewVideos;

export const allVideoQuery = graphql`
  query allInterviewQuery($skip: Int!, $limit: Int!) {
    allContentfulVideo(
      filter: { videoType: { eq: "Interview" } }
      sort: { fields: uploadDate, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          title
          videoId
          uploadDate(fromNow: true)
          fields {
            videoPath
          }
          thumbnail {
            id
            file {
              url
              fileName
              contentType
            }
          }
          artist {
            id
            artistName
            fields {
              colors {
                primary
                darkest
                deep
                mid
                light
                tint
              }
            }
            photo {
              id
              file {
                url
                fileName
                contentType
              }
            }
          }
        }
      }
    }
  }
`;

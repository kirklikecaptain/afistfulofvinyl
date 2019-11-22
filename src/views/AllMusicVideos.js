import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Meta from '../components/Meta';
import VideoIndexGrid from '../components/VideoIndexGrid';

const AllMusicVideos = props => {
  const {
    pageContext,
    data: {
      allContentfulVideo: { edges }
    }
  } = props;
  return (
    <Fragment>
      <Meta title='Music | A Fistful of Vinyl' description='Music' canonical='https://www.afistfulofviny.com/music/' />
      <VideoIndexGrid title='Music' videoArray={edges} pageContext={pageContext} />
    </Fragment>
  );
};

export default AllMusicVideos;

export const allVideoQuery = graphql`
  query allMusicQuery($skip: Int!, $limit: Int!) {
    allContentfulVideo(
      filter: { videoType: { eq: "Song" } }
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

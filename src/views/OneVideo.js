import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Meta from '../components/Meta';
import VideoPlayer from '../components/VideoPlayer';

const OneVideo = ({ data }) => {
  const videoData = data.contentfulVideo;
  const relatedVideos = data.allContentfulVideo.edges;
  const {
    title,
    artist: { artistName },
    fields: { videoPath },
    thumbnail: {
      file: { url }
    }
  } = videoData;
  const canonicalUrl = `https://www.afistfulofvinyl.com${videoPath}`;
  const pageTitle = `${title} by ${artistName} | A Fistful of Vinyl`;
  const ogImage = `https:${url}?fit=crop&w=1200&h=630&f=face&fl=progressive`;
  const description = 'Update me to a ternary with a fallback option similar to the page title';

  return (
    <Fragment>
      <Meta title={pageTitle} description={description} canonical={canonicalUrl} ogImage={ogImage} />
      <VideoPlayer
        canonicalUrl={canonicalUrl}
        pageTitle={pageTitle}
        videoData={videoData}
        relatedVideos={relatedVideos}
      />
    </Fragment>
  );
};

export default OneVideo;

export const query = graphql`
  query($id: String!, $artistId: String!) {
    contentfulVideo(id: { eq: $id }) {
      id
      title
      videoType
      videoId
      uploadDate(formatString: "MMMM DD, YYYY")
      videoDescription {
        json
      }
      fields {
        videoPath
      }
      thumbnail {
        file {
          url
        }
      }
      artist {
        artistName
        color
        photo {
          file {
            url
          }
        }
        fields {
          artistPath
          colors {
            primary
            darkest
            deep
            mid
            light
            tint
          }
        }
        artistBio {
          json
        }
      }
      venue {
        name
        id
        location
      }
    }
    allContentfulVideo(filter: { artist: { id: { eq: $artistId } }, id: { ne: $id } }) {
      edges {
        node {
          id
          title
          thumbnail {
            file {
              url
            }
          }
          fields {
            videoPath
          }
        }
      }
    }
  }
`;

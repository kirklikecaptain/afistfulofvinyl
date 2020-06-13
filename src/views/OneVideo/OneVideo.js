import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import { Head } from '@components/Head';
import { VideoHero } from './layout/VideoHero';
import { VideoInfo } from './layout/VideoInfo';

const OneVideo = props => {
  const {
    artist: { artistName },
    fields,
    thumbnail,
    title
  } = props.data.video;
  const { edges } = props.data.relatedVideos;

  return (
    <Fragment>
      <Head
        title={`${title} - ${artistName} | A Fistful of Vinyl`}
        description='ADD ME'
        canonical={`https://www.afistfulofvinyl.com${fields.fullPath}`}
      />
      <VideoHero info={props.data.video} relatedVideos={edges} />
      <VideoInfo info={props.data.video} />
    </Fragment>
  );
};

export default OneVideo;

export const query = graphql`
  query getVideo($videoId: String!, $artistId: String!) {
    video: contentfulVideo(id: { eq: $videoId }) {
      id
      fields {
        fullPath
      }
      videoId
      artist {
        color
        artistName
        photo {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        artistBio {
          json
        }
      }
      styledThumbnail {
        file {
          url
        }
      }
      videoDescription {
        json
      }
      uploadDate(formatString: "MMMM D, YYYY")
      title
      videoType
      thumbnail {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      venue {
        logo {
          fluid {
            src
          }
        }
        location
        name
      }
      contributors {
        photo {
          fixed {
            src
          }
        }
        name
      }
    }
    relatedVideos: allContentfulVideo(
      sort: { fields: uploadDate, order: DESC }
      filter: { id: { ne: $videoId }, artist: { id: { eq: $artistId } } }
    ) {
      edges {
        node {
          id
          title
          fields {
            fullPath
          }
          artist {
            color
          }
          thumbnail {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          videoType
          uploadDate(formatString: "MMMM D, YYYY")
        }
      }
    }
  }
`;

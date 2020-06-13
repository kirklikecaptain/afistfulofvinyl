import React from 'react';
import { graphql } from 'gatsby';

const OneArtist = ({ data }) => {
  return <div>Artist</div>;
};

export default OneArtist;

export const query = graphql`
  query getArtist($artistId: String) {
    contentfulArtist(id: { eq: $artistId }) {
      id
      artistName
      color
      slug
      artistBio {
        json
      }
      photo {
        id
        file {
          url
        }
      }
    }
    allContentfulVideo(
      filter: { artist: { id: { eq: $artistId } } }
      sort: { fields: uploadDate, order: DESC }
    ) {
      edges {
        node {
          id
          fields {
            fullPath
          }
          artist {
            artistName
            color
            photo {
              file {
                url
              }
            }
          }
          thumbnail {
            file {
              url
            }
          }
          title
          uploadDate
          videoType
        }
      }
    }
  }
`;

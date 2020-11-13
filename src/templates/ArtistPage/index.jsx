import React from 'react';
import { graphql } from 'gatsby';
import Page from '../../components/general/Page';

export const query = graphql`
  query getOneArtist($id: String!) {
    contentfulArtist(id: { eq: $id }) {
      artistName
      fields {
        colors {
          darkest
          dark
          main
          light
        }
        fullURL
        pathname
      }
      color
      shortDescription
      slug
      photo {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      artistSummary
      artistBio {
        json
      }
    }
  }
`;

export default function ArtistPage(props) {
  const { data } = props;
  const { artistName } = data.contentfulArtist;

  return (
    <Page
      title='A Fistful of Vinyl'
      description='Sessions and interviews featuring independent and DIY artists.'
    >
      <h1>{artistName}</h1>
    </Page>
  );
}

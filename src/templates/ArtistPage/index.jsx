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
  const {
    artistName,
    color,
    fields: { colors },
  } = data.contentfulArtist;

  return (
    <Page
      title='A Fistful of Vinyl'
      description='Sessions and interviews featuring independent and DIY artists.'
    >
      <h1>{artistName}</h1>
      <div>{color}</div>
      <div style={{ display: 'flex' }}>
        {Object.keys(colors).map(c => (
          <div
            key={c}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              textShadow: '1px 2px 3px rgba(0,0,0,.5)',
              background: colors[c],
              width: 100,
              height: 100,
              border: 'solid 1px black',
            }}
          >
            {colors[c]}
          </div>
        ))}
      </div>
    </Page>
  );
}

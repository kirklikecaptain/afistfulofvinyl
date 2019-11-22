import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Meta from '../components/Meta';
import ArtistGrid from '../components/ArtistGrid';

const AllArtists = props => {
  const { totalCount, edges } = props.data.allContentfulArtist;
  return (
    <Fragment>
      <Meta
        title='All Artists | A Fistful of Vinyl'
        description='Artists who have performed or been interviewed on A Fistful of Vinyl.'
        canonical='https://www.afistfulofviny.com/artists/'
      />
      <ArtistGrid totalCount={totalCount} artistArray={edges} />
    </Fragment>
  );
};

export const query = graphql`
  {
    allContentfulArtist(sort: { fields: artistName }) {
      totalCount
      edges {
        node {
          id
          artistName
          fields {
            artistPath
            colors {
              darkest
              deep
              light
              primary
              mid
              tint
            }
          }
          photo {
            file {
              url
            }
          }
        }
      }
    }
  }
`;

export default AllArtists;

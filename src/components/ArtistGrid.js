import React from 'react';
import styled from '@emotion/styled';
import GridContainer from './GridContainer';
import ArtistCard from './ArtistCard';

const ArtistGrid = ({ totalCount, artistArray }) => {
  return (
    <StyledArtistGrid>
      <div className='edges'>
        <div className='container'>
          <h1>
            Artists <span>{totalCount}</span>
          </h1>
        </div>
      </div>
      <GridContainer>
        {artistArray.map(artist => {
          return <ArtistCard key={artist.node.id} data={artist.node} />;
        })}
      </GridContainer>
    </StyledArtistGrid>
  );
};

export default ArtistGrid;

const StyledArtistGrid = styled.section`
  h1 {
    margin-top: 3rem;
    font-size: 2rem;
    span {
      color: rgba(0, 0, 0, 0.3);
    }
  }
`;

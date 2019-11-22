import React from 'react';
import styled from '@emotion/styled';

const GridContainer = props => (
  <Grid {...props}>
    <div className='edges'>
      <div className='container'>{props.children}</div>
    </div>
  </Grid>
);

export default GridContainer;

const Grid = styled.div`
  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    padding: ${props => (props.padding ? props.padding : '1.5rem 0')};

    @media (min-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1000px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1400px) {
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 1.5rem;
    }
  }
`;

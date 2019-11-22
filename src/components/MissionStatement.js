import React from 'react';
import styled from '@emotion/styled';

const MissionStatement = () => (
  <StyledSection>
    <div className='box'>
      <h1 className='slab'>Mission statement</h1>
      <p>Subheading</p>
    </div>
  </StyledSection>
);

export default MissionStatement;

const StyledSection = styled.div`
  border-bottom: solid 1px #ddd;
  color: #222;
  padding: 2em 1em;
  text-align: center;
  @media (min-width: 800px) {
    padding: 4em 1em;
  }

  h1 {
    font-size: 1rem;
    margin: 0 auto;
    max-width: 1000px;
    line-height: 1.5em;
    @media (min-width: 800px) {
      font-size: 1.7em;
    }
  }

  p {
    max-width: 600px;
    margin: 10px auto 0 auto;
  }
`;

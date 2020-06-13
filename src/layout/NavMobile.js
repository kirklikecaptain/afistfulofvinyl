import React from 'react';
import styled from 'styled-components';

const NavMobile = () => {
  return (
    <StyledNavMobile className='edge-padding'>
      <div className='container'>Nav Mobile</div>
    </StyledNavMobile>
  );
};

export default NavMobile;

const StyledNavMobile = styled.header`
  background: black;
  padding: 1rem;
  text-align: center;
  color: white;
  @media (min-width: 801px) {
    display: none;
  }
`;

import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter className='edge-padding'>
      <div className='container'>Footer</div>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  padding-top: 3rem;
  padding-bottom: 3rem;
  background: black;
  color: white;

  .home-link {
    display: block;
    img {
      display: block;
      width: 120px;
    }
  }
`;

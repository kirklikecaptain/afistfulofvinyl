import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import logo from '@assets/logos/afov-logo-white.svg';

const NavDesktop = () => {
  return (
    <StyledNavDesktop className='edge-padding'>
      <nav className='container'>
        <Link className='home-link' to='/'>
          <img src={logo} alt='A Fistful of Vinyl' />
        </Link>
      </nav>
    </StyledNavDesktop>
  );
};

export default NavDesktop;

const StyledNavDesktop = styled.header`
  @media (max-width: 800px) {
    display: none;
  }
  background: black;
  color: white;

  nav {
    display: flex;
    align-items: center;
    height: 90px;

    .home-link {
      display: block;
      img {
        width: 120px;
      }
    }
  }
`;

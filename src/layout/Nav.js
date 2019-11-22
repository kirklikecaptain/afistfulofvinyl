import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { Link } from 'gatsby';

import whiteLogo from '../assets/logos/afov-logo-white.svg';

const Nav = ({ transparentNav }) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  useScrollPosition(({ currPos }) => {
    currPos.y < 0 ? setHasScrolled(false) : setHasScrolled(true);
  });
  return (
    <StyledNav transparentNav={transparentNav && hasScrolled}>
      <div className='edges'>
        <nav className='container nav'>
          <div className='left-links'>
            <Link to='/music/'>Music</Link> <Link to='/interviews/'>Interviews</Link>{' '}
            <Link to='/artists/'>Artists</Link>
          </div>
          <Link to='/'>
            <img src={whiteLogo} className='logo' alt='A Fistful of Vinyl' />
          </Link>
          <div className='right-links'>
            <a href='/'>Contact</a>
            <a href='/'>About</a>
          </div>
        </nav>
      </div>
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled.header`
  position: sticky;
  transform: translateZ(0);
  top: 0;
  color: white;
  background: ${props => (props.transparentNav ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.9)')};
  will-change: background;
  transition: background 0.3s ease-in;
  z-index: 10500;
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 80px;
    @media (min-width: 800px) {
      height: 100px;
    }

    a {
      color: inherit;
    }

    .left-links a {
      margin-right: 1.5rem;
      display: inline-block;
    }

    .right-links a {
      margin-left: 1.5rem;
      display: inline-block;
    }

    .logo {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 90px;
      @media (min-width: 800px) {
        width: 120px;
      }
    }
  }
`;

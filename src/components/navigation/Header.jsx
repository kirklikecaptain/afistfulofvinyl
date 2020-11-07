import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Search from './Search';
import AFoVLogo from '../../images/logos/afov-logo-white.svg';

const Header = ({ artists, videos }) => {
  return (
    <HeaderStyle>
      <div className='Container inner row'>
        <div className='row'>
          <Link className='logo' to='/'>
            <img src={AFoVLogo} alt='A Fistful of Vinyl' />
          </Link>
          <Search artists={artists} videos={videos} />
        </div>
        <div className='general-links'>
          <span>About</span>
          <span>Contact</span>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.nav`
  z-index: 1000;
  padding: 0 2rem;

  .inner {
    padding: 2rem 0;
    border-bottom: 1px rgba(255, 255, 255, 0.85) solid;
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    display: block;
    width: 125px;
    margin-right: 2rem;
  }

  .general-links {
    span {
      margin-left: 1rem;
    }
  }
`;

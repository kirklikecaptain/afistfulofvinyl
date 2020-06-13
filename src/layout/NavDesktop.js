import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import {
  GlobalDispatchContext,
  GlobalStateContext
} from '@context/GlobalContextProvider';
import logo from '@assets/logos/afov-logo-white.svg';

const NavDesktop = () => {
  const dispatch = useContext(GlobalDispatchContext);
  const state = useContext(GlobalStateContext);

  const handleToggleAuth = () => {
    dispatch({ type: 'TOGGLE_AUTH' });
  };

  return (
    <StyledNavDesktop className='edge-padding'>
      <nav className='container'>
        <Link className='home-link' to='/'>
          <img src={logo} alt='A Fistful of Vinyl' />
        </Link>

        <div className='links'>
          {state.userIsLoggedIn ? (
            <div className='user-dropdown-target'>
              {state.userProfile.name}
              <img src={state.userProfile.avatar} className='user-avatar' />
              <div className='user-dropdown-menu'>
                <button onClick={() => handleToggleAuth()}>Log out</button>
              </div>
            </div>
          ) : (
            <button onClick={() => handleToggleAuth()}>Log in</button>
          )}
        </div>
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

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 90px;

    .home-link {
      display: block;
      img {
        width: 120px;
      }
    }

    .user-dropdown-target {
      position: relative;
      color: white;
      display: flex;
      align-items: center;
      padding-left: 1rem;
      button {
        color: black;
      }
      &:hover .user-dropdown-menu {
        display: block;
      }
      .user-avatar {
        margin-left: 1rem;
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
      .user-dropdown-menu {
        text-align: right;
        background: black;
        z-index: 1000;
        display: none;
        padding: 1rem;
        position: absolute;
        top: 100%;
        width: 100%;
        right: 0;
      }
    }
  }
`;

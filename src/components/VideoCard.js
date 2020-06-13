import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

export const VideoCard = props => {
  const { fullPath, color, fluid, title, artistAvatar, artistName } = props;

  return (
    <StyledVideoCard to={fullPath} color={color}>
      <div className='thumbnail-wrapper'>
        <Img className='thumbnail' fluid={fluid} />
        <div className='song-title display'>{title}</div>
      </div>
      {artistAvatar && artistName && (
        <div className='artist-info'>
          <div className='avatar-wrapper'>
            <Img className='avatar' fluid={artistAvatar} />
          </div>
          <div className='artist-name slab'>{artistName}</div>
        </div>
      )}
    </StyledVideoCard>
  );
};

const StyledVideoCard = styled(Link)`
  color: inherit;
  &:hover .thumbnail-wrapper::after {
    background: transparent;
  }
  .thumbnail-wrapper {
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    &::after {
      position: absolute;
      content: '';
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      mix-blend-mode: color;
      background: ${props => props.color};
      transition: background 500ms ease;
    }

    .song-title {
      position: absolute;
      bottom: 1rem;
      left: 1rem;
      right: 1.25rem;
      color: white;
      font-size: 2.5rem;
      text-shadow: 2px 3px 5px rgba(0, 0, 0, 1);
    }
  }

  .artist-info {
    padding: 0.75rem 0;
    display: flex;
    align-items: center;
    .avatar-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50px;
      padding: 3px;
      margin-right: 0.75rem;
      background: ${props => props.color};
      .avatar {
        display: block;
        border-radius: 50%;
        width: 30px;
      }
    }
    .artist-name {
      font-size: 1.25rem;
      color: rgba(0, 0, 0, 0.8);
    }
  }
`;

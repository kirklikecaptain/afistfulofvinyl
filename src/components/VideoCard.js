import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const VideoCard = props => {
  const { songTitle, artistName, thumbnail, artistPhoto, color, videoUrl } = props;
  return (
    <StyledCard to={videoUrl} color={color} className='card'>
      <div className='thumb-box'>
        <img src={thumbnail + '?fm=jpg&fl=progressive&w=400'} className='thumb' alt={songTitle + ' video'} />
        <div className='overlay safari_only' />
        <h2 className='song-title'>{songTitle}</h2>
      </div>
      {artistName && (
        <div className='card-text'>
          <div className='artist-row'>
            <img src={artistPhoto + '?fm=jpg&fl=progressive&w=60'} className='avatar' alt={artistName} />
            <h3 className='slab'>{artistName}</h3>
          </div>
        </div>
      )}
    </StyledCard>
  );
};

export default VideoCard;

const StyledCard = styled(Link)`
  display: block;
  text-decoration: none;
  color: #333;
  min-width: 0;
  overflow: hidden;
  &:hover .song-title {
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.6);
  }

  &:hover {
    .overlay {
      opacity: 0;
    }
  }

  .thumb-box {
    position: relative;
    padding-bottom: 56.25%;
    overflow: hidden;
    width: 100%;
  }

  .thumb {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    transition: 0.2s transform ease;
  }

  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${props => (props.color ? props.color : '#333')};
    mix-blend-mode: color;
    transition: 0.25s all ease;
  }

  .date {
    position: absolute;
    top: 20px;
    right: -400px;
    font-size: 11px;
    color: white;
    background: ${props => (props.color ? props.color : '#333')};
    padding: 4px 8px;
    border-radius: 3px;
    transition: all 0.2s ease;
  }

  @media not all and (min-resolution: 0.001dpcm) {
    .overlay {
      display: none;
    }
  }

  .avatar {
    border-radius: 50%;
    display: block;
    width: 30px;
    height: 30px;
    background: ${props => props.color};
    border: solid 2px ${props => props.color};
    margin-right: 10px;
  }

  .card-text {
    padding: 0px 5px;
  }

  .song-title {
    position: absolute;
    color: white;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0.5rem 2rem 0.75rem 0.75rem;
    margin: 0;
    transition: 0.3s all ease;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.9);
    max-width: 100%;
    font-size: 1.25rem;
    line-height: 1.4;
    @media (max-width: 1000px) {
      font-size: 18px;
    }
  }

  .artist-row {
    display: flex;
    padding-top: 10px;

    h3 {
      margin: 0;
      color: #333;
      @media (max-width: 600px) {
        font-size: 16px;
      }
    }
  }
`;

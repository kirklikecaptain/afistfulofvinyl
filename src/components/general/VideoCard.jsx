import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Link from './Link';

const VideoCard = ({ video }) => {
  const {
    artist: {
      artistName,
      fields: { colors },
      photo: { fluid: artistPhoto },
    },
    fields: { pathname },
    thumbnail: { fluid: videoPhoto },
    title,
    uploadDate,
    videoType,
  } = video;
  return (
    <VideoCardStyle colors={colors} className='Block-Link' to={pathname}>
      <Img fluid={videoPhoto} />
      <div className='overlay' />
      <div className='text'>
        <div className='title'>{title}</div>
        <div className='artist'>{artistName}</div>
      </div>
    </VideoCardStyle>
  );
};

export default VideoCard;

const VideoCardStyle = styled(Link)`
  position: relative;
  transition: all 300ms ease;
  overflow: hidden;
  border-radius: 1px;
  &:hover .overlay {
    background: transparent;
  }

  .overlay {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    background: ${({ colors }) => colors.main};
    transition: all 300ms ease;
    mix-blend-mode: color;
  }

  .text {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 1rem;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));

    .title {
      font-size: 1.5rem;
      font-weight: 600;
    }

    .artist {
      font-size: 1.25rem;
    }
  }
`;

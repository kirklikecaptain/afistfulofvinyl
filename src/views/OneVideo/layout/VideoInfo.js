import React from 'react';
import styled from 'styled-components';

export const VideoInfo = ({ info }) => {
  const {
    artist: { artistName, photo, color },
    title
  } = info;
  return (
    <StyledVideoInfo className='edge-padding'>
      <div className='container'>
        <div className='video-info'>VIDEO INFO</div>
      </div>
    </StyledVideoInfo>
  );
};

const StyledVideoInfo = styled.header`
  .video-info {
    padding: 2rem 1rem;
  }
`;

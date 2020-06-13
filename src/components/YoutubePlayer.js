import React from 'react';
import styled from 'styled-components';

export const YoutubePlayer = ({ videoId, title }) => {
  return (
    <StyledPlayer className='video-player'>
      <iframe
        title={title || 'A Fistful of Vinyl Video'}
        className='youtube-iframe'
        frameBorder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=0`}
      />
    </StyledPlayer>
  );
};

const StyledPlayer = styled.div`
  position: relative;
  overflow: hidden;
  padding-bottom: 56.25%;
  background: rgba(0, 0, 0, 0.5);
  height: 0;
  @media (min-width: 800px) {
    border-radius: 5px;
  }
  iframe {
    display: block;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;

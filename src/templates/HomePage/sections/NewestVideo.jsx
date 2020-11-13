import React, { useState } from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';
import Link from '../../../components/general/Link';

function NewestVideo({ video }) {
  const {
    title,
    videoId,
    artist: {
      artistName,
      fields: { colors },
    },
    fields: { pathname },
  } = video;

  // https://developers.google.com/youtube/player_parameters
  const videoOpts = {
    playerVars: {
      autoplay: 1,
      mute: 1,
      start: 20,
      end: 40,
      controls: 0,
      showinfo: 0,
    },
  };

  const [videoReady, setVideoReady] = useState(false);

  function handleOnPlay() {
    setVideoReady(true);
  }

  function handleOnEnd(event) {
    event.target.seekTo(20);
  }

  return (
    <StyledNewestVideo colors={colors}>
      <YouTube
        videoId={videoId}
        className={`video ${videoReady && 'fade-in'}`}
        containerClassName='video-wrapper'
        opts={videoOpts}
        onPlay={handleOnPlay}
        onEnd={handleOnEnd}
      />
      <div className='color-overlay-shader' />
      <div className='color-overlay' />
      <div className='container'>
        <div className='text'>
          <div className='title'>{title}</div>
          <div className='artist Slab'>{artistName}</div>
          <Link to={pathname}>Watch now</Link>
        </div>
      </div>
    </StyledNewestVideo>
  );
}

export default NewestVideo;

const StyledNewestVideo = styled.div`
  background: ${({ colors }) => colors.dark};
  margin-top: -200px;
  padding: 200px 2rem 0 2rem;
  position: relative;
  overflow: hidden;

  .video-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0;
  }

  .video {
    opacity: 0;
    width: 100%;
    height: 100%;
    transform: scale(1.3);
    transition: all 1.5s ease;
  }

  .fade-in {
    opacity: 1;
  }

  .color-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.75;
    background: ${({ colors }) => colors.main};
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    z-index: 100;
    height: 700px;
  }

  .title {
    font-size: 7rem;
    line-height: 1;
    font-weight: 700;
  }

  .artist {
    font-size: 5rem;
    margin: 1.5rem 0 3rem 0;
    line-height: 1;
  }

  a {
    display: inline-block;
    padding: 1rem 2rem;
    border-radius: 3px;
    border: solid 1px white;
    color: white;
    transition: 250ms ease all;
    &:hover {
      border-color: ${({ colors }) => colors.main};
      background: ${({ colors }) => colors.main};
    }
  }
`;

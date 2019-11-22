import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { MdPlayArrow } from 'react-icons/md';

const HomeHero = ({ video }) => {
  const {
    title,
    videoId,
    fields: { videoPath },
    artist: {
      artistName,
      fields: { colors }
    }
  } = video.node;
  return (
    <StyledHero colors={colors}>
      <div className='video-outer'>
        <div className='video-container'>
          <iframe
            className='video-frame'
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&start=30&showinfo=0&controls=0&mute=1`}
            frameBorder='0'
            title='Most recent AFoV Video'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
          <div className='video-cover' />
        </div>
      </div>
      <div className='edges'>
        <div className='hero'>
          <div className='text-content'>
            <h2 className='headline'>
              <span>{title}</span>
              <br />
              <span className='slab-bold artist-name'>{artistName}</span>
            </h2>
            <Link to={videoPath} className='cta-button'>
              <MdPlayArrow />
              Watch
            </Link>
          </div>
        </div>
      </div>
    </StyledHero>
  );
};

export default HomeHero;

const StyledHero = styled.section`
  background-color: ${props => props.colors.deep};
  margin-top: -80px;
  padding-top: 80px;
  position: relative;
  overflow: hidden;
  @media (min-width: 800px) {
    margin-top: -100px;
    padding-top: 100px;
  }

  .video-outer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  .video-container {
    background-color: ${props => props.colors.primary};
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
  }

  .video-frame {
    display: block;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    transform: scale(1.3);
  }

  .video-cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.colors.primary};
    mix-blend-mode: color;
  }

  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    height: 500px;
    position: relative;
    .text-content {
      max-width: 500px;
      .headline {
        text-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
        font-size: 4rem;
        color: white;
        margin-top: 0;
        margin-bottom: 1.5rem;
        line-height: 1.15;
        .artist-name {
          font-size: 6rem;
          color: white;
        }
      }
    }
  }

  .cta-button {
    display: inline-block;
    padding: 0.5rem 2rem 0.5rem 1.75rem;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
    background: white;
    color: black;
    border-radius: 5px;
    svg {
      transform: translateY(2px) scale(1.5);
      margin-right: 0.5rem;
    }
  }
`;

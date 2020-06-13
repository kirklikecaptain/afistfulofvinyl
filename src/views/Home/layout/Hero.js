import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { desaturate, darken, lighten } from 'polished';
import YouTube from 'react-youtube';
import texture from '@assets/images/asfalt-dark.png';

// https://developers.google.com/youtube/player_parameters

export const Hero = ({ newestPost }) => {
  const {
    artist: { artistName, color, photo, slug },
    fields: { fullPath },
    shortDescription,
    thumbnail,
    title,
    uploadDate,
    videoId,
    videoType
  } = newestPost.node;

  const darkenedColor = darken(0.1, desaturate(0.1, color));

  return (
    <StyledHero
      className='edge-padding'
      color={color}
      darkenedColor={darkenedColor}
    >
      <div className='container hero-grid'>
        <div className='main-info'>
          <div className='song-title display'>{title}</div>
          <div className='artist-name slab'>{artistName}</div>
          <Link className='button-link' to={fullPath}>
            Watch Now
          </Link>
        </div>
        <div className='media-wrapper'>
          <Img className='thumb' fluid={thumbnail.big} />
        </div>
      </div>
    </StyledHero>
  );
};

const StyledHero = styled.section`
  position: relative;
  background: #ddd;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background: url(${texture}), ${props => props.darkenedColor};
  color: white;

  .hero-grid {
    display: grid;
    grid-gap: 2rem;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .main-info {
    grid-row: 1;
    grid-column-start: 1;
    grid-column-end: 3;
    z-index: 300;
    .song-title {
      font-size: 8.5rem;
      text-shadow: 3px 10px 15px rgba(0, 0, 0, 0.35);
    }
    .artist-name {
      color: ${props => lighten(0.4, props.color)};
      font-size: 5rem;
      text-shadow: 3px 10px 15px rgba(0, 0, 0, 0.35);
    }

    .button-link {
      margin: 2rem 0 0 0;
      display: inline-block;
      background: white;
      padding: 0.5rem 1.5rem;
      font-size: 1.25rem;
      border-radius: 5px;
      color: ${props => props.color};
      box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.25);
    }
  }

  .media-wrapper {
    position: relative;
    grid-row: 1;
    grid-column-start: 2;
    grid-column-end: 4;
    overflow: hidden;
    &::after {
      position: absolute;
      content: '';
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      mix-blend-mode: color;
      border-radius: 5px;
      background: ${props => props.color};
    }
    .thumb {
      border-radius: 5px;
    }
  }

  .video-wrapper {
    position: relative;
    overflow: hidden;
    padding-bottom: 56.25%;
    height: 0;
    grid-row: 1;
    grid-column-start: 2;
    grid-column-end: 4;
    &::after {
      position: absolute;
      content: '';
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      mix-blend-mode: color;
      background: ${props => props.color};
    }
    iframe {
      display: block;
      border-radius: 5px;
      overflow: hidden;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      position: absolute;
    }
  }
`;

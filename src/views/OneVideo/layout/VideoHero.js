import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { desaturate, darken } from 'polished';
import { YoutubePlayer } from '@components/YoutubePlayer';
import { VideoCard } from '@components/VideoCard';
import texture from '@assets/images/asfalt-dark.png';

export const VideoHero = props => {
  const {
    info: {
      title,
      videoId,
      artist: { photo, artistName, color }
    },
    relatedVideos
  } = props;

  return (
    <StyledVideoHero color={color}>
      <div className='background-fill'>
        <div className='container'>
          <div className='video-content'>
            <YoutubePlayer videoId={videoId} />
            <div className='related-videos'>
              <div className='more-by slab'>More {artistName}</div>
              <ul>
                {relatedVideos.map(({ node }) => {
                  const {
                    id,
                    artist: { color },
                    fields: { fullPath },
                    shortDescription,
                    thumbnail,
                    title,
                    uploadDate,
                    videoType
                  } = node;
                  return (
                    <li key={id}>
                      <VideoCard
                        fullPath={fullPath}
                        color={color}
                        fluid={thumbnail.fluid}
                        title={title}
                        uploadDate={uploadDate}
                        videoType={videoType}
                        shortDescription={shortDescription}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className='info-fill'>
          <div className='container'>
            <header className='info'>
              <div className='avatar-wrapper'>
                <Img fluid={photo.fluid} className='avatar' />
              </div>
              <div>
                <h1 className='display'>{title}</h1>
                <h2 className='slab'>{artistName}</h2>
              </div>
            </header>
          </div>
        </div>
      </div>
    </StyledVideoHero>
  );
};

const StyledVideoHero = styled.section`
  position: relative;
  background: #ddd;
  .background-fill {
    padding-top: 2rem;
    background: url(${texture}),
      ${props => darken(0.2, desaturate(0.35, props.color))};
  }

  .info-fill {
    background: ${props => props.color};
  }

  .video-content {
    position: relative;
    width: 65%;
    padding-bottom: 2rem;

    .related-videos {
      position: absolute;
      left: 100%;
      top: 0;
      width: 35%;
      padding-left: 2rem;

      .more-by {
        margin-bottom: 1rem;
        color: white;
      }

      li {
        margin-bottom: 2rem;
      }

      .song-title {
        font-size: 1.5rem;
        bottom: 0.5rem;
        left: 0.5rem;
        right: 0.5rem;
      }
    }
  }

  .info {
    display: flex;
    align-items: center;
    padding: 1.5rem 0;
    color: white;

    .avatar-wrapper {
      width: 80px;
      margin-right: 1rem;
      .avatar {
        background: rgba(255, 255, 255, 0.35);
        border: solid 4px rgba(255, 255, 255, 0.35);
        width: 100%;
        border-radius: 50%;
        box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.15);
      }
    }

    h1 {
      font-size: 3rem;
      text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.35);
    }
    h2 {
      color: rgba(255, 255, 255, 0.85);
      font-size: 2rem;
      text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.35);
    }
  }
`;

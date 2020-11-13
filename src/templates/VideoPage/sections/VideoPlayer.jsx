import React, { useState } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import YouTube from 'react-youtube';

import Link from '../../../components/general/Link';
import RichTextDocument from '../../../components/contentful/RichTextDocument';
import VideoCard from '../../../components/general/VideoCard';

const VideoPlayer = ({ video, moreVideos }) => {
  console.log(moreVideos);
  const {
    title,
    videoId,
    uploadDate,
    artist: {
      artistName,
      fields: { colors, pathname: artistLink },
    },
  } = video;

  const [videoReady, setVideoReady] = useState(false);

  function handleOnReady() {
    setVideoReady(true);
  }

  return (
    <VideoPlayerStyle colors={colors}>
      <div className='Container breadcrumbs'>
        <span>Artist Name</span> / <span>Song Name</span>
      </div>
      <div className='Container grid'>
        <div>
          <YouTube
            videoId={videoId}
            className='video'
            containerClassName='video-wrapper'
            onReady={handleOnReady}
            opts={{
              playerVars: {
                autoplay: 0,
              },
            }}
          />
          <div className='info'>
            <header className='video-header'>
              <h1>{title}</h1>
              <h2 className='Slab'>{artistName}</h2>
              <div># views - # likes - Posted: {uploadDate}</div>
            </header>
            <RichTextDocument
              className='rich-text-document'
              json={video.videoDescription?.json}
            />
          </div>
        </div>
        <div className='related-videos'>
          <h3>More by {artistName}</h3>
          {moreVideos.nodes.map(v => (
            <div key={v.id} className='video-link'>
              <VideoCard video={v} related />
            </div>
          ))}
        </div>
      </div>
    </VideoPlayerStyle>
  );
};

export default VideoPlayer;

const VideoPlayerStyle = styled.div`
  margin-top: -200px;
  font-size: 18px;
  padding: calc(200px + 1rem) 2rem 2rem 2rem;
  background: ${props => props.colors.darkest};

  .breadcrumbs {
    margin-bottom: 1rem;
    a:hover {
      color: ${({ colors }) => colors.light};
    }
  }

  .grid {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 2rem;
  }

  .video-wrapper {
    position: relative;
    padding-top: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
    background: ${props => props.colors.dark};
  }

  .video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .info {
    background: white;

    .video-header {
      padding: 1.5rem;
      color: rgba(0, 0, 0, 0.85);

      h1 {
        margin: 0;
        font-size: 2.5rem;
        color: rgba(0, 0, 0, 0.85);
      }

      h2 {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin: 0 0 1rem 0;
        font-size: 1.75rem;
        color: rgba(0, 0, 0, 0.45);

        .avatar {
          width: 30px;
          border-radius: 50%;
          border: solid 3px ${props => props.colors.main};
          background: ${props => props.colors.main};
        }
      }
    }

    .rich-text-document {
      padding: 0 1.5rem 1.5rem 1.5rem;
    }
  }

  .related-videos {
    h3 {
      margin-top: 0;
    }

    .video-link {
      margin-bottom: 2rem;
    }
  }
`;

import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { DiscussionEmbed } from 'disqus-react';
import { MdThumbUp, MdFileUpload, MdVisibility } from 'react-icons/md';
import VideoCard from '../components/VideoCard';
import { useVideoStats } from '../hooks/useVideoStats';
import { useRichText } from '../hooks/useRichText';

const VideoPlayer = ({ videoData, relatedVideos, canonicalUrl, pageTitle }) => {
  const {
    id,
    artist: {
      color,
      artistName,
      fields: { artistPath, colors },
      photo: {
        file: { url }
      }
    },
    title,
    uploadDate,
    venue,
    videoDescription,
    videoId
  } = videoData;
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=0`;
  const disqusShortname = 'afistfulofvinyl';
  const disqusConfig = {
    url: canonicalUrl,
    identifier: id,
    title: pageTitle
  };
  const videoDescriptionJson = videoDescription ? videoDescription.json : null;
  const richTextDocument = useRichText(videoDescriptionJson);
  const { loaded, stats } = useVideoStats(videoId);

  function numberWithCommas(x) {
    var parts = x.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }

  return (
    <StyledVideoPlayer colors={colors}>
      <div className='background' />
      <div className='edges'>
        <div className='small-container'>
          <div className='video-content'>
            <div className='video-container'>
              <iframe
                className='video-frame'
                title={title + ' by ' + artistName}
                src={youtubeEmbedUrl}
                frameBorder='0'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            </div>
            <div className='video-header'>
              <Link to={artistPath}>
                <img className='artist-avatar' src={url + '?w=300'} alt={artistName + ' avatar'} />
              </Link>
              <div>
                <h1>{title}</h1>
                <h2 className='slab-bold'>{artistName}</h2>
                <div className='video-stats'>
                  {loaded && (
                    <div>
                      <span className='stat'>
                        <MdFileUpload />
                        {uploadDate}
                      </span>
                      <span className='stat'>
                        <MdVisibility />
                        {numberWithCommas(stats.viewCount)}
                      </span>
                      <span className='stat'>
                        <MdThumbUp />
                        {numberWithCommas(stats.likeCount)}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className='video-description'>{richTextDocument}</div>
            <div>
              <h3>Session recorded live at</h3>
            </div>

            <h3>Contributors</h3>
            <div className='comments'>
              {/* <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} /> */}
            </div>
          </div>
          <h3>More By {artistName}</h3>
          <div className='related-videos'>
            <div className='inner'>
              {relatedVideos.map(video => {
                const {
                  id,
                  fields: { videoPath },
                  thumbnail: {
                    file: { url }
                  },
                  title
                } = video.node;
                return <VideoCard key={id} songTitle={title} thumbnail={url} color={color} videoUrl={videoPath} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </StyledVideoPlayer>
  );
};

export default VideoPlayer;

const StyledVideoPlayer = styled.section`
  padding: 132px 0 2rem 0;
  margin-top: -100px;
  .background {
    background: ${props => props.colors.deep};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    max-height: 750px;
  }
  .video-container {
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
    background: black;
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
  }

  .related-videos {
    position: relative;
    margin: 0 0 0 -120px;
    &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 40px;
      content: '';
      background: linear-gradient(to right, transparent, white);
    }
    .inner {
      overflow-x: scroll;
      overflow-y: hidden;
      padding: 1rem 0;
      padding-left: 120px;
      white-space: nowrap;
      .card {
        width: 400px;
        margin-right: 1.5rem;
        display: inline-block;
      }
    }
  }

  .video-header {
    border-top: solid 5px ${props => props.colors.light};
    display: flex;
    background: white;
    /* background: linear-gradient(${props => props.colors.tint}, white); */
    padding: 1.5rem;

    .artist-avatar {
      width: 100px;
      height: 100px;
      margin-right: 1.5rem;
      border-radius: 50%;
      border: solid 5px ${props => props.colors.light};
      background-color: ${props => props.colors.light};
      transition: border 0.4s ease-in-out;
      &:hover {
        border-color: ${props => props.colors.primary};
      }
    }
    h1 {
      font-size: 2.5rem;
      line-height: 1.25;
      margin: 0;
    }
    h2 {
      font-size: 2.5rem;
      line-height: 1.25;
      margin: 0;
      color: ${props => props.colors.primary};
    }
    .video-stats {
      height: 50px;
      display: flex;
      align-items: center;
      .stat {
        margin-right: 1rem;
        color: ${props => props.colors.mid};
        svg {
          color: ${props => props.colors.light};
          transform: scale(1.1) translateY(2px);
          margin-right: 0.25rem;
        }
      }
    }
  }

  .video-description {
    padding: 0 1.5rem 1.5rem 1.5rem;
    font-size: 18px;
  }

  .comments {
    padding: 2rem 0;
  }
`;

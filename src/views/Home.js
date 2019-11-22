import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Meta from '../components/Meta';
import HomeHero from 'components/HomeHero';
import MissionStatement from '../components/MissionStatement';
import GridContainer from '../components/GridContainer';
import VideoCard from '../components/VideoCard';

const Home = props => {
  const videos = props.data.allContentfulVideo.edges;
  const newestVideo = videos[0];
  const recentVideos = videos.slice(1, 13);
  return (
    <Fragment>
      <Meta
        title='A Fistful of Vinyl Sessions & Interviews'
        description='Write a description'
        canonical='https://www.afistfulofvinyl.com/'
      />
      <HomeHero video={newestVideo} />
      <MissionStatement />
      <GridContainer>
        {recentVideos.map(video => {
          const {
            id,
            uploadDate,
            title,
            thumbnail,
            fields: { videoPath },
            artist: { artistName, photo, color }
          } = video.node;
          const thumbnailUrl = thumbnail.file.url;
          const artistPhotoUrl = photo.file.url;
          return (
            <VideoCard
              key={id}
              songTitle={title}
              artistName={artistName}
              uploadDate={uploadDate}
              thumbnail={thumbnailUrl}
              artistPhoto={artistPhotoUrl}
              color={color}
              videoUrl={videoPath}
            />
          );
        })}
      </GridContainer>
    </Fragment>
  );
};

export const query = graphql`
  {
    allContentfulVideo(limit: 13, sort: { order: DESC, fields: uploadDate }) {
      edges {
        node {
          id
          title
          videoId
          uploadDate(fromNow: true)
          fields {
            videoPath
          }
          thumbnail {
            id
            file {
              url
              fileName
              contentType
            }
          }
          artist {
            id
            artistName
            color
            fields {
              colors {
                primary
                darkest
                deep
                mid
                light
                tint
              }
            }
            photo {
              id
              file {
                url
                fileName
                contentType
              }
            }
          }
        }
      }
    }
  }
`;

export default Home;

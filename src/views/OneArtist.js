import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Meta from '../components/Meta';
import GridContainer from '../components/GridContainer';
import VideoCard from '../components/VideoCard';
import ArtistHero from '../components/ArtistHero';

const OneArtist = ({ data }) => {
  const {
    artistName,
    fields: { artistPath, colors },
    photo,
    video,
    artistSummary
  } = data.contentfulArtist;
  return (
    <Fragment>
      <Meta
        title={artistName + ' | A Fistful of Vinyl'}
        description={`Artist spotlight: ${artistName}`}
        canonical={`https://www.afistfulofvinyl.com${artistPath}`}
      />
      <ArtistHero artistName={artistName} colors={colors} photo={photo} />
      <GridContainer>
        {video.map(v => {
          const {
            id,
            title,
            thumbnail,
            fields: { videoPath }
          } = v;
          const thumbnailUrl = thumbnail.file.url;
          return (
            <VideoCard
              key={id}
              songTitle={title}
              color={colors.primary}
              thumbnail={thumbnailUrl}
              videoUrl={videoPath}
            />
          );
        })}
      </GridContainer>
    </Fragment>
  );
};

export default OneArtist;

export const query = graphql`
  query($id: String!) {
    contentfulArtist(id: { eq: $id }) {
      id
      artistName
      fields {
        colors {
          useTextColor
          primary
          darkest
          deep
          mid
          light
          tint
        }
        artistPath
      }
      photo {
        id
        file {
          url
        }
      }
      artistBio {
        id
        artistBio
        json
      }
      artistSummary
      video {
        id
        title
        fields {
          videoPath
        }
        videoType
        thumbnail {
          file {
            url
          }
        }
        shortDescription
      }
    }
  }
`;

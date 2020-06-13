import React from 'react';
import styled from 'styled-components';
import { VideoCard } from '@components/VideoCard';

export const Recent = ({ recentPosts }) => {
  return (
    <StyledRecent className='edge-padding'>
      <div className='container card-grid'>
        {recentPosts.map(({ node }) => {
          const {
            id,
            artist: { artistName, color, photo },
            fields: { fullPath },
            shortDescription,
            thumbnail,
            title,
            uploadDate,
            videoType
          } = node;
          return (
            <VideoCard
              key={id}
              fullPath={fullPath}
              color={color}
              fluid={thumbnail.small}
              title={title}
              artistAvatar={photo.fluid}
              artistName={artistName}
              uploadDate={uploadDate}
              videoType={videoType}
              shortDescription={shortDescription}
            />
          );
        })}
      </div>
    </StyledRecent>
  );
};

const StyledRecent = styled.aside``;

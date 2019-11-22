import React from 'react';
import styled from '@emotion/styled';
import { navigate } from 'gatsby';
import { Pagination } from 'antd';
import GridContainer from './GridContainer';
import VideoCard from './VideoCard';

const VideoIndexGrid = props => {
  const {
    videoArray,
    title,
    pageContext: { prefix, currentPage, totalPages, totalItems }
  } = props;
  function handleNavigate(number) {
    number === 1 ? navigate(`/${prefix}/`) : navigate(`/${prefix}/page-${number}/`);
  }
  return (
    <StyledIndexGrid>
      <div className='edges'>
        <div className='container'>
          <h1>{title}</h1>
        </div>
      </div>
      <GridContainer>
        {videoArray.map(video => {
          const {
            id,
            uploadDate,
            title,
            thumbnail,
            fields: { videoPath },
            artist: {
              artistName,
              photo,
              fields: { colors }
            }
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
              color={colors.primary}
              videoUrl={videoPath}
            />
          );
        })}
      </GridContainer>
      <div className='edges'>
        <div className='pagination'>
          <Pagination
            current={currentPage}
            total={totalItems}
            pageSize={Math.floor(totalItems / totalPages)}
            onChange={handleNavigate}
            hideOnSinglePage
            showQuickJumper
          />
        </div>
      </div>
    </StyledIndexGrid>
  );
};

export default VideoIndexGrid;

const StyledIndexGrid = styled.section`
  h1 {
    margin-top: 3rem;
    font-size: 2rem;
    span {
      color: rgba(0, 0, 0, 0.3);
    }
  }

  .pagination {
    margin: 2rem 0 1rem 0;
    display: flex;
    justify-content: center;
  }
`;

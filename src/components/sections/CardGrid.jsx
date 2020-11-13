import React from 'react';
import styled from 'styled-components';

import VideoCard from '../general/VideoCard';

const CardGrid = ({ title, videos }) => {
  return (
    <CardGridStyle className='Section'>
      <div className='Container'>
        <h2>{title}</h2>
        <div className='grid'>
          {videos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </CardGridStyle>
  );
};

export default CardGrid;

const CardGridStyle = styled.section`
  .grid {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

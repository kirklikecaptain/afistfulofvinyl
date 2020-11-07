import React from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';

import VideoCard from '../general/VideoCard';

const { Title } = Typography;

const CardGrid = ({ title, videos }) => {
  return (
    <CardGridStyle className='Section-Padding'>
      <div className='Container'>
        <Title level={2}>{title}</Title>
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

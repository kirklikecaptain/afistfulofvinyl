import React from 'react';
import styled from 'styled-components';
import { Breadcrumb } from 'antd';

const Breadcrumbs = ({ artist, songs }) => {
  return (
    <StyledBreadcrumbs>
      <div className='Container'>
        <Breadcrumb>
          <Breadcrumb.Item>Artist</Breadcrumb.Item>
          <Breadcrumb.Item>SongName</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </StyledBreadcrumbs>
  );
};

export default Breadcrumbs;

const StyledBreadcrumbs = styled.div`
  z-index: 900;
  padding: 1rem 2rem 0 2rem;
`;

import React from 'react';
import styled from '@emotion/styled';
import { Input } from 'antd';

const { Search } = Input;
const NavSearch = () => {
  return (
    <StyledSearch>
      <Search style={{ width: 200 }} />
    </StyledSearch>
  );
};

export default NavSearch;

const StyledSearch = styled.div`
  padding: 30px 0 30px 300px;
  background: #222;
  color: white;
`;

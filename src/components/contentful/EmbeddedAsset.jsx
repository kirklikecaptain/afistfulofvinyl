import React from 'react';
import styled from 'styled-components';

const EmbeddedAsset = ({ node }) => {
  return (
    <EmbeddedAssetStyle>
      Asset
      <pre>{JSON.stringify(node, null, 2)}</pre>
    </EmbeddedAssetStyle>
  );
};

export default EmbeddedAsset;

const EmbeddedAssetStyle = styled.section``;

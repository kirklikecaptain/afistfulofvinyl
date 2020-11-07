import React from 'react';

const EmbeddedBlockEntry = ({ node }) => {
  return (
    <div>
      Block Entry<pre>{JSON.stringify(node, null, 2)}</pre>
    </div>
  );
};

export default EmbeddedBlockEntry;

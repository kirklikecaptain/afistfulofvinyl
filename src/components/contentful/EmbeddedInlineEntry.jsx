import React from 'react';

const EmbeddedInlineEntry = ({ node }) => {
  return (
    <div>
      Inline Entry<pre>{JSON.stringify(node, null, 2)}</pre>
    </div>
  );
};

export default EmbeddedInlineEntry;

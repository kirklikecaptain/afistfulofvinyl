import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';

import EmbeddedBlockEntry from './EmbeddedBlockEntry';
import EmbeddedInlineEntry from './EmbeddedInlineEntry';
import EmbeddedAsset from './EmbeddedAsset';

import Link from '../general/Link';

// https://github.com/contentful/rich-text/tree/master/packages/rich-text-react-renderer

// Replace default component renderers
const renderNode = {
  [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
  [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
  [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
  [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
  [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
  [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
  [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
  [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
  [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
  [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
  [BLOCKS.QUOTE]: (node, children) => <blockquote>{children}</blockquote>,
  [BLOCKS.HR]: () => <hr />,
  [BLOCKS.EMBEDDED_ENTRY]: node => <EmbeddedBlockEntry node={node} />,
  [BLOCKS.EMBEDDED_ASSET]: node => <EmbeddedAsset node={node} />,
  [INLINES.EMBEDDED_ENTRY]: node => <EmbeddedInlineEntry node={node} />,
  [INLINES.HYPERLINK]: (node, children) => (
    <Link to={node.data.uri}>{children}</Link>
  ),
};

// Modify basic marks
const renderMark = {
  [MARKS.BOLD]: text => <strong>{text}</strong>,
  [MARKS.ITALIC]: text => <em>{text}</em>,
  [MARKS.UNDERLINE]: text => <u>{text}</u>,
  [MARKS.CODE]: text => <code>{text}</code>,
};

// Replace newlines breaks created by Shift+Return with proper tags
const renderText = text => {
  return text.split('\n').reduce((children, textSegment, i) => {
    const id = `br-${i}`;
    return [...children, i > 0 && <br key={id} />, textSegment];
  }, []);
};

function RichTextDocument({ className = 'rich-text-document', json }) {
  const richTextDocument = documentToReactComponents(json, {
    renderNode,
    renderMark,
    renderText,
  });

  return <div className={className}>{richTextDocument}</div>;
}

export default RichTextDocument;

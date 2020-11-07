import React from 'react';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { Divider, Typography } from 'antd';

import EmbeddedBlockEntry from './EmbeddedBlockEntry';
import EmbeddedInlineEntry from './EmbeddedInlineEntry';
import EmbeddedAsset from './EmbeddedAsset';

import Link from '../general/Link';

const { Paragraph, Title } = Typography;

// https://github.com/contentful/rich-text/tree/master/packages/rich-text-react-renderer

// Replace default component renderers
const renderNode = {
  [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
  [BLOCKS.HEADING_1]: (node, children) => <Title>{children}</Title>,
  [BLOCKS.HEADING_2]: (node, children) => <Title level={2}>{children}</Title>,
  [BLOCKS.HEADING_3]: (node, children) => <Title level={3}>{children}</Title>,
  [BLOCKS.HEADING_4]: (node, children) => <Title level={4}>{children}</Title>,
  [BLOCKS.HEADING_5]: (node, children) => <Title level={5}>{children}</Title>,
  [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
  [BLOCKS.UL_LIST]: (node, children) => (
    <ul className='ant-typography'>{children}</ul>
  ),
  [BLOCKS.OL_LIST]: (node, children) => (
    <ol className='ant-typography'>{children}</ol>
  ),
  [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
  [BLOCKS.QUOTE]: (node, children) => <blockquote>{children}</blockquote>,
  [BLOCKS.HR]: () => <Divider />,
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

const propTypes = {
  json: PropTypes.object.isRequired,
};

function RichTextDocument({ className = 'rich-text-document', json = null }) {
  const richTextDocument = documentToReactComponents(json, {
    renderNode,
    renderMark,
    renderText,
  });

  return <div className={className}>{richTextDocument}</div>;
}

// RichTextDocument.propTypes = propTypes;

export default RichTextDocument;

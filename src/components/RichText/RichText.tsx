"use client";

import { BLOCKS, INLINES, MARKS, type Document, type Inline } from "@contentful/rich-text-types";
import {
  Options,
  RenderMark,
  RenderNode,
  RenderText,
  documentToReactComponents,
} from "@contentful/rich-text-react-renderer";
import { ReactNode } from "react";
import { Blockquote, Code, Divider, List, Stack, Table, Text, Title } from "@mantine/core";

import { Link } from "../Link";

function inline(_type: string, node: Inline): ReactNode {
  return (
    <span key={node.data.target.sys.id}>
      type: {node.nodeType} id: {node.data.target.sys.id}
    </span>
  );
}

function inlineResource(_type: string, node: Inline) {
  return (
    <span key={node.data.target.sys.urn}>
      type: {node.nodeType} urn: {node.data.target.sys.urn}
    </span>
  );
}

const renderNode: RenderNode = {
  [BLOCKS.DOCUMENT]: (_node, children) => <Stack>{children}</Stack>,
  [BLOCKS.HEADING_1]: (_node, children) => <Title order={1}>{children}</Title>,
  [BLOCKS.HEADING_2]: (_node, children) => <Title order={2}>{children}</Title>,
  [BLOCKS.HEADING_3]: (_node, children) => <Title order={3}>{children}</Title>,
  [BLOCKS.HEADING_4]: (_node, children) => <Title order={4}>{children}</Title>,
  [BLOCKS.HEADING_5]: (_node, children) => <Title order={5}>{children}</Title>,
  [BLOCKS.HEADING_6]: (_node, children) => <Title order={6}>{children}</Title>,
  [BLOCKS.PARAGRAPH]: (_node, children) => <Text>{children}</Text>,
  [BLOCKS.UL_LIST]: (_node, children) => <List type="unordered">{children}</List>,
  [BLOCKS.OL_LIST]: (_node, children) => <List type="ordered">{children}</List>,
  [BLOCKS.LIST_ITEM]: (_node, children) => <List.Item>{children}</List.Item>,
  [BLOCKS.QUOTE]: (_node, children) => <Blockquote>{children}</Blockquote>,
  [BLOCKS.HR]: () => <Divider my="md" />,
  [BLOCKS.TABLE]: (_node, children) => (
    <Table.ScrollContainer minWidth={500}>
      <Table striped withTableBorder withColumnBorders>
        <Table.Tbody>{children}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  ),
  [BLOCKS.TABLE_ROW]: (_node, children) => <Table.Tr>{children}</Table.Tr>,
  [BLOCKS.TABLE_HEADER_CELL]: (_node, children) => <Table.Th>{children}</Table.Th>,
  [BLOCKS.TABLE_CELL]: (_node, children) => <Table.Td>{children}</Table.Td>,
  [BLOCKS.EMBEDDED_ENTRY]: (node, _children) => (
    <div>
      <span key={node.data.target.sys.id}>
        type: {node.nodeType} id: {node.data.target.sys.id}
      </span>
    </div>
  ),
  [BLOCKS.EMBEDDED_RESOURCE]: (node, _children) => (
    <div>
      <span key={node.data.target.sys.id}>
        type: {node.nodeType} id: {node.data.target.sys.id}
      </span>
    </div>
  ),
  [INLINES.ASSET_HYPERLINK]: (node) => inline(INLINES.ASSET_HYPERLINK, node as Inline),
  [INLINES.ENTRY_HYPERLINK]: (node) => inline(INLINES.ENTRY_HYPERLINK, node as Inline),
  [INLINES.RESOURCE_HYPERLINK]: (node) =>
    inlineResource(INLINES.RESOURCE_HYPERLINK, node as Inline),
  [INLINES.EMBEDDED_ENTRY]: (node) => inline(INLINES.EMBEDDED_ENTRY, node as Inline),
  [INLINES.EMBEDDED_RESOURCE]: (node, _children) =>
    inlineResource(INLINES.EMBEDDED_RESOURCE, node as Inline),
  [INLINES.HYPERLINK]: (node, children) => (
    <Link href={node.data.uri} anchor={{ fw: 700 }}>
      {children}
    </Link>
  ),
};

const renderMark: RenderMark = {
  [MARKS.BOLD]: (text) => (
    <Text component="b" fw={700}>
      {text}
    </Text>
  ),
  [MARKS.ITALIC]: (text) => <Text component="i">{text}</Text>,
  [MARKS.UNDERLINE]: (text) => (
    <Text component="u" td="underline">
      {text}
    </Text>
  ),
  [MARKS.CODE]: (text) => <Code>{text}</Code>,
  [MARKS.SUPERSCRIPT]: (text) => (
    <Text component="sup" size="xs">
      {text}
    </Text>
  ),
  [MARKS.SUBSCRIPT]: (text) => (
    <Text component="sub" size="xs">
      {text}
    </Text>
  ),
};

const renderText: RenderText = (text) => {
  return text.split("\n").reduce((children: any, textSegment, index) => {
    return [...children, index > 0 && <br key={index} />, textSegment];
  }, []);
};

const options: Options = {
  renderNode,
  renderMark,
  renderText,
  preserveWhitespace: false,
};

export function RichText({ field }: { field?: Document }) {
  if (!field) return null;

  return documentToReactComponents(field, options);
}

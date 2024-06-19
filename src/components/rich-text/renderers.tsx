import { Blockquote, Code, Heading, Separator, Strong, Table, Text } from "@radix-ui/themes";
import { BLOCKS, INLINES, MARKS, type Block, type Inline } from "@contentful/rich-text-types";
import { Options } from "@contentful/rich-text-react-renderer";
import { Children } from "react";

import { Image } from "../image";
import { Stack } from "../stack";
import { Link } from "../link";

function inline(type: string, node: Inline) {
  return (
    <span key={node.data.target.sys.id}>
      type: {type} {node.nodeType} id: {node.data.target.sys.id}
    </span>
  );
}

function inlineResource(type: string, node: Inline) {
  return (
    <span key={node.data.target.sys.urn}>
      type: {type} {node.nodeType} urn: {node.data.target.sys.urn}
    </span>
  );
}

export const renderOptions = (links: any): Options => {
  const assetMap = new Map();
  const entryMap = new Map();

  for (const asset of links?.assets?.block) {
    assetMap.set(asset.sys.id, asset);
  }

  for (const entry of links?.entries?.block) {
    entryMap.set(entry.sys.id, entry);
  }

  for (const entry of links?.entries?.inline) {
    entryMap.set(entry.sys.id, entry);
  }

  return {
    renderNode: {
      [BLOCKS.DOCUMENT]: (_node, children) => <Stack gap="4">{children}</Stack>,
      [BLOCKS.HEADING_1]: (_node, children) => (
        <Heading as="h1" size="9">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_2]: (_node, children) => (
        <Heading as="h2" size="8">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_3]: (_node, children) => (
        <Heading as="h3" size="7">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_4]: (_node, children) => (
        <Heading as="h4" size="6">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_5]: (_node, children) => (
        <Heading as="h5" size="5">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_6]: (_node, children) => (
        <Heading as="h6" size="4">
          {children}
        </Heading>
      ),
      [BLOCKS.PARAGRAPH]: (_node, children) => <Text as="p">{children}</Text>,
      [BLOCKS.UL_LIST]: (_node, children) => <ul>{children}</ul>,
      [BLOCKS.OL_LIST]: (_node, children) => <ol>{children}</ol>,
      [BLOCKS.LIST_ITEM]: (_node, children) => <li>{children}</li>,
      [BLOCKS.QUOTE]: (_node, children) => <Blockquote>{children}</Blockquote>,
      [BLOCKS.HR]: () => <Separator my="2" size="4" />,
      [BLOCKS.TABLE]: (node, children) => {
        const firstRow = node.content[0];

        if ("content" in firstRow && firstRow.content[0]?.nodeType === BLOCKS.TABLE_HEADER_CELL) {
          const tableRows = Children.toArray(children);
          const tableHeader = tableRows.shift();

          return (
            <Table.Root variant="surface">
              <Table.Header>{tableHeader}</Table.Header>
              <Table.Body>{tableRows}</Table.Body>
            </Table.Root>
          );
        }

        return (
          <Table.Root variant="surface">
            <Table.Body>{children}</Table.Body>
          </Table.Root>
        );
      },
      [BLOCKS.TABLE_ROW]: (_node, children) => <Table.Row>{children}</Table.Row>,
      [BLOCKS.TABLE_HEADER_CELL]: (_node, children) => (
        <Table.ColumnHeaderCell>{children}</Table.ColumnHeaderCell>
      ),
      [BLOCKS.TABLE_CELL]: (_node, children) => <Table.Cell>{children}</Table.Cell>,
      [BLOCKS.EMBEDDED_ENTRY]: (node, _children) => (
        <div>
          <span key={node.data.target.sys.id}>
            type: {node.nodeType} id: {node.data.target.sys.id}
          </span>
        </div>
      ),
      [BLOCKS.EMBEDDED_RESOURCE]: (node, _children) => (
        <div>
          <span key={node.data.target.sys.id}>Block - Embedded Resource</span>
        </div>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node, _children) => {
        const asset = assetMap.get(node.data.target.sys.id);

        return <Image src={asset.url} alt={asset.description} height={asset.height} width={asset.width} />;
      },
      [INLINES.RESOURCE_HYPERLINK]: (node) => inlineResource(INLINES.RESOURCE_HYPERLINK, node as Inline),
      [INLINES.ASSET_HYPERLINK]: (node) => inline(INLINES.ASSET_HYPERLINK, node as Inline),
      [INLINES.ENTRY_HYPERLINK]: (node) => inline(INLINES.ENTRY_HYPERLINK, node as Inline),
      [INLINES.EMBEDDED_ENTRY]: (node) => inline(INLINES.EMBEDDED_ENTRY, node as Inline),
      [INLINES.EMBEDDED_RESOURCE]: (node, _children) =>
        inlineResource(INLINES.EMBEDDED_RESOURCE, node as Inline),
      [INLINES.HYPERLINK]: (node, children) => <Link href={node.data.uri}>{children}</Link>,
    },
    renderMark: {
      [MARKS.BOLD]: (text) => <Strong>{text}</Strong>,
      [MARKS.ITALIC]: (text) => <em>{text}</em>,
      [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
      [MARKS.SUPERSCRIPT]: (text) => <sup>{text}</sup>,
      [MARKS.SUBSCRIPT]: (text) => <sub>{text}</sub>,
      [MARKS.CODE]: (text) => <Code>{text}</Code>,
    },
    renderText: (text) => {
      return text.split("\n").reduce((children: any, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
  };
};

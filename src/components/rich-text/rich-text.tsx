import type { Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { renderNode, renderMark, renderText } from "./renderers";

export type RichTextProps = { field: Document };

export function RichText({ field }: RichTextProps) {
  return documentToReactComponents(field, {
    renderNode,
    renderMark,
    renderText,
    preserveWhitespace: false,
  });
}

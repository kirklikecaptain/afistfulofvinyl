import type { Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { renderOptions } from "./renderers";

export type RichTextProps = { field: Document | null; links: any };

export function RichText({ field, links }: RichTextProps) {
  if (!field) return null;

  return documentToReactComponents(field, renderOptions(links));
}

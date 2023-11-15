import { Document as RichTextDocument } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Box, BoxProps } from "~/ui/chakra/react";

interface RichTextProps extends BoxProps {
  document: RichTextDocument | null;
}

export function RichText({ document, ...boxProps }: RichTextProps) {
  if (!document) {
    return null;
  }

  return <Box {...boxProps}>{documentToReactComponents(document)}</Box>;
}

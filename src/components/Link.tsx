import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { Anchor, type AnchorProps } from "@mantine/core";

type LinkProps = NextLinkProps & AnchorProps;

export function Link(props: LinkProps) {
  return <Anchor component={NextLink} {...props} />;
}

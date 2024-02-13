"use client";

import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { Anchor, type AnchorProps } from "@mantine/core";

type LinkProps = Omit<NextLinkProps<unknown>, "ref" | keyof AnchorProps> & AnchorProps;

export function Link(props: LinkProps) {
  const { href, ...otherProps } = props;

  return (
    <Anchor {...otherProps} renderRoot={(rootProps) => <NextLink href={href} {...rootProps} />} />
  );
}

"use client";

import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { Anchor, type AnchorProps } from "@mantine/core";

type LinkProps<T> = Omit<NextLinkProps<T>, "ref" | "as"> & AnchorProps;

export function Link<T>(props: LinkProps<T>) {
  const { href, ...otherProps } = props;
  return (
    <Anchor {...otherProps} renderRoot={(rootProps) => <NextLink href={href} {...rootProps} />} />
  );
}

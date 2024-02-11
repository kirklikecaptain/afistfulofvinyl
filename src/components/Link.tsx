"use client";

import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { Anchor, type AnchorProps } from "@mantine/core";

type LinkProps<T> = Omit<NextLinkProps<T>, "ref"> & AnchorProps;

export function Link<T>({ href, ...props }: LinkProps<T>) {
  return (
    <Anchor {...props} renderRoot={(anchorProps) => <NextLink href={href} {...anchorProps} />} />
  );
}

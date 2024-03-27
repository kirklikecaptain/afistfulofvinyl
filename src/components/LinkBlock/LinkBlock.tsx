"use client";

import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { Anchor, type AnchorProps } from "@mantine/core";
import { Route } from "next";

export type LinkBlockProps<T extends string> = AnchorProps & {
  href: Route<T>;
  variant?: "block" | "inline-block";
  nextLinkProps?: Omit<NextLinkProps<T>, "href">;
  children: React.ReactNode;
};

export function LinkBlock<T extends string>(props: LinkBlockProps<T>) {
  const { href, nextLinkProps, variant = "block", children, ...otherAnchorProps } = props;

  return (
    <Anchor
      underline="never"
      c="inherit"
      // w="auto"
      display={variant}
      renderRoot={(rootProps) => <NextLink href={href} {...nextLinkProps} {...rootProps} />}
      {...otherAnchorProps}
    >
      {children}
    </Anchor>
  );
}

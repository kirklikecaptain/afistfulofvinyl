"use client";

import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { Anchor, type AnchorProps } from "@mantine/core";
import { Route } from "next";

export type LinkProps<T extends string> = AnchorProps & {
  href: Route<T>;
  nextLinkProps?: Omit<NextLinkProps<T>, "href">;
  children: React.ReactNode;
};

export function Link<T extends string = string>(props: LinkProps<T>) {
  const { href, nextLinkProps, variant, children, ...otherAnchorProps } = props;

  return (
    <Anchor
      renderRoot={(rootProps) => <NextLink href={href} {...nextLinkProps} {...rootProps} />}
      {...otherAnchorProps}
    >
      {children}
    </Anchor>
  );
}

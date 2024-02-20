"use client";

import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { Anchor, type AnchorProps } from "@mantine/core";

export interface LinkProps<T extends string>
  extends AnchorProps,
    Omit<NextLinkProps<T>, keyof AnchorProps | "ref"> {}

export function Link<T extends string>(props: LinkProps<T>) {
  const { href, replace, prefetch, scroll, ...anchorProps } = props;

  return (
    <Anchor
      {...anchorProps}
      renderRoot={(rootProps) => (
        <NextLink
          href={href}
          replace={replace}
          prefetch={prefetch}
          scroll={scroll}
          {...rootProps}
        />
      )}
    />
  );
}

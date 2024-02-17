"use client";

import NextLink from "next/link";
import { Anchor, type AnchorProps } from "@mantine/core";
import { type Route } from "next";

export interface LinkProps<T extends string = string> extends AnchorProps {
  href: Route<T> | URL;
  replace?: boolean;
  prefetch?: boolean;
  scroll?: boolean;
  children?: React.ReactNode;
}

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

"use client";

import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { Anchor, type AnchorProps } from "@mantine/core";

export type LinkProps<T extends string> = AnchorProps & {
  href: NextLinkProps<T>["href"];
  nextLinkProps?: Omit<NextLinkProps<T>, "href">;
  children: React.ReactNode;
};

export function Link<T extends string>(props: LinkProps<T>) {
  const { href, nextLinkProps, children, ...otherAnchorProps } = props;

  return (
    <Anchor
      renderRoot={(rootProps) => <NextLink href={href} {...nextLinkProps} {...rootProps} />}
      {...otherAnchorProps}
    >
      {children}
    </Anchor>
  );
}

"use client";

import { Card, type CardProps } from "@mantine/core";
import { Route } from "next";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";

export type LinkCardProps<T extends string = string> = CardProps & {
  href: Route<T>;
  nextLinkProps?: Omit<NextLinkProps<T>, "href">;
};

export function LinkCard<T extends string>(props: LinkCardProps<T>) {
  const { href, nextLinkProps, children, ...cardProps } = props;

  return (
    <Card
      withBorder
      renderRoot={(rootProps) => <NextLink href={href} {...nextLinkProps} {...rootProps} />}
      {...cardProps}
    >
      {children}
    </Card>
  );
}

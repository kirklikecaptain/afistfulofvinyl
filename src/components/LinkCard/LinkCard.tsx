"use client";

import { Card, type CardProps } from "@mantine/core";

import { Link, type LinkProps } from "../Link";

export interface LinkCardProps<T extends string> extends LinkProps<T> {
  card?: CardProps;
}

export function LinkCard<T extends string>({ card, children, ...linkProps }: LinkCardProps<T>) {
  return (
    <Card withBorder {...card} renderRoot={(rootProps) => <Link {...linkProps} {...rootProps} />}>
      {children}
    </Card>
  );
}

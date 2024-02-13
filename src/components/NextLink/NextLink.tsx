"use client";

import Link, { type LinkProps } from "next/link";
import { Anchor, type AnchorProps } from "@mantine/core";

interface NextLinkProps extends Omit<LinkProps<unknown>, keyof AnchorProps | "ref">, AnchorProps {
  isOverlay?: boolean;
}

export function NextLink(props: NextLinkProps) {
  const { href, isOverlay, ...otherProps } = props;

  const overlayProps: AnchorProps = { c: "inherit", underline: "never", display: "block" };
  const mergedProps = { ...(isOverlay && overlayProps), ...otherProps };

  return (
    <Anchor {...mergedProps} renderRoot={(rootProps) => <Link href={href} {...rootProps} />} />
  );
}

'use client';

import { Anchor, type AnchorProps, type ElementProps } from '@mantine/core';
import NextLink, { type LinkProps as NextLinkProps } from 'next/link';

export type LinkProps = AnchorProps & ElementProps<'a', keyof AnchorProps> & NextLinkProps;

export function Link(props: LinkProps) {
  return <Anchor component={NextLink} {...props} />;
}

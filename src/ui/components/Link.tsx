import NextLink, { type LinkProps as NextLinkProps } from "next/link";

import {
  Link as ChakraLink,
  type LinkProps as ChakraLinkProps,
  LinkOverlay as ChakraLinkOverlay,
  type LinkOverlayProps,
} from "~/ui/chakra/react";

export function Link(props: ChakraLinkProps & NextLinkProps) {
  const { children, ...rest } = props;

  return (
    <ChakraLink as={NextLink} {...rest}>
      {children}
    </ChakraLink>
  );
}

export function LinkOverlay(props: LinkOverlayProps & NextLinkProps) {
  return <ChakraLinkOverlay as={NextLink} {...props} />;
}

import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { Link as ChakraLink, type LinkProps as ChakraLinkProps } from "~/ui/chakra/react";

type LinkProps = ChakraLinkProps & NextLinkProps;

export function Link(props: LinkProps) {
  const { children, ...rest } = props;

  return (
    <ChakraLink as={NextLink} {...rest}>
      {children}
    </ChakraLink>
  );
}

import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { Link as ChakraLink, type LinkProps as ChakraLinkProps } from "~/libs/chakra-ui/react";

type LinkProps = ChakraLinkProps & NextLinkProps;

export function Link({ children, ...props }: LinkProps) {
  return (
    <ChakraLink as={NextLink} {...props}>
      {children}
    </ChakraLink>
  );
}

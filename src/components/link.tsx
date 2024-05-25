import { Link as RadixLink, type LinkProps } from "@radix-ui/themes";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";

export function Link<T extends string>(props: LinkProps & NextLinkProps<T>) {
  const { href, scroll, replace, prefetch, ...linkProps } = props;

  return (
    <RadixLink asChild {...linkProps}>
      <NextLink href={href} scroll={scroll} replace={replace} prefetch={prefetch}></NextLink>
    </RadixLink>
  );
}

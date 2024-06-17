import { Link as RadixLink, type LinkProps as RadixLinkProps } from "@radix-ui/themes";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";

export type LinkProps<T extends string> = Omit<RadixLinkProps, "href"> &
  NextLinkProps<T> & {
    asBlock?: boolean;
  };

export function Link<T extends string>(props: LinkProps<T>) {
  const { children, href, scroll, replace, prefetch, ...radixLinkProps } = props;

  return (
    <RadixLink asChild {...radixLinkProps}>
      <NextLink href={href} scroll={scroll} replace={replace} prefetch={prefetch}>
        {children}
      </NextLink>
    </RadixLink>
  );
}

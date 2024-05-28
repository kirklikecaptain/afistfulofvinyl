import { Link as RadixLink, type LinkProps as RadixLinkProps } from "@radix-ui/themes";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";

export type LinkProps<T extends string> = RadixLinkProps &
  NextLinkProps<T> & {
    asBlock?: boolean;
  };

export function Link<T extends string>(props: LinkProps<T>) {
  const { asBlock, children, href, scroll, replace, prefetch, ...radixLinkProps } = props;

  const underline = asBlock ? "none" : props.underline;
  const style = {
    ...(asBlock && {
      display: "block",
      color: "inherit",
    }),
    ...props.style,
  };

  return (
    <RadixLink asChild style={style} underline={underline} {...radixLinkProps}>
      <NextLink href={href} scroll={scroll} replace={replace} prefetch={prefetch}>
        {children}
      </NextLink>
    </RadixLink>
  );
}

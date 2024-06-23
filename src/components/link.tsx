import { Link as RadixLink, type LinkProps as RadixLinkProps } from "@radix-ui/themes";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { CSSProperties } from "react";

export type LinkProps<T extends string> = { variant?: "img" | "block" } & NextLinkProps<T> &
  Omit<RadixLinkProps, "href">;

export function Link<T extends string>(props: LinkProps<T>) {
  const { variant, underline, style, children, href, scroll, replace, prefetch, ...radixLinkProps } = props;

  const variantStyle: CSSProperties = {
    display: variant === "img" ? "inline-block" : "block",
    lineHeight: variant === "img" ? 0 : "inherit",
    color: "inherit",
    ...style,
  };

  const linkStyle = variant ? variantStyle : style;
  const underlineStyle = variant ? "none" : underline;

  return (
    <RadixLink asChild underline={underlineStyle} style={linkStyle} {...radixLinkProps}>
      <NextLink href={href} scroll={scroll} replace={replace} prefetch={prefetch}>
        {children}
      </NextLink>
    </RadixLink>
  );
}

import { Link as RadixLink, type LinkProps as RadixLinkProps } from "@radix-ui/themes";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";

export type LinkProps<T extends string> = Omit<RadixLinkProps, "href"> &
  NextLinkProps<T> & { variant?: "img" | "block" };

export function Link<T extends string>(props: LinkProps<T>) {
  const { variant, underline, style, children, href, scroll, replace, prefetch, ...radixLinkProps } = props;

  const variantStyle = {
    display: variant === "img" ? "inline-block" : "block",
    lineHeight: variant === "img" ? 0 : "inherit",
    width: variant === "img" ? "auto" : "100%",
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

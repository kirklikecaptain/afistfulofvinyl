import { Link as RadixLink, type LinkProps as RadixLinkProps } from "@radix-ui/themes";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";

type CustomProps = {
  variant?: "img" | "block";
};

export type LinkProps<T extends string> = CustomProps & NextLinkProps<T> & Omit<RadixLinkProps, "href">;

export function Link<T extends string>(props: LinkProps<T>) {
  const { href, children, ...otherProps } = parseLinkProps(props);

  return (
    <RadixLink asChild {...otherProps}>
      <NextLink href={href}>{children}</NextLink>
    </RadixLink>
  );
}

function parseLinkProps<T extends string>(props: LinkProps<T>): LinkProps<T> {
  let target = props.target;
  let style = props.style;
  let underline = props.underline;

  if (!target && typeof props.href === "string" && props.href.match(/^http(?!.*afistfulofvinyl\.com)/i)) {
    target = "_blank";
  }

  if (props.variant === "img") {
    style = { display: "inline-block", lineHeight: 0, color: "inherit", ...style };
  }

  if (props.variant === "block") {
    style = { display: "block", color: "inherit", ...style };
  }

  if (!underline && props.variant) {
    underline = "none";
  }

  return {
    ...props,
    style,
    target,
    underline,
  };
}

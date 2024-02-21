import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { Anchor, type AnchorProps } from "@mantine/core";
export interface LinkProps<T extends string = string> extends Omit<NextLinkProps<T>, "ref"> {
  variant?: "block" | "inline-block";
  anchor?: AnchorProps;
  ref?: any;
}

export function Link<T extends string>(props: LinkProps<T>) {
  const { variant, anchor, ref, ...nextLinkProps } = props;

  const mergedAnchorProps: AnchorProps = {
    ...anchor,
    ...(variant && {
      display: variant,
      c: "inherit",
      underline: "never",
    }),
  };

  return (
    <Anchor
      {...mergedAnchorProps}
      ref={ref}
      renderRoot={(rootProps) => <NextLink {...rootProps} {...nextLinkProps} />}
    />
  );
}

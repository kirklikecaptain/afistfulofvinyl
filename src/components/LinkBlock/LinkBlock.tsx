"use client";

import { Link, type LinkProps } from "../Link/Link";

export type LinkBlockProps<T extends string> = LinkProps<T>;

export function LinkBlock<T extends string>(props: LinkBlockProps<T>) {
  const { display = "block", underline = "never", c = "inherit", ...otherProps } = props;

  return <Link display={display} underline={underline} c={c} {...otherProps} />;
}

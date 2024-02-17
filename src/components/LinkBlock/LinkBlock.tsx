"use client";

import { Link, type LinkProps } from "../Link/Link";

export interface LinkBlockProps<T extends string = string> extends LinkProps<T> {}

export function LinkBlock<T extends string>(props: LinkBlockProps<T>) {
  return <Link display="block" c="inherit" underline="never" {...props} />;
}

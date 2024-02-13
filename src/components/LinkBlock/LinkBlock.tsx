import NextLink, { type LinkProps } from "next/link";
import clsx from "clsx";

export function LinkBlock({ className, ...otherProps }: LinkProps<unknown>) {
  return <NextLink className={clsx("mantine-focus-auto", className)} {...otherProps} />;
}

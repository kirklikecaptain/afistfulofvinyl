import Link, { type LinkProps } from "next/link";
import { NavLink, type NavLinkProps } from "@mantine/core";

interface NextNavLinkProps
  extends NavLinkProps,
    Omit<LinkProps<unknown>, keyof NavLinkProps | "ref"> {}

export function NextNavLink(props: NextNavLinkProps) {
  const { href, ...otherProps } = props;

  return (
    <NavLink {...otherProps} renderRoot={(rootProps) => <Link href={href} {...rootProps} />} />
  );
}

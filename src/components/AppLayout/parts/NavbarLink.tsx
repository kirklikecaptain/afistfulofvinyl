import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { NavLink as MantineNavLink, type NavLinkProps as MantineNavLinkProps } from "@mantine/core";

export type NavLinkProps<T extends string> = MantineNavLinkProps & {
  href?: NextLinkProps<T>["href"];
  nextLinkProps?: Omit<NextLinkProps<T>, "href">;
};

export function NavbarLink<T extends string>(props: NavLinkProps<T>) {
  const { href, nextLinkProps, ...navLinkProps } = props;

  return (
    <MantineNavLink
      {...navLinkProps}
      renderRoot={
        href ? (rootProps) => <NextLink href={href} {...nextLinkProps} {...rootProps} /> : undefined
      }
    />
  );
}

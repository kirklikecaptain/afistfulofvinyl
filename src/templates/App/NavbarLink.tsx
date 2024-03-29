import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { NavLink as MantineNavLink, type NavLinkProps as MantineNavLinkProps } from "@mantine/core";

export interface NavLinkProps<T extends string>
  extends MantineNavLinkProps,
    Omit<NextLinkProps<T>, keyof MantineNavLinkProps | "ref"> {}

export function NavbarLink<T extends string>(props: NavLinkProps<T>) {
  const { href, replace, prefetch, scroll, ...navLinkProps } = props;

  return (
    <MantineNavLink
      {...navLinkProps}
      renderRoot={(rootProps) => (
        <NextLink
          href={href}
          replace={replace}
          prefetch={prefetch}
          scroll={scroll}
          {...rootProps}
        />
      )}
    />
  );
}

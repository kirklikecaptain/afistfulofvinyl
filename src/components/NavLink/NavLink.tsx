"use client";

import NextLink from "next/link";
import { NavLink as MantineNavLink, type NavLinkProps as MantineNavLinkProps } from "@mantine/core";
import { Route } from "next";

export interface NavLinkProps<T extends string = string> extends MantineNavLinkProps {
  href: Route<T> | URL;
  replace?: boolean;
  prefetch?: boolean;
  scroll?: boolean;
  children?: React.ReactNode;
}

export function NavLink<T extends string>(props: NavLinkProps<T>) {
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

"use client";

import {
  ActionIcon,
  AppShell,
  Burger,
  Center,
  Flex,
  NavLink,
  type NavLinkProps,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { spotlight } from "@mantine/spotlight";
import { IconSearch } from "@tabler/icons-react";
import App from "next/app";

import { AFoVLogo } from "../AFoVLogo/AFoVLogo";
import { Link } from "../Link/Link";
import { ColorModeButton } from "../ColorModeButton/ColorModeButton";

type NextNavLinkProps = Omit<NextLinkProps<unknown>, "ref" | keyof NavLinkProps> & NavLinkProps;

function NextNavLink({ href, ...otherProps }: NextNavLinkProps) {
  return (
    <NavLink {...otherProps} renderRoot={(rootProps) => <NextLink href={href} {...rootProps} />} />
  );
}

export function AppLayout({ children }: React.PropsWithChildren) {
  const [navOpen, { toggle }] = useDisclosure();
  const openSpotlight = () => spotlight.open();

  return (
    <AppShell
      layout="alt"
      header={{
        height: { base: "60px", sm: 0 },
      }}
      navbar={{
        width: 220,
        breakpoint: "sm",
        collapsed: { mobile: !navOpen },
      }}
    >
      <AppShell.Header hiddenFrom="sm" color="light" p={0}>
        <Flex h="100%" align="center" justify="space-between">
          <ActionIcon
            size="60px"
            onClick={openSpotlight}
            aria-label="Search"
            variant="transparent"
            color="inherit"
          >
            <IconSearch />
          </ActionIcon>
          <Link href="/" lh="0" display="block" c="inherit">
            <AFoVLogo w="80px" c="light" />
          </Link>
          <Burger opened={navOpen} onClick={toggle} w="60px" />
        </Flex>
      </AppShell.Header>
      <AppShell.Navbar p="lg" top={{ sm: 0, base: "60px" }}>
        <AppShell.Section mb="md">
          <Link display="block" href="/" lh={0} p={8} visibleFrom="sm" c="inherit">
            <AFoVLogo w="100%" />
          </Link>
        </AppShell.Section>
        <AppShell.Section grow>
          <NextNavLink href="/" label="Videos">
            <NextNavLink href="/" label="Songs" />
            <NextNavLink href="/" label="Covers" />
            <NextNavLink href="/" label="Interviews" />
          </NextNavLink>
          <NextNavLink href="/" label="Artists" />
          <NextNavLink href="/" label="Contact" />
          <NextNavLink href="/" label="About" />
        </AppShell.Section>
        <AppShell.Section>
          <ColorModeButton />
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}

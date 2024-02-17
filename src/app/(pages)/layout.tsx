"use client";

import { ActionIcon, AppShell, Burger, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { spotlight } from "@mantine/spotlight";
import {
  IconSearch,
  IconVideo,
  IconMusic,
  IconMusicHeart,
  IconMicrophone,
  IconUsers,
  IconMessage,
  IconInfoCircle,
} from "@tabler/icons-react";

import { AFoVLogo, NavLink, ColorModeButton, Footer, LinkBlock } from "~/components";

export default function PagesLayout({ children }: React.PropsWithChildren) {
  const openSpotlight = () => {
    spotlight.open();
  };
  const [navOpen, navControl] = useDisclosure();
  const mobileHeaderHeight = 70;

  return (
    <AppShell
      layout="alt"
      header={{
        height: { sm: 0, base: mobileHeaderHeight },
      }}
      navbar={{
        width: 220,
        breakpoint: "sm",
        collapsed: { mobile: !navOpen },
      }}
      footer={{
        height: 200,
      }}
    >
      <AppShell.Header hiddenFrom="sm" color="light">
        <Flex h="100%" align="center" justify="space-between" px="md">
          <Burger
            opened={navOpen}
            onClick={navControl.toggle}
            aria-label="Toggle Navigation Menu"
            c="bright"
          />
          <LinkBlock href="/" lh="0">
            <AFoVLogo w="100px" />
          </LinkBlock>
          <ActionIcon
            aria-label="Search"
            onClick={openSpotlight}
            variant="transparent"
            c="bright"
            size="lg"
          >
            <IconSearch />
          </ActionIcon>
        </Flex>
      </AppShell.Header>
      <AppShell.Navbar
        top={{ base: mobileHeaderHeight, sm: 0 }}
        pb={{ base: mobileHeaderHeight + 20, sm: "lg" }}
        pt="lg"
        pr="lg"
        pl="lg"
      >
        <AppShell.Section mb="md" visibleFrom="sm">
          <LinkBlock href="/" lh="0" p={8}>
            <AFoVLogo />
          </LinkBlock>
        </AppShell.Section>
        <AppShell.Section grow mb="md">
          {links.map(({ label, href, Icon, nestedLinks }) => (
            <NavLink
              defaultOpened
              key={label}
              href={href}
              label={label}
              leftSection={<Icon size={14} />}
            >
              {nestedLinks?.map(({ label, href, Icon }) => (
                <NavLink key={label} href={href} label={label} leftSection={<Icon size={14} />} />
              ))}
            </NavLink>
          ))}
        </AppShell.Section>
        <AppShell.Section>
          <ColorModeButton />
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
      <AppShell.Footer>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}

const links = [
  {
    label: "Videos",
    href: "#videos",
    Icon: IconVideo,
    nestedLinks: [
      {
        label: "Songs",
        href: "#songs",
        Icon: IconMusic,
      },
      {
        label: "Covers",
        href: "#covers",
        Icon: IconMusicHeart,
      },
      {
        label: "Interviews",
        href: "#interviews",
        Icon: IconMicrophone,
      },
    ],
  },
  {
    label: "Artists",
    href: "/artists",
    Icon: IconUsers,
    nestedLinks: null,
  },
  {
    label: "Contact",
    href: "#contact",
    Icon: IconMessage,
    nestedLinks: null,
  },
  {
    label: "About",
    href: "#about",
    Icon: IconInfoCircle,
    nestedLinks: null,
  },
] as const;

import { AppShellNavbar, AppShellSection, rem } from "@mantine/core";
import {
  IconVideo,
  IconMusic,
  IconMusicHeart,
  IconMicrophone,
  IconUsers,
  IconMessage,
  IconInfoCircle,
} from "@tabler/icons-react";

import { NextNavLink, NextLink, ColorModeButton, AFoVLogo } from "~/components";

interface NavbarProps {
  headerOffset: number;
}

export function Navbar({ headerOffset }: NavbarProps) {
  return (
    <AppShellNavbar
      top={{ base: rem(headerOffset), sm: 0 }}
      pb={{ base: rem(headerOffset + 20), sm: "lg" }}
      pt="lg"
      pr="lg"
      pl="lg"
    >
      <AppShellSection mb="md" visibleFrom="sm">
        <NextLink isOverlay href="/" lh="0" p={8}>
          <AFoVLogo />
        </NextLink>
      </AppShellSection>
      <AppShellSection grow mb="md">
        {links.map(({ label, href, Icon, nestedLinks }) => (
          <NextNavLink
            defaultOpened
            key={label}
            href={href}
            label={label}
            leftSection={<Icon size={14} />}
          >
            {nestedLinks?.map(({ label, href, Icon }) => (
              <NextNavLink key={label} href={href} label={label} leftSection={<Icon size={14} />} />
            ))}
          </NextNavLink>
        ))}
      </AppShellSection>
      <AppShellSection>
        <ColorModeButton />
      </AppShellSection>
    </AppShellNavbar>
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
    href: "#artists",
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

import { AppShellNavbar, AppShellSection, Group } from "@mantine/core";
import {
  TablerIconsProps,
  IconVideo,
  IconMusic,
  IconMusicHeart,
  IconMicrophone,
  IconUsers,
  IconMessage,
  IconInfoCircle,
  IconDeviceTv,
} from "@tabler/icons-react";
import { Route } from "next";

import { Link, AFoVLogo, ColorModeButton, SearchButton } from "~/components";

import { NavbarLink } from "./NavbarLink";

export function Navbar() {
  return (
    <AppShellNavbar
      p="xl"
      h={{
        base: "calc(100dvh - var(--app-shell-header-offset, 80px))",
        sm: "100dvh",
      }}
      top={{
        base: "var(--app-shell-header-offset, 80px)",
        sm: 0,
      }}
      style={{ transition: "none" }}
    >
      <AppShellSection visibleFrom="sm" mb="xl">
        <Link variant="inline-block" href="/" lh={0}>
          <AFoVLogo />
        </Link>
      </AppShellSection>
      <AppShellSection grow>
        {navLinkData.map(({ label, href, Icon, children }) => (
          <NavbarLink
            key={label}
            href={href}
            label={label}
            leftSection={<Icon size={14} />}
            defaultOpened
          >
            {children?.map(({ label, href, Icon }) => (
              <NavbarLink key={label} href={href} label={label} leftSection={<Icon size={14} />} />
            ))}
          </NavbarLink>
        ))}
      </AppShellSection>
      <Group>
        <ColorModeButton />
        <SearchButton />
      </Group>
    </AppShellNavbar>
  );
}

type NavLinkItem = {
  label: string;
  href?: Route<string>;
  Icon: (props: TablerIconsProps) => JSX.Element;
  children?: NavLinkItem[];
};

const navLinkData: NavLinkItem[] = [
  {
    label: "Sessions",
    Icon: IconVideo,
    children: [
      {
        label: "All Videos",
        href: "/videos",
        Icon: IconDeviceTv,
      },
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
  },
  {
    label: "Contact",
    href: "#contact",
    Icon: IconMessage,
  },
  {
    label: "About",
    href: "#about",
    Icon: IconInfoCircle,
  },
];

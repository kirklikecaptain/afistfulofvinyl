import { AppShellSection, Group } from "@mantine/core";
import {
  TablerIconsProps,
  IconVideo,
  IconMusic,
  IconMusicHeart,
  IconMicrophone,
  IconUsers,
  IconMessage,
  IconInfoCircle,
} from "@tabler/icons-react";
import { LinkProps } from "next/link";

import { LinkBlock, AFoVLogo, ColorModeButton, SearchButton } from "~/components";

import { NavbarLink } from "./NavbarLink";

export function Navbar() {
  return (
    <>
      <AppShellSection mb="md" visibleFrom="sm">
        <LinkBlock href="/" lh="0" p="sm">
          <AFoVLogo />
        </LinkBlock>
      </AppShellSection>
      <AppShellSection grow>
        {navLinkData.map(({ label, href, Icon, children }) => (
          <NavbarLink key={label} href={href} label={label} leftSection={<Icon size={14} />}>
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
    </>
  );
}

interface NavLinkItem {
  label: string;
  href: LinkProps<string>["href"];
  Icon: (props: TablerIconsProps) => JSX.Element;
  children?: NavLinkItem[];
}

const navLinkData: NavLinkItem[] = [
  {
    label: "Videos",
    href: "#videos",
    Icon: IconVideo,
    children: [
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

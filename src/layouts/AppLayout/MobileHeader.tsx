import { AppShellHeader, Flex, ActionIcon, Burger, rem } from "@mantine/core";
import { spotlight } from "@mantine/spotlight";
import { IconSearch } from "@tabler/icons-react";

import { NextLink, AFoVLogo } from "~/components";

interface MobileHeaderProps {
  navOpen: boolean;
  toggleNav: () => void;
}

export function MobileHeader(props: MobileHeaderProps) {
  const { navOpen, toggleNav } = props;

  const openSpotlight = () => {
    spotlight.open();
  };

  return (
    <AppShellHeader hiddenFrom="sm" color="light">
      <Flex h="100%" align="center" justify="space-between" px="md">
        <Burger
          opened={navOpen}
          onClick={toggleNav}
          aria-label="Toggle Navigation Menu"
          c="bright"
        />
        <NextLink isOverlay href="/" lh="0">
          <AFoVLogo w="100px" />
        </NextLink>
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
    </AppShellHeader>
  );
}

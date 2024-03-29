import { Flex, Burger, AppShellHeader } from "@mantine/core";

import { Link, AFoVLogo, SearchButton } from "~/components";

export type HeaderProps = {
  isHomePage?: boolean;
  navOpen: boolean;
  toggleNav: () => void;
};

export function Header({ isHomePage, navOpen, toggleNav }: HeaderProps) {
  return (
    <AppShellHeader hiddenFrom={isHomePage ? undefined : "sm"}>
      <Flex w="100%" h="100%" align="center" justify="space-between" px="md">
        <Burger opened={navOpen} onClick={toggleNav} aria-label="Toggle Navigation Menu" />
        <Link variant="inline-block" href="/">
          <AFoVLogo w="100px" />
        </Link>
        <SearchButton size="lg" variant="transparent" />
      </Flex>
    </AppShellHeader>
  );
}

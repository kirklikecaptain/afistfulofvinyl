"use client";

import { Flex, Burger } from "@mantine/core";

import { LinkBlock, AFoVLogo, SearchButton } from "~/components";

interface HeaderProps {
  navOpen: boolean;
  toggleNav: () => void;
}

function Header({ navOpen, toggleNav }: HeaderProps) {
  return (
    <Flex w="100%" h="100%" align="center" justify="space-between" px="md">
      <Burger opened={navOpen} onClick={toggleNav} aria-label="Toggle Navigation Menu" />
      <LinkBlock display="inline-block" href="/" lh="0">
        <AFoVLogo w="100px" />
      </LinkBlock>
      <SearchButton size="lg" variant="transparent" />
    </Flex>
  );
}

export { type HeaderProps, Header };

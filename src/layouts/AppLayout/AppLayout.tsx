"use client";

import { AppShell, AppShellMain, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { MobileHeader } from "./MobileHeader";
import { Navbar } from "./Navbar";

export function AppLayout({ children }: React.PropsWithChildren) {
  const [navOpen, navControl] = useDisclosure();
  const mobileHeaderHeight = 70;

  return (
    <AppShell
      layout="alt"
      padding="md"
      header={{
        height: { sm: 0, base: rem(mobileHeaderHeight) },
      }}
      navbar={{
        width: 220,
        breakpoint: "sm",
        collapsed: { mobile: !navOpen },
      }}
    >
      <MobileHeader navOpen={navOpen} toggleNav={navControl.toggle} />
      <Navbar headerOffset={mobileHeaderHeight} />
      <AppShellMain>{children}</AppShellMain>
    </AppShell>
  );
}

"use client";

import { AppShell, rem } from "@mantine/core";
import { useDisclosure, useHeadroom, useWindowScroll } from "@mantine/hooks";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { Navbar } from "./Navbar";

export interface AppProps {
  homePage?: boolean;
  children: React.ReactNode;
}

export function App({ homePage, children }: AppProps) {
  const isPinned = useHeadroom();
  const [scroll] = useWindowScroll();
  const [navOpen, navControl] = useDisclosure();

  const headerHeight = 80;
  const offset = homePage ? 500 : 0;
  const collapseHeader = scroll.y < offset || !isPinned;

  return (
    <AppShell
      layout="alt"
      header={{ height: headerHeight, collapsed: collapseHeader, offset: false }}
      navbar={{
        width: 250,
        breakpoint: "sm",
        collapsed: {
          desktop: homePage ? !navOpen : false,
          mobile: !navOpen,
        },
      }}
    >
      <AppShell.Header hiddenFrom={homePage ? undefined : "sm"}>
        <Header navOpen={navOpen} toggleNav={navControl.toggle} />
      </AppShell.Header>
      <AppShell.Navbar
        p="lg"
        h={{
          base: "calc(100dvh - var(--app-shell-header-offset, 80px))",
          sm: "100dvh",
        }}
        top={{
          base: "var(--app-shell-header-offset, 80px)",
          sm: 0,
        }}
      >
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main
        pt={{
          base: homePage ? 0 : rem(headerHeight),
          sm: 0,
        }}
      >
        {children}
      </AppShell.Main>
      <AppShell.Footer
        pos="static"
        pl={{
          sm: "var(--app-shell-navbar-offset)",
        }}
      >
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}

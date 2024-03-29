"use client";

import { AppShell, rem } from "@mantine/core";
import { useDisclosure, useHeadroom, useWindowScroll } from "@mantine/hooks";

import { Header } from "./parts/Header";
import { Navbar } from "./parts/Navbar";
import { Main } from "./parts/Main";
import { Footer } from "./parts/Footer";

export type AppLayoutProps = {
  isHomePage?: boolean;
  children: React.ReactNode;
};

export function AppLayout({ isHomePage, children }: AppLayoutProps) {
  const isPinned = useHeadroom();
  const [scroll] = useWindowScroll();
  const [navOpen, navControl] = useDisclosure();

  const headerHeight = 80;
  const offset = isHomePage ? 500 : 0;
  const collapseHeader = scroll.y < offset || !isPinned;

  return (
    <AppShell
      layout="alt"
      header={{ height: headerHeight, collapsed: collapseHeader, offset: false }}
      navbar={{
        width: 250,
        breakpoint: "sm",
        collapsed: {
          desktop: isHomePage ? !navOpen : false,
          mobile: !navOpen,
        },
      }}
    >
      <Header isHomePage={isHomePage} navOpen={navOpen} toggleNav={navControl.toggle} />
      <Navbar />
      <Main isHomePage={isHomePage}>{children}</Main>
      <Footer />
    </AppShell>
  );
}

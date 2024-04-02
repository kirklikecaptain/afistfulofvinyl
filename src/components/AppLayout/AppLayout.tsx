"use client";

import { AppShell } from "@mantine/core";
import { useDisclosure, useHeadroom, useWindowScroll } from "@mantine/hooks";
import { usePathname } from "next/navigation";

import { Header } from "./parts/Header";
import { Navbar } from "./parts/Navbar";
import { Main } from "./parts/Main";
import { Footer } from "./parts/Footer";

export function AppLayout({ children }: React.PropsWithChildren) {
  const pathname = usePathname();
  const isPinned = useHeadroom();
  const [scroll] = useWindowScroll();
  const [navOpen, navControl] = useDisclosure();

  const isHomePage = pathname === "/";
  const scrollOffset = isHomePage ? 500 : 0;
  const collapseHeader = scroll.y < scrollOffset || !isPinned;
  const collapseDesktopNavbar = isHomePage ? !navOpen : false;
  const collapseMobileNavbar = !navOpen;

  return (
    <AppShell
      layout="alt"
      header={{ height: 80, offset: false, collapsed: collapseHeader }}
      navbar={{
        width: 250,
        breakpoint: "sm",
        collapsed: {
          desktop: collapseDesktopNavbar,
          mobile: collapseMobileNavbar,
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

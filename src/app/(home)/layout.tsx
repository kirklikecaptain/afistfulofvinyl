"use client";

import { AppShell, Center } from "@mantine/core";
import { useHeadroom } from "@mantine/hooks";

import { AFoVLogo, Footer, LinkBlock } from "~/components";

export default function HomeLayout({ children }: React.PropsWithChildren) {
  const isPinned = useHeadroom({ fixedAt: 500 });

  return (
    <AppShell
      header={{ height: 80, collapsed: isPinned, offset: false }}
      footer={{ height: 200, offset: false }}
    >
      <AppShell.Header>
        <Center h="100%" w="100%">
          <LinkBlock href="/" lh="0">
            <AFoVLogo w="100px" />
          </LinkBlock>
        </Center>
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
      <AppShell.Footer pos="static">
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}

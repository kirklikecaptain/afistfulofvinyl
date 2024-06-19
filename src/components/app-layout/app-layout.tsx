import { Flex, Box } from "@radix-ui/themes";

import { AppHeader } from "./app-header/app-header";
import { AppFooter } from "./app-footer/app-footer";

export type AppLayoutProps = {
  children: React.ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <Flex direction="column">
      <AppHeader />
      <Box flexGrow="1">{children}</Box>
      <AppFooter />
    </Flex>
  );
}

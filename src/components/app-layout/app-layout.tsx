import { Stack } from "../stack";

import { AppHeader } from "./app-header/app-header";
import { AppFooter } from "./app-footer/app-footer";

export type AppLayoutProps = {
  children: React.ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <Stack overflow="clip">
      <AppHeader />
      {children}
      <AppFooter />
    </Stack>
  );
}

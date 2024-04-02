import { AppShellMain } from "@mantine/core";

export type MainProps = {
  isHomePage?: boolean;
  children: React.ReactNode;
};

export function Main({ isHomePage, children }: MainProps) {
  return (
    <AppShellMain
      pt={{
        base: isHomePage ? 0 : "var(--app-shell-header-offset, 80px)",
        sm: 0,
      }}
      style={{ transition: "none" }}
    >
      {children}
    </AppShellMain>
  );
}

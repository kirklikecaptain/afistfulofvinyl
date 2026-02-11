'use client';

import { ThemeProvider } from '~/lib/mantine';

interface RootLayoutProviderProps {
  children: React.ReactNode;
}

export function RootLayoutProvider({ children }: RootLayoutProviderProps) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

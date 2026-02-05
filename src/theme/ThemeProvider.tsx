'use client';

import { MantineProvider } from '@mantine/core';

import { theme } from './config';
import { afov, defaultColorScheme } from './constants';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={theme} defaultColorScheme={defaultColorScheme} classNamesPrefix={afov}>
      {children}
    </MantineProvider>
  );
}

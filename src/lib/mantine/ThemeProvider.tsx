'use client';

import { MantineProvider } from '@mantine/core';

import { config } from './theme.config';
import { AFoV, DEFAULT_COLOR_SCHEME } from './theme.constants';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider
      theme={config}
      defaultColorScheme={DEFAULT_COLOR_SCHEME}
      classNamesPrefix={AFoV}
    >
      {children}
    </MantineProvider>
  );
}

'use client';

import { ThemeProvider } from '~/lib/mantine';
import type { WithChildren } from '~/utils/types';

export function RootLayoutProvider({ children }: WithChildren) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

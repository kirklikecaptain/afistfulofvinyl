import { Box } from '@mantine/core';

import type { WithChildren } from '~/utils/types';

import css from './App.module.css';
import { AppFooter } from './AppFooter';
import { AppHeader } from './AppHeader';

export function App({ children }: WithChildren) {
  return (
    <Box className={css.App} bg="dark.9">
      <AppHeader />
      {children}
      <AppFooter />
    </Box>
  );
}

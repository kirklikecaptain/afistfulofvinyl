import { Box } from '@mantine/core';

import css from './AppLayout.module.css';
import { AppLayoutFooter } from './AppLayoutFooter';
import { AppLayoutHeader } from './AppLayoutHeader';

type AppLayoutProps = {
  children: React.ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <Box className={css.AppLayout}>
      <AppLayoutHeader className={css.AppLayoutHeader} />
      {children}
      <AppLayoutFooter className={css.AppLayoutFooter} />
    </Box>
  );
}

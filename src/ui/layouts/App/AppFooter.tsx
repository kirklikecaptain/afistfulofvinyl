import { Box, Container } from '@mantine/core';

import css from './App.module.css';

export function AppFooter() {
  return (
    <Box className={css.AppFooter} component="footer" p="md">
      <Container>
        <Box>Footer</Box>
      </Container>
    </Box>
  );
}

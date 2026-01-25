import { Box, Container, Group, Text } from '@mantine/core';
import { AFoVLogo } from '~/components/elements';

import css from './AppNavigation.module.css';

function Header() {
  return (
    <Box component="header" className={css.Header} p="md">
      <Container>
        <Group component="nav" justify="space-between">
          <AFoVLogo w="120" />
          <Group>
            <Text>Artists</Text>
            <Text>Videos</Text>
          </Group>
        </Group>
      </Container>
    </Box>
  );
}

function Footer() {
  return (
    <Box component="footer" className={css.Footer} p="md">
      <Container>Footer</Container>
    </Box>
  );
}

export function AppNavigation({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  );
}

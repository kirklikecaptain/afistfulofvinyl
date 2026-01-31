import { Box, Container, Group } from '@mantine/core';
import { AFoVLogo, Link } from '~/components/elements';

import css from './AppNavigation.module.css';

function Header() {
  return (
    <Box component="header" className={css.Header} p="md">
      <Container>
        <Group component="nav" justify="space-between">
          <Link href="/" c="inherit">
            <AFoVLogo w="120" />
          </Link>
          <Group>
            <Link href="/artists">Artists</Link>
            <Link href="/videos">Videos</Link>
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

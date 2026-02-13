'use client';

import { ActionIcon, Box, Container, Group } from '@mantine/core';
import { spotlight } from '@mantine/spotlight';
import { IconSearch } from '@tabler/icons-react';

import { AFoVLogo } from '~/ui/components/AFoVLogo';
import { Link } from '~/ui/components/Link';

import css from './App.module.css';

export function AppHeader() {
  return (
    <Box className={css.AppHeader} component="header" p="md">
      <Container>
        <Group component="nav" justify="space-between">
          <Group>
            <Link href="/">
              <AFoVLogo w="120px" />
            </Link>
          </Group>
          <Group>
            <Link href="/artists">Artists</Link>
            <Link href="/videos">Videos</Link>
            <ActionIcon
              aria-label="Open Spotlight Search"
              onClick={spotlight.open}
              variant="subtle"
              size="lg"
            >
              <IconSearch />
            </ActionIcon>
          </Group>
        </Group>
      </Container>
    </Box>
  );
}

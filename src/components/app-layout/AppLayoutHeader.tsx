'use client';

import { ActionIcon, Box, Container, Group } from '@mantine/core';
import { spotlight } from '@mantine/spotlight';
import { IconSearch } from '@tabler/icons-react';

import { AFoVLogo } from '~/components/afov-logo';
import { Link } from '~/components/link';

export type AppLayoutHeaderProps = {
  className: string;
};

export function AppLayoutHeader({ className }: AppLayoutHeaderProps) {
  return (
    <Box component="header" p="md" className={className}>
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

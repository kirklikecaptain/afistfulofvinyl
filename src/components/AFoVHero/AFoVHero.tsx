import { Center, Group, Stack } from "@mantine/core";

import { AFoVLogo, Link } from "~/components";

export function AFoVHero() {
  return (
    <Center h="85svh">
      <Stack>
        <AFoVLogo />
        <Group justify="center" mt="md">
          <Link href="/videos">Sessions</Link>
          <Link href="/videos">Interviews</Link>
          <Link href="/artists">Artists</Link>
        </Group>
      </Stack>
    </Center>
  );
}

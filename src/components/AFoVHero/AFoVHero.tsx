"use client";

import { Box, Center, Group, Stack } from "@mantine/core";

import { AFoVLogo, Link } from "~/components";

import classes from "./AFoVHero.module.css";

export function AFoVHero() {
  return (
    <Center h="85svh" bg="black">
      <Stack>
        <Box className={classes.logoContainer}>
          <AFoVLogo className={classes.logoGreen} c="#00ff00" />
          <AFoVLogo className={classes.logoRed} c="#ff0000" />
          <AFoVLogo className={classes.logoBlue} c="#0000ff" />
        </Box>
        <Group justify="center" mt="md">
          <Link href="/videos" c="white">
            Sessions
          </Link>
          <Link href="/videos" c="white">
            Interviews
          </Link>
          <Link href="/artists" c="white">
            Artists
          </Link>
        </Group>
      </Stack>
    </Center>
  );
}

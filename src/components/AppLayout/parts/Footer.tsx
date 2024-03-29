import { AppShellFooter, Grid, GridCol, Stack } from "@mantine/core";

import { AFoVLogo, ColorModeButton, Link } from "~/components";

export function Footer() {
  return (
    <AppShellFooter
      pos="static"
      pl={{
        sm: "var(--app-shell-navbar-offset)",
      }}
    >
      <Grid p="md">
        <GridCol span={{ base: 12, sm: 6, lg: 4 }}>
          <Stack align="start" gap="0">
            <Link href="/videos">Videos</Link>
            <Link href="/artists">Artists</Link>
          </Stack>
        </GridCol>
        <GridCol span={{ base: 12, sm: 6, lg: 4 }}>
          <ColorModeButton />
        </GridCol>
        <GridCol span={{ base: 12, sm: 6, lg: 4 }}>
          <Link variant="inline-block" href="/" lh={0}>
            <AFoVLogo variant="mini" w="80px" />
          </Link>
        </GridCol>
      </Grid>
    </AppShellFooter>
  );
}

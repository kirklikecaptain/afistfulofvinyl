"use client";

import { Text, Grid, GridCol } from "@mantine/core";

import { AFoVLogo, ColorModeButton, Link, LinkBlock } from "~/components";

export function Footer() {
  return (
    <Grid p="md" h="100%">
      <GridCol span={{ base: 12, sm: 6, lg: 4 }}>
        <LinkBlock href="/" lh="0">
          <AFoVLogo w="160px" />
        </LinkBlock>
      </GridCol>
      <GridCol span={{ base: 12, sm: 6, lg: 4 }}>
        <Link href="/artists">Artists</Link>
      </GridCol>
      <GridCol span={{ base: 12, sm: 6, lg: 4 }}>
        <Text>Links</Text>
        <ColorModeButton />
      </GridCol>
    </Grid>
  );
}

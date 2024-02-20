import { Grid, GridCol } from "@mantine/core";

import { AFoVLogo, ColorModeButton, Link, LinkBlock } from "~/components";

function Footer() {
  return (
    <Grid p="md">
      <GridCol span={{ base: 12, sm: 6, lg: 4 }}>
        <Link href="/artists">Artists</Link>
      </GridCol>
      <GridCol span={{ base: 12, sm: 6, lg: 4 }}>
        <ColorModeButton />
      </GridCol>
      <GridCol span={{ base: 12, sm: 6, lg: 4 }}>
        <LinkBlock display="inline-block" href="/" lh="0">
          <AFoVLogo w="160px" />
        </LinkBlock>
      </GridCol>
    </Grid>
  );
}

export { Footer };

import { Grid, GridCol } from "@mantine/core";

import { AFoVLogo, ColorModeButton, Link } from "~/components";

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
        <Link variant="inline-block" href="/" anchor={{ lh: 0 }}>
          <AFoVLogo w="160px" />
        </Link>
      </GridCol>
    </Grid>
  );
}

export { Footer };

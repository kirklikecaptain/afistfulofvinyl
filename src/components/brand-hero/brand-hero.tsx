import { Box, Container, Heading, Section } from "@radix-ui/themes";
import classNames from "classnames";

import { Stack } from "../stack";
import { AFoV } from "../afov";

import css from "./brand-hero.module.css";

export function BrandHero() {
  return (
    <Section className={css.section}>
      <Container>
        <Stack align="center" justify="center" minHeight="400px" height="50vh" gap="5">
          <Box className={css.afovLogoGroup}>
            <AFoV className={classNames(css.afovLogoLayer, css.layer1)} />
            <AFoV className={classNames(css.afovLogoLayer, css.layer2)} />
            <AFoV className={classNames(css.afovLogoLayer, css.layer3)} />
            <AFoV className={classNames(css.afovLogoTop)} />
          </Box>
          <Heading className={css.heading} size="3">
            Live Sessions & Interviews
          </Heading>
        </Stack>
      </Container>
      <div className={css.scanLinesOverlay} />
    </Section>
  );
}

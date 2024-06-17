import { Box, Container, Heading, Section } from "@radix-ui/themes";

import { Stack } from "../stack";
import { AFoV } from "../afov";

import "./brand-hero.css";

export function BrandHero() {
  return (
    <Section className="brand-hero" size="4">
      <Container>
        <Stack align="center" justify="center" minHeight="400px" height="50vh" gap="5">
          <Box className="afov-logo-group">
            <AFoV className="afov-logo-layer" />
            <AFoV className="afov-logo-layer" />
            <AFoV className="afov-logo-layer" />
          </Box>
          <Heading className="brand-hero-heading" size="3">
            Interviews - Sessions - Radio
          </Heading>
        </Stack>
      </Container>
      <div className="brand-hero-overlay" />
    </Section>
  );
}

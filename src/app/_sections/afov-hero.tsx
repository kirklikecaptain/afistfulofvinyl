import { Container, Flex, Heading, Section, VisuallyHidden } from "@radix-ui/themes";

import { AFoV } from "~/components";

export function AFoVHero() {
  return (
    <Section>
      <Container>
        <Flex align="center" justify="center" minHeight="500px" height="60vh" width="100%">
          <Heading>
            <AFoV width="20vw" minWidth="200px" />
            <VisuallyHidden>A Fistful of Vinyl</VisuallyHidden>
          </Heading>
        </Flex>
      </Container>
    </Section>
  );
}

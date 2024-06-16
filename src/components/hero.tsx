import { Text, Container, Heading, Section } from "@radix-ui/themes";

import { Stack } from "./stack";

export type HeroProps = {
  heading: string;
  subheading?: string;
};

export function Hero(props: HeroProps) {
  const { heading, subheading } = props;

  return (
    <Section size="4">
      <Container>
        <Stack gap="4" align="center" style={{ textAlign: "center" }}>
          <Heading size="9">{heading}</Heading>
          {subheading && <Text as="p">{subheading}</Text>}
        </Stack>
      </Container>
    </Section>
  );
}

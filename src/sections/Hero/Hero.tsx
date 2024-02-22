import { Center, Title } from "@mantine/core";

import { Section } from "~/components";

interface HeroProps {
  title?: string;
  accentColor?: string;
  bg?: string;
}

export function Hero({
  title = "Page Title",
  accentColor,
  bg = "var(--mantine-color-gray-light)",
}: HeroProps) {
  return (
    <Section bg={accentColor || bg}>
      <Center mih={300}>
        <Title order={1}>{title}</Title>
      </Center>
    </Section>
  );
}

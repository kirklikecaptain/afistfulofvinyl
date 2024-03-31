import { Center, Title } from "@mantine/core";

import { Section } from "~/components";

export type HeroProps = {
  title?: string;
  bg?: string;
};

export function Hero(props: HeroProps) {
  const { title = "Page Title", bg = "var(--mantine-color-gray-light)" } = props;

  return (
    <Section bg={bg}>
      <Center mih={300}>
        <Title order={1}>{title}</Title>
      </Center>
    </Section>
  );
}

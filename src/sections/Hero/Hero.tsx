import { Center, Title } from "@mantine/core";

import { Section } from "~/components";

export function Hero({ title = "Page Title" }) {
  return (
    <Section>
      <Center mih={300}>
        <Title order={1}>{title}</Title>
      </Center>
    </Section>
  );
}

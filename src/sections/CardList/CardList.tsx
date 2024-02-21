import { Title, SimpleGrid, Divider } from "@mantine/core";

import { Section } from "~/components";

interface CardListProps {
  title?: string;
  children: React.ReactNode;
}

export function CardList({ title, children }: CardListProps) {
  return (
    <Section>
      {title && (
        <>
          <Title order={2}>{title}</Title>
          <Divider my="sm" />
        </>
      )}
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}>{children}</SimpleGrid>
    </Section>
  );
}

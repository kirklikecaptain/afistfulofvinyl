"use client";

import { Title, SimpleGrid, Divider } from "@mantine/core";

import { Section } from "~/components";

type CardListProps = {
  title?: string;
  cols?: 2 | 3 | 4 | 5;
  children: React.ReactNode;
};

export function CardList(props: CardListProps) {
  const { title, cols = 3, children } = props;

  return (
    <Section>
      {title && (
        <>
          <Title order={2}>{title}</Title>
          <Divider mb="xl" />
        </>
      )}
      <SimpleGrid cols={{ base: 1, sm: 2, lg: cols }}>{children}</SimpleGrid>
    </Section>
  );
}

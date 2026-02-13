import { Stack } from '@mantine/core';

import { Section } from '~/ui/components/Section';

import { CardSectionTitle, CardSectionGrid } from './CardSection.parts';

export interface CardSectionProps {
  /** @renders { CardSection.Title | CardSection.Grid } */
  children: React.ReactNode;
}

export function CardSection({ children }: CardSectionProps) {
  return (
    <Section>
      <Stack>{children}</Stack>
    </Section>
  );
}

CardSection.Title = CardSectionTitle;
CardSection.Grid = CardSectionGrid;

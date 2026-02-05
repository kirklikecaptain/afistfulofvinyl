import { Section } from '~/components/section';

import { CardSectionTitle, CardSectionGrid } from './CardSection.parts';

export interface CardSectionProps {
  /** @renders { CardSection.Title | CardSection.Grid } */
  children: React.ReactNode;
}

export function CardSection({ children }: CardSectionProps) {
  return <Section>{children}</Section>;
}

CardSection.Title = CardSectionTitle;
CardSection.Grid = CardSectionGrid;

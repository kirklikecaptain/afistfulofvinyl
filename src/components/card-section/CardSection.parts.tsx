import { SimpleGrid, Title, type SimpleGridProps, type TitleProps } from '@mantine/core';

export function CardSectionTitle({ children, ...titleProps }: TitleProps) {
  return (
    <Title order={2} {...titleProps}>
      {children}
    </Title>
  );
}

export function CardSectionGrid({ children, ...gridProps }: SimpleGridProps) {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} {...gridProps}>
      {children}
    </SimpleGrid>
  );
}

import {
  Box,
  Container,
  SimpleGrid,
  Title,
  type SimpleGridProps,
  type TitleProps,
} from '@mantine/core';

function CardListTitle({ children, ...titleProps }: TitleProps) {
  return <Title {...titleProps}>{children}</Title>;
}

function CardListContent({ children, ...gridProps }: SimpleGridProps) {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} {...gridProps}>
      {children}
    </SimpleGrid>
  );
}

function CardList({ children }: { children: React.ReactNode }) {
  return (
    <Box py="lg">
      <Container>{children}</Container>
    </Box>
  );
}

CardList.Title = CardListTitle;
CardList.Content = CardListContent;

export { CardList };

import { Card, Container, Grid, Heading, Section } from "@radix-ui/themes";

import { Stack } from "./stack";
import { Pagination, PaginationProps } from "./pagination";

export type CardSectionProps = {
  title?: string;
  columns?: "2" | "3" | "4";
  cards: React.ReactNode[];
  pagination?: PaginationProps;
};

export function CardSection(props: CardSectionProps) {
  const { title, columns = "3", cards, pagination } = props;

  return (
    <Section px="4" style={{ backgroundColor: "var(--gray-2)" }}>
      <Container>
        <Stack gap="4">
          {title && (
            <Heading as="h2" size="7">
              {title}
            </Heading>
          )}
          {cards.length ? (
            <Grid columns={{ lg: columns, sm: "2" }} gap="4">
              {cards}
            </Grid>
          ) : (
            <Card size="4" style={{ textAlign: "center" }}>
              No {title ?? "Items"} Found
            </Card>
          )}
        </Stack>
        {pagination && <Pagination {...pagination} />}
      </Container>
    </Section>
  );
}

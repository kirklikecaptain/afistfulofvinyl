import { Container, Grid, Heading, Section } from "@radix-ui/themes";

import { Stack } from "./stack";

export type CardSectionProps = {
  title: string;
  columns: "2" | "3" | "4";
  children: React.ReactNode;
};

export function CardSection(props: CardSectionProps) {
  const { title, columns = "3", children } = props;

  return (
    <Section style={{ backgroundColor: "var(--gray-2)" }}>
      <Container>
        <Stack gap="4">
          <Heading size="8">{title}</Heading>
          <Grid columns={{ lg: columns, md: "2" }} gap={{ lg: "4", md: "2" }}>
            {children}
          </Grid>
        </Stack>
      </Container>
    </Section>
  );
}

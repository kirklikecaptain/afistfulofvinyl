import { Stack, SimpleGrid, Title } from "@mantine/core";

interface GridSectionProps {
  title: string;
  children: React.ReactNode;
}

export function GridSection(props: GridSectionProps) {
  const { title = "Placeholder Title", children } = props;

  return (
    <Stack component="section" p="lg">
      <Title order={2}>{title}</Title>
      <SimpleGrid cols={3} spacing="lg">
        {children}
      </SimpleGrid>
    </Stack>
  );
}

import { Title, SimpleGrid, Box, Divider } from "@mantine/core";

interface GridSectionProps extends React.PropsWithChildren {
  title: string;
  children: React.ReactNode;
}

export function GridSection({ title, children }: GridSectionProps) {
  return (
    <Box component="section" p="md">
      <Title order={2}>{title}</Title>
      <Divider my="sm" />
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}>{children}</SimpleGrid>
    </Box>
  );
}

import { Box, Container } from '@mantine/core';

export interface SectionProps {
  children: React.ReactNode;
}

export function Section({ children }: SectionProps) {
  return (
    <Box component="section" py={{ base: 'md', md: '4rem' }}>
      <Container>{children}</Container>
    </Box>
  );
}

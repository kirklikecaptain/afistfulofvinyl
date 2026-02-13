import { Box, Container, type BoxProps } from '@mantine/core';

export interface SectionProps extends BoxProps {
  children: React.ReactNode;
}

export function Section({ children, ...props }: SectionProps) {
  return (
    <Box component="section" py={{ base: 'md', md: '3rem' }} {...props}>
      <Container>{children}</Container>
    </Box>
  );
}

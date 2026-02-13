import { Box, Container } from '@mantine/core';

export type AppFooterProps = {
  className: string;
};

export function AppLayoutFooter({ className }: AppFooterProps) {
  return (
    <Box className={className} component="footer" p="md">
      <Container>
        <Box>Footer</Box>
      </Container>
    </Box>
  );
}

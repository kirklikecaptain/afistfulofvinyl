import { Box, Title, Text } from '@mantine/core';
import { AFoVLogo } from '~/components/elements/AFoVLogo';

export function AFoVHero() {
  return (
    <Box bg="dark.9">
      <AFoVLogo w="12rem" />
      <Title order={1}>A Fistful of Vinyl</Title>
      <Text>Purveyors of punk, folk, and DIY culture off and on since 2008</Text>
    </Box>
  );
}

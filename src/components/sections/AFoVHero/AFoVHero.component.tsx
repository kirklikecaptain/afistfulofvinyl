import { Box, Text, Container, Stack } from '@mantine/core';
import { AFoVLogo } from '~/components/elements/AFoVLogo';
import css from './AFoVHero.module.css';

export function AFoVHero() {
  return (
    <Box bg="dark.9" py="xl" className={css.section}>
      <Container>
        <Stack align="center" justify="center">
          <Box className={css.afovLogoGroup}>
            <AFoVLogo className={css.layer1} />
            <AFoVLogo className={css.layer2} />
            <AFoVLogo className={css.layer3} />
            <AFoVLogo className={css.afovLogoTop} />
          </Box>
          <Text className={css.heading}>
            Purveyors of DIY music and culture off and on since 2008
          </Text>
        </Stack>
      </Container>
      <div className={css.scanLinesOverlay} />
    </Box>
  );
}

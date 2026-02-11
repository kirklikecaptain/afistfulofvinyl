import { Container, type MantineThemeOverride } from '@mantine/core';

export const components: MantineThemeOverride['components'] = {
  Container: Container.extend({
    defaultProps: {
      size: 'xl',
    },
  }),
};

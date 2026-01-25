'use client';

import { Container, createTheme } from '@mantine/core';

export const theme = createTheme({
  components: {
    Container: Container.extend({
      defaultProps: {
        size: 'xl',
      },
    }),
  },
});

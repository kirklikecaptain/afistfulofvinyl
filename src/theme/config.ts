import { createTheme, Container } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'gray',
  components: {
    Container: Container.extend({
      defaultProps: {
        size: 'xl',
      },
    }),
  },
});

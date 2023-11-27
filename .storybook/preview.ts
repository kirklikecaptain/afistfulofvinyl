import { type Preview } from "@storybook/react";

import { theme } from "../src/ui/theme/theme";

const preview: Preview = {
  parameters: {
    chakra: {
      theme,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(bg|background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

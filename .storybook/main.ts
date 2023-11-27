import { type StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@chakra-ui/storybook-addon",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  refs: {
    "@chakra-ui/react": {
      disable: true,
    },
  },
};

export default config;

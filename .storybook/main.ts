import type { StorybookConfig } from "@storybook/nextjs";
import TsConfigPathsPlugin from "tsconfig-paths-webpack-plugin";

interface Config extends StorybookConfig {
  features: StorybookConfig["features"] & {
    emotionAlias: boolean;
  };
}

const config: Config = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
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
  docs: {
    autodocs: "tag",
  },
  features: { emotionAlias: false },
  webpackFinal: async (config) => {
    if (config.module?.rules) {
      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      })
    }

    if (config.resolve) {
      config.resolve.plugins = [
        ...(config.resolve.plugins || []),
        new TsConfigPathsPlugin({
          extensions: config.resolve.extensions,
        }),
      ];
    }
    return config;
  },
};
export default config;

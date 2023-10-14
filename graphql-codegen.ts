import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ENV, CONTENTFUL_ACCESS_TOKEN } = process.env;

const contentful = `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENV}`;
const contentfulConfig = {
  headers: {
    Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
  },
};

const config: CodegenConfig = {
  schema: [
    {
      [contentful]: contentfulConfig,
    },
  ],
  overwrite: true,
  ignoreNoDocuments: true,
  documents: ["src/**/*.ts"],
  generates: {
    "src/api/generated/": {
      preset: "client",
      presetConfig: {
        avoidOptionals: true,
        skipTypename: true,
      },
    },
  },
};

export default config;

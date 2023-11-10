import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ENV, CONTENTFUL_ACCESS_TOKEN } = process.env;

const config: CodegenConfig = {
  schema: [
    `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENV}?access_token=${CONTENTFUL_ACCESS_TOKEN}`,
    "./src/api/schemas/*.graphql",
  ],
  ignoreNoDocuments: true,
  documents: ["./src/**/*.ts", "./src/api/documents/*.graphql"],
  generates: {
    "./src/api/__generated__/": {
      preset: "client",
    },
  },
  hooks: {
    afterOneFileWrite: ["eslint --fix"],
  },
};

export default config;

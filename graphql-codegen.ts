import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ENV, CONTENTFUL_ACCESS_TOKEN } = process.env;

const contentfulSchema = `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENV}?access_token=${CONTENTFUL_ACCESS_TOKEN}`;

const config: CodegenConfig = {
  schema: contentfulSchema,
  ignoreNoDocuments: true,
  documents: ["src/**/*.ts"],
  generates: {
    "./src/api/graphql/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  hooks: {
    afterOneFileWrite: ["eslint --fix"],
  },
};

export default config;

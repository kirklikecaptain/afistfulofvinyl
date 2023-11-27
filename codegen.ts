import { type CodegenConfig } from "@graphql-codegen/cli";

import { contentful } from "./src/api/client/contentful";

const contentfulSchema = {
  [contentful.graphqlEndpoint]: {
    headers: {
      Authorization: contentful.authorizationHeader,
    },
  },
};

const config: CodegenConfig = {
  ignoreNoDocuments: true,
  overwrite: true,
  schema: [contentfulSchema, "./src/api/graphql/schema.graphql"],
  documents: ["./src/api/graphql/fragments.graphql", "./src/api/**/*.ts"],
  generates: {
    "./src/api/graphql/generated/": {
      preset: "client",
      presetConfig: {
        avoidOptionals: true,
        nonOptionalTypename: true,
        fragmentMasking: false,
      },
    },
  },
  hooks: {
    afterOneFileWrite: ["eslint --fix"],
  },
};

export default config;

import { type CodegenConfig } from "@graphql-codegen/cli";
import { contentful } from "./src/api/client/contentful";

const localSchema = "./src/api/graphql/schema.graphql";
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
  schema: [contentfulSchema, localSchema],
  documents: ["./src/api/graphql/queries.graphql"],
  generates: {
    "./src/api/graphql/generated/": {
      preset: "client",
      presetConfig: {
        avoidOptionals: true,
        fragmentMasking: { unmaskFunctionName: "getFragmentData" },
      },
    },
  },
  hooks: {
    afterOneFileWrite: ["eslint --fix"],
  },
};

export default config;

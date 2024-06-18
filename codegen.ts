import type { CodegenConfig } from "@graphql-codegen/cli";

import { contentfulApiUrl, contentfulHeaders } from "./src/graphql/queries/client";

const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  schema: {
    [contentfulApiUrl]: {
      headers: contentfulHeaders,
    },
  },
  documents: "src/graphql/documents/documents.graphql",
  generates: {
    "src/graphql/__generated__/": {
      preset: "client",
      config: {
        avoidOptionals: true,
      },
    },
  },
  hooks: { afterAllFileWrite: ["prettier --write"] },
};

export default config;

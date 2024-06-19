import type { CodegenConfig } from "@graphql-codegen/cli";

import { contentfulApiUrl, contentfulHeaders } from "./src/graphql/client";

const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  schema: {
    [contentfulApiUrl]: {
      headers: contentfulHeaders,
    },
  },
  generates: {
    "src/graphql/__generated__/": {
      preset: "client",
      documents: ["src/**/*.ts", "src/**/*.graphql"],
      config: {
        // defaultScalarType: "unknown",
        nonOptionalTypename: true,
        avoidOptionals: true,
      },
      presetConfig: {
        fragmentMasking: false,
      },
    },
  },
  hooks: { afterAllFileWrite: ["prettier --write"] },
};

export default config;

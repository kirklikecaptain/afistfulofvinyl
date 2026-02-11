import { type CodegenConfig } from '@graphql-codegen/cli';
import { loadEnvConfig } from '@next/env';

loadEnvConfig(process.cwd());

const qglRoot = './src/lib/contentful/generated/';

export const generatedSchemaAst = qglRoot + 'schema.graphql';
export const queryDocuments = ['./src/**/*.{graphql,ts}', `!${generatedSchemaAst}`];

const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  schema: {
    [process.env.NEXT_PUBLIC_CONTENTFUL_API_URL!]: {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!}`,
      },
    },
  },
  documents: queryDocuments,
  generates: {
    [generatedSchemaAst]: {
      plugins: ['schema-ast'],
      config: {
        includeDirectives: true,
      },
    },
    [qglRoot]: {
      preset: 'client',
      presetConfig: {
        fragmentMasking: false,
      },
      config: {
        defaultScalarType: 'unknown',
        nonOptionalTypename: true,
        skipTypeNameForRoot: true,
        useTypeImports: true,
        dedupeFragments: true,
        preResolveTypes: true,
        inlineFragmentTypes: 'combine',
        avoidOptionals: true,
      },
    },
  },
};

export default config;

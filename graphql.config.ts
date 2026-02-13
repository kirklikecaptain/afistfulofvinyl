import { type IGraphQLConfig } from 'graphql-config';

import { generatedSchemaAst, queryDocuments } from './graphql.codegen';

const config: IGraphQLConfig = {
  schema: generatedSchemaAst,
  documents: queryDocuments,
};

export default config;

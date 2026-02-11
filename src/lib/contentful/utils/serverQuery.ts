import type { AnyVariables, TypedDocumentNode } from '@urql/core';

import { createServerClient, type ServerClientOptions } from './createServerClient';

export type ClientQueryParams<Doc, Vars extends AnyVariables> = {
  document: TypedDocumentNode<Doc, Vars>;
  variables: Vars;
  options?: ServerClientOptions;
};

export async function serverQuery<Doc, Vars extends AnyVariables>({
  document,
  variables,
  options,
}: ClientQueryParams<Doc, Vars>): Promise<Doc> {
  const client = createServerClient(options);
  const res = await client.query(document, variables).toPromise();

  if (res.error) throw res.error;

  if (!res.data) throw new Error('No data returned from Contentful');

  return res.data;
}

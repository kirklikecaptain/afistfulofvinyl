import type { AnyVariables, TypedDocumentNode } from '@urql/core';
import { makeServerClient, type ServerClientOptions } from './rsc.urql';

export type ClientQueryParams<Doc, Vars extends AnyVariables> = {
  document: TypedDocumentNode<Doc, Vars>;
  variables: Vars;
  options?: ServerClientOptions;
};

export async function rscQuery<Doc, Vars extends AnyVariables>({
  document,
  variables,
  options,
}: ClientQueryParams<Doc, Vars>): Promise<Doc> {
  const client = makeServerClient(options);
  const res = await client.query(document, variables).toPromise();

  if (res.error) throw res.error;

  if (!res.data) throw new Error('No data returned from Contentful');

  return res.data;
}

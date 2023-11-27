import { OperationVariables } from "@apollo/client";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";

import { Maybe, apollo } from "~/api";

export const nullFilter = <T extends unknown>(x: Maybe<T>): x is T => x !== null;

export const removeNulls = <T extends unknown>(x: Maybe<T>[] = []): T[] => x.filter(nullFilter);

export async function get<
  TDocument = any,
  TVariables extends OperationVariables = OperationVariables,
>(query: TypedDocumentNode<TDocument, TVariables>, variables?: TVariables): Promise<TDocument> {
  const { data, error } = await apollo.getClient().query({ query, variables });

  if (error) {
    throw error;
  }

  return data;
}

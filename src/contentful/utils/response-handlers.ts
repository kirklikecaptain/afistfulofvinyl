import type { Maybe } from '../__generated__/graphql';

export function isNonNullable<I>(item: Maybe<I>): item is NonNullable<I> {
  return item != null && item !== undefined;
}

export function assertCollectionItems<I>(items: Maybe<I>[] | undefined): I[] {
  return items?.filter(isNonNullable) ?? [];
}

import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeContributorFields {
  name: EntryFieldTypes.Symbol;
  roles: EntryFieldTypes.Symbol;
  photo?: EntryFieldTypes.AssetLink;
  email?: EntryFieldTypes.Symbol;
  instagram?: EntryFieldTypes.Symbol;
  summary?: EntryFieldTypes.RichText;
}

export type TypeContributorSkeleton = EntrySkeletonType<TypeContributorFields, "contributor">;
export type TypeContributor<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeContributorSkeleton,
  Modifiers,
  Locales
>;

export function isTypeContributor<Modifiers extends ChainModifiers, Locales extends LocaleCode>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeContributor<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === "contributor";
}

import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypePageFields {
  name: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  metaTitle: EntryFieldTypes.Symbol;
  metaDescription: EntryFieldTypes.Symbol;
  metaImage?: EntryFieldTypes.AssetLink;
}

export type TypePageSkeleton = EntrySkeletonType<TypePageFields, "page">;
export type TypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypePageSkeleton,
  Modifiers,
  Locales
>;

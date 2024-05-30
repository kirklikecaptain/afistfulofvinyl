import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeVenueFields {
    name: EntryFieldTypes.Symbol;
    about?: EntryFieldTypes.Text;
    location?: EntryFieldTypes.Symbol;
    logo?: EntryFieldTypes.AssetLink;
    slug: EntryFieldTypes.Symbol;
}

export type TypeVenueSkeleton = EntrySkeletonType<TypeVenueFields, "venue">;
export type TypeVenue<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeVenueSkeleton, Modifiers, Locales>;

export function isTypeVenue<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeVenue<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'venue'
}

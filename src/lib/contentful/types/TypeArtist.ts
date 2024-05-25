import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeArtistFields {
    name: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    accentColor?: EntryFieldTypes.Symbol;
    photo?: EntryFieldTypes.AssetLink;
    shortBio?: EntryFieldTypes.Symbol;
    bio?: EntryFieldTypes.RichText;
    websiteUrl?: EntryFieldTypes.Symbol;
    twitterUrl?: EntryFieldTypes.Symbol;
    facebookUrl?: EntryFieldTypes.Symbol;
    instagramUrl?: EntryFieldTypes.Symbol;
    tiktokUrl?: EntryFieldTypes.Symbol;
    bandcampUrl?: EntryFieldTypes.Symbol;
    youtubeUrl?: EntryFieldTypes.Symbol;
    soundcloudUrl?: EntryFieldTypes.Symbol;
}

export type TypeArtistSkeleton = EntrySkeletonType<TypeArtistFields, "artist">;
export type TypeArtist<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeArtistSkeleton, Modifiers, Locales>;

export function isTypeArtist<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeArtist<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'artist'
}

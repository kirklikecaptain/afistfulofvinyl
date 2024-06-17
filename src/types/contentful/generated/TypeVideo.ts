import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

import type { TypeArtistSkeleton } from "./TypeArtist";
import type { TypeContributorSkeleton } from "./TypeContributor";
import type { TypeVenueSkeleton } from "./TypeVenue";

export interface TypeVideoFields {
    title: EntryFieldTypes.Symbol;
    subtitle?: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    videoUrl: EntryFieldTypes.Symbol;
    videoType: EntryFieldTypes.Symbol<"Cover" | "Interview" | "Song">;
    uploadDate: EntryFieldTypes.Date;
    thumbnail: EntryFieldTypes.AssetLink;
    venue?: EntryFieldTypes.EntryLink<TypeVenueSkeleton>;
    artist: EntryFieldTypes.EntryLink<TypeArtistSkeleton>;
    shortDescription?: EntryFieldTypes.Symbol;
    longDescription?: EntryFieldTypes.RichText;
    contributors?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeContributorSkeleton>>;
}

export type TypeVideoSkeleton = EntrySkeletonType<TypeVideoFields, "video">;
export type TypeVideo<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeVideoSkeleton, Modifiers, Locales>;

export function isTypeVideo<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeVideo<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'video'
}

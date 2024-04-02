import type { Asset } from "contentful";

import type {
  TypeArtist,
  TypeBlogPost,
  TypeContributor,
  TypePage,
  TypeVenue,
  TypeVideo,
} from "./generated";

export type DefaultModifier = "WITHOUT_UNRESOLVABLE_LINKS";
export type LinkedAsset = Asset<DefaultModifier, string>;
export type VideoEntry = TypeVideo<DefaultModifier, string>;
export type ArtistEntry = TypeArtist<DefaultModifier, string>;
export type ContributorEntry = TypeContributor<DefaultModifier, string>;
export type VenueEntry = TypeVenue<DefaultModifier, string>;
export type PageEntry = TypePage<DefaultModifier, string>;
export type BlogPostEntry = TypeBlogPost<DefaultModifier, string>;

export type WithId<T> = T & { id: string };
export type Slug = string;

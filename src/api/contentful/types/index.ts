import type { Asset } from "contentful";

import type {
  TypeArtist,
  TypeBlogPost,
  TypeContributor,
  TypePage,
  TypeVenue,
  TypeVideo,
} from "./generated";

type Modifier = "WITHOUT_UNRESOLVABLE_LINKS";

export type LinkedAsset = Asset<Modifier, string>;
export type VideoEntry = TypeVideo<Modifier, string>;
export type ArtistEntry = TypeArtist<Modifier, string>;
export type ContributorEntry = TypeContributor<Modifier, string>;
export type VenueEntry = TypeVenue<Modifier, string>;
export type PageEntry = TypePage<Modifier, string>;
export type BlogPostEntry = TypeBlogPost<Modifier, string>;

export type WithId<T> = T & { id: string };

import type { Asset } from "contentful";

import type { TypeArtist, TypeBlogPost, TypeContributor, TypePage, TypeVenue, TypeVideo } from "./generated";

export type DefaultModifier = "WITHOUT_UNRESOLVABLE_LINKS";

export type LinkedAsset = Asset<DefaultModifier>;
export type VideoEntry = TypeVideo<DefaultModifier>;
export type ArtistEntry = TypeArtist<DefaultModifier>;
export type ContributorEntry = TypeContributor<DefaultModifier>;
export type VenueEntry = TypeVenue<DefaultModifier>;
export type PageEntry = TypePage<DefaultModifier>;
export type BlogPostEntry = TypeBlogPost<DefaultModifier>;

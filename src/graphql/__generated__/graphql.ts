/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: { input: any; output: any };
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: { input: any; output: any };
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: { input: any; output: any };
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any };
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: { input: any; output: any };
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/artist) */
export type Artist = Entry & {
  __typename: "Artist";
  accentColor: Maybe<Scalars["String"]["output"]>;
  bandcampUrl: Maybe<Scalars["String"]["output"]>;
  bio: Maybe<ArtistBio>;
  contentfulMetadata: ContentfulMetadata;
  facebookUrl: Maybe<Scalars["String"]["output"]>;
  instagramUrl: Maybe<Scalars["String"]["output"]>;
  linkedFrom: Maybe<ArtistLinkingCollections>;
  name: Maybe<Scalars["String"]["output"]>;
  photo: Maybe<Asset>;
  shortBio: Maybe<Scalars["String"]["output"]>;
  slug: Maybe<Scalars["String"]["output"]>;
  soundcloudUrl: Maybe<Scalars["String"]["output"]>;
  sys: Sys;
  tiktokUrl: Maybe<Scalars["String"]["output"]>;
  twitterUrl: Maybe<Scalars["String"]["output"]>;
  websiteUrl: Maybe<Scalars["String"]["output"]>;
  youtubeUrl: Maybe<Scalars["String"]["output"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/artist) */
export type ArtistAccentColorArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/artist) */
export type ArtistBandcampUrlArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/artist) */
export type ArtistBioArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/artist) */
export type ArtistFacebookUrlArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/artist) */
export type ArtistInstagramUrlArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/artist) */
export type ArtistLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/artist) */
export type ArtistNameArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/artist) */
export type ArtistPhotoArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/artist) */
export type ArtistShortBioArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/artist) */
export type ArtistSlugArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/artist) */
export type ArtistSoundcloudUrlArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/artist) */
export type ArtistTiktokUrlArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/artist) */
export type ArtistTwitterUrlArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/artist) */
export type ArtistWebsiteUrlArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/artist) */
export type ArtistYoutubeUrlArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

export type ArtistBio = {
  __typename: "ArtistBio";
  json: Scalars["JSON"]["output"];
  links: ArtistBioLinks;
};

export type ArtistBioAssets = {
  __typename: "ArtistBioAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ArtistBioEntries = {
  __typename: "ArtistBioEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ArtistBioLinks = {
  __typename: "ArtistBioLinks";
  assets: ArtistBioAssets;
  entries: ArtistBioEntries;
  resources: ArtistBioResources;
};

export type ArtistBioResources = {
  __typename: "ArtistBioResources";
  block: Array<ArtistBioResourcesBlock>;
  hyperlink: Array<ArtistBioResourcesHyperlink>;
  inline: Array<ArtistBioResourcesInline>;
};

export type ArtistBioResourcesBlock = ResourceLink & {
  __typename: "ArtistBioResourcesBlock";
  sys: ResourceSys;
};

export type ArtistBioResourcesHyperlink = ResourceLink & {
  __typename: "ArtistBioResourcesHyperlink";
  sys: ResourceSys;
};

export type ArtistBioResourcesInline = ResourceLink & {
  __typename: "ArtistBioResourcesInline";
  sys: ResourceSys;
};

export type ArtistCollection = {
  __typename: "ArtistCollection";
  items: Array<Maybe<Artist>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type ArtistFilter = {
  AND: InputMaybe<Array<InputMaybe<ArtistFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ArtistFilter>>>;
  accentColor: InputMaybe<Scalars["String"]["input"]>;
  accentColor_contains: InputMaybe<Scalars["String"]["input"]>;
  accentColor_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  accentColor_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  accentColor_not: InputMaybe<Scalars["String"]["input"]>;
  accentColor_not_contains: InputMaybe<Scalars["String"]["input"]>;
  accentColor_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  bandcampUrl: InputMaybe<Scalars["String"]["input"]>;
  bandcampUrl_contains: InputMaybe<Scalars["String"]["input"]>;
  bandcampUrl_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  bandcampUrl_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  bandcampUrl_not: InputMaybe<Scalars["String"]["input"]>;
  bandcampUrl_not_contains: InputMaybe<Scalars["String"]["input"]>;
  bandcampUrl_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  bio_contains: InputMaybe<Scalars["String"]["input"]>;
  bio_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  bio_not_contains: InputMaybe<Scalars["String"]["input"]>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  facebookUrl: InputMaybe<Scalars["String"]["input"]>;
  facebookUrl_contains: InputMaybe<Scalars["String"]["input"]>;
  facebookUrl_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  facebookUrl_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  facebookUrl_not: InputMaybe<Scalars["String"]["input"]>;
  facebookUrl_not_contains: InputMaybe<Scalars["String"]["input"]>;
  facebookUrl_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  instagramUrl: InputMaybe<Scalars["String"]["input"]>;
  instagramUrl_contains: InputMaybe<Scalars["String"]["input"]>;
  instagramUrl_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  instagramUrl_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  instagramUrl_not: InputMaybe<Scalars["String"]["input"]>;
  instagramUrl_not_contains: InputMaybe<Scalars["String"]["input"]>;
  instagramUrl_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name: InputMaybe<Scalars["String"]["input"]>;
  name_contains: InputMaybe<Scalars["String"]["input"]>;
  name_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  name_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name_not: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains: InputMaybe<Scalars["String"]["input"]>;
  name_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  photo_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  shortBio: InputMaybe<Scalars["String"]["input"]>;
  shortBio_contains: InputMaybe<Scalars["String"]["input"]>;
  shortBio_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  shortBio_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  shortBio_not: InputMaybe<Scalars["String"]["input"]>;
  shortBio_not_contains: InputMaybe<Scalars["String"]["input"]>;
  shortBio_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug: InputMaybe<Scalars["String"]["input"]>;
  slug_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  soundcloudUrl: InputMaybe<Scalars["String"]["input"]>;
  soundcloudUrl_contains: InputMaybe<Scalars["String"]["input"]>;
  soundcloudUrl_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  soundcloudUrl_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  soundcloudUrl_not: InputMaybe<Scalars["String"]["input"]>;
  soundcloudUrl_not_contains: InputMaybe<Scalars["String"]["input"]>;
  soundcloudUrl_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys: InputMaybe<SysFilter>;
  tiktokUrl: InputMaybe<Scalars["String"]["input"]>;
  tiktokUrl_contains: InputMaybe<Scalars["String"]["input"]>;
  tiktokUrl_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  tiktokUrl_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  tiktokUrl_not: InputMaybe<Scalars["String"]["input"]>;
  tiktokUrl_not_contains: InputMaybe<Scalars["String"]["input"]>;
  tiktokUrl_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  twitterUrl: InputMaybe<Scalars["String"]["input"]>;
  twitterUrl_contains: InputMaybe<Scalars["String"]["input"]>;
  twitterUrl_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  twitterUrl_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  twitterUrl_not: InputMaybe<Scalars["String"]["input"]>;
  twitterUrl_not_contains: InputMaybe<Scalars["String"]["input"]>;
  twitterUrl_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  websiteUrl: InputMaybe<Scalars["String"]["input"]>;
  websiteUrl_contains: InputMaybe<Scalars["String"]["input"]>;
  websiteUrl_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  websiteUrl_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  websiteUrl_not: InputMaybe<Scalars["String"]["input"]>;
  websiteUrl_not_contains: InputMaybe<Scalars["String"]["input"]>;
  websiteUrl_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  youtubeUrl: InputMaybe<Scalars["String"]["input"]>;
  youtubeUrl_contains: InputMaybe<Scalars["String"]["input"]>;
  youtubeUrl_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  youtubeUrl_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  youtubeUrl_not: InputMaybe<Scalars["String"]["input"]>;
  youtubeUrl_not_contains: InputMaybe<Scalars["String"]["input"]>;
  youtubeUrl_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ArtistLinkingCollections = {
  __typename: "ArtistLinkingCollections";
  entryCollection: Maybe<EntryCollection>;
  videoCollection: Maybe<VideoCollection>;
};

export type ArtistLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ArtistLinkingCollectionsVideoCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<Array<InputMaybe<ArtistLinkingCollectionsVideoCollectionOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum ArtistLinkingCollectionsVideoCollectionOrder {
  ShortDescriptionAsc = "shortDescription_ASC",
  ShortDescriptionDesc = "shortDescription_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SubtitleAsc = "subtitle_ASC",
  SubtitleDesc = "subtitle_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UploadDateAsc = "uploadDate_ASC",
  UploadDateDesc = "uploadDate_DESC",
  VideoTypeAsc = "videoType_ASC",
  VideoTypeDesc = "videoType_DESC",
  VideoUrlAsc = "videoUrl_ASC",
  VideoUrlDesc = "videoUrl_DESC",
}

export enum ArtistOrder {
  AccentColorAsc = "accentColor_ASC",
  AccentColorDesc = "accentColor_DESC",
  BandcampUrlAsc = "bandcampUrl_ASC",
  BandcampUrlDesc = "bandcampUrl_DESC",
  FacebookUrlAsc = "facebookUrl_ASC",
  FacebookUrlDesc = "facebookUrl_DESC",
  InstagramUrlAsc = "instagramUrl_ASC",
  InstagramUrlDesc = "instagramUrl_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  ShortBioAsc = "shortBio_ASC",
  ShortBioDesc = "shortBio_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SoundcloudUrlAsc = "soundcloudUrl_ASC",
  SoundcloudUrlDesc = "soundcloudUrl_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TiktokUrlAsc = "tiktokUrl_ASC",
  TiktokUrlDesc = "tiktokUrl_DESC",
  TwitterUrlAsc = "twitterUrl_ASC",
  TwitterUrlDesc = "twitterUrl_DESC",
  WebsiteUrlAsc = "websiteUrl_ASC",
  WebsiteUrlDesc = "websiteUrl_DESC",
  YoutubeUrlAsc = "youtubeUrl_ASC",
  YoutubeUrlDesc = "youtubeUrl_DESC",
}

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename: "Asset";
  contentType: Maybe<Scalars["String"]["output"]>;
  contentfulMetadata: ContentfulMetadata;
  description: Maybe<Scalars["String"]["output"]>;
  fileName: Maybe<Scalars["String"]["output"]>;
  height: Maybe<Scalars["Int"]["output"]>;
  linkedFrom: Maybe<AssetLinkingCollections>;
  size: Maybe<Scalars["Int"]["output"]>;
  sys: Sys;
  title: Maybe<Scalars["String"]["output"]>;
  url: Maybe<Scalars["String"]["output"]>;
  width: Maybe<Scalars["Int"]["output"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
  transform: InputMaybe<ImageTransformOptions>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

export type AssetCollection = {
  __typename: "AssetCollection";
  items: Array<Maybe<Asset>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type AssetFilter = {
  AND: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType: InputMaybe<Scalars["String"]["input"]>;
  contentType_contains: InputMaybe<Scalars["String"]["input"]>;
  contentType_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  contentType_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  contentType_not: InputMaybe<Scalars["String"]["input"]>;
  contentType_not_contains: InputMaybe<Scalars["String"]["input"]>;
  contentType_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  description: InputMaybe<Scalars["String"]["input"]>;
  description_contains: InputMaybe<Scalars["String"]["input"]>;
  description_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  description_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  description_not: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains: InputMaybe<Scalars["String"]["input"]>;
  description_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fileName: InputMaybe<Scalars["String"]["input"]>;
  fileName_contains: InputMaybe<Scalars["String"]["input"]>;
  fileName_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  fileName_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  fileName_not: InputMaybe<Scalars["String"]["input"]>;
  fileName_not_contains: InputMaybe<Scalars["String"]["input"]>;
  fileName_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  height: InputMaybe<Scalars["Int"]["input"]>;
  height_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  height_gt: InputMaybe<Scalars["Int"]["input"]>;
  height_gte: InputMaybe<Scalars["Int"]["input"]>;
  height_in: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  height_lt: InputMaybe<Scalars["Int"]["input"]>;
  height_lte: InputMaybe<Scalars["Int"]["input"]>;
  height_not: InputMaybe<Scalars["Int"]["input"]>;
  height_not_in: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  size: InputMaybe<Scalars["Int"]["input"]>;
  size_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  size_gt: InputMaybe<Scalars["Int"]["input"]>;
  size_gte: InputMaybe<Scalars["Int"]["input"]>;
  size_in: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  size_lt: InputMaybe<Scalars["Int"]["input"]>;
  size_lte: InputMaybe<Scalars["Int"]["input"]>;
  size_not: InputMaybe<Scalars["Int"]["input"]>;
  size_not_in: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars["String"]["input"]>;
  title_contains: InputMaybe<Scalars["String"]["input"]>;
  title_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains: InputMaybe<Scalars["String"]["input"]>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  url: InputMaybe<Scalars["String"]["input"]>;
  url_contains: InputMaybe<Scalars["String"]["input"]>;
  url_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  url_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  url_not: InputMaybe<Scalars["String"]["input"]>;
  url_not_contains: InputMaybe<Scalars["String"]["input"]>;
  url_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  width: InputMaybe<Scalars["Int"]["input"]>;
  width_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  width_gt: InputMaybe<Scalars["Int"]["input"]>;
  width_gte: InputMaybe<Scalars["Int"]["input"]>;
  width_in: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  width_lt: InputMaybe<Scalars["Int"]["input"]>;
  width_lte: InputMaybe<Scalars["Int"]["input"]>;
  width_not: InputMaybe<Scalars["Int"]["input"]>;
  width_not_in: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
};

export type AssetLinkingCollections = {
  __typename: "AssetLinkingCollections";
  artistCollection: Maybe<ArtistCollection>;
  contributorCollection: Maybe<ContributorCollection>;
  entryCollection: Maybe<EntryCollection>;
  pageCollection: Maybe<PageCollection>;
  venueCollection: Maybe<VenueCollection>;
  videoCollection: Maybe<VideoCollection>;
};

export type AssetLinkingCollectionsArtistCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AssetLinkingCollectionsContributorCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AssetLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AssetLinkingCollectionsVenueCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AssetLinkingCollectionsVideoCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum AssetOrder {
  ContentTypeAsc = "contentType_ASC",
  ContentTypeDesc = "contentType_DESC",
  FileNameAsc = "fileName_ASC",
  FileNameDesc = "fileName_DESC",
  HeightAsc = "height_ASC",
  HeightDesc = "height_DESC",
  SizeAsc = "size_ASC",
  SizeDesc = "size_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
  WidthAsc = "width_ASC",
  WidthDesc = "width_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/blogPost) */
export type BlogPost = Entry & {
  __typename: "BlogPost";
  content: Maybe<BlogPostContent>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom: Maybe<BlogPostLinkingCollections>;
  slug: Maybe<Scalars["String"]["output"]>;
  sys: Sys;
  title: Maybe<Scalars["String"]["output"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/blogPost) */
export type BlogPostContentArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/blogPost) */
export type BlogPostLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/blogPost) */
export type BlogPostSlugArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/blogPost) */
export type BlogPostTitleArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

export type BlogPostCollection = {
  __typename: "BlogPostCollection";
  items: Array<Maybe<BlogPost>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type BlogPostContent = {
  __typename: "BlogPostContent";
  json: Scalars["JSON"]["output"];
  links: BlogPostContentLinks;
};

export type BlogPostContentAssets = {
  __typename: "BlogPostContentAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type BlogPostContentEntries = {
  __typename: "BlogPostContentEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type BlogPostContentLinks = {
  __typename: "BlogPostContentLinks";
  assets: BlogPostContentAssets;
  entries: BlogPostContentEntries;
  resources: BlogPostContentResources;
};

export type BlogPostContentResources = {
  __typename: "BlogPostContentResources";
  block: Array<BlogPostContentResourcesBlock>;
  hyperlink: Array<BlogPostContentResourcesHyperlink>;
  inline: Array<BlogPostContentResourcesInline>;
};

export type BlogPostContentResourcesBlock = ResourceLink & {
  __typename: "BlogPostContentResourcesBlock";
  sys: ResourceSys;
};

export type BlogPostContentResourcesHyperlink = ResourceLink & {
  __typename: "BlogPostContentResourcesHyperlink";
  sys: ResourceSys;
};

export type BlogPostContentResourcesInline = ResourceLink & {
  __typename: "BlogPostContentResourcesInline";
  sys: ResourceSys;
};

export type BlogPostFilter = {
  AND: InputMaybe<Array<InputMaybe<BlogPostFilter>>>;
  OR: InputMaybe<Array<InputMaybe<BlogPostFilter>>>;
  content_contains: InputMaybe<Scalars["String"]["input"]>;
  content_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  content_not_contains: InputMaybe<Scalars["String"]["input"]>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  slug: InputMaybe<Scalars["String"]["input"]>;
  slug_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars["String"]["input"]>;
  title_contains: InputMaybe<Scalars["String"]["input"]>;
  title_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains: InputMaybe<Scalars["String"]["input"]>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type BlogPostLinkingCollections = {
  __typename: "BlogPostLinkingCollections";
  entryCollection: Maybe<EntryCollection>;
};

export type BlogPostLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum BlogPostOrder {
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type ContentfulMetadata = {
  __typename: "ContentfulMetadata";
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_contains_none: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_contains_some: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename: "ContentfulTag";
  id: Maybe<Scalars["String"]["output"]>;
  name: Maybe<Scalars["String"]["output"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/contributor) */
export type Contributor = Entry & {
  __typename: "Contributor";
  contentfulMetadata: ContentfulMetadata;
  email: Maybe<Scalars["String"]["output"]>;
  instagram: Maybe<Scalars["String"]["output"]>;
  linkedFrom: Maybe<ContributorLinkingCollections>;
  name: Maybe<Scalars["String"]["output"]>;
  photo: Maybe<Asset>;
  roles: Maybe<Scalars["String"]["output"]>;
  summary: Maybe<ContributorSummary>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/contributor) */
export type ContributorEmailArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/contributor) */
export type ContributorInstagramArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/contributor) */
export type ContributorLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/contributor) */
export type ContributorNameArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/contributor) */
export type ContributorPhotoArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/contributor) */
export type ContributorRolesArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/contributor) */
export type ContributorSummaryArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

export type ContributorCollection = {
  __typename: "ContributorCollection";
  items: Array<Maybe<Contributor>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type ContributorFilter = {
  AND: InputMaybe<Array<InputMaybe<ContributorFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ContributorFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  email: InputMaybe<Scalars["String"]["input"]>;
  email_contains: InputMaybe<Scalars["String"]["input"]>;
  email_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  email_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  email_not: InputMaybe<Scalars["String"]["input"]>;
  email_not_contains: InputMaybe<Scalars["String"]["input"]>;
  email_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  instagram: InputMaybe<Scalars["String"]["input"]>;
  instagram_contains: InputMaybe<Scalars["String"]["input"]>;
  instagram_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  instagram_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  instagram_not: InputMaybe<Scalars["String"]["input"]>;
  instagram_not_contains: InputMaybe<Scalars["String"]["input"]>;
  instagram_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name: InputMaybe<Scalars["String"]["input"]>;
  name_contains: InputMaybe<Scalars["String"]["input"]>;
  name_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  name_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name_not: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains: InputMaybe<Scalars["String"]["input"]>;
  name_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  photo_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  roles: InputMaybe<Scalars["String"]["input"]>;
  roles_contains: InputMaybe<Scalars["String"]["input"]>;
  roles_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  roles_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  roles_not: InputMaybe<Scalars["String"]["input"]>;
  roles_not_contains: InputMaybe<Scalars["String"]["input"]>;
  roles_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  summary_contains: InputMaybe<Scalars["String"]["input"]>;
  summary_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  summary_not_contains: InputMaybe<Scalars["String"]["input"]>;
  sys: InputMaybe<SysFilter>;
};

export type ContributorLinkingCollections = {
  __typename: "ContributorLinkingCollections";
  entryCollection: Maybe<EntryCollection>;
  videoCollection: Maybe<VideoCollection>;
};

export type ContributorLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ContributorLinkingCollectionsVideoCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<Array<InputMaybe<ContributorLinkingCollectionsVideoCollectionOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum ContributorLinkingCollectionsVideoCollectionOrder {
  ShortDescriptionAsc = "shortDescription_ASC",
  ShortDescriptionDesc = "shortDescription_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SubtitleAsc = "subtitle_ASC",
  SubtitleDesc = "subtitle_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UploadDateAsc = "uploadDate_ASC",
  UploadDateDesc = "uploadDate_DESC",
  VideoTypeAsc = "videoType_ASC",
  VideoTypeDesc = "videoType_DESC",
  VideoUrlAsc = "videoUrl_ASC",
  VideoUrlDesc = "videoUrl_DESC",
}

export enum ContributorOrder {
  EmailAsc = "email_ASC",
  EmailDesc = "email_DESC",
  InstagramAsc = "instagram_ASC",
  InstagramDesc = "instagram_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  RolesAsc = "roles_ASC",
  RolesDesc = "roles_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export type ContributorSummary = {
  __typename: "ContributorSummary";
  json: Scalars["JSON"]["output"];
  links: ContributorSummaryLinks;
};

export type ContributorSummaryAssets = {
  __typename: "ContributorSummaryAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ContributorSummaryEntries = {
  __typename: "ContributorSummaryEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ContributorSummaryLinks = {
  __typename: "ContributorSummaryLinks";
  assets: ContributorSummaryAssets;
  entries: ContributorSummaryEntries;
  resources: ContributorSummaryResources;
};

export type ContributorSummaryResources = {
  __typename: "ContributorSummaryResources";
  block: Array<ContributorSummaryResourcesBlock>;
  hyperlink: Array<ContributorSummaryResourcesHyperlink>;
  inline: Array<ContributorSummaryResourcesInline>;
};

export type ContributorSummaryResourcesBlock = ResourceLink & {
  __typename: "ContributorSummaryResourcesBlock";
  sys: ResourceSys;
};

export type ContributorSummaryResourcesHyperlink = ResourceLink & {
  __typename: "ContributorSummaryResourcesHyperlink";
  sys: ResourceSys;
};

export type ContributorSummaryResourcesInline = ResourceLink & {
  __typename: "ContributorSummaryResourcesInline";
  sys: ResourceSys;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename: "EntryCollection";
  items: Array<Maybe<Entry>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type EntryFilter = {
  AND: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  sys: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export enum ImageFormat {
  Avif = "AVIF",
  /** JPG image format. */
  Jpg = "JPG",
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = "JPG_PROGRESSIVE",
  /** PNG image format */
  Png = "PNG",
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = "PNG8",
  /** WebP image format. */
  Webp = "WEBP",
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = "BOTTOM",
  /** Focus the resizing on the bottom left. */
  BottomLeft = "BOTTOM_LEFT",
  /** Focus the resizing on the bottom right. */
  BottomRight = "BOTTOM_RIGHT",
  /** Focus the resizing on the center. */
  Center = "CENTER",
  /** Focus the resizing on the largest face. */
  Face = "FACE",
  /** Focus the resizing on the area containing all the faces. */
  Faces = "FACES",
  /** Focus the resizing on the left. */
  Left = "LEFT",
  /** Focus the resizing on the right. */
  Right = "RIGHT",
  /** Focus the resizing on the top. */
  Top = "TOP",
  /** Focus the resizing on the top left. */
  TopLeft = "TOP_LEFT",
  /** Focus the resizing on the top right. */
  TopRight = "TOP_RIGHT",
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = "CROP",
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = "FILL",
  /** Resizes the image to fit into the specified dimensions. */
  Fit = "FIT",
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = "PAD",
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = "SCALE",
  /** Creates a thumbnail from the image. */
  Thumb = "THUMB",
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor: InputMaybe<Scalars["HexColor"]["input"]>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius: InputMaybe<Scalars["Int"]["input"]>;
  /** Desired image format. Defaults to the original image format. */
  format: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height: InputMaybe<Scalars["Dimension"]["input"]>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality: InputMaybe<Scalars["Quality"]["input"]>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width: InputMaybe<Scalars["Dimension"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/page) */
export type Page = Entry & {
  __typename: "Page";
  contentfulMetadata: ContentfulMetadata;
  linkedFrom: Maybe<PageLinkingCollections>;
  metaDescription: Maybe<Scalars["String"]["output"]>;
  metaImage: Maybe<Asset>;
  metaTitle: Maybe<Scalars["String"]["output"]>;
  name: Maybe<Scalars["String"]["output"]>;
  slug: Maybe<Scalars["String"]["output"]>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/page) */
export type PageMetaDescriptionArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/page) */
export type PageMetaImageArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/page) */
export type PageMetaTitleArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/page) */
export type PageNameArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/page) */
export type PageSlugArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

export type PageCollection = {
  __typename: "PageCollection";
  items: Array<Maybe<Page>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type PageFilter = {
  AND: InputMaybe<Array<InputMaybe<PageFilter>>>;
  OR: InputMaybe<Array<InputMaybe<PageFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  metaDescription: InputMaybe<Scalars["String"]["input"]>;
  metaDescription_contains: InputMaybe<Scalars["String"]["input"]>;
  metaDescription_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  metaDescription_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  metaDescription_not: InputMaybe<Scalars["String"]["input"]>;
  metaDescription_not_contains: InputMaybe<Scalars["String"]["input"]>;
  metaDescription_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  metaImage_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  metaTitle: InputMaybe<Scalars["String"]["input"]>;
  metaTitle_contains: InputMaybe<Scalars["String"]["input"]>;
  metaTitle_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  metaTitle_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  metaTitle_not: InputMaybe<Scalars["String"]["input"]>;
  metaTitle_not_contains: InputMaybe<Scalars["String"]["input"]>;
  metaTitle_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name: InputMaybe<Scalars["String"]["input"]>;
  name_contains: InputMaybe<Scalars["String"]["input"]>;
  name_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  name_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name_not: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains: InputMaybe<Scalars["String"]["input"]>;
  name_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug: InputMaybe<Scalars["String"]["input"]>;
  slug_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys: InputMaybe<SysFilter>;
};

export type PageLinkingCollections = {
  __typename: "PageLinkingCollections";
  entryCollection: Maybe<EntryCollection>;
};

export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum PageOrder {
  MetaDescriptionAsc = "metaDescription_ASC",
  MetaDescriptionDesc = "metaDescription_DESC",
  MetaTitleAsc = "metaTitle_ASC",
  MetaTitleDesc = "metaTitle_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export type Query = {
  __typename: "Query";
  _node: Maybe<_Node>;
  artist: Maybe<Artist>;
  artistCollection: Maybe<ArtistCollection>;
  asset: Maybe<Asset>;
  assetCollection: Maybe<AssetCollection>;
  blogPost: Maybe<BlogPost>;
  blogPostCollection: Maybe<BlogPostCollection>;
  contributor: Maybe<Contributor>;
  contributorCollection: Maybe<ContributorCollection>;
  entryCollection: Maybe<EntryCollection>;
  page: Maybe<Page>;
  pageCollection: Maybe<PageCollection>;
  venue: Maybe<Venue>;
  venueCollection: Maybe<VenueCollection>;
  video: Maybe<Video>;
  videoCollection: Maybe<VideoCollection>;
};

export type Query_NodeArgs = {
  id: Scalars["ID"]["input"];
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryArtistArgs = {
  id: Scalars["String"]["input"];
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryArtistCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<Array<InputMaybe<ArtistOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<ArtistFilter>;
};

export type QueryAssetArgs = {
  id: Scalars["String"]["input"];
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<AssetFilter>;
};

export type QueryBlogPostArgs = {
  id: Scalars["String"]["input"];
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<Array<InputMaybe<BlogPostOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<BlogPostFilter>;
};

export type QueryContributorArgs = {
  id: Scalars["String"]["input"];
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryContributorCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<Array<InputMaybe<ContributorOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<ContributorFilter>;
};

export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<EntryFilter>;
};

export type QueryPageArgs = {
  id: Scalars["String"]["input"];
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<Array<InputMaybe<PageOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<PageFilter>;
};

export type QueryVenueArgs = {
  id: Scalars["String"]["input"];
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryVenueCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<Array<InputMaybe<VenueOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<VenueFilter>;
};

export type QueryVideoArgs = {
  id: Scalars["String"]["input"];
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type QueryVideoCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<Array<InputMaybe<VideoOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<VideoFilter>;
};

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename: "ResourceSys";
  linkType: Scalars["String"]["output"];
  urn: Scalars["String"]["output"];
};

export type Sys = {
  __typename: "Sys";
  environmentId: Scalars["String"]["output"];
  firstPublishedAt: Maybe<Scalars["DateTime"]["output"]>;
  id: Scalars["String"]["output"];
  /** The locale that was requested. */
  locale: Maybe<Scalars["String"]["output"]>;
  publishedAt: Maybe<Scalars["DateTime"]["output"]>;
  publishedVersion: Maybe<Scalars["Int"]["output"]>;
  spaceId: Scalars["String"]["output"];
};

export type SysFilter = {
  firstPublishedAt: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  firstPublishedAt_gt: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_gte: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_in: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  firstPublishedAt_lt: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_lte: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_not: InputMaybe<Scalars["DateTime"]["input"]>;
  firstPublishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  id: InputMaybe<Scalars["String"]["input"]>;
  id_contains: InputMaybe<Scalars["String"]["input"]>;
  id_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  id_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_not: InputMaybe<Scalars["String"]["input"]>;
  id_not_contains: InputMaybe<Scalars["String"]["input"]>;
  id_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  publishedAt: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  publishedAt_gt: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_gte: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  publishedAt_lt: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_lte: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_not: InputMaybe<Scalars["DateTime"]["input"]>;
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  publishedVersion: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  publishedVersion_gt: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_gte: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_in: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  publishedVersion_lt: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_lte: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_not: InputMaybe<Scalars["Float"]["input"]>;
  publishedVersion_not_in: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/venue) */
export type Venue = Entry & {
  __typename: "Venue";
  about: Maybe<Scalars["String"]["output"]>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom: Maybe<VenueLinkingCollections>;
  location: Maybe<Scalars["String"]["output"]>;
  logo: Maybe<Asset>;
  name: Maybe<Scalars["String"]["output"]>;
  slug: Maybe<Scalars["String"]["output"]>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/venue) */
export type VenueAboutArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/venue) */
export type VenueLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/venue) */
export type VenueLocationArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/venue) */
export type VenueLogoArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/venue) */
export type VenueNameArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/venue) */
export type VenueSlugArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

export type VenueCollection = {
  __typename: "VenueCollection";
  items: Array<Maybe<Venue>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type VenueFilter = {
  AND: InputMaybe<Array<InputMaybe<VenueFilter>>>;
  OR: InputMaybe<Array<InputMaybe<VenueFilter>>>;
  about: InputMaybe<Scalars["String"]["input"]>;
  about_contains: InputMaybe<Scalars["String"]["input"]>;
  about_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  about_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  about_not: InputMaybe<Scalars["String"]["input"]>;
  about_not_contains: InputMaybe<Scalars["String"]["input"]>;
  about_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  location: InputMaybe<Scalars["String"]["input"]>;
  location_contains: InputMaybe<Scalars["String"]["input"]>;
  location_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  location_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  location_not: InputMaybe<Scalars["String"]["input"]>;
  location_not_contains: InputMaybe<Scalars["String"]["input"]>;
  location_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  logo_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  name: InputMaybe<Scalars["String"]["input"]>;
  name_contains: InputMaybe<Scalars["String"]["input"]>;
  name_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  name_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name_not: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains: InputMaybe<Scalars["String"]["input"]>;
  name_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug: InputMaybe<Scalars["String"]["input"]>;
  slug_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys: InputMaybe<SysFilter>;
};

export type VenueLinkingCollections = {
  __typename: "VenueLinkingCollections";
  entryCollection: Maybe<EntryCollection>;
  videoCollection: Maybe<VideoCollection>;
};

export type VenueLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type VenueLinkingCollectionsVideoCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<Array<InputMaybe<VenueLinkingCollectionsVideoCollectionOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum VenueLinkingCollectionsVideoCollectionOrder {
  ShortDescriptionAsc = "shortDescription_ASC",
  ShortDescriptionDesc = "shortDescription_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SubtitleAsc = "subtitle_ASC",
  SubtitleDesc = "subtitle_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UploadDateAsc = "uploadDate_ASC",
  UploadDateDesc = "uploadDate_DESC",
  VideoTypeAsc = "videoType_ASC",
  VideoTypeDesc = "videoType_DESC",
  VideoUrlAsc = "videoUrl_ASC",
  VideoUrlDesc = "videoUrl_DESC",
}

export enum VenueOrder {
  LocationAsc = "location_ASC",
  LocationDesc = "location_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/video) */
export type Video = Entry & {
  __typename: "Video";
  artist: Maybe<Artist>;
  contentfulMetadata: ContentfulMetadata;
  contributorsCollection: Maybe<VideoContributorsCollection>;
  linkedFrom: Maybe<VideoLinkingCollections>;
  longDescription: Maybe<VideoLongDescription>;
  shortDescription: Maybe<Scalars["String"]["output"]>;
  slug: Maybe<Scalars["String"]["output"]>;
  subtitle: Maybe<Scalars["String"]["output"]>;
  sys: Sys;
  thumbnail: Maybe<Asset>;
  title: Maybe<Scalars["String"]["output"]>;
  uploadDate: Maybe<Scalars["DateTime"]["output"]>;
  venue: Maybe<Venue>;
  videoType: Maybe<Scalars["String"]["output"]>;
  videoUrl: Maybe<Scalars["String"]["output"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/video) */
export type VideoArtistArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  where: InputMaybe<ArtistFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/video) */
export type VideoContributorsCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  order: InputMaybe<Array<InputMaybe<VideoContributorsCollectionOrder>>>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where: InputMaybe<ContributorFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/video) */
export type VideoLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/video) */
export type VideoLongDescriptionArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/video) */
export type VideoShortDescriptionArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/video) */
export type VideoSlugArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/video) */
export type VideoSubtitleArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/video) */
export type VideoThumbnailArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/video) */
export type VideoTitleArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/video) */
export type VideoUploadDateArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/video) */
export type VideoVenueArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  where: InputMaybe<VenueFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/video) */
export type VideoVideoTypeArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

/** [See type definition](https://app.contentful.com/spaces/iy94k83j702j/content_types/video) */
export type VideoVideoUrlArgs = {
  locale: InputMaybe<Scalars["String"]["input"]>;
};

export type VideoCollection = {
  __typename: "VideoCollection";
  items: Array<Maybe<Video>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type VideoContributorsCollection = {
  __typename: "VideoContributorsCollection";
  items: Array<Maybe<Contributor>>;
  limit: Scalars["Int"]["output"];
  skip: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export enum VideoContributorsCollectionOrder {
  EmailAsc = "email_ASC",
  EmailDesc = "email_DESC",
  InstagramAsc = "instagram_ASC",
  InstagramDesc = "instagram_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  RolesAsc = "roles_ASC",
  RolesDesc = "roles_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export type VideoFilter = {
  AND: InputMaybe<Array<InputMaybe<VideoFilter>>>;
  OR: InputMaybe<Array<InputMaybe<VideoFilter>>>;
  artist: InputMaybe<CfArtistNestedFilter>;
  artist_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  contributors: InputMaybe<CfContributorNestedFilter>;
  contributorsCollection_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  longDescription_contains: InputMaybe<Scalars["String"]["input"]>;
  longDescription_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  longDescription_not_contains: InputMaybe<Scalars["String"]["input"]>;
  shortDescription: InputMaybe<Scalars["String"]["input"]>;
  shortDescription_contains: InputMaybe<Scalars["String"]["input"]>;
  shortDescription_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  shortDescription_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  shortDescription_not: InputMaybe<Scalars["String"]["input"]>;
  shortDescription_not_contains: InputMaybe<Scalars["String"]["input"]>;
  shortDescription_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug: InputMaybe<Scalars["String"]["input"]>;
  slug_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  subtitle: InputMaybe<Scalars["String"]["input"]>;
  subtitle_contains: InputMaybe<Scalars["String"]["input"]>;
  subtitle_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  subtitle_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  subtitle_not: InputMaybe<Scalars["String"]["input"]>;
  subtitle_not_contains: InputMaybe<Scalars["String"]["input"]>;
  subtitle_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys: InputMaybe<SysFilter>;
  thumbnail_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  title: InputMaybe<Scalars["String"]["input"]>;
  title_contains: InputMaybe<Scalars["String"]["input"]>;
  title_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  title_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  title_not: InputMaybe<Scalars["String"]["input"]>;
  title_not_contains: InputMaybe<Scalars["String"]["input"]>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  uploadDate: InputMaybe<Scalars["DateTime"]["input"]>;
  uploadDate_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  uploadDate_gt: InputMaybe<Scalars["DateTime"]["input"]>;
  uploadDate_gte: InputMaybe<Scalars["DateTime"]["input"]>;
  uploadDate_in: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  uploadDate_lt: InputMaybe<Scalars["DateTime"]["input"]>;
  uploadDate_lte: InputMaybe<Scalars["DateTime"]["input"]>;
  uploadDate_not: InputMaybe<Scalars["DateTime"]["input"]>;
  uploadDate_not_in: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  venue: InputMaybe<CfVenueNestedFilter>;
  venue_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  videoType: InputMaybe<Scalars["String"]["input"]>;
  videoType_contains: InputMaybe<Scalars["String"]["input"]>;
  videoType_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  videoType_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  videoType_not: InputMaybe<Scalars["String"]["input"]>;
  videoType_not_contains: InputMaybe<Scalars["String"]["input"]>;
  videoType_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  videoUrl: InputMaybe<Scalars["String"]["input"]>;
  videoUrl_contains: InputMaybe<Scalars["String"]["input"]>;
  videoUrl_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  videoUrl_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  videoUrl_not: InputMaybe<Scalars["String"]["input"]>;
  videoUrl_not_contains: InputMaybe<Scalars["String"]["input"]>;
  videoUrl_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type VideoLinkingCollections = {
  __typename: "VideoLinkingCollections";
  entryCollection: Maybe<EntryCollection>;
};

export type VideoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  locale: InputMaybe<Scalars["String"]["input"]>;
  preview: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type VideoLongDescription = {
  __typename: "VideoLongDescription";
  json: Scalars["JSON"]["output"];
  links: VideoLongDescriptionLinks;
};

export type VideoLongDescriptionAssets = {
  __typename: "VideoLongDescriptionAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type VideoLongDescriptionEntries = {
  __typename: "VideoLongDescriptionEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type VideoLongDescriptionLinks = {
  __typename: "VideoLongDescriptionLinks";
  assets: VideoLongDescriptionAssets;
  entries: VideoLongDescriptionEntries;
  resources: VideoLongDescriptionResources;
};

export type VideoLongDescriptionResources = {
  __typename: "VideoLongDescriptionResources";
  block: Array<VideoLongDescriptionResourcesBlock>;
  hyperlink: Array<VideoLongDescriptionResourcesHyperlink>;
  inline: Array<VideoLongDescriptionResourcesInline>;
};

export type VideoLongDescriptionResourcesBlock = ResourceLink & {
  __typename: "VideoLongDescriptionResourcesBlock";
  sys: ResourceSys;
};

export type VideoLongDescriptionResourcesHyperlink = ResourceLink & {
  __typename: "VideoLongDescriptionResourcesHyperlink";
  sys: ResourceSys;
};

export type VideoLongDescriptionResourcesInline = ResourceLink & {
  __typename: "VideoLongDescriptionResourcesInline";
  sys: ResourceSys;
};

export enum VideoOrder {
  ShortDescriptionAsc = "shortDescription_ASC",
  ShortDescriptionDesc = "shortDescription_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SubtitleAsc = "subtitle_ASC",
  SubtitleDesc = "subtitle_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UploadDateAsc = "uploadDate_ASC",
  UploadDateDesc = "uploadDate_DESC",
  VideoTypeAsc = "videoType_ASC",
  VideoTypeDesc = "videoType_DESC",
  VideoUrlAsc = "videoUrl_ASC",
  VideoUrlDesc = "videoUrl_DESC",
}

export type _Node = {
  _id: Scalars["ID"]["output"];
};

export type CfArtistNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfArtistNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfArtistNestedFilter>>>;
  accentColor: InputMaybe<Scalars["String"]["input"]>;
  accentColor_contains: InputMaybe<Scalars["String"]["input"]>;
  accentColor_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  accentColor_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  accentColor_not: InputMaybe<Scalars["String"]["input"]>;
  accentColor_not_contains: InputMaybe<Scalars["String"]["input"]>;
  accentColor_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  bandcampUrl: InputMaybe<Scalars["String"]["input"]>;
  bandcampUrl_contains: InputMaybe<Scalars["String"]["input"]>;
  bandcampUrl_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  bandcampUrl_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  bandcampUrl_not: InputMaybe<Scalars["String"]["input"]>;
  bandcampUrl_not_contains: InputMaybe<Scalars["String"]["input"]>;
  bandcampUrl_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  bio_contains: InputMaybe<Scalars["String"]["input"]>;
  bio_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  bio_not_contains: InputMaybe<Scalars["String"]["input"]>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  facebookUrl: InputMaybe<Scalars["String"]["input"]>;
  facebookUrl_contains: InputMaybe<Scalars["String"]["input"]>;
  facebookUrl_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  facebookUrl_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  facebookUrl_not: InputMaybe<Scalars["String"]["input"]>;
  facebookUrl_not_contains: InputMaybe<Scalars["String"]["input"]>;
  facebookUrl_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  instagramUrl: InputMaybe<Scalars["String"]["input"]>;
  instagramUrl_contains: InputMaybe<Scalars["String"]["input"]>;
  instagramUrl_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  instagramUrl_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  instagramUrl_not: InputMaybe<Scalars["String"]["input"]>;
  instagramUrl_not_contains: InputMaybe<Scalars["String"]["input"]>;
  instagramUrl_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name: InputMaybe<Scalars["String"]["input"]>;
  name_contains: InputMaybe<Scalars["String"]["input"]>;
  name_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  name_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name_not: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains: InputMaybe<Scalars["String"]["input"]>;
  name_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  photo_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  shortBio: InputMaybe<Scalars["String"]["input"]>;
  shortBio_contains: InputMaybe<Scalars["String"]["input"]>;
  shortBio_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  shortBio_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  shortBio_not: InputMaybe<Scalars["String"]["input"]>;
  shortBio_not_contains: InputMaybe<Scalars["String"]["input"]>;
  shortBio_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug: InputMaybe<Scalars["String"]["input"]>;
  slug_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  soundcloudUrl: InputMaybe<Scalars["String"]["input"]>;
  soundcloudUrl_contains: InputMaybe<Scalars["String"]["input"]>;
  soundcloudUrl_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  soundcloudUrl_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  soundcloudUrl_not: InputMaybe<Scalars["String"]["input"]>;
  soundcloudUrl_not_contains: InputMaybe<Scalars["String"]["input"]>;
  soundcloudUrl_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys: InputMaybe<SysFilter>;
  tiktokUrl: InputMaybe<Scalars["String"]["input"]>;
  tiktokUrl_contains: InputMaybe<Scalars["String"]["input"]>;
  tiktokUrl_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  tiktokUrl_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  tiktokUrl_not: InputMaybe<Scalars["String"]["input"]>;
  tiktokUrl_not_contains: InputMaybe<Scalars["String"]["input"]>;
  tiktokUrl_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  twitterUrl: InputMaybe<Scalars["String"]["input"]>;
  twitterUrl_contains: InputMaybe<Scalars["String"]["input"]>;
  twitterUrl_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  twitterUrl_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  twitterUrl_not: InputMaybe<Scalars["String"]["input"]>;
  twitterUrl_not_contains: InputMaybe<Scalars["String"]["input"]>;
  twitterUrl_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  websiteUrl: InputMaybe<Scalars["String"]["input"]>;
  websiteUrl_contains: InputMaybe<Scalars["String"]["input"]>;
  websiteUrl_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  websiteUrl_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  websiteUrl_not: InputMaybe<Scalars["String"]["input"]>;
  websiteUrl_not_contains: InputMaybe<Scalars["String"]["input"]>;
  websiteUrl_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  youtubeUrl: InputMaybe<Scalars["String"]["input"]>;
  youtubeUrl_contains: InputMaybe<Scalars["String"]["input"]>;
  youtubeUrl_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  youtubeUrl_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  youtubeUrl_not: InputMaybe<Scalars["String"]["input"]>;
  youtubeUrl_not_contains: InputMaybe<Scalars["String"]["input"]>;
  youtubeUrl_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type CfContributorNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfContributorNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfContributorNestedFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  email: InputMaybe<Scalars["String"]["input"]>;
  email_contains: InputMaybe<Scalars["String"]["input"]>;
  email_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  email_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  email_not: InputMaybe<Scalars["String"]["input"]>;
  email_not_contains: InputMaybe<Scalars["String"]["input"]>;
  email_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  instagram: InputMaybe<Scalars["String"]["input"]>;
  instagram_contains: InputMaybe<Scalars["String"]["input"]>;
  instagram_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  instagram_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  instagram_not: InputMaybe<Scalars["String"]["input"]>;
  instagram_not_contains: InputMaybe<Scalars["String"]["input"]>;
  instagram_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name: InputMaybe<Scalars["String"]["input"]>;
  name_contains: InputMaybe<Scalars["String"]["input"]>;
  name_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  name_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name_not: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains: InputMaybe<Scalars["String"]["input"]>;
  name_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  photo_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  roles: InputMaybe<Scalars["String"]["input"]>;
  roles_contains: InputMaybe<Scalars["String"]["input"]>;
  roles_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  roles_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  roles_not: InputMaybe<Scalars["String"]["input"]>;
  roles_not_contains: InputMaybe<Scalars["String"]["input"]>;
  roles_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  summary_contains: InputMaybe<Scalars["String"]["input"]>;
  summary_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  summary_not_contains: InputMaybe<Scalars["String"]["input"]>;
  sys: InputMaybe<SysFilter>;
};

export type CfVenueNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfVenueNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfVenueNestedFilter>>>;
  about: InputMaybe<Scalars["String"]["input"]>;
  about_contains: InputMaybe<Scalars["String"]["input"]>;
  about_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  about_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  about_not: InputMaybe<Scalars["String"]["input"]>;
  about_not_contains: InputMaybe<Scalars["String"]["input"]>;
  about_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  location: InputMaybe<Scalars["String"]["input"]>;
  location_contains: InputMaybe<Scalars["String"]["input"]>;
  location_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  location_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  location_not: InputMaybe<Scalars["String"]["input"]>;
  location_not_contains: InputMaybe<Scalars["String"]["input"]>;
  location_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  logo_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  name: InputMaybe<Scalars["String"]["input"]>;
  name_contains: InputMaybe<Scalars["String"]["input"]>;
  name_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  name_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name_not: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains: InputMaybe<Scalars["String"]["input"]>;
  name_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug: InputMaybe<Scalars["String"]["input"]>;
  slug_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_exists: InputMaybe<Scalars["Boolean"]["input"]>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  slug_not: InputMaybe<Scalars["String"]["input"]>;
  slug_not_contains: InputMaybe<Scalars["String"]["input"]>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sys: InputMaybe<SysFilter>;
};

export type VideoPageQueryQueryVariables = Exact<{
  videoSlug: Scalars["String"]["input"];
  artistSlug: Scalars["String"]["input"];
}>;

export type VideoPageQueryQuery = {
  __typename: "Query";
  video: {
    __typename: "VideoCollection";
    items: Array<{
      __typename: "Video";
      title: string | null;
      slug: string | null;
      subtitle: string | null;
      videoUrl: string | null;
      shortDescription: string | null;
      uploadDate: any | null;
      videoType: string | null;
      longDescription: {
        __typename: "VideoLongDescription";
        json: any;
        links: {
          __typename: "VideoLongDescriptionLinks";
          entries: {
            __typename: "VideoLongDescriptionEntries";
            inline: Array<
              | { __typename: "Artist"; sys: { __typename: "Sys"; id: string } }
              | { __typename: "BlogPost"; sys: { __typename: "Sys"; id: string } }
              | { __typename: "Contributor"; sys: { __typename: "Sys"; id: string } }
              | { __typename: "Page"; sys: { __typename: "Sys"; id: string } }
              | { __typename: "Venue"; sys: { __typename: "Sys"; id: string } }
              | { __typename: "Video"; sys: { __typename: "Sys"; id: string } }
              | null
            >;
            block: Array<
              | { __typename: "Artist"; sys: { __typename: "Sys"; id: string } }
              | { __typename: "BlogPost"; sys: { __typename: "Sys"; id: string } }
              | { __typename: "Contributor"; sys: { __typename: "Sys"; id: string } }
              | { __typename: "Page"; sys: { __typename: "Sys"; id: string } }
              | { __typename: "Venue"; sys: { __typename: "Sys"; id: string } }
              | { __typename: "Video"; sys: { __typename: "Sys"; id: string } }
              | null
            >;
          };
          assets: {
            __typename: "VideoLongDescriptionAssets";
            block: Array<{
              __typename: "Asset";
              url: string | null;
              title: string | null;
              width: number | null;
              height: number | null;
              description: string | null;
              sys: { __typename: "Sys"; id: string };
            } | null>;
          };
        };
      } | null;
      artist: {
        __typename: "Artist";
        name: string | null;
        slug: string | null;
        accentColor: string | null;
        photo: { __typename: "Asset"; url: string | null } | null;
      } | null;
      thumbnail: { __typename: "Asset"; url: string | null; description: string | null } | null;
    } | null>;
  } | null;
  relatedVideos: {
    __typename: "VideoCollection";
    items: Array<{
      __typename: "Video";
      slug: string | null;
      title: string | null;
      subtitle: string | null;
      videoType: string | null;
      thumbnail: { __typename: "Asset"; url: string | null; description: string | null } | null;
      artist: {
        __typename: "Artist";
        name: string | null;
        accentColor: string | null;
        slug: string | null;
        photo: {
          __typename: "Asset";
          url: string | null;
          width: number | null;
          height: number | null;
          description: string | null;
        } | null;
      } | null;
    } | null>;
  } | null;
};

export type ArtistProfilePageQueryQueryVariables = Exact<{
  artistSlug: Scalars["String"]["input"];
}>;

export type ArtistProfilePageQueryQuery = {
  __typename: "Query";
  artist: {
    __typename: "ArtistCollection";
    items: Array<{
      __typename: "Artist";
      name: string | null;
      slug: string | null;
      accentColor: string | null;
      photo: {
        __typename: "Asset";
        url: string | null;
        width: number | null;
        height: number | null;
        description: string | null;
      } | null;
    } | null>;
  } | null;
  videos: {
    __typename: "VideoCollection";
    items: Array<{
      __typename: "Video";
      slug: string | null;
      title: string | null;
      subtitle: string | null;
      videoType: string | null;
      thumbnail: { __typename: "Asset"; url: string | null; description: string | null } | null;
      artist: {
        __typename: "Artist";
        name: string | null;
        accentColor: string | null;
        slug: string | null;
        photo: {
          __typename: "Asset";
          url: string | null;
          width: number | null;
          height: number | null;
          description: string | null;
        } | null;
      } | null;
    } | null>;
  } | null;
};

export type AllArtistsPageQueryQueryVariables = Exact<{ [key: string]: never }>;

export type AllArtistsPageQueryQuery = {
  __typename: "Query";
  artists: {
    __typename: "ArtistCollection";
    items: Array<{
      __typename: "Artist";
      name: string | null;
      slug: string | null;
      accentColor: string | null;
      photo: { __typename: "Asset"; url: string | null } | null;
      linkedFrom: {
        __typename: "ArtistLinkingCollections";
        videoCollection: { __typename: "VideoCollection"; total: number } | null;
      } | null;
    } | null>;
  } | null;
};

export type HomePageQueryQueryVariables = Exact<{ [key: string]: never }>;

export type HomePageQueryQuery = {
  __typename: "Query";
  recentVideos: {
    __typename: "VideoCollection";
    items: Array<{
      __typename: "Video";
      slug: string | null;
      title: string | null;
      subtitle: string | null;
      videoType: string | null;
      thumbnail: { __typename: "Asset"; url: string | null; description: string | null } | null;
      artist: {
        __typename: "Artist";
        name: string | null;
        accentColor: string | null;
        slug: string | null;
        photo: {
          __typename: "Asset";
          url: string | null;
          width: number | null;
          height: number | null;
          description: string | null;
        } | null;
      } | null;
    } | null>;
  } | null;
};

export type VideoCardLinkFragment = {
  __typename: "Video";
  slug: string | null;
  title: string | null;
  subtitle: string | null;
  videoType: string | null;
  thumbnail: { __typename: "Asset"; url: string | null; description: string | null } | null;
  artist: {
    __typename: "Artist";
    name: string | null;
    accentColor: string | null;
    slug: string | null;
    photo: {
      __typename: "Asset";
      url: string | null;
      width: number | null;
      height: number | null;
      description: string | null;
    } | null;
  } | null;
};

export const VideoCardLinkFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "VideoCardLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Video" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "subtitle" } },
          { kind: "Field", name: { kind: "Name", value: "videoType" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "thumbnail" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "artist" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "accentColor" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "photo" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                      { kind: "Field", name: { kind: "Name", value: "width" } },
                      { kind: "Field", name: { kind: "Name", value: "height" } },
                      { kind: "Field", name: { kind: "Name", value: "description" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<VideoCardLinkFragment, unknown>;
export const VideoPageQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "VideoPageQuery" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "videoSlug" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "artistSlug" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "video" },
            name: { kind: "Name", value: "videoCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: { kind: "IntValue", value: "1" },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "slug" },
                      value: { kind: "Variable", name: { kind: "Name", value: "videoSlug" } },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "artist" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "slug" },
                            value: { kind: "Variable", name: { kind: "Name", value: "artistSlug" } },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "subtitle" } },
                      { kind: "Field", name: { kind: "Name", value: "videoUrl" } },
                      { kind: "Field", name: { kind: "Name", value: "shortDescription" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "longDescription" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "links" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "entries" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "inline" },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: { kind: "Name", value: "sys" },
                                                selectionSet: {
                                                  kind: "SelectionSet",
                                                  selections: [
                                                    { kind: "Field", name: { kind: "Name", value: "id" } },
                                                  ],
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "block" },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: { kind: "Name", value: "sys" },
                                                selectionSet: {
                                                  kind: "SelectionSet",
                                                  selections: [
                                                    { kind: "Field", name: { kind: "Name", value: "id" } },
                                                  ],
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "assets" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "block" },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: { kind: "Name", value: "sys" },
                                                selectionSet: {
                                                  kind: "SelectionSet",
                                                  selections: [
                                                    { kind: "Field", name: { kind: "Name", value: "id" } },
                                                  ],
                                                },
                                              },
                                              { kind: "Field", name: { kind: "Name", value: "url" } },
                                              { kind: "Field", name: { kind: "Name", value: "title" } },
                                              { kind: "Field", name: { kind: "Name", value: "width" } },
                                              { kind: "Field", name: { kind: "Name", value: "height" } },
                                              { kind: "Field", name: { kind: "Name", value: "description" } },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            { kind: "Field", name: { kind: "Name", value: "json" } },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "artist" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "slug" } },
                            { kind: "Field", name: { kind: "Name", value: "accentColor" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "photo" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [{ kind: "Field", name: { kind: "Name", value: "url" } }],
                              },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "uploadDate" } },
                      { kind: "Field", name: { kind: "Name", value: "videoType" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "thumbnail" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "url" } },
                            { kind: "Field", name: { kind: "Name", value: "description" } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "relatedVideos" },
            name: { kind: "Name", value: "videoCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: { kind: "IntValue", value: "3" },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "artist" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "slug" },
                            value: { kind: "Variable", name: { kind: "Name", value: "artistSlug" } },
                          },
                        ],
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "slug_not" },
                      value: { kind: "Variable", name: { kind: "Name", value: "videoSlug" } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "VideoCardLink" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "VideoCardLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Video" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "subtitle" } },
          { kind: "Field", name: { kind: "Name", value: "videoType" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "thumbnail" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "artist" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "accentColor" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "photo" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                      { kind: "Field", name: { kind: "Name", value: "width" } },
                      { kind: "Field", name: { kind: "Name", value: "height" } },
                      { kind: "Field", name: { kind: "Name", value: "description" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<VideoPageQueryQuery, VideoPageQueryQueryVariables>;
export const ArtistProfilePageQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "ArtistProfilePageQuery" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "artistSlug" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "artist" },
            name: { kind: "Name", value: "artistCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "slug" },
                      value: { kind: "Variable", name: { kind: "Name", value: "artistSlug" } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "accentColor" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "photo" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "url" } },
                            { kind: "Field", name: { kind: "Name", value: "width" } },
                            { kind: "Field", name: { kind: "Name", value: "height" } },
                            { kind: "Field", name: { kind: "Name", value: "description" } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "videos" },
            name: { kind: "Name", value: "videoCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "artist" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "slug" },
                            value: { kind: "Variable", name: { kind: "Name", value: "artistSlug" } },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "VideoCardLink" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "VideoCardLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Video" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "subtitle" } },
          { kind: "Field", name: { kind: "Name", value: "videoType" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "thumbnail" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "artist" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "accentColor" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "photo" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                      { kind: "Field", name: { kind: "Name", value: "width" } },
                      { kind: "Field", name: { kind: "Name", value: "height" } },
                      { kind: "Field", name: { kind: "Name", value: "description" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ArtistProfilePageQueryQuery, ArtistProfilePageQueryQueryVariables>;
export const AllArtistsPageQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "AllArtistsPageQuery" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "artists" },
            name: { kind: "Name", value: "artistCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: { kind: "IntValue", value: "150" },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order" },
                value: { kind: "EnumValue", value: "name_ASC" },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      { kind: "Field", name: { kind: "Name", value: "accentColor" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "photo" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "url" } }],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "linkedFrom" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "videoCollection" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "limit" },
                                  value: { kind: "IntValue", value: "20" },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [{ kind: "Field", name: { kind: "Name", value: "total" } }],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AllArtistsPageQueryQuery, AllArtistsPageQueryQueryVariables>;
export const HomePageQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "HomePageQuery" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "recentVideos" },
            name: { kind: "Name", value: "videoCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: { kind: "IntValue", value: "12" },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order" },
                value: { kind: "EnumValue", value: "uploadDate_DESC" },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "VideoCardLink" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "VideoCardLink" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Video" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "subtitle" } },
          { kind: "Field", name: { kind: "Name", value: "videoType" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "thumbnail" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "url" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "artist" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "accentColor" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "photo" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "url" } },
                      { kind: "Field", name: { kind: "Name", value: "width" } },
                      { kind: "Field", name: { kind: "Name", value: "height" } },
                      { kind: "Field", name: { kind: "Name", value: "description" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HomePageQueryQuery, HomePageQueryQueryVariables>;

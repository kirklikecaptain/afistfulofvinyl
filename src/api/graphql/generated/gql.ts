/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment AllAssetFields on Asset {\n  __typename\n  title\n  description\n  width\n  height\n  url\n  fileName\n  contentType\n}\n\nfragment AllVideoFields on Video {\n  __typename\n  title\n  subtitle\n  uploadDate\n  videoType\n  pagePath @client\n  thumbnail {\n    url\n  }\n  artist {\n    ...AllArtistFields\n  }\n}\n\nfragment VideoCardFields on Video {\n  __typename\n  title\n  subtitle\n  uploadDate\n  videoType\n  slug\n  pagePath @client\n  thumbnail {\n    url\n  }\n  artist {\n    name\n    accentColor\n    slug\n    pagePath @client\n    colors @client {\n      lightest\n      light\n      mid\n      dark\n      darkest\n    }\n  }\n}\n\nfragment AllArtistFields on Artist {\n  __typename\n  name\n  slug\n  pagePath @client\n  accentColor\n  colors @client {\n    lightest\n    light\n    mid\n    dark\n    darkest\n  }\n  photo {\n    url\n  }\n  shortBio\n  bio {\n    json\n  }\n  websiteUrl\n  twitterUrl\n  tiktokUrl\n  facebookUrl\n  instagramUrl\n  bandcampUrl\n  soundcloudUrl\n  youtubeUrl\n}\n\nfragment ArtistCardFields on Artist {\n  __typename\n  name\n  accentColor\n  colors @client {\n    lightest\n    light\n    mid\n    dark\n    darkest\n  }\n  slug\n  pagePath @client\n  photo {\n    url\n  }\n}": types.AllAssetFieldsFragmentDoc,
    "\n  query AllVideos {\n    videos: videoCollection(limit: 500, order: uploadDate_DESC) {\n      items {\n        ...VideoCardFields\n      }\n    }\n  }\n": types.AllVideosDocument,
    "\n  query ArtistPage($artistSlug: String!) {\n    artist: artistCollection(where: { slug: $artistSlug }) {\n      items {\n        ...AllArtistFields\n      }\n    }\n    videos: videoCollection(where: { artist: { slug: $artistSlug } }) {\n      items {\n        ...VideoCardFields\n      }\n    }\n  }\n": types.ArtistPageDocument,
    "\n  query ArtistsPage {\n    page: pageCollection(where: { slug: \"artists\" }) {\n      items {\n        metaTitle\n        metaDescription\n      }\n    }\n    artists: artistCollection(order: name_ASC, limit: 500) {\n      items {\n        ...ArtistCardFields\n      }\n    }\n  }\n": types.ArtistsPageDocument,
    "\n  query HomePage {\n    page: pageCollection(where: { slug: \"home\" }) {\n      items {\n        metaTitle\n        metaDescription\n        slug\n      }\n    }\n    recentVideos: videoCollection(limit: 15, order: uploadDate_DESC) {\n      items {\n        ...VideoCardFields\n      }\n    }\n  }\n": types.HomePageDocument,
    "\n  query VideoPage($artistSlug: String!, $videoSlug: String!) {\n    video: videoCollection(where: { slug: $videoSlug, artist: { slug: $artistSlug } }) {\n      items {\n        ...AllVideoFields\n      }\n    }\n    moreVideos: videoCollection(\n      where: { slug_not: $videoSlug, artist: { slug: $artistSlug } }\n      order: uploadDate_DESC\n    ) {\n      items {\n        ...VideoCardFields\n      }\n    }\n  }\n": types.VideoPageDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment AllAssetFields on Asset {\n  __typename\n  title\n  description\n  width\n  height\n  url\n  fileName\n  contentType\n}\n\nfragment AllVideoFields on Video {\n  __typename\n  title\n  subtitle\n  uploadDate\n  videoType\n  pagePath @client\n  thumbnail {\n    url\n  }\n  artist {\n    ...AllArtistFields\n  }\n}\n\nfragment VideoCardFields on Video {\n  __typename\n  title\n  subtitle\n  uploadDate\n  videoType\n  slug\n  pagePath @client\n  thumbnail {\n    url\n  }\n  artist {\n    name\n    accentColor\n    slug\n    pagePath @client\n    colors @client {\n      lightest\n      light\n      mid\n      dark\n      darkest\n    }\n  }\n}\n\nfragment AllArtistFields on Artist {\n  __typename\n  name\n  slug\n  pagePath @client\n  accentColor\n  colors @client {\n    lightest\n    light\n    mid\n    dark\n    darkest\n  }\n  photo {\n    url\n  }\n  shortBio\n  bio {\n    json\n  }\n  websiteUrl\n  twitterUrl\n  tiktokUrl\n  facebookUrl\n  instagramUrl\n  bandcampUrl\n  soundcloudUrl\n  youtubeUrl\n}\n\nfragment ArtistCardFields on Artist {\n  __typename\n  name\n  accentColor\n  colors @client {\n    lightest\n    light\n    mid\n    dark\n    darkest\n  }\n  slug\n  pagePath @client\n  photo {\n    url\n  }\n}"): (typeof documents)["fragment AllAssetFields on Asset {\n  __typename\n  title\n  description\n  width\n  height\n  url\n  fileName\n  contentType\n}\n\nfragment AllVideoFields on Video {\n  __typename\n  title\n  subtitle\n  uploadDate\n  videoType\n  pagePath @client\n  thumbnail {\n    url\n  }\n  artist {\n    ...AllArtistFields\n  }\n}\n\nfragment VideoCardFields on Video {\n  __typename\n  title\n  subtitle\n  uploadDate\n  videoType\n  slug\n  pagePath @client\n  thumbnail {\n    url\n  }\n  artist {\n    name\n    accentColor\n    slug\n    pagePath @client\n    colors @client {\n      lightest\n      light\n      mid\n      dark\n      darkest\n    }\n  }\n}\n\nfragment AllArtistFields on Artist {\n  __typename\n  name\n  slug\n  pagePath @client\n  accentColor\n  colors @client {\n    lightest\n    light\n    mid\n    dark\n    darkest\n  }\n  photo {\n    url\n  }\n  shortBio\n  bio {\n    json\n  }\n  websiteUrl\n  twitterUrl\n  tiktokUrl\n  facebookUrl\n  instagramUrl\n  bandcampUrl\n  soundcloudUrl\n  youtubeUrl\n}\n\nfragment ArtistCardFields on Artist {\n  __typename\n  name\n  accentColor\n  colors @client {\n    lightest\n    light\n    mid\n    dark\n    darkest\n  }\n  slug\n  pagePath @client\n  photo {\n    url\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllVideos {\n    videos: videoCollection(limit: 500, order: uploadDate_DESC) {\n      items {\n        ...VideoCardFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query AllVideos {\n    videos: videoCollection(limit: 500, order: uploadDate_DESC) {\n      items {\n        ...VideoCardFields\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ArtistPage($artistSlug: String!) {\n    artist: artistCollection(where: { slug: $artistSlug }) {\n      items {\n        ...AllArtistFields\n      }\n    }\n    videos: videoCollection(where: { artist: { slug: $artistSlug } }) {\n      items {\n        ...VideoCardFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query ArtistPage($artistSlug: String!) {\n    artist: artistCollection(where: { slug: $artistSlug }) {\n      items {\n        ...AllArtistFields\n      }\n    }\n    videos: videoCollection(where: { artist: { slug: $artistSlug } }) {\n      items {\n        ...VideoCardFields\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ArtistsPage {\n    page: pageCollection(where: { slug: \"artists\" }) {\n      items {\n        metaTitle\n        metaDescription\n      }\n    }\n    artists: artistCollection(order: name_ASC, limit: 500) {\n      items {\n        ...ArtistCardFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query ArtistsPage {\n    page: pageCollection(where: { slug: \"artists\" }) {\n      items {\n        metaTitle\n        metaDescription\n      }\n    }\n    artists: artistCollection(order: name_ASC, limit: 500) {\n      items {\n        ...ArtistCardFields\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query HomePage {\n    page: pageCollection(where: { slug: \"home\" }) {\n      items {\n        metaTitle\n        metaDescription\n        slug\n      }\n    }\n    recentVideos: videoCollection(limit: 15, order: uploadDate_DESC) {\n      items {\n        ...VideoCardFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query HomePage {\n    page: pageCollection(where: { slug: \"home\" }) {\n      items {\n        metaTitle\n        metaDescription\n        slug\n      }\n    }\n    recentVideos: videoCollection(limit: 15, order: uploadDate_DESC) {\n      items {\n        ...VideoCardFields\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query VideoPage($artistSlug: String!, $videoSlug: String!) {\n    video: videoCollection(where: { slug: $videoSlug, artist: { slug: $artistSlug } }) {\n      items {\n        ...AllVideoFields\n      }\n    }\n    moreVideos: videoCollection(\n      where: { slug_not: $videoSlug, artist: { slug: $artistSlug } }\n      order: uploadDate_DESC\n    ) {\n      items {\n        ...VideoCardFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query VideoPage($artistSlug: String!, $videoSlug: String!) {\n    video: videoCollection(where: { slug: $videoSlug, artist: { slug: $artistSlug } }) {\n      items {\n        ...AllVideoFields\n      }\n    }\n    moreVideos: videoCollection(\n      where: { slug_not: $videoSlug, artist: { slug: $artistSlug } }\n      order: uploadDate_DESC\n    ) {\n      items {\n        ...VideoCardFields\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
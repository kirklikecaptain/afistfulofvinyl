/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query VideoPage($artistSlug: String!, $videoSlug: String!) {\n    video: videoCollection(where: { slug: $videoSlug, artist: { slug: $artistSlug } }, limit: 1) {\n      items {\n        ...VideoCard\n      }\n    }\n    moreVideos: videoCollection(\n      where: { slug_not: $videoSlug, artist: { slug: $artistSlug } }\n      order: title_ASC\n    ) {\n      items {\n        ...VideoCard\n      }\n    }\n  }\n": typeof types.VideoPageDocument,
    "\n  query ArtistPage($slug: String!) {\n    artistCollection(where: { slug: $slug }) {\n      items {\n        _id\n        name\n        slug\n      }\n    }\n    videoCollection(where: { artist: { slug: $slug } }, order: title_ASC) {\n      items {\n        ...VideoCard\n      }\n    }\n  }\n": typeof types.ArtistPageDocument,
    "\n  query AllArtistsPage {\n    artistCollection(order: name_ASC, limit: 100) {\n      items {\n        ...ArtistCard\n      }\n    }\n  }\n": typeof types.AllArtistsPageDocument,
    "\n  query RootLayout {\n    artistCollection(order: name_ASC) {\n      items {\n        ...ArtistCard\n      }\n    }\n    videoCollection(order: title_ASC, limit: 500) {\n      items {\n        ...VideoCard\n      }\n    }\n  }\n": typeof types.RootLayoutDocument,
    "\n  query HomePage {\n    videoCollection(order: uploadDate_DESC, limit: 12) {\n      items {\n        ...VideoCard\n      }\n    }\n  }\n": typeof types.HomePageDocument,
    "fragment ArtistCard on Artist {\n  _id\n  name\n  accentColor\n  slug\n  photo {\n    url\n  }\n}": typeof types.ArtistCardFragmentDoc,
    "fragment VideoCard on Video {\n  _id\n  title\n  subtitle\n  slug\n  videoType\n  uploadDate\n  thumbnail {\n    url\n  }\n  artist {\n    name\n    accentColor\n    slug\n    photo {\n      url\n    }\n  }\n}": typeof types.VideoCardFragmentDoc,
};
const documents: Documents = {
    "\n  query VideoPage($artistSlug: String!, $videoSlug: String!) {\n    video: videoCollection(where: { slug: $videoSlug, artist: { slug: $artistSlug } }, limit: 1) {\n      items {\n        ...VideoCard\n      }\n    }\n    moreVideos: videoCollection(\n      where: { slug_not: $videoSlug, artist: { slug: $artistSlug } }\n      order: title_ASC\n    ) {\n      items {\n        ...VideoCard\n      }\n    }\n  }\n": types.VideoPageDocument,
    "\n  query ArtistPage($slug: String!) {\n    artistCollection(where: { slug: $slug }) {\n      items {\n        _id\n        name\n        slug\n      }\n    }\n    videoCollection(where: { artist: { slug: $slug } }, order: title_ASC) {\n      items {\n        ...VideoCard\n      }\n    }\n  }\n": types.ArtistPageDocument,
    "\n  query AllArtistsPage {\n    artistCollection(order: name_ASC, limit: 100) {\n      items {\n        ...ArtistCard\n      }\n    }\n  }\n": types.AllArtistsPageDocument,
    "\n  query RootLayout {\n    artistCollection(order: name_ASC) {\n      items {\n        ...ArtistCard\n      }\n    }\n    videoCollection(order: title_ASC, limit: 500) {\n      items {\n        ...VideoCard\n      }\n    }\n  }\n": types.RootLayoutDocument,
    "\n  query HomePage {\n    videoCollection(order: uploadDate_DESC, limit: 12) {\n      items {\n        ...VideoCard\n      }\n    }\n  }\n": types.HomePageDocument,
    "fragment ArtistCard on Artist {\n  _id\n  name\n  accentColor\n  slug\n  photo {\n    url\n  }\n}": types.ArtistCardFragmentDoc,
    "fragment VideoCard on Video {\n  _id\n  title\n  subtitle\n  slug\n  videoType\n  uploadDate\n  thumbnail {\n    url\n  }\n  artist {\n    name\n    accentColor\n    slug\n    photo {\n      url\n    }\n  }\n}": types.VideoCardFragmentDoc,
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
export function graphql(source: "\n  query VideoPage($artistSlug: String!, $videoSlug: String!) {\n    video: videoCollection(where: { slug: $videoSlug, artist: { slug: $artistSlug } }, limit: 1) {\n      items {\n        ...VideoCard\n      }\n    }\n    moreVideos: videoCollection(\n      where: { slug_not: $videoSlug, artist: { slug: $artistSlug } }\n      order: title_ASC\n    ) {\n      items {\n        ...VideoCard\n      }\n    }\n  }\n"): (typeof documents)["\n  query VideoPage($artistSlug: String!, $videoSlug: String!) {\n    video: videoCollection(where: { slug: $videoSlug, artist: { slug: $artistSlug } }, limit: 1) {\n      items {\n        ...VideoCard\n      }\n    }\n    moreVideos: videoCollection(\n      where: { slug_not: $videoSlug, artist: { slug: $artistSlug } }\n      order: title_ASC\n    ) {\n      items {\n        ...VideoCard\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ArtistPage($slug: String!) {\n    artistCollection(where: { slug: $slug }) {\n      items {\n        _id\n        name\n        slug\n      }\n    }\n    videoCollection(where: { artist: { slug: $slug } }, order: title_ASC) {\n      items {\n        ...VideoCard\n      }\n    }\n  }\n"): (typeof documents)["\n  query ArtistPage($slug: String!) {\n    artistCollection(where: { slug: $slug }) {\n      items {\n        _id\n        name\n        slug\n      }\n    }\n    videoCollection(where: { artist: { slug: $slug } }, order: title_ASC) {\n      items {\n        ...VideoCard\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllArtistsPage {\n    artistCollection(order: name_ASC, limit: 100) {\n      items {\n        ...ArtistCard\n      }\n    }\n  }\n"): (typeof documents)["\n  query AllArtistsPage {\n    artistCollection(order: name_ASC, limit: 100) {\n      items {\n        ...ArtistCard\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query RootLayout {\n    artistCollection(order: name_ASC) {\n      items {\n        ...ArtistCard\n      }\n    }\n    videoCollection(order: title_ASC, limit: 500) {\n      items {\n        ...VideoCard\n      }\n    }\n  }\n"): (typeof documents)["\n  query RootLayout {\n    artistCollection(order: name_ASC) {\n      items {\n        ...ArtistCard\n      }\n    }\n    videoCollection(order: title_ASC, limit: 500) {\n      items {\n        ...VideoCard\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query HomePage {\n    videoCollection(order: uploadDate_DESC, limit: 12) {\n      items {\n        ...VideoCard\n      }\n    }\n  }\n"): (typeof documents)["\n  query HomePage {\n    videoCollection(order: uploadDate_DESC, limit: 12) {\n      items {\n        ...VideoCard\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ArtistCard on Artist {\n  _id\n  name\n  accentColor\n  slug\n  photo {\n    url\n  }\n}"): (typeof documents)["fragment ArtistCard on Artist {\n  _id\n  name\n  accentColor\n  slug\n  photo {\n    url\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment VideoCard on Video {\n  _id\n  title\n  subtitle\n  slug\n  videoType\n  uploadDate\n  thumbnail {\n    url\n  }\n  artist {\n    name\n    accentColor\n    slug\n    photo {\n      url\n    }\n  }\n}"): (typeof documents)["fragment VideoCard on Video {\n  _id\n  title\n  subtitle\n  slug\n  videoType\n  uploadDate\n  thumbnail {\n    url\n  }\n  artist {\n    name\n    accentColor\n    slug\n    photo {\n      url\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
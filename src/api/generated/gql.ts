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
    "\n  query homePageContent {\n    meta: pageCollection(where: { slug: \"home\" }) {\n      items {\n        metaTitle\n        metaDescription\n      }\n    }\n    recentVideos: videoCollection(limit: 15, order: uploadDate_DESC) {\n      items {\n        title\n        slug\n        artist {\n          name\n          slug\n          accentColor\n        }\n      }\n    }\n  }\n": types.HomePageContentDocument,
    "\n  query allArtists {\n    artistCollection(order: name_ASC, limit: 200) {\n      items {\n        name\n        slug\n        accentColor\n      }\n    }\n  }\n": types.AllArtistsDocument,
    "\n  query allVideoSlugs {\n    videoCollection(limit: 500) {\n      items {\n        slug\n        artist {\n          slug\n        }\n      }\n    }\n  }\n": types.AllVideoSlugsDocument,
    "\n  query allVideosForArtist($slug: String!) {\n    videos: videoCollection(where: { artist: { slug: $slug } }) {\n      items {\n        title\n        slug\n        artist {\n          name\n          slug\n          accentColor\n        }\n      }\n    }\n  }\n": types.AllVideosForArtistDocument,
    "\n  query ArtistPage($slug: String!) {\n    bio: artistCollection(where: { slug: $slug }) {\n      items {\n        name\n        slug\n        accentColor\n      }\n    }\n    videos: videoCollection(where: { artist: { slug: $slug } }, order: uploadDate_DESC) {\n      items {\n        title\n        slug\n        artist {\n          name\n          slug\n          accentColor\n        }\n      }\n    }\n  }\n": types.ArtistPageDocument,
    "\n  query videoPage($videoSlug: String!, $artistSlug: String!) {\n    videoCollection(where: { slug: $videoSlug, artist: { slug: $artistSlug } }) {\n      items {\n        title\n        slug\n        artist {\n          name\n          slug\n          accentColor\n        }\n      }\n    }\n  }\n": types.VideoPageDocument,
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
export function graphql(source: "\n  query homePageContent {\n    meta: pageCollection(where: { slug: \"home\" }) {\n      items {\n        metaTitle\n        metaDescription\n      }\n    }\n    recentVideos: videoCollection(limit: 15, order: uploadDate_DESC) {\n      items {\n        title\n        slug\n        artist {\n          name\n          slug\n          accentColor\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query homePageContent {\n    meta: pageCollection(where: { slug: \"home\" }) {\n      items {\n        metaTitle\n        metaDescription\n      }\n    }\n    recentVideos: videoCollection(limit: 15, order: uploadDate_DESC) {\n      items {\n        title\n        slug\n        artist {\n          name\n          slug\n          accentColor\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query allArtists {\n    artistCollection(order: name_ASC, limit: 200) {\n      items {\n        name\n        slug\n        accentColor\n      }\n    }\n  }\n"): (typeof documents)["\n  query allArtists {\n    artistCollection(order: name_ASC, limit: 200) {\n      items {\n        name\n        slug\n        accentColor\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query allVideoSlugs {\n    videoCollection(limit: 500) {\n      items {\n        slug\n        artist {\n          slug\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query allVideoSlugs {\n    videoCollection(limit: 500) {\n      items {\n        slug\n        artist {\n          slug\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query allVideosForArtist($slug: String!) {\n    videos: videoCollection(where: { artist: { slug: $slug } }) {\n      items {\n        title\n        slug\n        artist {\n          name\n          slug\n          accentColor\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query allVideosForArtist($slug: String!) {\n    videos: videoCollection(where: { artist: { slug: $slug } }) {\n      items {\n        title\n        slug\n        artist {\n          name\n          slug\n          accentColor\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ArtistPage($slug: String!) {\n    bio: artistCollection(where: { slug: $slug }) {\n      items {\n        name\n        slug\n        accentColor\n      }\n    }\n    videos: videoCollection(where: { artist: { slug: $slug } }, order: uploadDate_DESC) {\n      items {\n        title\n        slug\n        artist {\n          name\n          slug\n          accentColor\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query ArtistPage($slug: String!) {\n    bio: artistCollection(where: { slug: $slug }) {\n      items {\n        name\n        slug\n        accentColor\n      }\n    }\n    videos: videoCollection(where: { artist: { slug: $slug } }, order: uploadDate_DESC) {\n      items {\n        title\n        slug\n        artist {\n          name\n          slug\n          accentColor\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query videoPage($videoSlug: String!, $artistSlug: String!) {\n    videoCollection(where: { slug: $videoSlug, artist: { slug: $artistSlug } }) {\n      items {\n        title\n        slug\n        artist {\n          name\n          slug\n          accentColor\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query videoPage($videoSlug: String!, $artistSlug: String!) {\n    videoCollection(where: { slug: $videoSlug, artist: { slug: $artistSlug } }) {\n      items {\n        title\n        slug\n        artist {\n          name\n          slug\n          accentColor\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
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
    "\n  query AllArtists {\n    artists: artistCollection(limit: 500) {\n      items {\n        slug\n        pagePath @client\n      }\n    }\n  }\n": types.AllArtistsDocument,
    "\n  query AllVideos {\n    videos: videoCollection(limit: 500) {\n      items {\n        slug\n        pagePath @client\n        artist {\n          slug\n        }\n      }\n    }\n  }\n": types.AllVideosDocument,
    "\n  query ArtistPage($artistSlug: String!) {\n    page: artistCollection(where: { slug: $artistSlug }) {\n      items {\n        name\n        slug\n        accentColor\n        pagePath @client\n      }\n    }\n    videos: videoCollection(where: { artist: { slug: $artistSlug } }) {\n      items {\n        title\n        slug\n        pagePath @client\n        artist {\n          name\n          slug\n          accentColor\n        }\n      }\n    }\n  }\n": types.ArtistPageDocument,
    "\n  query ArtistsPage {\n    page: pageCollection(where: { slug: \"artists\" }) {\n      items {\n        metaTitle\n        metaDescription\n      }\n    }\n    artists: artistCollection(order: name_ASC, limit: 200) {\n      items {\n        name\n        slug\n        accentColor\n        pagePath @client\n      }\n    }\n  }\n": types.ArtistsPageDocument,
    "\n  query HomePage {\n    page: pageCollection(where: { slug: \"home\" }) {\n      items {\n        metaTitle\n        metaDescription\n      }\n    }\n    recentVideos: videoCollection(limit: 15, order: uploadDate_DESC) {\n      items {\n        title\n        slug\n        pagePath @client\n        artist {\n          name\n          slug\n        }\n      }\n    }\n  }\n": types.HomePageDocument,
    "\n  query VideoPage($artistSlug: String!, $videoSlug: String!) {\n    page: videoCollection(where: { slug: $videoSlug, artist: { slug: $artistSlug } }) {\n      items {\n        title\n        slug\n        artist {\n          name\n          slug\n          accentColor\n        }\n      }\n    }\n  }\n": types.VideoPageDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AllArtists {\n    artists: artistCollection(limit: 500) {\n      items {\n        slug\n        pagePath @client\n      }\n    }\n  }\n"): (typeof documents)["\n  query AllArtists {\n    artists: artistCollection(limit: 500) {\n      items {\n        slug\n        pagePath @client\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AllVideos {\n    videos: videoCollection(limit: 500) {\n      items {\n        slug\n        pagePath @client\n        artist {\n          slug\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query AllVideos {\n    videos: videoCollection(limit: 500) {\n      items {\n        slug\n        pagePath @client\n        artist {\n          slug\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query ArtistPage($artistSlug: String!) {\n    page: artistCollection(where: { slug: $artistSlug }) {\n      items {\n        name\n        slug\n        accentColor\n        pagePath @client\n      }\n    }\n    videos: videoCollection(where: { artist: { slug: $artistSlug } }) {\n      items {\n        title\n        slug\n        pagePath @client\n        artist {\n          name\n          slug\n          accentColor\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query ArtistPage($artistSlug: String!) {\n    page: artistCollection(where: { slug: $artistSlug }) {\n      items {\n        name\n        slug\n        accentColor\n        pagePath @client\n      }\n    }\n    videos: videoCollection(where: { artist: { slug: $artistSlug } }) {\n      items {\n        title\n        slug\n        pagePath @client\n        artist {\n          name\n          slug\n          accentColor\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query ArtistsPage {\n    page: pageCollection(where: { slug: \"artists\" }) {\n      items {\n        metaTitle\n        metaDescription\n      }\n    }\n    artists: artistCollection(order: name_ASC, limit: 200) {\n      items {\n        name\n        slug\n        accentColor\n        pagePath @client\n      }\n    }\n  }\n"): (typeof documents)["\n  query ArtistsPage {\n    page: pageCollection(where: { slug: \"artists\" }) {\n      items {\n        metaTitle\n        metaDescription\n      }\n    }\n    artists: artistCollection(order: name_ASC, limit: 200) {\n      items {\n        name\n        slug\n        accentColor\n        pagePath @client\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query HomePage {\n    page: pageCollection(where: { slug: \"home\" }) {\n      items {\n        metaTitle\n        metaDescription\n      }\n    }\n    recentVideos: videoCollection(limit: 15, order: uploadDate_DESC) {\n      items {\n        title\n        slug\n        pagePath @client\n        artist {\n          name\n          slug\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query HomePage {\n    page: pageCollection(where: { slug: \"home\" }) {\n      items {\n        metaTitle\n        metaDescription\n      }\n    }\n    recentVideos: videoCollection(limit: 15, order: uploadDate_DESC) {\n      items {\n        title\n        slug\n        pagePath @client\n        artist {\n          name\n          slug\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query VideoPage($artistSlug: String!, $videoSlug: String!) {\n    page: videoCollection(where: { slug: $videoSlug, artist: { slug: $artistSlug } }) {\n      items {\n        title\n        slug\n        artist {\n          name\n          slug\n          accentColor\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query VideoPage($artistSlug: String!, $videoSlug: String!) {\n    page: videoCollection(where: { slug: $videoSlug, artist: { slug: $artistSlug } }) {\n      items {\n        title\n        slug\n        artist {\n          name\n          slug\n          accentColor\n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
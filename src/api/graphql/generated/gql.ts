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
    "fragment VideoCard on Video {\n  title\n  subtitle\n  uploadDate\n  videoType\n  pagePath @client\n  thumbnail {\n    title\n    description\n    width\n    height\n    url\n    fileName\n    contentType\n  }\n  artist {\n    name\n    accentColor\n    colors @client {\n      lightest\n      light\n      mid\n      dark\n      darkest\n    }\n  }\n}\n\nfragment ArtistCard on Artist {\n  name\n  slug\n  pagePath @client\n  accentColor\n  colors @client {\n    lightest\n    light\n    mid\n    dark\n    darkest\n  }\n  photo {\n    title\n    description\n    width\n    height\n    url\n    fileName\n    contentType\n  }\n}\n\nquery HomePage {\n  page: pageCollection(where: {slug: \"home\"}) {\n    items {\n      metaTitle\n      metaDescription\n      slug\n    }\n  }\n  recentVideos: videoCollection(limit: 15, order: uploadDate_DESC) {\n    items {\n      ...VideoCard\n    }\n  }\n}\n\nquery VideoPage($artistSlug: String!, $videoSlug: String!) {\n  page: videoCollection(where: {slug: $videoSlug, artist: {slug: $artistSlug}}) {\n    items {\n      title\n      uploadDate\n      shortDescription\n      longDescription {\n        json\n      }\n      videoType\n      videoUrl\n      thumbnail {\n        title\n        description\n        width\n        height\n        url\n        fileName\n        contentType\n      }\n      artist {\n        name\n      }\n    }\n  }\n  moreVideos: videoCollection(\n    where: {slug_not: $videoSlug, artist: {slug: $artistSlug}}\n    order: uploadDate_DESC\n  ) {\n    items {\n      ...VideoCard\n    }\n  }\n}\n\nquery ArtistsPage {\n  page: pageCollection(where: {slug: \"artists\"}) {\n    items {\n      metaTitle\n      metaDescription\n    }\n  }\n  artists: artistCollection(order: name_ASC, limit: 500) {\n    items {\n      ...ArtistCard\n    }\n  }\n}\n\nquery AllVideoSlugs {\n  videos: videoCollection(limit: 500) {\n    items {\n      slug\n      artist {\n        slug\n      }\n    }\n  }\n}\n\nquery AllVideos {\n  videos: videoCollection(limit: 500, order: uploadDate_DESC) {\n    items {\n      title\n      uploadDate\n      shortDescription\n      longDescription {\n        json\n      }\n      videoType\n      videoUrl\n      thumbnail {\n        title\n        description\n        width\n        height\n        url\n        fileName\n        contentType\n      }\n      artist {\n        name\n      }\n      sys {\n        id\n      }\n    }\n  }\n}\n\nquery ArtistPage($artistSlug: String!) {\n  page: artistCollection(where: {slug: $artistSlug}) {\n    items {\n      name\n      accentColor\n      slug\n      pagePath @client\n      colors @client {\n        lightest\n        light\n        mid\n        dark\n        darkest\n      }\n      photo {\n        title\n        description\n        width\n        height\n        url\n        fileName\n        contentType\n      }\n      shortBio\n      bio {\n        json\n      }\n      websiteUrl\n      twitterUrl\n      tiktokUrl\n      facebookUrl\n      instagramUrl\n      bandcampUrl\n      soundcloudUrl\n      youtubeUrl\n    }\n  }\n  videos: videoCollection(where: {artist: {slug: $artistSlug}}) {\n    items {\n      ...VideoCard\n    }\n  }\n}": types.VideoCardFragmentDoc,
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
export function graphql(source: "fragment VideoCard on Video {\n  title\n  subtitle\n  uploadDate\n  videoType\n  pagePath @client\n  thumbnail {\n    title\n    description\n    width\n    height\n    url\n    fileName\n    contentType\n  }\n  artist {\n    name\n    accentColor\n    colors @client {\n      lightest\n      light\n      mid\n      dark\n      darkest\n    }\n  }\n}\n\nfragment ArtistCard on Artist {\n  name\n  slug\n  pagePath @client\n  accentColor\n  colors @client {\n    lightest\n    light\n    mid\n    dark\n    darkest\n  }\n  photo {\n    title\n    description\n    width\n    height\n    url\n    fileName\n    contentType\n  }\n}\n\nquery HomePage {\n  page: pageCollection(where: {slug: \"home\"}) {\n    items {\n      metaTitle\n      metaDescription\n      slug\n    }\n  }\n  recentVideos: videoCollection(limit: 15, order: uploadDate_DESC) {\n    items {\n      ...VideoCard\n    }\n  }\n}\n\nquery VideoPage($artistSlug: String!, $videoSlug: String!) {\n  page: videoCollection(where: {slug: $videoSlug, artist: {slug: $artistSlug}}) {\n    items {\n      title\n      uploadDate\n      shortDescription\n      longDescription {\n        json\n      }\n      videoType\n      videoUrl\n      thumbnail {\n        title\n        description\n        width\n        height\n        url\n        fileName\n        contentType\n      }\n      artist {\n        name\n      }\n    }\n  }\n  moreVideos: videoCollection(\n    where: {slug_not: $videoSlug, artist: {slug: $artistSlug}}\n    order: uploadDate_DESC\n  ) {\n    items {\n      ...VideoCard\n    }\n  }\n}\n\nquery ArtistsPage {\n  page: pageCollection(where: {slug: \"artists\"}) {\n    items {\n      metaTitle\n      metaDescription\n    }\n  }\n  artists: artistCollection(order: name_ASC, limit: 500) {\n    items {\n      ...ArtistCard\n    }\n  }\n}\n\nquery AllVideoSlugs {\n  videos: videoCollection(limit: 500) {\n    items {\n      slug\n      artist {\n        slug\n      }\n    }\n  }\n}\n\nquery AllVideos {\n  videos: videoCollection(limit: 500, order: uploadDate_DESC) {\n    items {\n      title\n      uploadDate\n      shortDescription\n      longDescription {\n        json\n      }\n      videoType\n      videoUrl\n      thumbnail {\n        title\n        description\n        width\n        height\n        url\n        fileName\n        contentType\n      }\n      artist {\n        name\n      }\n      sys {\n        id\n      }\n    }\n  }\n}\n\nquery ArtistPage($artistSlug: String!) {\n  page: artistCollection(where: {slug: $artistSlug}) {\n    items {\n      name\n      accentColor\n      slug\n      pagePath @client\n      colors @client {\n        lightest\n        light\n        mid\n        dark\n        darkest\n      }\n      photo {\n        title\n        description\n        width\n        height\n        url\n        fileName\n        contentType\n      }\n      shortBio\n      bio {\n        json\n      }\n      websiteUrl\n      twitterUrl\n      tiktokUrl\n      facebookUrl\n      instagramUrl\n      bandcampUrl\n      soundcloudUrl\n      youtubeUrl\n    }\n  }\n  videos: videoCollection(where: {artist: {slug: $artistSlug}}) {\n    items {\n      ...VideoCard\n    }\n  }\n}"): (typeof documents)["fragment VideoCard on Video {\n  title\n  subtitle\n  uploadDate\n  videoType\n  pagePath @client\n  thumbnail {\n    title\n    description\n    width\n    height\n    url\n    fileName\n    contentType\n  }\n  artist {\n    name\n    accentColor\n    colors @client {\n      lightest\n      light\n      mid\n      dark\n      darkest\n    }\n  }\n}\n\nfragment ArtistCard on Artist {\n  name\n  slug\n  pagePath @client\n  accentColor\n  colors @client {\n    lightest\n    light\n    mid\n    dark\n    darkest\n  }\n  photo {\n    title\n    description\n    width\n    height\n    url\n    fileName\n    contentType\n  }\n}\n\nquery HomePage {\n  page: pageCollection(where: {slug: \"home\"}) {\n    items {\n      metaTitle\n      metaDescription\n      slug\n    }\n  }\n  recentVideos: videoCollection(limit: 15, order: uploadDate_DESC) {\n    items {\n      ...VideoCard\n    }\n  }\n}\n\nquery VideoPage($artistSlug: String!, $videoSlug: String!) {\n  page: videoCollection(where: {slug: $videoSlug, artist: {slug: $artistSlug}}) {\n    items {\n      title\n      uploadDate\n      shortDescription\n      longDescription {\n        json\n      }\n      videoType\n      videoUrl\n      thumbnail {\n        title\n        description\n        width\n        height\n        url\n        fileName\n        contentType\n      }\n      artist {\n        name\n      }\n    }\n  }\n  moreVideos: videoCollection(\n    where: {slug_not: $videoSlug, artist: {slug: $artistSlug}}\n    order: uploadDate_DESC\n  ) {\n    items {\n      ...VideoCard\n    }\n  }\n}\n\nquery ArtistsPage {\n  page: pageCollection(where: {slug: \"artists\"}) {\n    items {\n      metaTitle\n      metaDescription\n    }\n  }\n  artists: artistCollection(order: name_ASC, limit: 500) {\n    items {\n      ...ArtistCard\n    }\n  }\n}\n\nquery AllVideoSlugs {\n  videos: videoCollection(limit: 500) {\n    items {\n      slug\n      artist {\n        slug\n      }\n    }\n  }\n}\n\nquery AllVideos {\n  videos: videoCollection(limit: 500, order: uploadDate_DESC) {\n    items {\n      title\n      uploadDate\n      shortDescription\n      longDescription {\n        json\n      }\n      videoType\n      videoUrl\n      thumbnail {\n        title\n        description\n        width\n        height\n        url\n        fileName\n        contentType\n      }\n      artist {\n        name\n      }\n      sys {\n        id\n      }\n    }\n  }\n}\n\nquery ArtistPage($artistSlug: String!) {\n  page: artistCollection(where: {slug: $artistSlug}) {\n    items {\n      name\n      accentColor\n      slug\n      pagePath @client\n      colors @client {\n        lightest\n        light\n        mid\n        dark\n        darkest\n      }\n      photo {\n        title\n        description\n        width\n        height\n        url\n        fileName\n        contentType\n      }\n      shortBio\n      bio {\n        json\n      }\n      websiteUrl\n      twitterUrl\n      tiktokUrl\n      facebookUrl\n      instagramUrl\n      bandcampUrl\n      soundcloudUrl\n      youtubeUrl\n    }\n  }\n  videos: videoCollection(where: {artist: {slug: $artistSlug}}) {\n    items {\n      ...VideoCard\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
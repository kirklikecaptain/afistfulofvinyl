/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

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
  "\n  query VideoPageQuery($videoSlug: String!, $artistSlug: String!) {\n    video: videoCollection(limit: 1, where: { slug: $videoSlug, artist: { slug: $artistSlug } }) {\n      items {\n        title\n        slug\n        subtitle\n        videoUrl\n        shortDescription\n        longDescription {\n          links {\n            entries {\n              inline {\n                sys {\n                  id\n                }\n              }\n              block {\n                sys {\n                  id\n                }\n              }\n            }\n            assets {\n              block {\n                sys {\n                  id\n                }\n                url\n                title\n                width\n                height\n                description\n              }\n            }\n          }\n          json\n        }\n        artist {\n          name\n          slug\n          accentColor\n          photo {\n            url\n          }\n        }\n        uploadDate\n        videoType\n        thumbnail {\n          url\n          description\n        }\n      }\n    }\n    relatedVideos: videoCollection(limit: 3, where: { artist: { slug: $artistSlug }, slug_not: $videoSlug }) {\n      items {\n        ...VideoCardLink\n      }\n    }\n    recentVideos: videoCollection(limit: 3, order: uploadDate_DESC) {\n      items {\n        ...VideoCardLink\n      }\n    }\n  }\n":
    types.VideoPageQueryDocument,
  "\n  query ArtistProfilePageQuery($artistSlug: String!) {\n    artist: artistCollection(where: { slug: $artistSlug }) {\n      items {\n        name\n        slug\n        accentColor\n        photo {\n          url\n          width\n          height\n          description\n        }\n      }\n    }\n    videos: videoCollection(where: { artist: { slug: $artistSlug } }) {\n      items {\n        ...VideoCardLink\n      }\n    }\n  }\n":
    types.ArtistProfilePageQueryDocument,
  "\n  query AllArtistsPageQuery {\n    artists: artistCollection(limit: 150, order: name_ASC) {\n      items {\n        name\n        slug\n        accentColor\n        photo {\n          url\n        }\n        linkedFrom {\n          videoCollection(limit: 20) {\n            total\n          }\n        }\n      }\n    }\n  }\n":
    types.AllArtistsPageQueryDocument,
  "\n  query HomePageQuery {\n    recentVideos: videoCollection(limit: 12, order: uploadDate_DESC) {\n      items {\n        ...VideoCardLink\n      }\n    }\n  }\n":
    types.HomePageQueryDocument,
  "\n  query AllVideosPage($limit: Int!, $skip: Int, $videoType: String) {\n    videos: videoCollection(\n      limit: $limit\n      skip: $skip\n      order: uploadDate_DESC\n      where: { videoType: $videoType }\n    ) {\n      total\n      items {\n        ...VideoCardLink\n      }\n    }\n  }\n":
    types.AllVideosPageDocument,
  "fragment VideoCardLink on Video {\n  slug\n  title\n  subtitle\n  videoType\n  thumbnail {\n    url\n    description\n  }\n  artist {\n    name\n    accentColor\n    slug\n    photo {\n      url\n      description\n    }\n  }\n}":
    types.VideoCardLinkFragmentDoc,
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
export function graphql(
  source: "\n  query VideoPageQuery($videoSlug: String!, $artistSlug: String!) {\n    video: videoCollection(limit: 1, where: { slug: $videoSlug, artist: { slug: $artistSlug } }) {\n      items {\n        title\n        slug\n        subtitle\n        videoUrl\n        shortDescription\n        longDescription {\n          links {\n            entries {\n              inline {\n                sys {\n                  id\n                }\n              }\n              block {\n                sys {\n                  id\n                }\n              }\n            }\n            assets {\n              block {\n                sys {\n                  id\n                }\n                url\n                title\n                width\n                height\n                description\n              }\n            }\n          }\n          json\n        }\n        artist {\n          name\n          slug\n          accentColor\n          photo {\n            url\n          }\n        }\n        uploadDate\n        videoType\n        thumbnail {\n          url\n          description\n        }\n      }\n    }\n    relatedVideos: videoCollection(limit: 3, where: { artist: { slug: $artistSlug }, slug_not: $videoSlug }) {\n      items {\n        ...VideoCardLink\n      }\n    }\n    recentVideos: videoCollection(limit: 3, order: uploadDate_DESC) {\n      items {\n        ...VideoCardLink\n      }\n    }\n  }\n",
): (typeof documents)["\n  query VideoPageQuery($videoSlug: String!, $artistSlug: String!) {\n    video: videoCollection(limit: 1, where: { slug: $videoSlug, artist: { slug: $artistSlug } }) {\n      items {\n        title\n        slug\n        subtitle\n        videoUrl\n        shortDescription\n        longDescription {\n          links {\n            entries {\n              inline {\n                sys {\n                  id\n                }\n              }\n              block {\n                sys {\n                  id\n                }\n              }\n            }\n            assets {\n              block {\n                sys {\n                  id\n                }\n                url\n                title\n                width\n                height\n                description\n              }\n            }\n          }\n          json\n        }\n        artist {\n          name\n          slug\n          accentColor\n          photo {\n            url\n          }\n        }\n        uploadDate\n        videoType\n        thumbnail {\n          url\n          description\n        }\n      }\n    }\n    relatedVideos: videoCollection(limit: 3, where: { artist: { slug: $artistSlug }, slug_not: $videoSlug }) {\n      items {\n        ...VideoCardLink\n      }\n    }\n    recentVideos: videoCollection(limit: 3, order: uploadDate_DESC) {\n      items {\n        ...VideoCardLink\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query ArtistProfilePageQuery($artistSlug: String!) {\n    artist: artistCollection(where: { slug: $artistSlug }) {\n      items {\n        name\n        slug\n        accentColor\n        photo {\n          url\n          width\n          height\n          description\n        }\n      }\n    }\n    videos: videoCollection(where: { artist: { slug: $artistSlug } }) {\n      items {\n        ...VideoCardLink\n      }\n    }\n  }\n",
): (typeof documents)["\n  query ArtistProfilePageQuery($artistSlug: String!) {\n    artist: artistCollection(where: { slug: $artistSlug }) {\n      items {\n        name\n        slug\n        accentColor\n        photo {\n          url\n          width\n          height\n          description\n        }\n      }\n    }\n    videos: videoCollection(where: { artist: { slug: $artistSlug } }) {\n      items {\n        ...VideoCardLink\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query AllArtistsPageQuery {\n    artists: artistCollection(limit: 150, order: name_ASC) {\n      items {\n        name\n        slug\n        accentColor\n        photo {\n          url\n        }\n        linkedFrom {\n          videoCollection(limit: 20) {\n            total\n          }\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  query AllArtistsPageQuery {\n    artists: artistCollection(limit: 150, order: name_ASC) {\n      items {\n        name\n        slug\n        accentColor\n        photo {\n          url\n        }\n        linkedFrom {\n          videoCollection(limit: 20) {\n            total\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query HomePageQuery {\n    recentVideos: videoCollection(limit: 12, order: uploadDate_DESC) {\n      items {\n        ...VideoCardLink\n      }\n    }\n  }\n",
): (typeof documents)["\n  query HomePageQuery {\n    recentVideos: videoCollection(limit: 12, order: uploadDate_DESC) {\n      items {\n        ...VideoCardLink\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query AllVideosPage($limit: Int!, $skip: Int, $videoType: String) {\n    videos: videoCollection(\n      limit: $limit\n      skip: $skip\n      order: uploadDate_DESC\n      where: { videoType: $videoType }\n    ) {\n      total\n      items {\n        ...VideoCardLink\n      }\n    }\n  }\n",
): (typeof documents)["\n  query AllVideosPage($limit: Int!, $skip: Int, $videoType: String) {\n    videos: videoCollection(\n      limit: $limit\n      skip: $skip\n      order: uploadDate_DESC\n      where: { videoType: $videoType }\n    ) {\n      total\n      items {\n        ...VideoCardLink\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment VideoCardLink on Video {\n  slug\n  title\n  subtitle\n  videoType\n  thumbnail {\n    url\n    description\n  }\n  artist {\n    name\n    accentColor\n    slug\n    photo {\n      url\n      description\n    }\n  }\n}",
): (typeof documents)["fragment VideoCardLink on Video {\n  slug\n  title\n  subtitle\n  videoType\n  thumbnail {\n    url\n    description\n  }\n  artist {\n    name\n    accentColor\n    slug\n    photo {\n      url\n      description\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;

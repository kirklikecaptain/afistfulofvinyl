import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

import type { Artist, Video } from "~/api";
import { buildArtistPagePath, buildVideoPagePath } from "~/utils/pagePaths";
import { createArtistColorsScheme } from "~/utils/colorScheme";

import { contentful } from "./contentful";

export const apollo = registerApolloClient(() => {
  return new ApolloClient({
    link: new HttpLink({
      uri: contentful.graphqlEndpoint,
      headers: {
        Authorization: contentful.authorizationHeader,
      },
    }),
    cache: new InMemoryCache({
      typePolicies: {
        Artist: {
          fields: {
            pagePath: {
              read(_, { readField }) {
                const artistSlug = readField<Artist["slug"]>("slug");
                const pagePath = buildArtistPagePath(artistSlug);

                return pagePath;
              },
            },
            colors: {
              read(_, { readField }) {
                const artistColor = readField<Artist["accentColor"]>("accentColor");
                const colorScheme = createArtistColorsScheme(artistColor);

                return colorScheme;
              },
            },
          },
        },
        Video: {
          fields: {
            pagePath: {
              read(_, { readField }) {
                const artistSlug = readField<Artist>("artist")?.slug;
                const videoSlug = readField<Video["slug"]>("slug");
                const pagePath = buildVideoPagePath(artistSlug, videoSlug);

                return pagePath;
              },
            },
          },
        },
      },
    }),
  });
});

import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { Artist, Video } from "~/api/__generated__/graphql";
import { CONTENTFUL } from "~/libs/contentful/constants";
import { buildArtistPagePath, buildVideoPagePath } from "~/utils/buildPagePaths";
import { createArtistColorsScheme } from "~/utils/createArtistColorScheme";

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    link: new HttpLink({
      uri: CONTENTFUL.gqlEndpoint,
      headers: {
        Authorization: CONTENTFUL.authorizationHeader,
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

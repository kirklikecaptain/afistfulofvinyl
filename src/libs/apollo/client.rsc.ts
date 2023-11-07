import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { linkConfig } from "./client.config";
import { Artist, Video } from "./graphql/graphql";

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    link: new HttpLink(linkConfig),
    cache: new InMemoryCache({
      typePolicies: {
        Artist: {
          fields: {
            pagePath: {
              read(_, { readField }) {
                const artistSlug = readField<Artist>("slug");

                return `/artists/${artistSlug}`;
              },
            },
          },
        },
        Video: {
          fields: {
            pagePath: {
              read(_, { readField }) {
                const artistSlug = readField<Artist>("artist")?.slug;
                const videoSlug = readField<Video>("slug");

                return `/artists/${artistSlug}/${videoSlug}`;
              },
            },
          },
        },
      },
    }),
  });
});

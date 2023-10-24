import { ApolloLink, HttpLink } from "@apollo/client";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { linkConfig } from "./client.config";

export const makeSsrClient = () => {
  const isServer = typeof window === "undefined";
  const httpLink = new HttpLink(linkConfig);

  const serverLink = ApolloLink.from([
    new SSRMultipartLink({
      stripDefer: true,
    }),
    httpLink,
  ]);

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: isServer ? serverLink : httpLink,
  });
};

"use client";

import { ApolloNextAppProvider } from "@apollo/experimental-nextjs-app-support/ssr";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { makeSsrClient } from "~/libs/apollo/client.ssr";
import { theme } from "~/theme/config";

export function Providers({ children }: PropsWithChildren) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <ApolloNextAppProvider makeClient={makeSsrClient}>{children}</ApolloNextAppProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}

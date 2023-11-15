"use client";

import { type PropsWithChildren } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import { theme } from "./theme";

export function ChakraThemeProvider({ children }: PropsWithChildren) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}

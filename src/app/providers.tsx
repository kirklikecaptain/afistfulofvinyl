import { CacheProvider } from "~/libs/chakra-ui/next-js";
import { ChakraProvider } from "~/libs/chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </CacheProvider>
  );
}

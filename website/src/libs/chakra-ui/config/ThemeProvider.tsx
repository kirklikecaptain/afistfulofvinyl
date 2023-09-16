import { CacheProvider } from "../next-js";
import { ChakraProvider } from "../react";

interface Props {
  children: React.ReactNode;
}

export default function ChakraUIProvider({ children }: Props) {
  return (
    <CacheProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </CacheProvider>
  );
}

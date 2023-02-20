import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";

interface ChakraProps {
  children: React.ReactNode;
}

export function Chakra({ children }: ChakraProps) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

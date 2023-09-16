import ChakraUIProvider from "~/libs/chakra-ui/config/ThemeProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return <ChakraUIProvider>{children}</ChakraUIProvider>;
}

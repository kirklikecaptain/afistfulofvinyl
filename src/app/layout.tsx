import { PropsWithChildren } from "react";
import { ChakraThemeProvider } from "~/ui/theme/ChakraThemeProvider";

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" data-theme="dark" style={{ colorScheme: "dark" }}>
      <body className="chakra-ui-dark">
        <ChakraThemeProvider>{children}</ChakraThemeProvider>
      </body>
    </html>
  );
}

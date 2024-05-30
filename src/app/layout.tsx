import "@radix-ui/themes/styles.css";
import { Theme, Flex, Box } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";

import { AppFooter, AppHeader } from "~/components";
import "./app.css";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme="dark" attribute="class" enableSystem>
          <Theme accentColor="blue" asChild>
            <Flex direction="column">
              <AppHeader />
              <Box flexGrow="1">{children}</Box>
              <AppFooter />
            </Flex>
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}

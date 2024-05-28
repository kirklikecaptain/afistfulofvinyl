import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";
import "@radix-ui/themes/styles.css";

import { AppFooter, AppHeader } from "~/components";
import "~/styles/global.css";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme="dark" attribute="class" enableSystem>
          <Theme>
            <AppHeader />
            {children}
            <AppFooter />
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}

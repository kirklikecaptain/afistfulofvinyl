import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";

import "@radix-ui/themes/styles.css";
import "./global.css";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider enableSystem disableTransitionOnChange defaultTheme="dark" attribute="class">
          <Theme accentColor="blue">{children}</Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}

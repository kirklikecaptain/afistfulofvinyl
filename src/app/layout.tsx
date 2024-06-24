import "@radix-ui/themes/styles.css";
import { PropsWithChildren } from "react";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";
import { GoogleAnalytics } from "@next/third-parties/google";

import "~/styles/global.css";

import { AppLayout } from "~/components";

const isDeployed = process.env.NODE_ENV !== "development";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme="dark" attribute="class" enableSystem>
          <Theme accentColor="gray" asChild>
            <AppLayout>{children}</AppLayout>
          </Theme>
        </ThemeProvider>
        {isDeployed && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!} />}
      </body>
    </html>
  );
}

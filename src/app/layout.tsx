import "@mantine/core/styles.css";
import "@mantine/spotlight/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import type { Metadata } from "next";
import { draftMode } from "next/headers";

import "~/styles/global.css";
import { theme } from "~/styles/theme";
import { AppLayout, Search, ExitPreviewButton } from "~/components";

export const metadata: Metadata = {
  title: "A Fistful of Vinyl",
  description:
    "Live sessions and interviews with independent and DIY artists from all music genres",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark" theme={theme}>
          <AppLayout>{children}</AppLayout>
          {draftMode().isEnabled && <ExitPreviewButton />}
          <Search />
        </MantineProvider>
      </body>
    </html>
  );
}

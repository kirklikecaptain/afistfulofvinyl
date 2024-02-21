import "@mantine/core/styles.css";
import "@mantine/spotlight/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import type { Metadata } from "next";
import { draftMode } from "next/headers";

import { SearchModal, ExitPreviewButton } from "~/components";
import { theme } from "~/theme";

import "./global.css";

export const metadata: Metadata = {
  title: "A Fistful of Vinyl",
  description:
    "Live sessions and interviews with independent and DIY artists from all music genres",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  const defaultColorScheme = "dark";
  const previewMode = draftMode().isEnabled;

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme={defaultColorScheme} />
      </head>
      <body>
        <MantineProvider defaultColorScheme={defaultColorScheme} theme={theme}>
          {children}
          <SearchModal />
          <ExitPreviewButton enabled={previewMode} />
        </MantineProvider>
      </body>
    </html>
  );
}

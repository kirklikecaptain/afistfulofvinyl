import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import type { Metadata } from "next";
import { draftMode } from "next/headers";

import { theme } from "~/components/theme";
import { ExitPreviewButton } from "~/components/ExitPreviewButton";

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
        <MantineProvider theme={theme}>
          {children}
          {draftMode().isEnabled && <ExitPreviewButton />}
        </MantineProvider>
      </body>
    </html>
  );
}

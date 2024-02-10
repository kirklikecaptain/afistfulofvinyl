import "@mantine/core/styles.css";
import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

import { customTheme } from "~/theme/customTheme";
import { ExitPreviewMode } from "~/components/ExitPreviewMode";
import { draftMode } from "next/headers";

export const metadata: Metadata = {
  title: "A Fistful of Vinyl",
  description: "Live sessions and interviews with independent musicians",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark" theme={customTheme}>
          {children}
          {draftMode().isEnabled && <ExitPreviewMode />}
        </MantineProvider>
      </body>
    </html>
  );
}

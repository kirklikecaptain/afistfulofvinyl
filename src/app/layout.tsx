import "@mantine/core/styles.css";
import "@mantine/spotlight/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { draftMode } from "next/headers";

import { SearchModal, ExitPreviewButton } from "~/components";
import { theme } from "~/theme/config";

import "~/theme/global.css";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <MantineProvider theme={theme}>
          {children}
          <SearchModal />
          <ExitPreviewButton enabled={draftMode().isEnabled} />
        </MantineProvider>
      </body>
    </html>
  );
}

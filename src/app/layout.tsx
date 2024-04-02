import "@mantine/core/styles.css";
import "@mantine/spotlight/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { draftMode } from "next/headers";

import { AppLayout, ExitPreviewButton, SearchModal } from "~/components";
import { theme } from "~/styles/theme";

import "~/styles/global.css";
import { getRootLayoutData } from "./data";

export default async function RootLayout({ children }: React.PropsWithChildren) {
  const { searchData } = await getRootLayoutData();

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <AppLayout>{children}</AppLayout>
          <SearchModal data={searchData} />
          <ExitPreviewButton enabled={draftMode().isEnabled} />
        </MantineProvider>
      </body>
    </html>
  );
}

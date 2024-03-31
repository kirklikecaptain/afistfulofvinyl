import "@mantine/core/styles.css";
import "@mantine/spotlight/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { draftMode } from "next/headers";

import { ExitPreviewButton, SearchModal } from "~/components";
import { theme } from "~/styles/theme";

import "~/styles/global.css";
import { getRootLayoutData } from "./data";

export type RootLayoutProps = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const { artists } = await getRootLayoutData();
  const searchData = artists.map((artist) => ({
    name: artist.fields.name,
    href: `/artists/${artist.fields.slug}` as const,
  }));

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <MantineProvider theme={theme}>
          {children}
          <SearchModal artists={searchData} videos={null} />
          <ExitPreviewButton enabled={draftMode().isEnabled} />
        </MantineProvider>
      </body>
    </html>
  );
}

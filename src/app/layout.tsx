import "@mantine/core/styles.css";
import "@mantine/spotlight/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import type { Metadata } from "next";
import { draftMode } from "next/headers";

import "~/styles/global.css";
import { theme } from "~/styles/theme";
import { AppLayout } from "~/layouts";
import { SearchModal, ExitPreview } from "~/components";

export const metadata: Metadata = {
  title: "A Fistful of Vinyl",
  description:
    "Live sessions and interviews with independent and DIY artists from all music genres",
};

export default function Layout({ children }: React.PropsWithChildren) {
  const preview = draftMode().isEnabled;
  const defaultColorScheme = "dark";

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme={defaultColorScheme} />
      </head>
      <body>
        <MantineProvider defaultColorScheme={defaultColorScheme} theme={theme}>
          <AppLayout>{children}</AppLayout>
          <SearchModal />
          {preview && <ExitPreview />}
        </MantineProvider>
      </body>
    </html>
  );
}

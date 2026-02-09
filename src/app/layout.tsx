import '@mantine/core/styles.css';
import '@mantine/spotlight/styles.css';

import type { Metadata } from 'next';

import { AppLayout, AppSpotlight, Html } from '~/components';
import { ThemeProvider, ThemeScript } from '~/theme';

import { getRootLayoutData } from './layout.data';

export const metadata: Metadata = {
  title: 'A Fistful of Vinyl',
  description: 'Purveyors of punk, folk, and diy culture since 2010',
};

export default async function RootLayout({ children }: LayoutProps<'/'>) {
  const { spotlightData } = await getRootLayoutData();

  return (
    <Html>
      <head>
        <ThemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <ThemeProvider>
          <AppLayout>{children}</AppLayout>
          <AppSpotlight artists={spotlightData.artists} videos={spotlightData.videos} />
        </ThemeProvider>
      </body>
    </Html>
  );
}

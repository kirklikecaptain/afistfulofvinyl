import '@mantine/core/styles.css';
import '@mantine/spotlight/styles.css';

import type { Metadata } from 'next';

import { themeHtmlProps, ThemeScript } from '~/lib/mantine';
import { getRootLayoutData } from '~/queries/getRootLayoutData';
import { AppSpotlight } from '~/ui/features/AppSpotlight';
import { App } from '~/ui/layouts/App';

import { RootLayoutProvider } from './layout.provider';

export const metadata: Metadata = {
  title: 'A Fistful of Vinyl',
  description: 'Purveyors of punk, folk, and DIY culture since 2010',
};

export default async function RootLayout({ children }: LayoutProps<'/'>) {
  const { spotlightData } = await getRootLayoutData();

  return (
    <html lang="en" {...themeHtmlProps}>
      <head>
        <ThemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <RootLayoutProvider>
          <App>{children}</App>
          <AppSpotlight artists={spotlightData.artists} videos={spotlightData.videos} />
        </RootLayoutProvider>
      </body>
    </html>
  );
}

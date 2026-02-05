import '@mantine/core/styles.css';

import type { Metadata } from 'next';

import { AppNavigation } from '~/components';
import { themeHtmlProps, ThemeProvider, ThemeScript } from '~/theme';

export const metadata: Metadata = {
  title: 'A Fistful of Vinyl',
  description: 'Purveyors of punk, folk, and diy culture since 2010',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
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
        <ThemeProvider>
          <AppNavigation>{children}</AppNavigation>
        </ThemeProvider>
      </body>
    </html>
  );
}

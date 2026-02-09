import { themeHtmlProps } from '~/theme';

type HtmlProps = {
  children: React.ReactNode;
};

export function Html({ children }: HtmlProps) {
  return (
    <html lang="en" {...themeHtmlProps}>
      {children}
    </html>
  );
}

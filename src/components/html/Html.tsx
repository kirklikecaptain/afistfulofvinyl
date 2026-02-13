import { themeHtmlProps } from '~/lib/mantine';

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

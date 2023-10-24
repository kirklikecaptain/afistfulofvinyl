import { PropsWithChildren } from "react";
import { Providers } from "./providers";

export default function AppLayout(props: PropsWithChildren) {
  const { children } = props;

  return (
    <html lang="en" data-theme="dark" style={{ colorScheme: "dark" }}>
      <body className="chakra-ui-dark">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

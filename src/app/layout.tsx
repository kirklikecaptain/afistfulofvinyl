import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "A Fistful of Vinyl",
  description: "Live sessions and interviews with bands and artists",
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

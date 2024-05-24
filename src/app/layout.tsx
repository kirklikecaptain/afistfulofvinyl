import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "A Fistful of Vinyl",
  description: "Sessions and Interviews with the best in underground music",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

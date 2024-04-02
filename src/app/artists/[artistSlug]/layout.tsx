import { generateArtistPageParams } from "./data";

export const generateStaticParams = generateArtistPageParams;

export default function ArtistPageLayout({ children }: React.PropsWithChildren) {
  return <>{children}</>;
}

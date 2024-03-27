import { getArtistPageParams } from "./data";

export const generateStaticParams = getArtistPageParams;

export default function ArtistPageLayout({ children }: React.PropsWithChildren) {
  return <>{children}</>;
}

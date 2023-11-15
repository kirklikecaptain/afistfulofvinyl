import { ArtistCardFragmentDoc, FragmentType, getFragmentData } from "~/api";
import { Link } from "./Link";

export interface ArtistCardProps {
  fragment: FragmentType<typeof ArtistCardFragmentDoc> | null;
}

export function ArtistCard({ fragment }: ArtistCardProps) {
  if (!fragment) return null;

  const artist = getFragmentData(ArtistCardFragmentDoc, fragment);

  return (
    <div>
      <Link href={artist.pagePath}>{artist.name}</Link>
    </div>
  );
}

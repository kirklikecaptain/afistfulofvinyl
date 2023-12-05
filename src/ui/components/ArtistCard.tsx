import { type Artist } from "~/api";

interface ArtistCardProps {
  name: Artist["name"];
}

export function ArtistCard(props: ArtistCardProps) {
  const { name } = props;

  return <div>{name}</div>;
}

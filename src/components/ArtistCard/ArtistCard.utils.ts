import { ArtistEntry } from "~/libs/contentful/types";
import { resolveArtistPagePath } from "~/utils/resolvePagePath";

import { ArtistCardProps } from "./ArtistCard";

export function resolveArtistCardProps(artist: ArtistEntry): ArtistCardProps<typeof artistPage> {
  const artistPage = resolveArtistPagePath(artist);

  return {
    name: artist.fields.name,
    artistColor: artist.fields.accentColor,
    photoSrc: artist.fields.photo?.fields.file?.url,
    href: artistPage,
  };
}

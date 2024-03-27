import { draftMode } from "next/headers";

import { getAllArtists } from "~/api";
import { resolveArtistCardProps } from "~/api/contentful/utils/propResolvers";

export async function getAllArtistsPageData() {
  const previewMode = draftMode().isEnabled;

  const artists = await getAllArtists({ previewMode });
  const artistCards = artists.map(resolveArtistCardProps);

  return { artists, artistCards };
}

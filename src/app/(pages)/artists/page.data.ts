import { draftMode } from "next/headers";

import { getAllArtists } from "~/api";

export async function getAllArtistsPageData() {
  const previewMode = draftMode().isEnabled;
  const artists = await getAllArtists({ previewMode });

  return { artists };
}

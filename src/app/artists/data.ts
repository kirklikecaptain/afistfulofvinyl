import { draftMode } from "next/headers";

import { api } from "~/api";

export async function getAllArtistsPageData() {
  const artists = await api.artists.getAll({ preview: draftMode().isEnabled });

  return { artists };
}

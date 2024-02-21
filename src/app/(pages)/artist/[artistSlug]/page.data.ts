import { draftMode } from "next/headers";

import { getArtistBySlug } from "~/api";

export async function getArtistProfilePageData(artistSlug: string) {
  const previewMode = draftMode().isEnabled;
  const artist = await getArtistBySlug(artistSlug, { previewMode });

  return { artist };
}

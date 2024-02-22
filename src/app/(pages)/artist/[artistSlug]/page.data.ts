import { draftMode } from "next/headers";

import { getArtistBySlug, getVideosByArtistSlug } from "~/api";
import { resolveVideoCardLinkProps } from "~/api/contentful/utils/propResolvers";

export async function getArtistProfilePageData(artistSlug: string) {
  const previewMode = draftMode().isEnabled;

  const artist = await getArtistBySlug(artistSlug, { previewMode });
  const videos = await getVideosByArtistSlug(artistSlug, { previewMode });
  const videoLinkCards = videos.map(resolveVideoCardLinkProps);

  return { artist, videoLinkCards };
}

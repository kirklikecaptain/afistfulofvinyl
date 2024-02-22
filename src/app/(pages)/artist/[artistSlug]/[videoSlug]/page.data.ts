import { draftMode } from "next/headers";

import { getVideoBySlugs } from "~/api";

export async function getVideoPageData(artistSlug: string, videoSlug: string) {
  const previewMode = draftMode().isEnabled;

  const video = await getVideoBySlugs(artistSlug, videoSlug, { previewMode });

  return { video };
}

import { Metadata } from "next";
import { draftMode } from "next/headers";

import { getLatestVideos } from "~/api";
import { resolveVideoCardProps } from "~/api/contentful/utils/propResolvers";

export const homePageMetadata: Metadata = {
  title: "A Fistful of Vinyl",
  description:
    "Live sessions and interviews with independent and DIY artists from all music genres",
};

export async function getHomePageData() {
  const latestVideos = await getLatestVideos({ previewMode: draftMode().isEnabled });
  const latestVideoVideoCards = latestVideos.map(resolveVideoCardProps);

  return {
    latestVideoVideoCards,
  };
}

import { Metadata } from "next";
import { draftMode } from "next/headers";

import { getLatestVideos } from "~/api";
import { resolveVideoCardLinkProps } from "~/api/contentful/utils/propResolvers";

export const homePageMetadata: Metadata = {
  title: "A Fistful of Vinyl",
  description:
    "Live sessions and interviews with independent and DIY artists from all music genres",
};

export async function getHomePageData() {
  const previewMode = draftMode().isEnabled;
  const latestVideos = await getLatestVideos({ previewMode });
  const latestVideoVideoCardLinks = latestVideos.map(resolveVideoCardLinkProps);

  return {
    latestVideoVideoCardLinks,
  };
}

import { draftMode } from "next/headers";

import { getAllArtists, getAllVideos, getLatestVideos } from "~/api";
import { resolveVideoCardProps } from "~/components";
import { resolveArtistPagePath, resolveVideoPagePath } from "~/utils/resolvePagePath";

export async function getRootLayoutData() {
  const videos = await getAllVideos();
  const artists = await getAllArtists();

  const searchData = {
    artists: artists.map((artist) => ({
      name: artist.fields.name,
      href: resolveArtistPagePath(artist),
    })),
    videos: videos.map((video) => ({
      name: video.fields.title,
      href: resolveVideoPagePath(video),
    })),
  };

  return {
    searchData,
  };
}

export async function getHomePageData() {
  const latestVideos = await getLatestVideos({ previewMode: draftMode().isEnabled });
  const latestVideoVideoCards = latestVideos.map(resolveVideoCardProps);

  return {
    latestVideoVideoCards,
  };
}

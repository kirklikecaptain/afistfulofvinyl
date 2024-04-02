import { draftMode } from "next/headers";

import { api } from "~/api";
import { resolveArtistPagePath, resolveVideoPagePath } from "~/utils/resolvePagePath";

export async function getRootLayoutData() {
  const videos = await api.videos.getAll();
  const artists = await api.artists.getAll();

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
  const latestVideos = await api.videos.getLatest({ preview: draftMode().isEnabled });

  return {
    latestVideos,
  };
}

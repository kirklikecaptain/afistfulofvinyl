import { Route } from "next";

import { ArtistEntry, VideoEntry } from "~/api/types";

export function resolveArtistPagePath(artist: ArtistEntry): Route<typeof artistPath> {
  const artistSlug = artist.fields.slug || "404";

  const artistPath = `/artists/${artistSlug}` as const;

  return artistPath;
}

export function resolveVideoPagePath(video: VideoEntry): Route<typeof videoPath> {
  const artistSlug = video.fields.artist?.fields.slug || "404";
  const videoSlug = video.fields.slug || "404";

  const videoPath = `/artists/${artistSlug}/${videoSlug}` as const;

  return videoPath;
}

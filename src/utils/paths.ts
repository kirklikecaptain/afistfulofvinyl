import type { Route } from "next";

import type { ArtistEntry, VideoEntry } from "~/types";

export function resolveArtistPagePath(artist: ArtistEntry) {
  const artistSlug = artist.fields.slug || "404";

  return `/artists/${artistSlug}` as const;
}

export function resolveVideoPagePath(video: VideoEntry) {
  const artistSlug = video.fields.artist?.fields.slug || "404";
  const videoSlug = video.fields.slug || "404";

  return `/artists/${artistSlug}/${videoSlug}` as const;
}

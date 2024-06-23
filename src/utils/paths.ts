export function getArtistPagePath(slug: string | null | undefined) {
  return `/artists/${slug ?? "404"}` as const;
}

export function getVideoPagePath(artistSlug: string | null | undefined, videoSlug: string | null) {
  return `/artists/${artistSlug ?? "404"}/${videoSlug ?? "404"}` as const;
}

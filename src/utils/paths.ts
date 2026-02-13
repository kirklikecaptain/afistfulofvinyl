type MaybeSlug = string | undefined | null;

function toPathSegment(slug: MaybeSlug) {
  return slug?.toLowerCase() ?? '404';
}

export function toArtistPagePath(artistSlug: MaybeSlug) {
  return `/artists/${toPathSegment(artistSlug)}` as const;
}

export function toVideoPagePath(artistSlug: MaybeSlug, videoSlug: MaybeSlug) {
  return `${toArtistPagePath(artistSlug)}/${toPathSegment(videoSlug)}` as const;
}

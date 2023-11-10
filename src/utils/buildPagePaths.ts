import { Artist, Video } from "~/api/__generated__/graphql";

export enum Slug {
  Artists = "artists",
  PageNotFound = "404",
}

export function isValidSlug(value: any): value is string {
  return typeof value === "string";
}

export function buildPagePath(paths: string[]) {
  return `/${paths.join("/")}`;
}

export function buildVideoPagePath(artistSlug: Artist["slug"], videoSlug: Video["slug"]) {
  const hasArtistSlug = isValidSlug(artistSlug);
  const hasVideoSlug = isValidSlug(videoSlug);

  if (hasArtistSlug && hasVideoSlug) {
    return buildPagePath([Slug.Artists, artistSlug, videoSlug]);
  }

  if (hasArtistSlug && !hasVideoSlug) {
    return buildPagePath([Slug.Artists, artistSlug, Slug.PageNotFound]);
  }

  return buildPagePath([Slug.Artists, Slug.PageNotFound]);
}

export function buildArtistPagePath(artistSlug: Artist["slug"]) {
  const hasArtistSlug = isValidSlug(artistSlug);

  if (hasArtistSlug) {
    return buildPagePath([Slug.Artists, artistSlug]);
  }

  return buildPagePath([Slug.Artists, Slug.PageNotFound]);
}

import type { ImageProps } from "~/components/Image";
import type { VideoCardLinkProps } from "~/components/VideoCardLink";
import { ArtistCardLinkProps } from "~/components/ArtistCardLink";

import type { ArtistEntry, LinkedAsset, VideoEntry } from "../types";

export function resolveImageProps(asset?: LinkedAsset): ImageProps | null {
  if (!asset || !asset.fields.file) {
    return null;
  }

  return {
    src: asset.fields.file.url,
    alt: asset.fields.description || "",
    width: asset.fields.file.details.image?.width,
    height: asset.fields.file.details.image?.height,
  };
}

function resolveArtistPageLink(artist: ArtistEntry) {
  return `/artist/${artist.fields.slug}` as const;
}

function resolveVideoPageLink(video: VideoEntry) {
  const artistSlug = video.fields.artist?.fields.slug || "404";
  const videoSlug = video.fields.slug || "404";

  return `/artist/${artistSlug}/${videoSlug}` as const;
}

export function resolveVideoCardLinkProps(video: VideoEntry): VideoCardLinkProps<typeof link> {
  const link = resolveVideoPageLink(video);

  return {
    title: video.fields.title,
    href: link,
    artistName: video.fields.artist?.fields.name || "",
    artistColor: video.fields.artist?.fields.accentColor || "",
    thumbnailSrc: video.fields.thumbnail?.fields.file?.url || "",
  };
}

export function resolveArtistCardLinkProps(artist: ArtistEntry): ArtistCardLinkProps<typeof link> {
  const link = resolveArtistPageLink(artist);

  return {
    title: artist.fields.name,
    href: link,
    name: artist.fields.name,
  };
}

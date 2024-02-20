import { type Route } from "next";

import { type ImageProps } from "~/components/Image/Image";
import type { VideoCardLinkProps } from "~/components/VideoCardLink";

import type { LinkedAsset, VideoEntry } from "../types";

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

export function resolveVideoCardLinkProps(video: VideoEntry): VideoCardLinkProps {
  const artistSlug = video.fields.artist?.fields.slug;
  const videoSlug = video.fields.slug;

  return {
    title: video.fields.title,
    href: `/artists/${artistSlug}/${videoSlug}` as Route,
    artistName: video.fields.artist?.fields.name || "",
    artistColor: video.fields.artist?.fields.accentColor || "",
    thumbnailSrc: video.fields.thumbnail?.fields.file?.url || "",
  };
}

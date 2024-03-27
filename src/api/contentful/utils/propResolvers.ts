import type { ImageProps } from "~/components/Image";
import type { VideoCardProps } from "~/components/VideoCard";
import { ArtistCardProps } from "~/components/ArtistCard";

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

export function resolveArtistPagePath(artist: ArtistEntry) {
  const artistSlug = artist.fields.slug || "404";

  return `/artists/${artistSlug}` as const;
}

export function resolveVideoPagePath(video: VideoEntry) {
  const artistSlug = video.fields.artist?.fields.slug || "404";
  const videoSlug = video.fields.slug || "404";

  return `/artists/${artistSlug}/${videoSlug}` as const;
}

export function resolveVideoCardProps(video: VideoEntry): VideoCardProps<typeof videoPage> {
  const videoPage = resolveVideoPagePath(video);

  return {
    title: video.fields.title,
    href: videoPage,
    artistName: video.fields.artist?.fields.name || "",
    thumbnailSrc: video.fields.thumbnail?.fields.file?.url || "",
    artistColor: video.fields.artist?.fields.accentColor || "",
  };
}

export function resolveArtistCardProps(artist: ArtistEntry): ArtistCardProps<typeof artistPage> {
  const artistPage = resolveArtistPagePath(artist);

  return {
    name: artist.fields.name,
    href: artistPage,
  };
}

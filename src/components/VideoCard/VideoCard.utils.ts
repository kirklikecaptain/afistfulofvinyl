import { VideoEntry } from "~/libs/contentful/types";
import { resolveVideoPagePath } from "~/utils/resolvePagePath";

import { VideoCardProps } from "./VideoCard";

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

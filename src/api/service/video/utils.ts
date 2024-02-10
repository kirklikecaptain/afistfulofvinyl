import type { TypeVideo } from "~/api/types/generated";
import type { VideoCardProps } from "~/components/VideoCard";

type VideoEntry = TypeVideo<"WITHOUT_UNRESOLVABLE_LINKS", string>;
type VideoCardData = { id: string } & VideoCardProps;

export function parseVideoCardData(video: VideoEntry): VideoCardData {
  const { thumbnail, artist } = video.fields;

  return {
    id: video.sys.id,
    pagePath:
      artist?.fields.slug && video.fields.slug
        ? `/artists/${artist.fields.slug}/${video.fields.slug}`
        : "/404",
    title: video.fields.title,
    subtitle: video.fields.subtitle,
    artistName: artist?.fields.name,
    artistAccentColor: artist?.fields.accentColor,
    thumbnailSrc: thumbnail?.fields.file?.url,
    thumbnailAlt: thumbnail?.fields.description,
  };
}

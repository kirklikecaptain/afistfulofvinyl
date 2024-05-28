import { type VideoCardProps } from "~/components";
import { type TypeVideo } from "~/contentful";

export function resolveVideoCardProps(video: TypeVideo<"WITHOUT_UNRESOLVABLE_LINKS">): VideoCardProps {
  return {
    title: video.fields.title,
    artistName: video.fields.artist?.fields.name || "Artist Name",
    accentColor: video.fields.artist?.fields.accentColor || "#000",
  };
}

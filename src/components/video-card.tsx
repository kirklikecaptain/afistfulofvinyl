import { TypeVideo } from "~/contentful";

export type VideoCardProps = {
  title: string;
  artistName: string;
  accentColor: string;
  // thumbnailSrc: string;
  // hideArtistName?: boolean;
};

export function VideoCard(props: VideoCardProps) {
  const { title, artistName, accentColor } = props;

  return (
    <div style={{ background: accentColor }}>
      <h3>{title}</h3>
      <p>{artistName}</p>
    </div>
  );
}

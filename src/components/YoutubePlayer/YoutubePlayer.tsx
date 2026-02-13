import { YouTubeEmbed } from '@next/third-parties/google';

import css from './YoutubePlayer.module.css';

export type YoutubePlayerProps = {
  url: string | null | undefined;
  title: string | null | undefined;
  thumbnail?: string | null | undefined;
};

export function YoutubePlayer(props: YoutubePlayerProps) {
  const { url, thumbnail, title } = props;

  const playLabel = `Play: ${title ?? 'Video Title Not Set'}`;
  const videoId = url?.split('v=')[1] ?? '';
  const thumbnailStyle = thumbnail ? `background-image: url(${thumbnail});` : '';

  return (
    <div className={css.YoutubePlayer}>
      <YouTubeEmbed
        videoid={videoId}
        style={thumbnailStyle}
        playlabel={playLabel}
        params="playsinline=1"
      />
    </div>
  );
}

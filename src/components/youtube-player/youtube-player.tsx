"use client";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "./youtube-player.css";

export type YouTubeProps = { videoId: string; title: string };

export function YouTubePlayer({ videoId, title }: YouTubeProps) {
  return <LiteYouTubeEmbed id={videoId} title={title} />;
}

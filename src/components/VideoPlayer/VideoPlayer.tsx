"use client";

import YouTube from "react-lite-youtube-embed";
import "./VideoPlayer.css";

export interface VideoPlayerProps {
  url: string;
}

export function VideoPlayer({ url }: VideoPlayerProps) {
  const { searchParams } = new URL(url);
  const videoId = searchParams.get("v");

  if (!videoId) {
    return null;
  }

  return <YouTube id={videoId} title="YouTube Player" poster="maxresdefault" />;
}

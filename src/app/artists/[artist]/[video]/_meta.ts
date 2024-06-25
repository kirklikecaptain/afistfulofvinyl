import { Metadata } from "next";
import { notFound } from "next/navigation";

import { fetchVideoPageData } from "./_data";
import { VideoPageProps } from "./page";

export async function fetchMetadata({ params }: VideoPageProps): Promise<Metadata> {
  const { video } = await fetchVideoPageData({ artistSlug: params.artist, videoSlug: params.video });

  if (!video) {
    return notFound();
  }

  return {
    title: `${video.title} | ${video.artist?.name}`,
    description: video.shortDescription,
  };
}

import { notFound } from "next/navigation";

import { Page } from "~/templates";
import { getAllVideos } from "~/api";
import { RichText } from "~/components";

import { ArtistProfilePageParams } from "../page";

import { getVideoPageData } from "./page.data";

export interface VideoPageParams extends ArtistProfilePageParams {
  videoSlug: string;
}
export interface VideoPageProps {
  params: VideoPageParams;
}

export async function generateStaticParams() {
  const videos = await getAllVideos();

  return videos.map((video) => ({
    artistSlug: video.fields.artist?.fields.slug || "404",
    videoSlug: video.fields.slug,
  }));
}

export default async function VideoPage(props: VideoPageProps) {
  const {
    params: { artistSlug, videoSlug },
  } = props;

  const { video } = await getVideoPageData(artistSlug, videoSlug);

  if (!video) {
    return notFound();
  }

  return (
    <Page>
      {video.fields.title}
      <RichText field={video.fields.longDescription} />
    </Page>
  );
}

import { notFound } from "next/navigation";

import { Page } from "~/templates";
import { RichText, VideoPlayer } from "~/components";
import { ArtistBreadCrumbs } from "~/sections";

import { VideoPageProps, getVideoPageData, getVideoPageMetadata, getVideoPageParams } from "./data";

export const generateStaticParams = getVideoPageParams;
export const generateMetadata = getVideoPageMetadata;

export default async function VideoPage(props: VideoPageProps) {
  const {
    params: { artistSlug, videoSlug },
  } = props;

  const { video } = await getVideoPageData({ artistSlug, videoSlug });

  if (!video) {
    return notFound();
  }

  return (
    <Page>
      <ArtistBreadCrumbs />
      <VideoPlayer url={video.fields.videoUrl} />
      <RichText field={video.fields.longDescription} />
    </Page>
  );
}
